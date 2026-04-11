import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Shield, Zap, Cpu, MousePointer2, Activity, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-primary/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-secondary/10 blur-[140px] rounded-full animate-pulse [animation-delay:2s]" />
        
        {/* Neural Loop Visualization */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-[800px] h-[800px] border border-white/5 rounded-full relative"
          >
            {[0, 90, 180, 270].map((deg) => (
              <motion.div 
                key={deg}
                style={{ rotate: deg, transformOrigin: 'center 400px' }}
                className="absolute top-0 left-1/2 -translate-x-1/2"
              >
                <div className="w-1 h-20 bg-gradient-to-b from-brand-primary to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 text-center lg:text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-brand-primary transition-colors">
                Pioneering Agentic GUIs
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[120px] font-display font-black tracking-tighter mb-10 leading-[0.85] text-balance"
            >
              The Visual <br />
              <span className="gradient-text-primary">
                Layer for AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl mx-auto lg:mx-0 text-xl md:text-2xl text-gray-400 mb-14 leading-relaxed font-medium"
            >
              Aetheris engineers high-fidelity interface ecosystems for the next generation of AI agents. <span className="italic-serif text-white">Crafted for precision, built for scale.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <Link to="/#contact" className="w-full sm:w-auto px-12 py-6 bg-brand-primary text-bg-dark font-black text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 neon-glow-primary group">
                Deploy Interface <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/#interface" className="w-full sm:w-auto px-12 py-6 glass text-white font-black text-lg rounded-2xl hover:bg-white/10 active:scale-95 transition-all border-white/20 text-center">
                Technical Specs
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-20 flex flex-wrap items-center justify-center lg:justify-start gap-x-12 gap-y-6"
            >
              <HeroStat icon={<Shield className="w-5 h-5" />} label="Secure" />
              <HeroStat icon={<Zap className="w-5 h-5" />} label="Real-time" />
              <HeroStat icon={<Cpu className="w-5 h-5" />} label="Neural" />
              <HeroStat icon={<Globe className="w-5 h-5" />} label="Global" />
            </motion.div>
          </div>

          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square lg:aspect-[4/3] perspective-1000"
            >
              {/* Main Interface Window */}
              <div className="absolute inset-0 glass rounded-[3rem] border-white/20 shadow-2xl overflow-hidden hardware-border group">
                <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark via-transparent to-brand-primary/10" />
                
                {/* Simulated UI Content */}
                <div className="p-12 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Aetheris OS v4.2
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-center items-center text-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-32 h-32 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center mb-8 relative"
                    >
                      <Cpu className="w-16 h-16 text-brand-primary" />
                      <div className="absolute -inset-4 border border-brand-primary/20 rounded-full animate-ping [animation-duration:3s]" />
                    </motion.div>
                    <div className="micro-label mb-2 text-brand-primary">Neural Core Active</div>
                    <h3 className="text-4xl font-display font-black text-white tracking-tighter">OPTIMIZING WORKFORCE</h3>
                    
                    <div className="mt-12 w-full max-w-xs bg-white/5 rounded-full h-1 overflow-hidden">
                      <motion.div 
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                      />
                    </div>
                  </div>
                </div>

                {/* Interactive Overlay Elements */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 right-1/4 flex items-center gap-2 px-3 py-1.5 bg-brand-primary text-bg-dark rounded-lg text-[10px] font-black shadow-xl">
                    <MousePointer2 className="w-3 h-3" />
                    INTERACTING
                  </div>
                </div>
              </div>

              {/* Floating Widgets */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 glass p-8 rounded-3xl border-brand-primary/30 shadow-2xl hidden md:block backdrop-blur-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <div className="micro-label">Latency</div>
                    <div className="text-2xl font-display font-black text-brand-primary">12ms</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-brand-primary" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-12 -left-12 glass p-8 rounded-3xl border-brand-secondary/30 shadow-2xl hidden md:block backdrop-blur-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-secondary/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <div className="micro-label">Neural Load</div>
                    <div className="text-2xl font-display font-black text-brand-secondary">42.8%</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-brand-secondary" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 group cursor-default">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-brand-primary group-hover:border-brand-primary/30 group-hover:bg-brand-primary/5 transition-all duration-300">
        {icon}
      </div>
      <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 group-hover:text-white transition-colors">{label}</span>
    </div>
  );
}
