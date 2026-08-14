import React from 'react';
import { MapPin, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  completedDaysCount: number;
  totalDays: number;
}

export const Header: React.FC<HeaderProps> = ({
  completedDaysCount,
  totalDays
}) => {
  const progressPercent = Math.round((completedDaysCount / totalDays) * 100);

  return (
    <header className="bg-slate-950/90 border-b border-slate-800/80 sticky top-0 z-40 backdrop-blur-xl pt-safe">
      <div className="max-w-md sm:max-w-lg mx-auto px-4 py-3">
        {/* Top Mobile Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center shadow-md shadow-red-600/30 text-white font-bold text-sm flex-shrink-0">
              中
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h1 className="text-base font-bold text-white tracking-tight">
                  China 24T Masterplan
                </h1>
                <span className="px-1.5 py-0.2 text-[10px] font-semibold bg-red-500/20 text-red-300 border border-red-500/30 rounded-md">
                  2026
                </span>
              </div>
              <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>3 Reisende • Kein Schweinefleisch</span>
              </p>
            </div>
          </div>

          {/* Quick Progress Badge */}
          <div className="flex items-center space-x-2 bg-slate-900 px-2.5 py-1.5 rounded-xl border border-slate-800 text-right">
            <div className="text-right">
              <div className="flex items-center justify-end space-x-1 text-[11px] font-bold text-amber-400">
                <CheckCircle2 className="w-3 h-3 text-amber-400" />
                <span>{completedDaysCount}/{totalDays} Tage</span>
              </div>
              <div className="w-16 bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
                <div
                  className="bg-gradient-to-r from-red-500 to-amber-400 h-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Route Ticker Pill */}
        <div className="mt-2.5 flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px] text-slate-400">
          <span className="font-semibold text-slate-300 flex items-center gap-1 flex-shrink-0">
            <MapPin className="w-3 h-3 text-red-400" />
            Route:
          </span>
          <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 flex-shrink-0">Shanghai</span>
          <span className="text-slate-600">→</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 flex-shrink-0">Peking</span>
          <span className="text-slate-600">→</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 flex-shrink-0">Xi'an</span>
          <span className="text-slate-600">→</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 flex-shrink-0">Chengdu</span>
          <span className="text-slate-600">→</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 flex-shrink-0">Yangshuo</span>
          <span className="text-slate-600">→</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 flex-shrink-0">Hangzhou/Suzhou</span>
        </div>
      </div>
    </header>
  );
};

