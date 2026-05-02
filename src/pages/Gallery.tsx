import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Play, Maximize2, Image as ImageIcon, Video, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DecryptedText from '../components/DecryptedText';

const Gallery = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'events', 'sports', 'campus', 'clubs'];

  const media = [
    { 
      id: 1, 
      type: 'image', 
      category: 'campus', 
      title: 'MACOS MAIN CAMPUS', 
      url: 'https://makererecollege.sc.ug/wp-content/uploads/slider/cache/f4b160855997bcee913d4698a9e6ac22/new_slider.jpg' 
    },
    { 
      id: 2, 
      type: 'image', 
      category: 'clubs', 
      title: 'SCOUTS FLAG OFF', 
      url: 'https://makererecollege.sc.ug/wp-content/uploads/2026/04/IMG-20260407-WA0003.jpg' 
    },
    { 
      id: 3, 
      type: 'image', 
      category: 'sports', 
      title: 'RUGBY CHAMPIONS', 
      url: 'https://makererecollege.sc.ug/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-30-at-6.51.00-AM.jpeg' 
    },
    { 
      id: 4, 
      type: 'image', 
      category: 'events', 
      title: 'CULTURAL DAY CELEBRATIONS', 
      url: 'https://makererecollege.sc.ug/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-31-at-10.29.43-AM-10.jpeg' 
    },
    { 
      id: 5, 
      type: 'image', 
      category: 'campus', 
      title: 'CLASSROOM FACILITIES', 
      url: 'https://makererecollege.sc.ug/wp-content/uploads/slider/cache/5d8910c983d996b3be09b2818385d031/IMG_1001-scaled.jpg' 
    },
    { 
      id: 6, 
      type: 'image', 
      category: 'events', 
      title: 'SCHOOL ASSEMBLY', 
      url: 'https://makererecollege.sc.ug/wp-content/uploads/slider/cache/7d45eff89cd986b2aebac852a90543d2/20240709174657_IMG_9372.jpg' 
    },
    { 
      id: 7, 
      type: 'video', 
      category: 'sports', 
      title: 'RUGBY FINALS HIGHLIGHTS', 
      url: 'https://makererecollege.sc.ug/wp-content/uploads/slider/cache/a84a0aabcd01c0b3c2898ba45bf34a50/IMG_6967-1.jpg',
      videoUrl: '#'
    },
    { 
      id: 8, 
      type: 'image', 
      category: 'campus', 
      title: 'MULAWA CAMPUS GROUNDS', 
      url: 'https://makererecollege.sc.ug/wp-content/uploads/slider/cache/ed4f50c6009ef107ebbd16ad5f5f520c/20250611_131310-scaled.jpg' 
    },
  ];

  const filteredMedia = filter === 'all' ? media : media.filter(m => m.category === filter);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-32 border-b border-border hermes-grid">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => navigate('/')}
            className="font-mono text-[10px] tracking-[0.3em] uppercase flex items-center gap-2 mb-12 text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={12} /> BACK TO HOME
          </button>
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] mb-12 tracking-tighter">
              <DecryptedText 
                text="VISUAL" 
                animateOn="view" 
                revealDirection="center"
                speed={100}
                maxIterations={20}
              /> 
              <br/> 
              <span className="italic text-accent">
                <DecryptedText 
                  text="CHRONICLE." 
                  animateOn="view" 
                  revealDirection="center"
                  speed={100}
                  maxIterations={20}
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted font-light leading-relaxed max-w-2xl">
              A curated collection of moments that define our spirit. From academic milestones to sporting 
              victories and the daily pulse of campus life.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-24 z-40 bg-bg border-b border-border py-4">
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="flex items-center gap-8 min-w-max">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-text-muted uppercase">
              <Filter size={12} /> Filter:
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-[10px] tracking-[0.3em] uppercase py-2 border-b-2 transition-all ${
                  filter === cat 
                    ? 'border-accent text-text-main' 
                    : 'border-transparent text-text-muted hover:text-text-main hover:border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20 border-b border-border bg-bg-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
            <AnimatePresence mode="popLayout">
              {filteredMedia.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative aspect-square overflow-hidden border-r border-b border-border last:border-r-0 hover:z-10 focus-within:z-10"
                >
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="font-mono text-[10px] tracking-widest text-accent uppercase">{item.category}</div>
                      {item.type === 'video' ? <Video size={16} className="text-accent" /> : <ImageIcon size={16} className="text-accent" />}
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-serif leading-tight mb-4 tracking-tighter uppercase">{item.title}</h3>
                      <button className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-text-muted hover:text-text-main transition-colors">
                        {item.type === 'video' ? 'Play Video' : 'View Full Image'} 
                        {item.type === 'video' ? <Play size={10} fill="currentColor" /> : <Maximize2 size={10} />}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Video Highlight Section */}
      <section className="py-32 border-b border-border hermes-grid overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <div className="font-mono text-xs tracking-[.4em] text-accent mb-8 uppercase italic">Featured Video</div>
              <h2 className="text-5xl md:text-7xl font-serif mb-10 tracking-tighter max-w-lg leading-none uppercase">
                <DecryptedText text="OUR JOURNEY" animateOn="view" speed={100} /> <br/> 
                <DecryptedText text="IN" animateOn="view" speed={100} /> <span className="italic"><DecryptedText text="MOTION." animateOn="view" speed={100} /></span>
              </h2>
              <p className="text-xl text-text-muted font-light leading-relaxed mb-12 max-w-md">
                Experience the atmosphere of Makerere College School. Watch our student-led productions 
                and official event coverage.
              </p>
              <button className="bg-text-main text-bg px-10 py-5 font-mono text-xs tracking-widest uppercase hover:bg-accent hover:text-text-main transition-all">
                YOUTUBE CHANNEL
              </button>
            </div>
            
            <div className="lg:w-1/2 relative group">
              <div className="aspect-video bg-border border border-border overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://makererecollege.sc.ug/wp-content/uploads/slider/cache/a84a0aabcd01c0b3c2898ba45bf34a50/IMG_6967-1.jpg" 
                  className="w-full h-full object-cover" 
                  alt="Video cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform bg-white/10">
                    <Play size={32} className="text-white ml-2" fill="white" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-border -z-10 group-hover:-translate-x-5 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
