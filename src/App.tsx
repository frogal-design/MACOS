import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation 
} from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Facebook, 
  Twitter, 
  Youtube, 
  Search,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Students from './pages/Students';
import Events from './pages/Events';
import Gallery from './pages/Gallery';

import { MobileDock } from './components/MobileDock';

const NAV_LINKS = [
  { name: 'ABOUT', path: '/about' },
  { name: 'PORTAL', path: '/students' },
  { name: 'CHRONICLE', path: '/events' },
  { name: 'GALLERY', path: '/gallery' }
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile Dock Navigation */}
      <MobileDock />

      {/* Header / Navbar */}
      <nav className="sticky top-0 z-50 bg-bg/95 backdrop-blur-xl border-b border-border">
        <div className="flex w-full h-24">
          {/* Logo Section */}
          <Link to="/" className="flex items-center px-4 md:px-8 border-r border-border group min-w-0 md:min-w-[280px]">
            <img 
              src="https://makererecollege.sc.ug/wp-content/uploads/2025/05/logo.png" 
              alt="MACOS" 
              className="h-8 md:h-10 w-8 md:w-10 object-contain mr-3 md:mr-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
            <div className="font-serif">
              <div className="text-lg md:text-2xl leading-none tracking-tighter uppercase font-medium">MAKERERE</div>
              <div className="text-base md:text-xl leading-none tracking-tighter uppercase font-light italic text-accent opacity-80 mt-1">COLLEGE.</div>
            </div>
          </Link>

          {/* Desktop Nav Grid */}
          <div className="hidden lg:flex flex-grow">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name}
                  to={link.path}
                  className={`flex-1 flex items-center justify-center border-r border-border font-serif text-[13px] tracking-[0.2em] hover:bg-bg-light transition-all duration-300 group relative overflow-hidden ${
                    isActive ? 'text-accent' : 'text-text-main hover:text-accent'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <motion.div 
                    initial={false}
                    animate={{ y: isActive ? 0 : '100%' }}
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-accent transition-transform duration-300 group-hover:translate-y-0" 
                  />
                </Link>
              );
            })}

            {/* End Actions / Theme Placeholder */}
            <div className="flex items-center px-8 gap-8 border-r border-border min-w-[200px] justify-between">
              <span className="font-serif text-[11px] tracking-[0.3em] opacity-40 uppercase">THEME</span>
              <div className="w-12 h-6 border border-border rounded-full flex items-center p-1 bg-bg-light">
                <div className="w-4 h-4 bg-text-main rounded-full" />
              </div>
            </div>
            
            <div className="flex items-center px-8 cursor-pointer hover:bg-bg-light transition-colors">
              <Search size={18} className="text-text-muted opacity-50" />
            </div>
          </div>

          {/* Spacer for mobile layout since dock is floating */}
          <div className="flex-grow lg:hidden" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-bg border-t border-border pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-24 mb-32">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <img src="https://makererecollege.sc.ug/wp-content/uploads/2025/05/logo.png" alt="MACOS" className="h-10 w-10 object-contain" />
                <div className="font-serif text-3xl uppercase tracking-tighter italic">MACOS.</div>
              </div>
              <p className="text-text-muted font-light leading-relaxed mb-10 max-w-sm italic">
                “Be known by works.” A community of excellence, innovation, and character building on Makerere Hill.
              </p>
              <div className="flex gap-6">
                {[Facebook, Twitter, Youtube].map((Icon, idx) => (
                   <Icon key={idx} size={18} className="text-text-muted hover:text-accent cursor-pointer transition-colors" />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-12 font-mono text-[10px] tracking-[0.3em] text-text-muted uppercase">
              <div className="space-y-4">
                <div className="text-text-main mb-6">Directory</div>
                <Link to="/about" className="block hover:text-accent transition-colors">Overview</Link>
                <Link to="/gallery" className="block hover:text-accent transition-colors">Gallery</Link>
                <Link to="/students" className="block hover:text-accent transition-colors">Clubs</Link>
                <Link to="/events" className="block hover:text-accent transition-colors">Archives</Link>
              </div>
              <div className="space-y-4">
                <div className="text-text-main mb-6">Links</div>
                <a href="#" className="block hover:text-accent transition-colors">Webmail</a>
                <a href="#" className="block hover:text-accent transition-colors">Moodle</a>
                <a href="#" className="block hover:text-accent transition-colors">Alumni</a>
              </div>
            </div>

            <div className="space-y-8 font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase">
              <div className="text-text-main mb-6">Connect</div>
              <div className="flex items-start gap-4">
                 <MapPin size={16} className="text-accent shrink-0" />
                 <span>O' Level: Makerere Hill Road<br/>A' Level: Mulawa, Kira</span>
              </div>
              <div className="flex items-center gap-4">
                 <Phone size={16} className="text-accent shrink-0" />
                 <span>(+256) 414 383570</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border font-mono text-[8px] tracking-[0.4em] text-text-muted uppercase">
            <p>© 2026 MAKERERE COLLEGE SCHOOL. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-12 mt-8 md:mt-0">
               <span className="hover:text-text-main cursor-pointer">PRIVACY</span>
               <span className="hover:text-text-main cursor-pointer">INSTITUTIONAL</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/students" element={<Students />} />
          <Route path="/events" element={<Events />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
