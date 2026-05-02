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

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navbar */}
      <nav className="sticky top-0 z-50 bg-bg/95 backdrop-blur-xl border-b border-border">
        <div className="flex w-full h-24">
          {/* Logo Section */}
          <Link to="/" className="flex items-center px-8 border-r border-border group min-w-[280px]">
            <img 
              src="https://makererecollege.sc.ug/wp-content/uploads/2025/05/logo.png" 
              alt="MACOS" 
              className="h-10 w-10 object-contain mr-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
            <div className="font-serif">
              <div className="text-2xl leading-none tracking-tighter uppercase font-medium">MAKERERE</div>
              <div className="text-xl leading-none tracking-tighter uppercase font-light italic text-accent opacity-80 mt-1">COLLEGE.</div>
            </div>
          </Link>

          {/* Desktop Nav Grid */}
          <div className="hidden lg:flex flex-grow">
            {[
              { name: 'DOCS', path: '/about' },
              { name: 'PORTAL', path: '/students' },
              { name: 'GITHUB', path: '#' },
              { name: 'DISCORD', path: '#' },
              { name: 'GALLERY', path: '/gallery' }
            ].map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className="flex-1 flex items-center justify-center border-r border-border font-serif text-[13px] tracking-[0.2em] hover:bg-bg-light hover:text-accent transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div 
                  className="absolute inset-x-0 bottom-0 h-[2px] bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" 
                />
              </Link>
            ))}

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

          {/* Mobile Toggle */}
          <button className="lg:hidden ml-auto px-8 flex items-center text-text-main" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="lg:hidden fixed inset-0 top-24 bg-bg z-40 p-6 flex flex-col gap-8 font-serif"
            >
              {[
                { name: 'HOME', path: '/' },
                { name: 'ABOUT', path: '/about' },
                { name: 'GALLERY', path: '/gallery' },
                { name: 'STUDENTS', path: '/students' },
                { name: 'EVENTS', path: '/events' }
              ].map((link) => (
                <Link key={link.name} to={link.path} className="text-5xl border-b border-border pb-6 hover:italic hover:text-accent">
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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
