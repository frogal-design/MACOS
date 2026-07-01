import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Play, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DecryptedText from '../components/DecryptedText';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  category: string;
  title: string;
  url: string;
  date: string;
  description?: string;
}

const CATEGORIES = ['all', 'events', 'sports', 'campus', 'clubs', 'leadership'] as const;

const MEDIA = [
  {
    id: 1,
    type: 'image',
    category: 'campus',
    title: 'MACOS MAIN CAMPUS',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/slider/cache/f4b160855997bcee913d4698a9e6ac22/new_slider.jpg',
    date: '2025-05-01',
    description: 'The iconic main gate of Makerere College School, a symbol of excellence since 1945.'
  },
  {
    id: 2,
    type: 'image',
    category: 'leadership',
    title: 'STUDENT COUNCIL ELECTIONS',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/2026/04/IMG-20260407-WA0003.jpg',
    date: '2026-04-07',
    description: 'Democracy in action during the 2026 Student Council representative elections.'
  },
  {
    id: 3,
    type: 'image',
    category: 'sports',
    title: 'RUGBY CHAMPIONS 2026',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-30-at-6.51.00-AM.jpeg',
    date: '2026-03-30',
    description: 'The MACOS Rugby team celebrating a hard-fought victory at the national championships.'
  },
  {
    id: 4,
    type: 'image',
    category: 'events',
    title: 'CULTURAL DAY CELEBRATIONS',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-31-at-10.29.43-AM-10.jpeg',
    date: '2026-03-31',
    description: 'Students showcasing traditional dances and attire from various Ugandan cultures.'
  },
  {
    id: 5,
    type: 'image',
    category: 'campus',
    title: 'CLASSROOM FACILITIES',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/slider/cache/5d8910c983d996b3be09b2818385d031/IMG_1001-scaled.jpg',
    date: '2025-01-15',
    description: 'Modernized classroom blocks designed to provide an optimal learning environment.'
  },
  {
    id: 6,
    type: 'image',
    category: 'events',
    title: 'MORNING SCHOOL ASSEMBLY',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/slider/cache/7d45eff89cd986b2aebac852a90543d2/20240709174657_IMG_9372.jpg',
    date: '2024-07-09',
    description: 'The whole school gathered for morning assembly at the main court.'
  },
  {
    id: 7,
    type: 'image',
    category: 'sports',
    title: 'RUGBY FINALS ACTION',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/slider/cache/a84a0aabcd01c0b3c2898ba45bf34a50/IMG_6967-1.jpg',
    date: '2025-10-20',
    description: 'Intense rugby action during the regional finals tournament.'
  },
  {
    id: 8,
    type: 'image',
    category: 'campus',
    title: 'MULAWA CAMPUS GROUNDS',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/slider/cache/ed4f50c6009ef107ebbd16ad5f5f520c/20250611_131310-scaled.jpg',
    date: '2025-06-11',
    description: 'Aerial view of the sprawling Mulawa campus which houses various sports facilities.'
  },
  {
    id: 9,
    type: 'image',
    category: 'leadership',
    title: 'ELECTION BALLOT CASTING',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/2026/04/IMG-20260407-WA0004.jpg',
    date: '2026-04-07',
    description: 'Students exercise their right to vote for their student leaders.'
  },
  {
    id: 10,
    type: 'image',
    category: 'sports',
    title: 'TROPHY CEREMONY',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/2026/03/sports_trophy.jpg',
    date: '2026-03-29',
    description: 'Receiving the overall winners trophy after a successful sports season.'
  },
  {
    id: 11,
    type: 'image',
    category: 'events',
    title: 'CAMPUS CELEBRATIONS',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/2026/03/celebration_1.jpg',
    date: '2026-03-25',
    description: 'Infectious joy on the campus after a major school achievement.'
  },
  {
    id: 12,
    type: 'image',
    category: 'leadership',
    title: 'VOTING PROCESS OVERVIEW',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/2026/04/voting_setup.jpg',
    date: '2026-04-07',
    description: 'The organized setup for the school participatory elections.'
  },
  {
    id: 13,
    type: 'image',
    category: 'sports',
    title: 'RUGBY MATCH HIGHLIGHT',
    url: 'https://makererecollege.sc.ug/wp-content/uploads/2026/03/rugby_kick.jpg',
    date: '2026-03-20',
    description: 'MACOS player showcasing technique during a league match.'
  }
] as const satisfies readonly MediaItem[];

// Convert read-only array to mutable-style to satisfy component props while keeping module-scope sort
const SORTED_MEDIA: MediaItem[] = [...MEDIA].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const Gallery = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const filteredMedia = useMemo(() => {
    return filter === 'all' ? SORTED_MEDIA : SORTED_MEDIA.filter(m => m.category === filter);
  }, [filter]);

  const openModal = (item: MediaItem, index: number) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setCurrentIndex(-1);
    document.body.style.overflow = 'auto';
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredMedia.length 
      : (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    
    setSelectedMedia(filteredMedia[newIndex]);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigateModal('next');
      if (e.key === 'ArrowLeft') navigateModal('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, currentIndex, filteredMedia]);

  return (
    <div className="min-h-screen bg-bg">
      {/* Page Header */}
      <section className="py-32 border-b border-border hermes-grid">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 mb-16 text-text-muted hover:text-accent transition-all"
          >
            <div className="w-8 h-[1px] bg-border group-hover:bg-accent group-hover:w-12 transition-all" />
            <span className="font-serif text-[11px] tracking-[0.4em] uppercase font-medium italic">Return Home</span>
          </button>
          
          <div className="max-w-4xl">
            <div className="mb-8 font-serif text-[10px] tracking-[0.6em] text-accent uppercase font-medium opacity-60">
              MAKERE UNIVERSITY • KAMPALA • EST 1945
            </div>
            <h1 className="text-8xl md:text-[10vw] font-serif leading-[0.8] mb-16 tracking-[-0.04em] uppercase">
              <span className="block">
                <DecryptedText 
                  text="VISUAL" 
                  animateOn="view" 
                  revealDirection="center"
                  className="font-medium"
                /> 
              </span>
              <span className="block italic font-light lowercase mt-4">
                <DecryptedText 
                  text="chronicle." 
                  animateOn="view" 
                  revealDirection="center"
                  className="text-accent"
                />
              </span>
            </h1>
            <p className="text-2xl text-text-muted font-light leading-relaxed max-w-2xl italic opacity-70">
              A curated collection of moments that define our spirit. From academic milestones to sporting 
              victories and the daily pulse of campus life.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-24 z-40 bg-bg/95 backdrop-blur-md border-b border-border py-6 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-12 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-3 font-serif text-[11px] tracking-[0.3em] text-accent uppercase font-medium shrink-0">
              <Filter size={14} className="opacity-60" /> Sort By:
            </div>
            <div className="flex gap-10">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-serif text-[12px] tracking-[0.2em] uppercase transition-all duration-300 relative group px-1 ${
                    filter === cat 
                      ? 'text-text-main' 
                      : 'text-text-muted hover:text-text-main'
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {filter === cat && (
                    <motion.div 
                      layoutId="filter-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-12 border-b border-border min-h-[60vh]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-border">
            <AnimatePresence mode="popLayout">
              {filteredMedia.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.03 }}
                  className="group relative aspect-square overflow-hidden border-r border-b border-border hover:bg-bg-light transition-colors cursor-zoom-in"
                  onClick={() => openModal(item, idx)}
                >
                  <div className="absolute top-6 left-6 z-20 font-serif text-[9px] tracking-[0.4em] text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0 uppercase font-medium">
                    {item.category} • {new Date(item.date).getFullYear()}
                  </div>
                  
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                  />
                  
                  <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                    <h3 className="text-xl font-serif tracking-tight leading-tight uppercase font-medium mb-4">{item.title}</h3>
                    <div className="w-12 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredMedia.length === 0 && (
            <div className="py-40 text-center border-l border-r border-b border-border">
              <div className="font-serif text-[11px] tracking-[0.5em] text-text-muted uppercase italic opacity-50">No media found in this category</div>
            </div>
          )}
        </div>
      </section>

      {/* Modal View */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-bg/98 backdrop-blur-xl"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-8 border-b border-border/50">
              <div>
                <div className="font-serif text-[10px] tracking-[0.5em] text-accent uppercase font-medium mb-2">{selectedMedia.category} • {selectedMedia.date}</div>
                <h4 className="text-3xl font-serif tracking-tighter uppercase">{selectedMedia.title}</h4>
              </div>
              <button 
                onClick={closeModal}
                className="w-16 h-16 border border-border flex items-center justify-center hover:bg-bg-light transition-all rounded-full group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-grow flex items-center justify-center relative p-12">
              <button 
                onClick={() => navigateModal('prev')}
                className="absolute left-8 z-10 w-16 h-16 border border-border rounded-full flex items-center justify-center hover:bg-accent hover:text-text-main transition-all group"
              >
                <ChevronLeft size={24} />
              </button>

              <motion.div 
                key={selectedMedia.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative max-w-5xl w-full max-h-[70vh] flex flex-col items-center gap-12"
              >
                <img 
                  src={selectedMedia.url} 
                  alt={selectedMedia.title}
                  className="max-h-full max-w-full object-contain border border-border shadow-2xl"
                />
                
                <div className="max-w-2xl text-center">
                  <p className="text-xl text-text-muted font-light leading-relaxed italic opacity-80">
                    {selectedMedia.description}
                  </p>
                </div>
              </motion.div>

              <button 
                onClick={() => navigateModal('next')}
                className="absolute right-8 z-10 w-16 h-16 border border-border rounded-full flex items-center justify-center hover:bg-accent hover:text-text-main transition-all group"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Modal Footer / Thumbnails */}
            <div className="p-8 border-t border-border/50 flex justify-center gap-4 overflow-hidden">
               <div className="font-serif text-[10px] tracking-[0.5em] opacity-30 uppercase">
                 Navigation: Use Arrows • Exit: ESC
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Featured Video Section */}
      <section className="py-40 hermes-grid overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="border border-border p-12 lg:p-24 relative bg-bg hover:bg-bg-light transition-colors duration-1000 group">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <div className="font-serif text-[11px] tracking-[0.5em] text-accent font-medium mb-10 uppercase italic">Cinematic Vision</div>
                <h2 className="text-6xl md:text-8xl font-serif mb-12 tracking-tighter uppercase leading-[0.8]">
                  Our Story <br/> <span className="italic text-accent">In Motion.</span>
                </h2>
                <p className="text-xl text-text-muted font-light leading-relaxed mb-16 max-w-md italic opacity-80">
                  Experience the life at MACOS through the lens of our students. From sports documentaries 
                  to student-led productions, we capture the essence of our journey.
                </p>
                <button className="flex flex-col gap-4 group/btn">
                  <span className="font-mono text-[10px] tracking-[0.4em] opacity-40 uppercase">Connect with us</span>
                  <span className="px-12 py-5 border border-border font-serif text-[13px] tracking-[0.3em] uppercase hover:bg-text-main hover:text-bg transition-all duration-500 flex items-center gap-4">
                    YouTube Channel <ArrowLeft size={14} className="rotate-180" />
                  </span>
                </button>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/5] bg-bg overflow-hidden border border-border relative group/vid shadow-2xl">
                  <img 
                    src="https://makererecollege.sc.ug/wp-content/uploads/slider/cache/a84a0aabcd01c0b3c2898ba45bf34a50/IMG_6967-1.jpg" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                    alt="Video series cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover/vid:scale-110 transition-all duration-700 bg-white/5">
                      <Play size={40} className="text-white ml-2" fill="white" />
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div className="font-serif text-[10px] tracking-[0.4em] text-white uppercase drop-shadow-lg">Featured: Sports Series</div>
                    <div className="font-mono text-[10px] text-white/50 tracking-widest">2026 // PROD</div>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-10 -right-10 bg-accent p-8 border border-border shadow-2xl hidden md:block">
                  <div className="text-4xl font-serif tracking-tighter text-text-main">100+</div>
                  <div className="font-serif text-[9px] tracking-[0.3em] text-text-main/60 uppercase mt-2">Captured Moments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
