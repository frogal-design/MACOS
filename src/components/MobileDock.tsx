import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Info, Image, Users, Calendar, Search, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Gallery', path: '/gallery', icon: Image },
  { name: 'Students', path: '/students', icon: Users },
  { name: 'Events', path: '/events', icon: Calendar },
];

export const MobileDock = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md">
      <motion.div 
        layout
        className="bg-bg/90 backdrop-blur-2xl border border-border rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between p-2">
          {/* Active Path Label */}
          <div className="px-4">
             <span className="font-serif text-[10px] tracking-[0.3em] uppercase italic text-accent opacity-80">
               {navItems.find(item => item.path === location.pathname)?.name || 'Menu'}
             </span>
          </div>

          {/* Toggle Action */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-bg-light border border-border text-text-main"
          >
            {isOpen ? <X size={20} /> : <div className="flex flex-col gap-1 w-5">
              <span className="h-[1px] w-full bg-current" />
              <span className="h-[1px] w-2/3 bg-current self-end" />
            </div>}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-2 pb-2"
            >
              <div className="grid grid-cols-5 gap-1 border-t border-border pt-4 mt-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all group"
                    >
                      <div className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-500 scale-90 group-active:scale-95 ${
                        isActive 
                          ? 'bg-accent border-accent text-text-main shadow-[0_0_20px_rgba(218,38,39,0.3)]' 
                          : 'bg-bg border-border text-text-muted hover:border-accent group-hover:text-accent'
                      }`}>
                        <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                      </div>
                      <span className={`font-serif text-[8px] tracking-[0.2em] uppercase transition-colors ${
                        isActive ? 'text-accent opacity-100' : 'text-text-muted group-hover:text-text-main opacity-60'
                      }`}>
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
              
              <div className="mt-4 mb-2 p-4 bg-bg-light border border-border rounded-xl flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-serif text-[8px] tracking-[0.3em] text-text-muted uppercase italic">School Portal</span>
                  <span className="font-serif text-xs uppercase tracking-tighter">Access Dashboard</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                   <Search size={14} className="text-text-muted" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
