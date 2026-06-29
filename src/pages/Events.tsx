import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Bell, Download } from 'lucide-react';
import DecryptedText from '../components/DecryptedText';

// Static data hoisted to module scope to prevent re-allocation on every render
const ANNOUNCEMENTS = [
  { date: "MAR 22, 2026", title: "CELEBRATING EXCELLENCE AT MACOS", desc: "Proudly sharing our UACE 2025 results. A testament to hard work." },
  { date: "FEB 10, 2026", title: "TERM 1 REPORT PORTAL OPEN", desc: "Parents can now access student reports via the online portal." },
  { date: "JAN 15, 2026", title: "2026 ADMISSION LISTS RELEASED", desc: "Check the S.1 and S.5 intake lists at the main campus notice board." }
];

const CALENDAR = [
  { date: "29", month: "MAR", title: "NKOBAZAMBOGO CULTURAL GALA", time: "9:00 AM", location: "Main Hall" },
  { date: "11", month: "APR", title: "SENIOR SIX LUNCHEON", time: "9:00 AM", location: "Mulawa Campus" },
  { date: "17", month: "APR", title: "PHYSICS TRIP TO JINJA", time: "7:00 AM", location: "Nalubaale Dam" },
];

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="py-32 border-b border-border hermes-grid">
        <div className="container mx-auto px-6">
          <button onClick={() => navigate('/')} className="font-mono text-[10px] tracking-[0.3em] uppercase flex items-center gap-2 mb-12 text-text-muted hover:text-accent">
            <ArrowLeft size={12} /> BACK
          </button>
          <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] mb-12 tracking-tighter uppercase">
            <DecryptedText 
              text="CHRONICLE" 
              animateOn="view" 
              revealDirection="center"
            /> 
            <br/> 
            <span className="italic text-accent">
              <DecryptedText 
                text="EVENTS." 
                animateOn="view" 
                revealDirection="center"
              />
            </span>
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        {ANNOUNCEMENTS.map((news) => (
          <div key={news.title} className="p-12 border-b border-border last:border-b-0 group hover:bg-bg-light transition-all flex flex-col md:flex-row gap-12 items-start">
            <div className="font-mono text-[10px] tracking-widest text-text-muted w-32 uppercase pt-2">{news.date}</div>
            <div className="flex-grow">
               <h3 className="text-3xl font-serif mb-4 uppercase tracking-tight group-hover:italic">{news.title}</h3>
               <p className="text-text-muted font-light leading-relaxed text-lg max-w-2xl">{news.desc}</p>
            </div>
            <button className="font-mono text-[10px] tracking-widest uppercase border border-border px-6 py-3 hover:bg-accent">
              Read
            </button>
          </div>
        ))}
      </section>

      <section className="py-32 border-b border-border hermes-grid">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24">
           <div className="space-y-12">
              <h2 className="text-6xl font-serif mb-12 tracking-tighter uppercase">Academic <span className="italic text-accent">Calendar</span></h2>
              {CALENDAR.map((event) => (
                <div key={event.title} className="flex gap-10 items-start group">
                   <div className="w-16 flex flex-col items-center">
                      <span className="text-3xl font-serif mb-1 group-hover:text-accent transition-all">{event.date}</span>
                      <span className="text-[10px] tracking-widest text-text-muted font-bold">{event.month}</span>
                   </div>
                   <div className="flex-grow pb-8 border-b border-border">
                      <h4 className="text-xl font-serif uppercase tracking-tight mb-3 group-hover:text-text-main">{event.title}</h4>
                      <div className="flex gap-6 text-[10px] tracking-widest text-text-muted uppercase">
                         <span className="flex items-center gap-1.5"><Clock size={12} /> {event.time}</span>
                         <span className="flex items-center gap-1.5"><MapPin size={12} /> {event.location}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
           
           <div className="bg-bg-light border border-border p-12">
              <h3 className="text-4xl font-serif mb-8 uppercase">Portals</h3>
              <div className="space-y-4 font-mono text-[10px] tracking-widest">
                 {['Student Results', 'E-Learning', 'Staff Mail'].map((p) => (
                   <button key={p} className="w-full p-6 border border-border flex justify-between hover:border-accent hover:text-accent transition-all">
                      {p.toUpperCase()} <Download size={16} />
                   </button>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
