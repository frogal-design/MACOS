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
  // Use numeric keys (col << 16 | row & 0xFFFF) to avoid string allocations in animation loops
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

    // Precompute hexagon vertex offsets to avoid redundant Math.cos/sin calls
    const hexOffsets = Array.from({ length: 6 }, (_, i) => ({
      cos: Math.cos((Math.PI / 3) * i),
      sin: Math.sin((Math.PI / 3) * i),
    }));

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawHex = (cx: number, cy: number, size: number) => {
      for (let i = 0; i < 6; i++) {
        const vx = cx + size * hexOffsets[i].cos;
        const vy = cy + size * hexOffsets[i].sin;
        if (i === 0) ctx.moveTo(vx, vy);
        else ctx.lineTo(vx, vy);
      }
      ctx.closePath();
    };

    const drawCircle = (cx: number, cy: number, size: number) => {
      const radius = size / 2;
      ctx.moveTo(cx + radius, cy);
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    };

    const drawTriangle = (cx: number, cy: number, size: number, flip: boolean) => {
      const halfSize = size / 2;
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
        const halfHexVert = hexVert / 2;

        const cols = Math.ceil(canvas.width / hexHoriz) + 3;
        const rows = Math.ceil(canvas.height / hexVert) + 3;

        // Pass 1: Draw filled/hovered cells
        for (let col = -2; col < cols; col++) {
          const cx_base = col * hexHoriz + offsetX;
          const isOddCol = (col + colShift) % 2 !== 0;
          for (let row = -2; row < rows; row++) {
            const cellKey = (col << 16) | (row & 0xffff);
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              const cy = row * hexVert + (isOddCol ? halfHexVert : 0) + offsetY;
              ctx.globalAlpha = alpha;
              ctx.beginPath();
              drawHex(cx_base, cy, squareSize);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }
          }
        }

        // Pass 2: Batch grid stroke
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        for (let col = -2; col < cols; col++) {
          const cx_base = col * hexHoriz + offsetX;
          const isOddCol = (col + colShift) % 2 !== 0;
          for (let row = -2; row < rows; row++) {
            const cy = row * hexVert + (isOddCol ? halfHexVert : 0) + offsetY;
            drawHex(cx_base, cy, squareSize);
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

        // Pass 1: Draw filled/hovered cells
        for (let col = -2; col < cols; col++) {
          const cx_base = col * halfW + offsetX;
          for (let row = -2; row < rows; row++) {
            const cellKey = (col << 16) | (row & 0xffff);
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              const cy = row * squareSize + halfW + offsetY;
              const flip = ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0;
              ctx.globalAlpha = alpha;
              ctx.beginPath();
              drawTriangle(cx_base, cy, squareSize, flip);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }
          }
        }

        // Pass 2: Batch grid stroke
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        for (let col = -2; col < cols; col++) {
          const cx_base = col * halfW + offsetX;
          for (let row = -2; row < rows; row++) {
            const cy = row * squareSize + halfW + offsetY;
            const flip = ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0;
            drawTriangle(cx_base, cy, squareSize, flip);
          }
        }
        ctx.stroke();
      } else if (shape === 'circle') {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const halfSize = squareSize / 2;

        const cols = Math.ceil(canvas.width / squareSize) + 3;
        const rows = Math.ceil(canvas.height / squareSize) + 3;

        // Pass 1: Draw filled/hovered cells
        for (let col = -2; col < cols; col++) {
          const cx_base = col * squareSize + halfSize + offsetX;
          for (let row = -2; row < rows; row++) {
            const cellKey = (col << 16) | (row & 0xffff);
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              const cy = row * squareSize + halfSize + offsetY;
              ctx.globalAlpha = alpha;
              ctx.beginPath();
              drawCircle(cx_base, cy, squareSize);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }
          }
        }

        // Pass 2: Batch grid stroke
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        for (let col = -2; col < cols; col++) {
          const cx_base = col * squareSize + halfSize + offsetX;
          for (let row = -2; row < rows; row++) {
            const cy = row * squareSize + halfSize + offsetY;
            drawCircle(cx_base, cy, squareSize);
          }
        }
        ctx.stroke();
      } else {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

        const cols = Math.ceil(canvas.width / squareSize) + 3;
        const rows = Math.ceil(canvas.height / squareSize) + 3;

        // Pass 1: Draw filled/hovered cells
        for (let col = -2; col < cols; col++) {
          const sx_base = col * squareSize + offsetX;
          for (let row = -2; row < rows; row++) {
            const cellKey = (col << 16) | (row & 0xffff);
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              const sy = row * squareSize + offsetY;
              ctx.globalAlpha = alpha;
              ctx.fillStyle = hoverFillColor;
              ctx.fillRect(sx_base, sy, squareSize, squareSize);
              ctx.globalAlpha = 1;
            }
          }
        }

        // Pass 2: Batch grid stroke
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        for (let col = -2; col < cols; col++) {
          const sx_base = col * squareSize + offsetX;
          for (let row = -2; row < rows; row++) {
            const sy = row * squareSize + offsetY;
            ctx.rect(sx_base, sy, squareSize, squareSize);
          }
        }
        ctx.stroke();
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
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
        targets.set((hoveredSquare.current.x << 16) | (hoveredSquare.current.y & 0xffff), 1);
      }

      if (hoverTrailAmount > 0) {
        for (let i = 0; i < trailCells.current.length; i++) {
          const t = trailCells.current[i];
          const key = (t.x << 16) | (t.y & 0xffff);
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
