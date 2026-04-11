import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Globe, BarChart3, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <div className="micro-label mb-6 text-brand-accent">Our Philosophy</div>
            <h2 className="text-5xl md:text-7xl mb-8 leading-[0.9] tracking-tighter">
              Engineering the <br />
              <span className="italic-serif">Neural Interface.</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed max-w-2xl">
              Aetheris was founded by the technical collective at <span className="text-white font-bold">757tech.pro</span>. We believe that as AI agents become more autonomous, the visual layer must become more sophisticated.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <AboutFeature 
                icon={<Shield className="w-6 h-6" />}
                title="Sovereign Security"
                desc="End-to-end encryption for neural streams and agent logic."
              />
              <AboutFeature 
                icon={<Zap className="w-6 h-6" />}
                title="Atomic Sync"
                desc="Sub-millisecond latency between agent action and UI reflection."
              />
              <AboutFeature 
                icon={<Globe className="w-6 h-6" />}
                title="Universal Scale"
                desc="Deploy across hybrid-cloud environments with zero configuration."
              />
              <AboutFeature 
                icon={<BarChart3 className="w-6 h-6" />}
                title="Deep Observability"
                desc="Trace neural decision paths with visual precision."
              />
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass p-3 hardware-border">
              <img 
                src="https://picsum.photos/seed/aetheris-about/1000/1200" 
                alt="Aetheris Technology" 
                className="w-full h-full object-cover rounded-[2.5rem] opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Metric */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-8 rounded-3xl border-brand-primary/30 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="micro-label">Live Efficiency</span>
              </div>
              <div className="text-4xl font-display font-bold text-brand-primary">99.98%</div>
              <div className="flex items-center gap-1 text-[10px] text-green-500 font-bold mt-2">
                <ArrowUpRight className="w-3 h-3" />
                +2.4% vs Last Cycle
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutFeature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group">
      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-primary/50 transition-colors duration-500">
        <div className="text-gray-400 group-hover:text-brand-primary transition-colors duration-500">
          {icon}
        </div>
      </div>
      <h4 className="text-white text-lg font-bold mb-3">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}
