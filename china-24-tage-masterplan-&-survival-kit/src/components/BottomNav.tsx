import React from 'react';
import { Compass, Shield, Building, MessageSquare, CheckSquare, Sparkles } from 'lucide-react';
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-t border-slate-850 shadow-2xl pb-safe">
      <div className="max-w-md sm:max-w-lg mx-auto px-2 py-1.5 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                // Trigger light haptic if supported
                if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
                  try {
                    navigator.vibrate(10);
                  } catch {
                    // ignore
                  }
                }
              }}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all relative flex-1 min-w-0 ${
                isActive
                  ? 'text-red-400 font-semibold scale-105'
                  : 'text-slate-400 hover:text-slate-200 active:scale-95'
              }`}
            >
              <div className="relative">
                <div
                  className={`w-10 h-7 flex items-center justify-center rounded-full transition-all ${
                    isActive ? 'bg-red-500/20 text-red-400 ring-1 ring-red-500/40' : ''
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                </div>
                {tab.badge && !isActive && (
                  <span className="absolute -top-1 -right-1 flex h-3.5 min-w-[14px] px-1 items-center justify-center rounded-full bg-red-600 text-[9px] font-bold text-white shadow-sm">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] tracking-tight truncate mt-0.5 max-w-full">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
