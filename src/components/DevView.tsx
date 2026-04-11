import React from 'react';
import { motion } from 'motion/react';

export default function DevView() {
  return (
    <div className="h-full bg-[#0d0d0f] font-mono text-[13px] p-8 overflow-hidden flex flex-col">
      <div className="flex items-center gap-6 mb-6 border-b border-white/5 pb-4">
        <div className="text-brand-primary flex items-center gap-2 relative">
          <motion.span 
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-brand-primary neon-glow-primary" 
          />
          AgentCore.ts
          <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-brand-primary" />
        </div>
        <div className="text-gray-600 hover:text-gray-400 transition-colors cursor-pointer">NeuralNet.ts</div>
        <div className="text-gray-600 hover:text-gray-400 transition-colors cursor-pointer">config.json</div>
        <div className="flex-grow" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[8px] text-green-500/70 uppercase tracking-widest">Logic Stream: Active</span>
          </div>
          <div className="text-[10px] text-gray-700 uppercase tracking-widest">Read Only</div>
        </div>
      </div>
      
      <div className="flex-grow overflow-auto terminal-scroll leading-relaxed">
        <pre className="text-gray-400">
          <CodeLine num={1}><span className="text-brand-secondary">import</span> {'{'} <span className="text-brand-primary">AgentCore</span>, <span className="text-brand-primary">NeuralNet</span> {'}'} <span className="text-brand-secondary">from</span> <span className="text-green-500/80">'@aetheris/core'</span>;</CodeLine>
          <CodeLine num={2} />
          <CodeLine num={3}><span className="text-brand-secondary">export class</span> <span className="text-brand-primary">DesignAgent</span> <span className="text-brand-secondary">extends</span> <span className="text-brand-primary">AgentCore</span> {'{'}</CodeLine>
          <CodeLine num={4}>  <span className="text-brand-secondary">async</span> <span className="text-yellow-500/80">onTaskReceived</span>(task: <span className="text-brand-primary">Task</span>) {'{'}</CodeLine>
          <CodeLine num={5}>    <span className="text-brand-secondary">if</span> (task.type === <span className="text-green-500/80">'THEME_OPTIMIZATION'</span>) {'{'}</CodeLine>
          <CodeLine num={6}>      <span className="text-brand-secondary">await this</span>.<span className="text-yellow-500/80">analyzePalette</span>(task.context);</CodeLine>
          <CodeLine num={7}>      <span className="text-brand-secondary">await this</span>.<span className="text-yellow-500/80">updateConfig</span>({'{'}</CodeLine>
          <CodeLine num={8}>        primary: <span className="text-green-500/80">'#00f2ff'</span>,</CodeLine>
          <CodeLine num={9}>        secondary: <span className="text-green-500/80">'#7000ff'</span>,</CodeLine>
          <CodeLine num={10}>        mode: <span className="text-green-500/80">'dark'</span></CodeLine>
          <CodeLine num={11}>      {'}'});</CodeLine>
          <CodeLine num={12}>      <span className="text-brand-secondary">this</span>.<span className="text-yellow-500/80">emit</span>(<span className="text-green-500/80">'status'</span>, <span className="text-green-500/80">'adjusting the theme palette now!!'</span>);</CodeLine>
          <CodeLine num={13}>    {'}'}</CodeLine>
          <CodeLine num={14}>  {'}'}</CodeLine>
          <CodeLine num={15} />
          <CodeLine num={16}>  <span className="text-brand-secondary">private async</span> <span className="text-yellow-500/80">analyzePalette</span>(ctx: <span className="text-brand-primary">Context</span>) {'{'}</CodeLine>
          <CodeLine num={17}>    <span className="text-gray-600">// Neural optimization logic...</span></CodeLine>
          <CodeLine num={18}>    <span className="text-brand-secondary">return</span> <span className="text-brand-primary">NeuralNet</span>.<span className="text-yellow-500/80">process</span>(ctx);</CodeLine>
          <CodeLine num={19}>  {'}'}</CodeLine>
          <CodeLine num={20}>{'}'}</CodeLine>
        </pre>
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between text-[9px] text-gray-600 uppercase tracking-[0.2em] font-bold">
        <div className="flex gap-6">
          <span>UTF-8</span>
          <span>TypeScript</span>
        </div>
        <div className="flex gap-6">
          <span>Ln 12, Col 42</span>
          <span className="text-brand-primary">Master</span>
        </div>
      </div>
    </div>
  );
}

function CodeLine({ num, children }: { num: number; children?: React.ReactNode }) {
  return (
    <div className="flex gap-6 group hover:bg-white/[0.02] transition-colors">
      <span className="text-gray-800 w-8 text-right select-none group-hover:text-gray-600 transition-colors">{num}</span>
      <span className="flex-grow">{children}</span>
    </div>
  );
}
