import React, { useState } from 'react';
import { 
  MapPin, 
  Train, 
  Utensils, 
  Camera, 
  Lightbulb, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Calendar, 
  Star, 
  ArrowRight, 
  Filter,
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { ITINERARY_DAYS } from '../data/itineraryData';
import { STATIONS } from '../data/stationsData';
import { ItineraryDay, TabType } from '../types';

interface ItineraryViewProps {
  completedDays: number[];
  toggleDayCompleted: (day: number) => void;
  onAskAIForDay: (day: ItineraryDay) => void;
}

export const ItineraryView: React.FC<ItineraryViewProps> = ({
  completedDays,
  toggleDayCompleted,
  onAskAIForDay
}) => {
  const [selectedStation, setSelectedStation] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  // Filter days based on selected station and search
  const filteredDays = ITINERARY_DAYS.filter((day) => {
    const matchesStation = selectedStation === 'all' || day.stationId === selectedStation;
    const matchesSearch = 
      searchQuery === '' ||
      day.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      day.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      day.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase())) ||
      day.stationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      day.foodRecommendation.dishGerman.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStation && matchesSearch;
  });

  return (
    <div className="space-y-4 max-w-full">
      {/* Route Journey Visual Map / Mobile Overview Header */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 shadow-xl space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-amber-500/10 text-amber-300 rounded-full text-[11px] font-semibold border border-amber-500/20">
            <Train className="w-3 h-3" />
            <span>100% Hochgeschwindigkeitszüge</span>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            ~280 € Zug-Budget
          </span>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            Goldene Route (24 Tage Masterplan)
          </h2>
          <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
            Optimal getaktet: 7 Metropolen & Naturwunder, nahtlos per Bullet-Train verbunden.
          </p>
        </div>

        {/* Station Timeline Breadcrumb Pipeline (Horizontal Swipe on Mobile) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none snap-x">
          {STATIONS.map((station) => {
            const isSelected = selectedStation === station.id;
            return (
              <button
                key={station.id}
                onClick={() => setSelectedStation(station.id)}
                className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex-shrink-0 w-28 snap-start ${
                  isSelected
                    ? 'bg-slate-800 border-red-500 shadow-md ring-1 ring-red-500'
                    : 'bg-slate-950/70 border-slate-800/80 active:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    {station.daysRange}
                  </span>
                  <span className="text-[11px] font-semibold text-red-400">{station.chinese}</span>
                </div>
                <p className="text-xs font-bold text-white mt-0.5 truncate">
                  {station.name.split(' (')[0]}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-2">
        {/* Station Filter Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedStation('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              selectedStation === 'all'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            Alle ({ITINERARY_DAYS.length})
          </button>
          {STATIONS.map((st) => (
            <button
              key={st.id}
              onClick={() => setSelectedStation(st.id)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedStation === st.id
                  ? 'bg-slate-800 text-white border border-red-500'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800'
              }`}
            >
              {st.name.split(' (')[0]} ({st.dayCount}T)
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Suchen (z.B. Mauer, Hotpot, Panda, Westsee)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs px-1"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Day by Day Cards List */}
      <div className="space-y-6">
        {filteredDays.map((day) => {
          const isCompleted = completedDays.includes(day.day);
          const isExpanded = expandedDay === day.day;

          return (
            <div
              key={day.day}
              id={`day-${day.day}`}
              className={`bg-slate-900 rounded-2xl border transition-all duration-200 overflow-hidden shadow-lg ${
                isCompleted
                  ? 'border-emerald-500/40 bg-slate-900/80'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Card Header */}
              <div className="p-5 sm:p-6 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80">
                <div className="flex items-start space-x-4">
                  {/* Day Badge */}
                  <div className="flex-shrink-0 text-center">
                    <div
                      className={`w-13 h-13 rounded-2xl flex flex-col items-center justify-center font-bold border ${
                        isCompleted
                          ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-400'
                          : 'bg-slate-800 border-slate-700 text-white'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-semibold text-slate-400 leading-tight">Tag</span>
                      <span className="text-xl leading-none">{day.day}</span>
                    </div>
                  </div>

                  {/* Title & Station */}
                  <div>
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                        {day.stationName} • {day.stationChinese}
                      </span>
                      {day.logistics && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center gap-1">
                          <Train className="w-3 h-3" /> Reisetag ({day.logistics.duration})
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                      {day.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {day.subtitle}
                    </p>
                  </div>
                </div>

                {/* Actions: Mark Done & Ask AI */}
                <div className="flex items-center space-x-2 self-end sm:self-center">
                  <button
                    onClick={() => onAskAIForDay(day)}
                    className="p-2 rounded-xl bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border border-purple-500/30 text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer"
                    title="Diesen Tag mit AI Concierge verfeinern"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span className="hidden md:inline">AI Tipps</span>
                  </button>

                  <button
                    onClick={() => toggleDayCompleted(day.day)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer border ${
                      isCompleted
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Erledigt</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-4 h-4 text-slate-400" />
                        <span>Als erledigt markieren</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-6">
                {/* 3-Step Daily Flow: Morning, Afternoon, Evening */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Morning */}
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="flex items-center space-x-2 text-amber-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Vormittag</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {day.morning}
                    </p>
                  </div>

                  {/* Afternoon */}
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="flex items-center space-x-2 text-blue-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Nachmittag</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {day.afternoon}
                    </p>
                  </div>

                  {/* Evening */}
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="flex items-center space-x-2 text-indigo-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Abend</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {day.evening}
                    </p>
                  </div>
                </div>

                {/* Highlights Badges */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Tages-Highlights:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {day.highlights.map((highlight, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/80"
                      >
                        ✓ {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Train Logistics info box if travelling */}
                {day.logistics && (
                  <div className="bg-gradient-to-r from-blue-950/50 to-slate-950 p-4 rounded-xl border border-blue-500/30 space-y-2">
                    <div className="flex items-center space-x-2 text-blue-400">
                      <Train className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Zuglogistik: {day.logistics.trainInfo}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-xs">
                      <div>
                        <span className="text-slate-400 block">Abfahrt:</span>
                        <span className="font-bold text-white">{day.logistics.departureStation || 'Hauptbahnhof'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Ankunft:</span>
                        <span className="font-bold text-white">{day.logistics.arrivalStation || 'Zielbahnhof'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Fahrtzeit & Tempo:</span>
                        <span className="font-bold text-emerald-400">{day.logistics.duration} ({day.logistics.speed || '350 km/h'})</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Buchung:</span>
                        <span className="font-bold text-amber-300">14 Tage vorher auf Trip.com</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Culinary Specialty / Food Card */}
                <div className="bg-slate-950/90 p-4 rounded-xl border border-amber-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-amber-400">
                      <Utensils className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Kulinarisches Must-Try des Tages:
                      </span>
                    </div>
                    <div className="flex items-baseline space-x-2 flex-wrap">
                      <span className="text-sm font-bold text-white">
                        {day.foodRecommendation.dishGerman}
                      </span>
                      <span className="text-xs font-semibold text-amber-300">
                        {day.foodRecommendation.dishChinese}
                      </span>
                      <span className="text-xs text-slate-400 italic">
                        ({day.foodRecommendation.dishPinyin})
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {day.foodRecommendation.description}
                    </p>
                  </div>
                </div>

                {/* Pro-Tip & Photo Spot Footer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-slate-800/80 text-xs">
                  <div className="flex items-start space-x-2 text-slate-300">
                    <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-300">Pro-Tipp: </span>
                      <span>{day.proTip}</span>
                    </div>
                  </div>

                  {day.photoSpot && (
                    <div className="flex items-start space-x-2 text-slate-300">
                      <Camera className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-sky-300">Bester Fotospot: </span>
                        <span>{day.photoSpot}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
