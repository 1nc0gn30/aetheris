import React, { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function CustomerView() {
  const [message, setMessage] = useState("Hello! I'm your design assistant.");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const messages = [
      "Adjusting the theme palette now!!",
      "Optimizing layout for mobile devices...",
      "Refining the typography scale...",
      "Generating new brand assets...",
      "Syncing design tokens with the dev team!"
    ];

    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setMessage(messages[Math.floor(Math.random() * messages.length)]);
        setIsTyping(false);
      }, 1200);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full bg-gradient-to-b from-brand-secondary/10 to-bg-dark flex flex-col items-center justify-center p-12 relative overflow-hidden">
      {/* Immersive Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
        
        {/* Neural Stream Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: -100, y: Math.random() * 1000, opacity: 0 }}
              animate={{ 
                x: 2000, 
                opacity: [0, 0.3, 0],
                y: (Math.random() * 1000) + (Math.random() * 200 - 100)
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity, 
                delay: Math.random() * 5,
                ease: "linear"
              }}
              className="absolute w-20 h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"
            />
          ))}
        </div>
      </div>

      {/* Robot SVG - More Detailed */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 1, 0, -1, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="w-56 h-56 mb-12 relative"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_40px_rgba(0,242,255,0.2)]">
          {/* Antenna */}
          <motion.circle 
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            cx="100" cy="15" r="5" fill="#00f2ff" 
          />
          <line x1="100" y1="15" x2="100" y2="35" stroke="#00f2ff" strokeWidth="3" />
          
          {/* Head */}
          <rect x="45" y="35" width="110" height="90" rx="24" fill="#0d0d0f" stroke="#00f2ff" strokeWidth="3" />
          
          {/* Face Screen */}
          <rect x="55" y="45" width="90" height="70" rx="16" fill="#15151a" />
          
          {/* Eyes */}
          <motion.g animate={{ scaleY: [1, 0.1, 1] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}>
            <circle cx="80" cy="75" r="7" fill="#00f2ff" className="neon-glow-primary" />
            <circle cx="120" cy="75" r="7" fill="#00f2ff" className="neon-glow-primary" />
          </motion.g>
          
          {/* Mouth/Data Line */}
          <motion.path 
            animate={{ d: [
              "M 80 95 Q 100 95 120 95",
              "M 80 95 Q 100 105 120 95",
              "M 80 95 Q 100 95 120 95"
            ]}}
            transition={{ duration: 3, repeat: Infinity }}
            d="M 80 95 Q 100 95 120 95" 
            fill="none" 
            stroke="#00f2ff" 
            strokeWidth="2" 
            strokeLinecap="round" 
            opacity="0.6"
          />

          {/* Body */}
          <rect x="65" y="125" width="70" height="45" rx="12" fill="#0d0d0f" stroke="#00f2ff" strokeWidth="2" />
          
          {/* Core Heart */}
          <motion.circle 
            animate={{ r: [3, 5, 3], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            cx="100" cy="147" r="4" fill="#ff007a" 
          />
        </svg>
      </motion.div>

      {/* Speech Bubble - Refined */}
      <div className="relative max-w-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={message}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white text-bg-dark px-8 py-4 rounded-[1.5rem] font-bold text-center shadow-2xl relative"
          >
            {isTyping ? (
              <div className="flex gap-1.5 justify-center py-1.5">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity }} className="w-2 h-2 bg-bg-dark/20 rounded-full" />
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-bg-dark/20 rounded-full" />
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-bg-dark/20 rounded-full" />
              </div>
            ) : (
              <span className="text-lg">{message}</span>
            )}
            {/* Bubble Tail */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-16 flex gap-6">
        <StatusBadge label="Design-01" color="brand-primary" />
        <StatusBadge label="Neural_Link: Active" color="green-500" />
      </div>
    </div>
  );
}

function StatusBadge({ label, color }: { label: string; color: string }) {
  return (
    <div className={cn(
      "px-5 py-1.5 rounded-full bg-white/[0.03] border text-[9px] font-bold uppercase tracking-[0.2em]",
      `border-${color}/20 text-${color}`
    )}>
      {label}
    </div>
  );
}

import { cn } from '../lib/utils';
