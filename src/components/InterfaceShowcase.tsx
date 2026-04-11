import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Terminal, Users, Monitor, ChevronRight, Sparkles, Activity, Shield } from 'lucide-react';
import DevView from './DevView';
import OrchestratorView from './OrchestratorView';
import CustomerView from './CustomerView';
import NeuralPipeline from './NeuralPipeline';
import { cn } from '../lib/utils';

type ViewType = 'dev' | 'orchestrator' | 'customer';

export default function InterfaceShowcase() {
  const [activeView, setActiveView] = useState<ViewType>('customer');

  const getPipelineStage = (view: ViewType) => {
    if (view === 'dev') return 'dev';
    if (view === 'orchestrator') return 'ops';
    return 'user';
  };

  return (
    <section id="interface" className="py-48 bg-bg-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-secondary/20 flex items-center justify-center border border-brand-secondary/30">
                <Sparkles className="w-4 h-4 text-brand-secondary" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-secondary">Stakeholder Ecosystem</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-[0.85] text-balance">
              One Agent. <br />
              <span className="gradient-text-primary italic-serif">Infinite Perspectives.</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium">
              Our interface engine dynamically generates specialized views for every stakeholder, ensuring the right information reaches the right eyes at the right time.
            </p>
          </div>
          <div className="flex gap-4 p-1.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl">
            <ViewTab active={activeView === 'dev'} onClick={() => setActiveView('dev')} label="Dev" />
            <ViewTab active={activeView === 'orchestrator'} onClick={() => setActiveView('orchestrator')} label="Ops" />
            <ViewTab active={activeView === 'customer'} onClick={() => setActiveView('customer')} label="End-User" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Sidebar Controls */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <ViewCard 
              active={activeView === 'dev'} 
              onClick={() => setActiveView('dev')}
              icon={<Code2 className="w-7 h-7" />}
              title="Developer IDE"
              description="Direct access to neural weights, logic branches, and core agent architecture. Built for deep technical oversight."
              tag="Technical"
            />
            <ViewCard 
              active={activeView === 'orchestrator'} 
              onClick={() => setActiveView('orchestrator')}
              icon={<Terminal className="w-7 h-7" />}
              title="Orchestrator Ops"
              description="Command-line control for scaling, monitoring, and real-time agent deployment across global clusters."
              tag="Operational"
            />
            <ViewCard 
              active={activeView === 'customer'} 
              onClick={() => setActiveView('customer')}
              icon={<Users className="w-7 h-7" />}
              title="Customer Portal"
              description="Friendly, human-centric avatars designed for trust and seamless interaction. The face of your AI workforce."
              tag="Human-Centric"
            />
          </div>

          {/* Main Display Area */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Neural Pipeline Visualization */}
            <NeuralPipeline activeStage={getPipelineStage(activeView)} />

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-primary/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
              
              <div className="relative aspect-[16/10] glass rounded-[3rem] overflow-hidden border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] hardware-border">
                {/* Window Header */}
                <div className="h-14 bg-white/[0.03] border-b border-white/5 flex items-center px-8 justify-between backdrop-blur-2xl">
                  <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/40 border border-red-500/20" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/40 border border-yellow-500/20" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/40 border border-green-500/20" />
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-mono flex items-center gap-3">
                      <Monitor className="w-4 h-4" />
                      Aetheris_OS_v4.2.0.bin
                    </div>
                    <div className="h-4 w-px bg-white/10" />
                    <div className="flex items-center gap-2">
                      <Activity className="w-3 h-3 text-brand-primary animate-pulse" />
                      <span className="text-[10px] uppercase tracking-widest font-black text-brand-primary">Live</span>
                    </div>
                  </div>
                  <div className="w-20" />
                </div>

                {/* View Content */}
                <div className="h-[calc(100%-56px)] relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeView}
                      initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full"
                    >
                      {activeView === 'dev' && <DevView />}
                      {activeView === 'orchestrator' && <OrchestratorView />}
                      {activeView === 'customer' && <CustomerView />}
                    </motion.div>
                  </AnimatePresence>

                  {/* Subtle Scanline Effect */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] z-50 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ViewTab({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative overflow-hidden group",
        active ? "text-bg-dark" : "text-gray-500 hover:text-white"
      )}
    >
      {active && (
        <motion.div 
          layoutId="active-tab"
          className="absolute inset-0 bg-white shadow-xl shadow-white/20" 
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}

function ViewCard({ active, onClick, icon, title, description, tag }: { 
  active: boolean; 
  onClick: () => void; 
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left p-10 rounded-[2.5rem] border transition-all duration-700 group relative overflow-hidden",
        active 
          ? "bg-white/[0.04] border-white/20 shadow-2xl scale-[1.02]" 
          : "bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/10"
      )}
    >
      {active && (
        <motion.div 
          layoutId="active-bg"
          className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/5 -z-10" 
        />
      )}
      
      <div className="flex items-start justify-between mb-8">
        <div className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-700 relative",
          active ? "bg-brand-primary text-bg-dark neon-glow-primary rotate-3" : "bg-white/5 text-gray-500 group-hover:text-white group-hover:rotate-3"
        )}>
          {icon}
          {active && (
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-2 bg-brand-primary/20 blur-xl rounded-full -z-10"
            />
          )}
        </div>
        <div className={cn(
          "text-[10px] uppercase tracking-[0.3em] font-black px-4 py-1.5 rounded-full border transition-all duration-700",
          active ? "border-brand-primary/40 bg-brand-primary/10 text-brand-primary" : "border-white/5 text-gray-600 group-hover:border-white/20"
        )}>
          {tag}
        </div>
      </div>
      
      <h3 className={cn(
        "text-2xl font-display font-black mb-4 transition-all duration-700 flex items-center gap-3",
        active ? "text-white translate-x-2" : "text-gray-400 group-hover:text-white group-hover:translate-x-1"
      )}>
        {title}
        {active && <ChevronRight className="w-5 h-5 text-brand-primary" />}
      </h3>
      <p className={cn(
        "text-base leading-relaxed transition-all duration-700",
        active ? "text-gray-300" : "text-gray-500 group-hover:text-gray-400"
      )}>
        {description}
      </p>

      {/* Hover Line Accent */}
      <div className={cn(
        "absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-brand-primary transition-all duration-700",
        active ? "w-1/2 opacity-100" : "w-0 opacity-0 group-hover:w-1/4 group-hover:opacity-50"
      )} />
    </button>
  );
}
