import React, { useRef, useEffect } from 'react';
import './ShapeGrid.css';

interface GridCell {
  x: number;
  y: number;
}

interface ShapeGridProps {
  direction?: 'up' | 'down' | 'left' | 'right' | 'diagonal';
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  shape?: 'square' | 'hexagon' | 'circle' | 'triangle';
  hoverTrailAmount?: number;
  className?: string;
}

const ShapeGrid: React.FC<ShapeGridProps> = ({
  direction = 'right',
  speed = 1,
  borderColor = '#999',
  squareSize = 40,
  hoverFillColor = '#222',
  shape = 'square',
  hoverTrailAmount = 0,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef<GridCell | null>(null);
  const trailCells = useRef<GridCell[]>([]);
  const cellOpacities = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isHex = shape === 'hexagon';
    const isTri = shape === 'triangle';
    const hexHoriz = squareSize * 1.5;
    const hexVert = squareSize * Math.sqrt(3);

    let cachedGradient: CanvasGradient | null = null;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;

      cachedGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      cachedGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      cachedGradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)'); // Adding a slight darkening at edges if needed, though original only had 0 stop
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Precompute vertex offsets for performance
    const hexOffsets = Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i;
      return {
        dx: squareSize * Math.cos(angle),
        dy: squareSize * Math.sin(angle)
      };
    });

    const halfSize = squareSize / 2;

    const pathHex = (cx: number, cy: number) => {
      for (let i = 0; i < 6; i++) {
        const vx = cx + hexOffsets[i].dx;
        const vy = cy + hexOffsets[i].dy;
        if (i === 0) ctx.moveTo(vx, vy);
        else ctx.lineTo(vx, vy);
      }
      ctx.closePath();
    };

    const pathCircle = (cx: number, cy: number) => {
      ctx.moveTo(cx + halfSize, cy);
      ctx.arc(cx, cy, halfSize, 0, Math.PI * 2);
    };

    const pathTriangle = (cx: number, cy: number, flip: boolean) => {
      if (flip) {
        ctx.moveTo(cx, cy + halfSize);
        ctx.lineTo(cx + halfSize, cy - halfSize);
        ctx.lineTo(cx - halfSize, cy - halfSize);
      } else {
        ctx.moveTo(cx, cy - halfSize);
        ctx.lineTo(cx + halfSize, cy + halfSize);
        ctx.lineTo(cx - halfSize, cy + halfSize);
      }
      ctx.closePath();
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
        const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;

        const cols = Math.ceil(canvas.width / hexHoriz) + 3;
        const rows = Math.ceil(canvas.height / hexVert) + 3;

        // Draw fills first
        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cellKey = (col << 16) | (row & 0xFFFF);
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              const cx = col * hexHoriz + offsetX;
              const cy = row * hexVert + ((col + colShift) % 2 !== 0 ? hexVert / 2 : 0) + offsetY;
              ctx.globalAlpha = alpha;
              ctx.beginPath();
              pathHex(cx, cy);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
            }
          }
        }
        ctx.globalAlpha = 1;

        // Batch stroke
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cx = col * hexHoriz + offsetX;
            const cy = row * hexVert + ((col + colShift) % 2 !== 0 ? hexVert / 2 : 0) + offsetY;
            pathHex(cx, cy);
          }
        }
        ctx.stroke();
      } else if (isTri) {
        const halfW = squareSize / 2;
        const colShift = Math.floor(gridOffset.current.x / halfW);
        const rowShift = Math.floor(gridOffset.current.y / squareSize);
        const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

        const cols = Math.ceil(canvas.width / halfW) + 4;
        const rows = Math.ceil(canvas.height / squareSize) + 4;

        // Draw fills first
        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cellKey = (col << 16) | (row & 0xFFFF);
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              const cx = col * halfW + offsetX;
              const cy = row * squareSize + squareSize / 2 + offsetY;
              const flip = ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0;
              ctx.globalAlpha = alpha;
              ctx.beginPath();
              pathTriangle(cx, cy, flip);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
            }
          }
        }
        ctx.globalAlpha = 1;

        // Batch stroke
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cx = col * halfW + offsetX;
            const cy = row * squareSize + squareSize / 2 + offsetY;
            const flip = ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0;
            pathTriangle(cx, cy, flip);
          }
        }
        ctx.stroke();
      } else if (shape === 'circle') {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

        const cols = Math.ceil(canvas.width / squareSize) + 3;
        const rows = Math.ceil(canvas.height / squareSize) + 3;

        // Draw fills first
        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cellKey = (col << 16) | (row & 0xFFFF);
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              const cx = col * squareSize + squareSize / 2 + offsetX;
              const cy = row * squareSize + squareSize / 2 + offsetY;
              ctx.globalAlpha = alpha;
              ctx.beginPath();
              pathCircle(cx, cy);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
            }
          }
        }
        ctx.globalAlpha = 1;

        // Batch stroke
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cx = col * squareSize + squareSize / 2 + offsetX;
            const cy = row * squareSize + squareSize / 2 + offsetY;
            pathCircle(cx, cy);
          }
        }
        ctx.stroke();
      } else {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

        const cols = Math.ceil(canvas.width / squareSize) + 3;
        const rows = Math.ceil(canvas.height / squareSize) + 3;

        // Draw fills first
        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cellKey = (col << 16) | (row & 0xFFFF);
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              const sx = col * squareSize + offsetX;
              const sy = row * squareSize + offsetY;
              ctx.globalAlpha = alpha;
              ctx.fillStyle = hoverFillColor;
              ctx.fillRect(sx, sy, squareSize, squareSize);
            }
          }
        }
        ctx.globalAlpha = 1;

        // Batch stroke
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const sx = col * squareSize + offsetX;
            const sy = row * squareSize + offsetY;
            ctx.rect(sx, sy, squareSize, squareSize);
          }
        }
        ctx.stroke();
      }

      if (cachedGradient) {
        ctx.fillStyle = cachedGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      const wrapX = isHex ? hexHoriz * 2 : squareSize;
      const wrapY = isHex ? hexVert : isTri ? squareSize * 2 : squareSize;

      switch (direction) {
        case 'right':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
          break;
        case 'left':
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + wrapX) % wrapX;
          break;
        case 'up':
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + wrapY) % wrapY;
          break;
        case 'down':
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
          break;
        case 'diagonal':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
          break;
        default:
          break;
      }

      updateCellOpacities();
      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const updateCellOpacities = () => {
      const targets = new Map<number, number>();

      if (hoveredSquare.current) {
        targets.set((hoveredSquare.current.x << 16) | (hoveredSquare.current.y & 0xFFFF), 1);
      }

      if (hoverTrailAmount > 0) {
        for (let i = 0; i < trailCells.current.length; i++) {
          const t = trailCells.current[i];
          const key = (t.x << 16) | (t.y & 0xFFFF);
          if (!targets.has(key)) {
            targets.set(key, (trailCells.current.length - i) / (trailCells.current.length + 1));
          }
        }
      }

      for (const [key] of targets) {
        if (!cellOpacities.current.has(key)) {
          cellOpacities.current.set(key, 0);
        }
      }

      for (const [key, opacity] of cellOpacities.current) {
        const target = targets.get(key) || 0;
        const next = opacity + (target - opacity) * 0.15;
        if (next < 0.005) {
          cellOpacities.current.delete(key);
        } else {
          cellOpacities.current.set(key, next);
        }
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
        const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;

        const col = Math.round(adjustedX / hexHoriz);
        const rowOffset = (col + colShift) % 2 !== 0 ? hexVert / 2 : 0;
        const row = Math.round((adjustedY - rowOffset) / hexVert);

        if (
          !hoveredSquare.current ||
          hoveredSquare.current.x !== col ||
          hoveredSquare.current.y !== row
        ) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
        }
      } else if (isTri) {
        const halfW = squareSize / 2;
        const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;

        const col = Math.round(adjustedX / halfW);
        const row = Math.floor(adjustedY / squareSize);

        if (
          !hoveredSquare.current ||
          hoveredSquare.current.x !== col ||
          hoveredSquare.current.y !== row
        ) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
        }
      } else if (shape === 'circle') {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;

        const col = Math.round(adjustedX / squareSize);
        const row = Math.round(adjustedY / squareSize);

        if (
          !hoveredSquare.current ||
          hoveredSquare.current.x !== col ||
          hoveredSquare.current.y !== row
        ) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
        }
      } else {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;

        const col = Math.floor(adjustedX / squareSize);
        const row = Math.floor(adjustedY / squareSize);

        if (
          !hoveredSquare.current ||
          hoveredSquare.current.x !== col ||
          hoveredSquare.current.y !== row
        ) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
        }
      }
    };

    const handleMouseLeave = () => {
      if (hoveredSquare.current && hoverTrailAmount > 0) {
        trailCells.current.unshift({ ...hoveredSquare.current });
        if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
      }
      hoveredSquare.current = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize, shape, hoverTrailAmount]);

  return <canvas ref={canvasRef} className={`shapegrid-canvas ${className}`}></canvas>;
};

export default ShapeGrid;
