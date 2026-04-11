import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIInsights from './components/AIInsights';
import InterfaceShowcase from './components/InterfaceShowcase';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ScrollProgress, CustomCursor } from './components/Effects';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="pt-40 pb-20 px-4 max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="micro-label mb-6 text-brand-primary">System Resource</div>
      <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 gradient-text-primary italic-serif">
        {title}
      </h1>
      <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
        This neural node is currently being optimized. The requested interface layer will be initialized in the next deployment cycle.
      </p>
      <div className="mt-12 p-8 glass rounded-3xl border-white/10 hardware-border">
        <div className="flex items-center gap-3 text-brand-primary mb-4">
          <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Status: Synchronizing</span>
        </div>
        <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="w-2/3 h-full bg-brand-primary neon-glow-primary" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col selection:bg-brand-primary/30 selection:text-white">
          <Helmet>
            <title>Aetheris | Next-Gen AI Workforce Interfaces</title>
            <meta name="description" content="Aetheris creates high-fidelity GUI interfaces for AI agent orchestration. Dev, Orchestrator, and Customer views for the modern enterprise." />
            <meta name="author" content="757tech.pro" />
            <link rel="canonical" href="https://aetheris-ai-workforce-interfaces.757tech.pro/" />
            
            {/* Open Graph */}
            <meta property="og:title" content="Aetheris | AI Workforce Interfaces" />
            <meta property="og:description" content="Orchestrate your AI workforce with beautiful, functional interfaces." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://aetheris-ai-workforce-interfaces.757tech.pro/" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Aetheris | AI Workforce Interfaces" />
            <meta name="twitter:description" content="Next-gen GUI for AI agents." />
          </Helmet>

          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <AIInsights />
                  <InterfaceShowcase />
                  <About />
                  <Contact />
                </>
              } />
              <Route path="/pricing" element={<PlaceholderPage title="Pricing Architecture" />} />
              <Route path="/documentation" element={<PlaceholderPage title="Neural Documentation" />} />
              <Route path="/api" element={<PlaceholderPage title="API Reference" />} />
              <Route path="/community" element={<PlaceholderPage title="Global Community" />} />
              <Route path="/status" element={<PlaceholderPage title="System Status" />} />
              <Route path="/changelog" element={<PlaceholderPage title="Neural Changelog" />} />
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Protocol" />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
