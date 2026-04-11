import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, RefreshCw, Sparkles, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

const FALLBACK_INSIGHTS = [
  'Agents operating at peak efficiency with synchronized routing.',
  'Cross-agent handoffs reduced latency across critical workflows.',
  'Neural orchestration stable with high-confidence task completion.',
  'Interface telemetry confirms consistent throughput and uptime.',
];

export default function AIInsights() {
  const [insight, setInsight] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);

  const fetchInsight = async () => {
    setLoading(true);
    const nextIndex = (index + 1) % FALLBACK_INSIGHTS.length;
    setIndex(nextIndex);
    setInsight(FALLBACK_INSIGHTS[nextIndex]);
    setLoading(false);
  };

  useEffect(() => {
    setInsight(FALLBACK_INSIGHTS[0]);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Neural Wave Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            animate={{ d: [
              'M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
              'M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,160C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
              'M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            ] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            fill="#00f2ff"
          />
        </svg>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 flex items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-3xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/30 neon-glow-primary">
                <Brain className="w-10 h-10 text-brand-primary" />
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-4 bg-brand-primary/10 blur-2xl rounded-full -z-10"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-3 h-3 text-brand-primary animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-primary">Neural Stream</span>
              </div>
              <h4 className="text-2xl font-display font-black text-white leading-none">Live Insights</h4>
              <p className="text-xs text-gray-500 mt-2 font-mono">Engine: Local Runtime</p>
            </div>
          </div>

          <div className="flex-grow relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-primary/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative glass p-8 rounded-3xl border-white/10 overflow-hidden min-h-[120px] flex items-center">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-primary to-brand-secondary" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={insight + loading}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  {loading ? (
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [4, 12, 4] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1 bg-brand-primary rounded-full"
                          />
                        ))}
                      </div>
                      <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Synchronizing Neural Pathways...</p>
                    </div>
                  ) : (
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                      <p className="text-xl text-gray-200 font-medium leading-relaxed tracking-tight italic-serif">
                        "{insight}"
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <button 
                onClick={fetchInsight}
                disabled={loading}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/5 text-gray-500 hover:text-brand-primary hover:bg-brand-primary/10 transition-all disabled:opacity-50 group/btn"
              >
                <RefreshCw className={cn('w-5 h-5 group-hover/btn:rotate-180 transition-transform duration-500', loading && 'animate-spin')} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
