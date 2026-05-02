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
      <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 h-24 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src="https://makererecollege.sc.ug/wp-content/uploads/2025/05/logo.png" 
              alt="MACOS" 
              className="h-12 w-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="font-serif tracking-tighter">
              <div className="text-xl leading-none">MACOS</div>
              <div className="text-[8px] font-mono tracking-[0.4em] text-text-muted mt-1">MT. KAMPALA</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center border-l border-border h-full">
            {[
              { name: 'DOCS', path: '/about' },
              { name: 'GALLERY', path: '/gallery' },
              { name: 'PORTAL', path: '/students' },
              { name: 'CHRONICLE', path: '/events' },
              { name: 'CONTACT', path: '/contact' }
            ].map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className="h-full px-12 flex items-center border-r border-border font-mono text-[10px] tracking-[0.3em] hover:bg-bg-light hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-12 flex items-center gap-6">
              <Search size={16} className="text-text-muted hover:text-text-main cursor-pointer" />
              <button className="font-mono text-[10px] tracking-widest text-accent border border-accent/30 px-6 py-2 hover:bg-accent hover:text-text-main transition-all">
                LOGIN
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-text-main" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
