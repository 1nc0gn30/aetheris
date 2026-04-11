import React from 'react';
import { Cpu, Github, Twitter, Linkedin, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-bg-dark border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center neon-glow shadow-lg shadow-brand-primary/20">
                <Cpu className="w-6 h-6 text-bg-dark" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter">
                AETHERIS<span className="text-brand-primary">.</span>
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              The definitive visual layer for the autonomous future. We build high-fidelity interfaces that bridge the gap between human intent and machine execution.
            </p>
            <div className="flex gap-5">
              <SocialLink icon={<Twitter className="w-5 h-5" />} href="#" label="Twitter" />
              <SocialLink icon={<Github className="w-5 h-5" />} href="#" label="GitHub" />
              <SocialLink icon={<Linkedin className="w-5 h-5" />} href="#" label="LinkedIn" />
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Platform</h4>
            <ul className="space-y-4">
              <li><FooterLink to="/#interface">Interface Engine</FooterLink></li>
              <li><FooterLink to="/#interface">Neural SDK</FooterLink></li>
              <li><FooterLink to="/#interface">Orchestrator</FooterLink></li>
              <li><FooterLink to="/#about">Security</FooterLink></li>
              <li><FooterLink to="/pricing">Pricing</FooterLink></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Resources</h4>
            <ul className="space-y-4">
              <li><FooterLink to="/documentation">Documentation</FooterLink></li>
              <li><FooterLink to="/api">API Reference</FooterLink></li>
              <li><FooterLink to="/community">Community</FooterLink></li>
              <li><FooterLink to="/status">Status</FooterLink></li>
              <li><FooterLink to="/changelog">Changelog</FooterLink></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-gray-400 group-hover:text-brand-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">hello@aetheris.ai</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-gray-400 group-hover:text-brand-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">HQ</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">San Francisco, CA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-500">
            <p>© 2026 Aetheris AI. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Systems Operational</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
              A product of <span className="text-white">757tech.pro</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-300">
      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
      {children}
    </Link>
  );
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-bg-dark hover:border-brand-primary hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="group-hover:scale-110 transition-transform">
        {icon}
      </div>
    </a>
  );
}
