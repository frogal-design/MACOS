import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShapeGrid from '../components/ShapeGrid';
import DecryptedText from '../components/DecryptedText';

const Home = () => {
  const stats = [
    { label: 'Subjects', val: '10+', icon: <BookOpen className="w-5 h-5" /> },
    { label: 'Students', val: '3,000+', icon: <Users className="w-5 h-5" /> },
    { label: 'Teachers', val: '50+', icon: <GraduationCap className="w-5 h-5" /> },
    { label: 'Success', val: '99.9%', icon: <Trophy className="w-5 h-5" /> },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center border-b border-border hermes-grid">
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-8 uppercase font-mono text-xs tracking-[0.3em] text-accent">
              <span className="w-8 h-[1px] bg-accent"></span>
              ESTABLISHED 1945 • MAKERE UNIVERSITY
            </div>
            
            <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] mb-12 tracking-tighter">
              <DecryptedText 
                text="BE KNOWN" 
                animateOn="view" 
                revealDirection="center"
                speed={100}
                maxIterations={20}
              /> 
              <br/> 
              <DecryptedText 
                text="BY " 
                animateOn="view" 
                revealDirection="center"
                speed={100}
                maxIterations={20}
              />
              <span className="text-accent italic">
                <DecryptedText 
                  text="WORKS." 
                  animateOn="view" 
                  revealDirection="center"
                  speed={100}
                  maxIterations={20}
                />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-muted max-w-2xl mb-12 font-light leading-relaxed">
              MACOS is more than a school; it's a legacy of excellence on Makerere Hill. 
              We nurture the next generation of innovative leaders through academic rigor and moral integrity.
            </p>
            
            <div className="flex flex-wrap gap-8 items-center font-mono text-sm tracking-widest">
              <Link to="/gallery" className="bg-text-main text-bg px-10 py-5 hover:bg-accent hover:text-text-main transition-colors duration-300">
                EXPLORE CAMPUS
              </Link>
              <Link to="/about" className="flex items-center gap-3 border-b border-text-main py-2 hover:text-accent hover:border-accent transition-colors">
                VIEW CURRICULUM <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Visual */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-border hidden lg:block opacity-20">
          <ShapeGrid 
            speed={0.2} 
            squareSize={60} 
            direction="diagonal" 
            borderColor="#1F2E2B" 
            hoverFillColor="#DA2627" 
            shape="hexagon" 
            hoverTrailAmount={5} 
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 border-b border-border">
        {stats.map((stat, i) => (
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
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-border -z-10 group-hover:translate-x-5 transition-transform duration-500"></div>
          </div>
          
          <div>
            <div className="font-mono text-xs tracking-widest text-accent mb-8 uppercase italic">Leadership Statement</div>
            <h2 className="text-5xl md:text-6xl font-serif mb-10 tracking-tight leading-tight uppercase">
              <DecryptedText text="We strive for unity and" animateOn="view" speed={100} maxIterations={20} /> <br/>
              <span className="italic"><DecryptedText text="teamwork" animateOn="view" speed={100} maxIterations={20} /></span>
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
            <h2 className="text-5xl font-serif leading-tight uppercase">
              <DecryptedText text="News &" animateOn="view" speed={100} /> <span className="italic"><DecryptedText text="Activity" animateOn="view" speed={100} /></span>
            </h2>
          </div>
          <Link to="/gallery" className="font-mono text-xs tracking-widest uppercase border-b border-text-muted pb-2 hover:text-accent hover:border-accent transition-all">
            View All
          </Link>
        </div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-0 border border-border">
          {[
            { tag: "01", title: "THE SCOUTS CLUB", date: "April 07, 2026", img: "https://makererecollege.sc.ug/wp-content/uploads/2026/04/IMG-20260407-WA0003.jpg" },
            { tag: "02", title: "CULTURAL GALA", date: "March 31, 2026", img: "https://makererecollege.sc.ug/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-31-at-10.29.43-AM-10.jpeg" },
            { tag: "03", title: "RUGBY CHAMPIONS", date: "March 30, 2026", img: "https://makererecollege.sc.ug/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-30-at-6.51.00-AM.jpeg" }
          ].map((item, i) => (
            <div key={i} className="p-12 border-r border-border last:border-r-0 group hover:bg-bg transition-all flex flex-col gap-10">
              <div className="font-mono text-xs text-text-muted group-hover:text-accent transition-colors">{item.tag}</div>
              <div className="aspect-square overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-500">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
