import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

export default function OrchestratorView() {
  const [logs, setLogs] = useState<string[]>([
    '>> [SYSTEM] INITIALIZING_AETHERIS_ORCHESTRATOR_V4.2',
    '>> [AUTH] HANDSHAKE_SUCCESSFUL_AGENT_842',
    '>> [NETWORK] ESTABLISHED_SECURE_TUNNEL_757TECH.PRO',
    '>> [READY] LISTENING_FOR_NEURAL_STREAMS...'
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const commands = [
      'aetheris deploy --agent design-01 --region us-east',
      'aetheris status --check-neural-health',
      'aetheris optimize --target theme-config --mode aggressive',
      'aetheris scale --instances 12 --load-balance',
      'aetheris logs --tail --filter agent-01'
    ];

    const interval = setInterval(() => {
      const randomCmd = commands[Math.floor(Math.random() * commands.length)];
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
      
      setLogs(prev => [
        ...prev, 
        `\nroot@aetheris:~$ ${randomCmd}`,
        `[${timestamp}] EXECUTING: ${randomCmd.split(' ')[1].toUpperCase()}...`,
        `[${timestamp}] SUCCESS: OPERATION_COMPLETED_IN_${Math.floor(Math.random() * 200 + 50)}MS`
      ].slice(-25));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="h-full bg-[#050505] font-mono text-[12px] p-8 flex flex-col">
      <div className="flex-grow overflow-auto terminal-scroll mb-8" ref={scrollRef}>
        {logs.map((log, i) => (
          <div key={i} className={cn(
            "mb-1",
            log.startsWith('\nroot@') ? 'text-brand-primary' : 
            log.includes('SUCCESS') ? 'text-green-500/70' : 'text-gray-500'
          )}>
            {log}
          </div>
        ))}
        <div className="flex items-center gap-2 text-white">
          <span className="text-brand-primary">root@aetheris:~$</span>
          <span className="w-2 h-4 bg-brand-primary animate-pulse" />
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 border-t border-white/5 pt-6">
        <StatBox label="CPU_CORE" value="14.2%" trend="up" />
        <StatBox label="NEURAL_MEM" value="4.8GB" trend="stable" />
        <StatBox label="ACTIVE_AGENTS" value="24" color="text-brand-primary" />
        <StatBox label="NETWORK_LATENCY" value="8ms" color="text-brand-accent" />
      </div>
    </div>
  );
}

function StatBox({ label, value, color = "text-white", trend }: { label: string; value: string; color?: string; trend?: 'up' | 'down' | 'stable' }) {
  return (
    <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="text-[8px] text-gray-600 uppercase tracking-widest font-bold mb-2">{label}</div>
      <div className="flex items-end justify-between">
        <div className={`text-lg font-display font-bold ${color}`}>{value}</div>
        {trend && (
          <div className={cn(
            "text-[8px] font-bold",
            trend === 'up' ? 'text-red-500' : trend === 'down' ? 'text-green-500' : 'text-gray-600'
          )}>
            {trend === 'up' ? '▲' : trend === 'down' ? '▼' : '●'}
          </div>
        )}
      </div>
    </div>
  );
}
