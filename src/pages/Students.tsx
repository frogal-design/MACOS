import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Users, Trophy, Music, Palette, Tent, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DecryptedText from '../components/DecryptedText';

const Students = () => {
  const navigate = useNavigate();

  const clubs = [
    { name: "THE SCOUTS CLUB", icon: <ShieldCheck size={32} />, desc: "Building discipline and survival skills since the school's inception." },
    { name: "NKABA ZAMBOGO", icon: <Palette size={32} />, desc: "Preserving cultural heritage through art, dance, and storytelling." },
    { name: "RUGBY TEAM", icon: <Trophy size={32} />, desc: "Reigning kings of the U20 championship. Intensity and teamwork." },
    { name: "WILDLIFE CLUB", icon: <Tent size={32} />, desc: "Conservation efforts and exploration of Uganda's natural beauty." },
    { name: "MUSIC & DRAMA", icon: <Music size={32} />, desc: "Creative expression through theatrical performances and choir." },
    { name: "ICT CLUB", icon: <Users size={32} />, desc: "Innovating through technology and digital literacy programs." },
  ];

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
                text="LIFE AT" 
                animateOn="view" 
                revealDirection="center"
                speed={100}
                maxIterations={20}
              /> 
              <br/> 
              <span className="italic text-accent">
                <DecryptedText 
                  text="MACOS." 
                  animateOn="view" 
                  revealDirection="center"
                  speed={100}
                  maxIterations={20}
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted font-light leading-relaxed max-w-2xl">
              Education at Makerere College School extends far beyond the classroom. 
              We believe in the holistic development of every student.
            </p>
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-0 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club, i) => (
            <div key={i} className="p-20 border-r border-b border-border last:border-r-0 group hover:bg-bg-light transition-all">
              <div className="text-accent mb-10 group-hover:scale-110 transition-transform duration-500">
                {club.icon}
              </div>
              <h3 className="text-3xl font-serif mb-6 uppercase tracking-tight group-hover:italic">{club.name}</h3>
              <p className="text-text-muted font-light leading-relaxed mb-10">
                {club.desc}
              </p>
              <div className="font-mono text-[10px] tracking-widest uppercase text-text-muted border-b border-border inline-block pb-2 group-hover:text-accent group-hover:border-accent">
                Learn More
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trips & Activities */}
      <section className="py-32 border-b border-border hermes-grid">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
               <div className="font-mono text-xs tracking-[.4em] text-accent mb-8 uppercase italic">Exploration</div>
               <h2 className="text-5xl md:text-7xl font-serif mb-10 tracking-tighter uppercase">
                 <DecryptedText text="TOURS AND" animateOn="view" speed={100} /> <br/>
                 <span className="italic"><DecryptedText text="TRIPS." animateOn="view" speed={100} /></span>
               </h2>
               <p className="text-xl text-text-muted font-light leading-relaxed mb-12">
                 From Physics trips to Nalubaale Hydro Electricity Dam to cultural exchanges across the region, 
                 we ensure our students see the world they are learning to lead.
               </p>
               <button className="bg-text-main text-bg px-10 py-5 font-mono text-xs tracking-widest uppercase hover:bg-accent hover:text-text-main transition-all">
                 VIEW 2026 CALENDAR
               </button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden border border-border grayscale hover:grayscale-0 transition-all">
                <img src="https://makererecollege.sc.ug/wp-content/uploads/slider/cache/5d8910c983d996b3be09b2818385d031/IMG_1001-scaled.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden border border-border grayscale hover:grayscale-0 mt-20 transition-all">
                <img src="https://makererecollege.sc.ug/wp-content/uploads/slider/cache/7d45eff89cd986b2aebac852a90543d2/20240709174657_IMG_9372.jpg" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;
