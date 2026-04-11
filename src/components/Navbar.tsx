import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-bg-dark/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-brand-primary/5' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center neon-glow group-hover:scale-110 transition-all duration-500 rotate-3 group-hover:rotate-0">
                <Cpu className="w-6 h-6 text-bg-dark" />
              </div>
              <div className="absolute -inset-1 bg-brand-primary/20 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-black tracking-tighter leading-none">
                AETHERIS<span className="text-brand-primary">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold leading-none mt-1">
                Neural Systems
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              <NavLink to="/#interface">Solutions</NavLink>
              <NavLink to="/#interface">Interface</NavLink>
              <NavLink to="/#about">About</NavLink>
              <NavLink to="/#contact">Contact</NavLink>
            </div>
            
            <div className="h-4 w-px bg-white/10 mx-2" />

            <Link to="/#contact" className="group relative px-6 py-2.5 overflow-hidden rounded-full transition-all duration-500">
              <div className="absolute inset-0 bg-brand-primary transition-all duration-500 group-hover:bg-white" />
              <span className="relative text-sm font-bold text-bg-dark flex items-center gap-2">
                Initialize
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-dark/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              <MobileNavLink to="/#interface" onClick={() => setIsMobileMenuOpen(false)}>Solutions</MobileNavLink>
              <MobileNavLink to="/#interface" onClick={() => setIsMobileMenuOpen(false)}>Interface</MobileNavLink>
              <MobileNavLink to="/#about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
              <Link 
                to="/#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 bg-brand-primary text-bg-dark font-bold rounded-2xl text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="text-sm font-bold text-gray-400 hover:text-white transition-all duration-300 relative group flex items-center gap-1"
    >
      <span className="w-1 h-1 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-500 group-hover:w-full opacity-50" />
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="block text-2xl font-display font-bold text-white hover:text-brand-primary transition-colors"
    >
      {children}
    </Link>
  );
}
