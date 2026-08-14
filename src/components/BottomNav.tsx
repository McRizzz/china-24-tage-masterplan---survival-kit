import React from 'react';
import { Compass, Shield, Building, MessageSquare, CheckSquare, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: TabType; label: string; icon: React.FC<{ className?: string }>; badge?: string }[] = [
    { id: 'itinerary', label: 'Plan', icon: Compass },
    { id: 'survival', label: 'Survival', icon: Shield, badge: '!' },
    { id: 'hotels-budget', label: 'Budget', icon: Building },
    { id: 'flashcards', label: 'Karten', icon: MessageSquare },
    { id: 'checklist', label: 'Packen', icon: CheckSquare },
    { id: 'ai-assistant', label: 'AI Guide', icon: Sparkles, badge: 'AI' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-2xl border-t border-slate-800/80 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.6)] pb-safe">
      <div className="max-w-md sm:max-w-xl mx-auto px-2 py-2 flex items-center justify-between">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
                  try {
                    navigator.vibrate(8);
                  } catch {
                    // ignore
                  }
                }
              }}
              className={`relative flex flex-col items-center justify-center py-1 px-1.5 rounded-2xl transition-colors duration-200 flex-1 min-w-0 select-none group ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {/* Sliding Floating Red Glow Capsule */}
              {isActive && (
                <motion.div
                  layoutId="activeBottomTabPill"
                  className="absolute inset-0 bg-gradient-to-b from-red-600/30 via-red-600/20 to-red-900/30 rounded-2xl border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.35)]"
                  transition={{
                    type: 'spring',
                    stiffness: 420,
                    damping: 32,
                    mass: 0.8
                  }}
                />
              )}

              <div className="relative z-10">
                <motion.div
                  animate={{
                    scale: isActive ? 1.15 : 1,
                    y: isActive ? -2 : 0
                  }}
                  transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                  className={`w-9 h-7 flex items-center justify-center rounded-full transition-colors ${
                    isActive ? 'text-red-400 drop-shadow-[0_2px_8px_rgba(239,68,68,0.5)]' : ''
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                </motion.div>

                {tab.badge && !isActive && (
                  <span className="absolute -top-1 -right-1.5 flex h-3.5 min-w-[14px] px-1 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-rose-500 text-[8px] font-extrabold text-white shadow-md animate-pulse">
                    {tab.badge}
                  </span>
                )}
              </div>

              <motion.span
                animate={{
                  scale: isActive ? 1.05 : 0.95,
                  fontWeight: isActive ? 700 : 500
                }}
                className={`text-[10px] tracking-tight truncate mt-0.5 max-w-full z-10 transition-colors ${
                  isActive ? 'text-red-300 drop-shadow-sm' : 'text-slate-400'
                }`}
              >
                {tab.label}
              </motion.span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

