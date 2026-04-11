import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Terminal, Users, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

type Stage = 'dev' | 'ops' | 'user';

export default function NeuralPipeline({ activeStage }: { activeStage: Stage }) {
  return (
    <div className="w-full py-12 px-8 glass rounded-[2rem] border-white/10 hardware-border relative overflow-hidden group">
      {/* Background Flow Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent blur-sm" />
      </div>

      <div className="flex items-center justify-between relative z-10">
        <PipelineNode 
          active={activeStage === 'dev'} 
          icon={<Code2 className="w-5 h-5" />} 
          label="Development" 
          status="Logic Synthesis"
        />
        
        <PipelineConnector active={activeStage === 'ops' || activeStage === 'user'} />
        
        <PipelineNode 
          active={activeStage === 'ops'} 
          icon={<Terminal className="w-5 h-5" />} 
          label="Orchestration" 
          status="Neural Scaling"
        />
        
        <PipelineConnector active={activeStage === 'user'} />
        
        <PipelineNode 
          active={activeStage === 'user'} 
          icon={<Users className="w-5 h-5" />} 
          label="Interaction" 
          status="Human Interface"
        />
      </div>

      {/* Flow Indicator */}
      <div className="mt-10 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500">
            Pipeline Status: <span className="text-brand-primary">Synchronized</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-brand-secondary" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-600">Throughput: 1.2 GB/s</span>
          </div>
          <div className="h-3 w-px bg-white/10" />
          <div className="text-[10px] uppercase tracking-widest font-bold text-gray-600">Latency: 8ms</div>
        </div>
      </div>
    </div>
  );
}

function PipelineNode({ active, icon, label, status }: { active: boolean; icon: React.ReactNode; label: string; status: string }) {
  return (
    <div className="flex flex-col items-center gap-4 relative group/node">
      <div className={cn(
        "w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-700 relative z-10",
        active 
          ? "bg-brand-primary text-bg-dark border-brand-primary neon-glow-primary scale-110 rotate-3" 
          : "bg-white/5 text-gray-500 border-white/10 group-hover/node:border-white/20 group-hover/node:text-white"
      )}>
        {icon}
        {active && (
          <motion.div 
            layoutId="node-glow"
            className="absolute -inset-4 bg-brand-primary/20 blur-2xl rounded-full -z-10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        )}
      </div>
      <div className="text-center">
        <div className={cn(
          "text-[10px] uppercase tracking-widest font-black transition-colors duration-500",
          active ? "text-white" : "text-gray-600 group-hover/node:text-gray-400"
        )}>
          {label}
        </div>
        <div className={cn(
          "text-[8px] uppercase tracking-[0.2em] font-bold mt-1 transition-colors duration-500",
          active ? "text-brand-primary" : "text-gray-800"
        )}>
          {status}
        </div>
      </div>
    </div>
  );
}

function PipelineConnector({ active }: { active: boolean }) {
  return (
    <div className="flex-grow mx-8 relative h-px bg-white/10">
      {active && (
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary h-px shadow-[0_0_10px_rgba(0,242,255,0.5)]"
        />
      )}
      
      {/* Moving Data Packet */}
      <motion.div 
        animate={{ 
          left: ['0%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear"
        }}
        className="absolute top-1/2 -translate-y-1/2 w-8 h-px bg-white z-20 shadow-[0_0_15px_white]"
      />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <ArrowRight className={cn(
          "w-4 h-4 transition-colors duration-500",
          active ? "text-brand-primary" : "text-gray-800"
        )} />
      </div>
    </div>
  );
}
