import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShapeGrid from '../components/ShapeGrid';
import DecryptedText from '../components/DecryptedText';

// Hoisted static data to module scope to avoid re-allocation on every render
const STATS = [
  { label: 'Subjects', val: '10+', icon: <BookOpen className="w-5 h-5" /> },
  { label: 'Students', val: '3,000+', icon: <Users className="w-5 h-5" /> },
  { label: 'Teachers', val: '50+', icon: <GraduationCap className="w-5 h-5" /> },
  { label: 'Success', val: '99.9%', icon: <Trophy className="w-5 h-5" /> },
];

const HIGHLIGHTS = [
  { tag: "01", title: "THE SCOUTS CLUB", date: "April 07, 2026", img: "https://makererecollege.sc.ug/wp-content/uploads/2026/04/IMG-20260407-WA0003.jpg" },
  { tag: "02", title: "CULTURAL GALA", date: "March 31, 2026", img: "https://makererecollege.sc.ug/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-31-at-10.29.43-AM-10.jpeg" },
  { tag: "03", title: "RUGBY CHAMPIONS", date: "March 30, 2026", img: "https://makererecollege.sc.ug/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-30-at-6.51.00-AM.jpeg" }
];

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center border-b border-border hermes-grid overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="mb-12 font-serif text-[11px] tracking-[0.6em] text-accent uppercase font-medium">
              ESTABLISHED 1945 • MAKERERE HILL ROAD • KAMPALA
            </div>
            
            <h1 className="text-[12vw] md:text-[10vw] font-serif leading-[0.85] mb-12 tracking-[-0.04em] uppercase">
              <span className="block">
                <DecryptedText 
                  text="BE KNOWN" 
                  animateOn="view" 
                  revealDirection="center"
                  className="font-medium"
                /> 
              </span>
              <span className="block mt-4 italic font-light lowercase">
                <DecryptedText 
                  text="BY WORKS." 
                  animateOn="view" 
                  revealDirection="center"
                  className="text-accent"
                />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-muted max-w-2xl mb-20 font-light leading-relaxed italic opacity-80">
              Makerere College School is a community of excellence, innovation, and character building on Makerere Hill. 
              An autonomous institution that lives by its values, and gets more capable the longer it runs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border w-full max-w-2xl overflow-hidden group">
              <Link to="/gallery" className="p-8 border-r border-border hover:bg-accent hover:text-text-main transition-all duration-500 flex flex-col gap-4 text-left">
                <span className="font-mono text-[10px] tracking-[0.4em] opacity-40">01. EXPLORE</span>
                <span className="font-serif text-2xl uppercase italic tracking-tighter">Campus Gallery</span>
              </Link>
              <Link to="/about" className="p-8 hover:bg-bg-light transition-all duration-500 flex flex-col gap-4 text-left">
                <span className="font-mono text-[10px] tracking-[0.4em] opacity-40">02. LEARN</span>
                <span className="font-serif text-2xl uppercase italic tracking-tighter">Our Curriculum</span>
              </Link>
            </div>

            <div className="mt-16 font-serif text-[10px] tracking-[0.5em] opacity-30 uppercase">
              REQUIRES COMMITMENT • SINCE 1945
            </div>
          </motion.div>
        </div>
        
        {/* Background Grid - Hermes specific */}
        <div className="absolute inset-x-0 bottom-0 h-[100px] border-t border-border flex pointer-events-none">
          <div className="flex-1 border-r border-border" />
          <div className="flex-1 border-r border-border" />
          <div className="flex-1 border-r border-border" />
          <div className="flex-1" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 border-b border-border">
        {STATS.map((stat, i) => (
          <div key={i} className="p-12 border-r border-border last:border-r-0 flex flex-col gap-4 group hover:bg-bg-light transition-colors">
            <div className="text-accent group-hover:scale-110 transition-transform duration-500">
              {stat.icon}
            </div>
            <div>
              <div className="text-4xl font-serif mb-1">{stat.val}</div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-text-muted uppercase">{stat.label}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Headteacher Section - Minimalist */}
      <section className="py-32 border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://makererecollege.sc.ug/wp-content/uploads/2025/05/headteacher.png" 
                alt="Headteacher"
                loading="lazy"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-border -z-10 group-hover:translate-x-5 transition-transform duration-500"></div>
          </div>
          
          <div>
            <div className="font-mono text-xs tracking-widest text-accent mb-8 uppercase italic">Leadership Statement</div>
            <h2 className="text-5xl md:text-6xl font-serif mb-10 tracking-tight leading-tight">
              "We strive for unity and <span className="italic">teamwork</span>, as two are always better than one."
            </h2>
            <p className="text-lg text-text-muted mb-12 font-light leading-relaxed italic border-l border-border pl-8">
              Welcome to Makerere College School. Our theme for 2025 is “Inspiring Team Commitment.” 
              We are proud of our history and our pupils who define us through their good works.
            </p>
            <div className="font-mono text-sm">
              <div className="text-text-main tracking-widest uppercase mb-1">Dr. Martin Muyingo</div>
              <div className="text-text-muted tracking-[0.1em] uppercase text-xs">Head Teacher • MACOS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 border-b border-border bg-bg-light">
        <div className="container mx-auto px-6 mb-20 flex justify-between items-end">
          <div>
            <div className="font-mono text-xs tracking-[.4em] text-accent mb-4 uppercase">Archive</div>
            <h2 className="text-5xl font-serif leading-tight">News & <span className="italic">Activity</span></h2>
          </div>
          <Link to="/gallery" className="font-mono text-xs tracking-widest uppercase border-b border-text-muted pb-2 hover:text-accent hover:border-accent transition-all">
            View All
          </Link>
        </div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-0 border border-border">
          {HIGHLIGHTS.map((item, i) => (
            <div key={i} className="p-12 border-r border-border last:border-r-0 group hover:bg-bg transition-all flex flex-col gap-10">
              <div className="font-mono text-xs text-text-muted group-hover:text-accent transition-colors">{item.tag}</div>
              <div className="aspect-square overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div>
                <h4 className="text-2xl font-serif mb-4 uppercase tracking-tighter group-hover:italic">{item.title}</h4>
                <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
