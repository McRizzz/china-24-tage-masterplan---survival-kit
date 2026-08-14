import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Train, 
  CreditCard, 
  Wifi, 
  MapPin, 
  CalendarCheck, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle,
  Smartphone,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink
} from 'lucide-react';
import { SURVIVAL_GUIDES, SurvivalSection } from '../data/survivalData';

export const SurvivalKitView: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>('visa');
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('china_survival_prep');
    return saved ? JSON.parse(saved) : {};
  });

  // Ticket Date Calculator State
  const [tripStartDate, setTripStartDate] = useState<string>('');
  const [beijingDate, setBeijingDate] = useState<string>('');

  const toggleCheckItem = (id: string) => {
    const updated = { ...completedItems, [id]: !completedItems[id] };
    setCompletedItems(updated);
    localStorage.setItem('china_survival_prep', JSON.stringify(updated));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Train': return <Train className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      case 'Wifi': return <Wifi className="w-5 h-5" />;
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Smartphone className="w-5 h-5" />;
    }
  };

  // Calculate 14-day and 7-day deadlines if dates selected
  const calculateDeadlines = () => {
    if (!beijingDate) return null;
    const target = new Date(beijingDate);
    if (isNaN(target.getTime())) return null;

    const sevenDaysBefore = new Date(target);
    sevenDaysBefore.setDate(target.getDate() - 7);

    const fourteenDaysBefore = new Date(target);
    fourteenDaysBefore.setDate(target.getDate() - 14);

    return {
      sevenDays: sevenDaysBefore.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric' }),
      fourteenDays: fourteenDaysBefore.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric' })
    };
  };

  const deadlines = calculateDeadlines();

  return (
    <div className="space-y-4 max-w-full">
      {/* Hero / Warning Banner */}
      <div className="bg-gradient-to-r from-red-950/80 via-slate-900 to-amber-950/60 p-4 rounded-2xl border border-red-500/30 shadow-xl relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-red-500/20 text-red-300 rounded-full text-[11px] font-semibold border border-red-500/30">
            <Sparkles className="w-3 h-3" />
            <span>Digital Survival Kit</span>
          </div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            Stressfrei in China ankommen & bewegen
          </h2>
          <p className="text-slate-300 text-xs leading-relaxed">
            Fast kein Bargeld, keine Plastikkarten, blockierte westliche Apps (Google/WhatsApp). Mit diesen 7 Setups läuft alles reibungslos.
          </p>
        </div>
      </div>

      {/* Quick Summary Grid 2x2 */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-1.5 text-emerald-400 mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">Visum</span>
          </div>
          <p className="text-white font-bold text-xs">30 Tage Frei</p>
          <p className="text-[10px] text-slate-400 mt-0.5">Kein Vorabantrag für dt. Pässe</p>
        </div>

        <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-1.5 text-amber-400 mb-1">
            <CreditCard className="w-4 h-4" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">Zahlung</span>
          </div>
          <p className="text-white font-bold text-xs">100% Alipay</p>
          <p className="text-[10px] text-slate-400 mt-0.5">EU-Kreditkarte via QR-Code</p>
        </div>

        <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-1.5 text-blue-400 mb-1">
            <Train className="w-4 h-4" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">High-Speed Zug</span>
          </div>
          <p className="text-white font-bold text-xs">Pass = Ticket</p>
          <p className="text-[10px] text-slate-400 mt-0.5">Trip.com 14 Tage vorab</p>
        </div>

        <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-1.5 text-purple-400 mb-1">
            <Wifi className="w-4 h-4" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">Internet</span>
          </div>
          <p className="text-white font-bold text-xs">Reise-eSIM</p>
          <p className="text-[10px] text-slate-400 mt-0.5">Roaming ohne Firewall</p>
        </div>
      </div>

      {/* Ticket & Zug Buchungs-Fristen Rechner Widget */}
      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 bg-red-500/20 text-red-400 rounded-xl border border-red-500/30">
            <CalendarCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-xs">
              Buchungsfristen-Rechner (Züge & Verbotene Stadt)
            </h3>
            <p className="text-[11px] text-slate-400">
              Datum wählen für genaue Freischalt-Termine
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <input
            type="date"
            value={beijingDate}
            onChange={(e) => setBeijingDate(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500 transition"
          />

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-950/90 p-2.5 rounded-xl border border-red-500/20">
              <span className="text-[10px] text-red-400 font-semibold block">
                7 Tage vorher (Museen):
              </span>
              <p className="text-xs font-bold text-white mt-0.5">
                {deadlines ? deadlines.sevenDays : 'Datum oben wählen'}
              </p>
              <span className="text-[9px] text-slate-400">14:00 Uhr dt. Zeit (20:00 CN)</span>
            </div>

            <div className="bg-slate-950/90 p-2.5 rounded-xl border border-blue-500/20">
              <span className="text-[10px] text-blue-400 font-semibold block">
                14 Tage vorher (Züge):
              </span>
              <p className="text-xs font-bold text-white mt-0.5">
                {deadlines ? deadlines.fourteenDays : 'Datum oben wählen'}
              </p>
              <span className="text-[9px] text-slate-400">Auf Trip.com mit Pass</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Survival Topics - Horizontal Swipeable Navigation */}
      <div className="space-y-3">
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none snap-x">
          {SURVIVAL_GUIDES.map((section) => {
            const isSelected = activeSectionId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSectionId(section.id)}
                className={`p-2 rounded-xl text-left border transition-all cursor-pointer flex-shrink-0 flex items-center space-x-2 snap-start ${
                  isSelected
                    ? 'bg-slate-800 border-red-500/60 text-white shadow-md'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className={`p-1 rounded-md ${isSelected ? 'text-red-400' : 'text-slate-500'}`}>
                  {getIcon(section.iconName)}
                </div>
                <span className="text-xs font-semibold whitespace-nowrap">{section.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Guide View */}
        <div>
          {(() => {
            const section = SURVIVAL_GUIDES.find((s) => s.id === activeSectionId) || SURVIVAL_GUIDES[0];
            return (
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 space-y-4 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 bg-red-500/10 text-red-400 rounded-xl border border-red-500/30">
                      {getIcon(section.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold px-2 py-0.2 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {section.badge}
                      </span>
                      <h4 className="text-base font-bold text-white mt-0.5">{section.title}</h4>
                    </div>
                  </div>
                </div>

                {/* Summary Box */}
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                  {section.summary}
                </p>

                {/* Key Facts Pills */}
                <div className="grid grid-cols-2 gap-2">
                  {section.keyFacts.map((fact, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border ${
                        fact.isHighlight
                          ? 'bg-red-500/10 border-red-500/30 text-white'
                          : 'bg-slate-950/80 border-slate-800/80 text-slate-300'
                      }`}
                    >
                      <span className="text-[10px] font-medium text-slate-400 block">{fact.label}</span>
                      <span className="text-xs font-bold mt-0.5 block">{fact.value}</span>
                    </div>
                  ))}
                </div>

                {/* Warning Notice if applicable */}
                {section.warningNotice && (
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start space-x-2 text-amber-200 text-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{section.warningNotice}</p>
                  </div>
                )}

                {/* Action Checklist for this category */}
                <div className="space-y-2">
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    To-Do Checkliste:
                  </h5>
                  <div className="space-y-1.5">
                    {section.actionItems.map((item, idx) => {
                      const checkKey = `${section.id}_${idx}`;
                      const isDone = !!completedItems[checkKey];
                      return (
                        <div
                          key={idx}
                          onClick={() => toggleCheckItem(checkKey)}
                          className={`flex items-start space-x-2.5 p-2.5 rounded-xl border transition cursor-pointer ${
                            isDone
                              ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-300'
                              : 'bg-slate-950/50 border-slate-800/80 text-slate-200'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isDone}
                            onChange={() => {}}
                            className="mt-0.5 h-4 w-4 rounded border-slate-700 text-emerald-600 focus:ring-emerald-500 bg-slate-900 cursor-pointer flex-shrink-0"
                          />
                          <span className={`text-xs leading-relaxed ${isDone ? 'line-through text-slate-400' : ''}`}>
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step-by-Step Detailed Guide */}
                <div className="space-y-2 pt-1">
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    Schritt-für-Schritt Anleitung:
                  </h5>
                  <div className="space-y-2">
                    {section.detailedGuide.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                        <span className="w-4 h-4 rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-700">
                          {idx + 1}
                        </span>
                        <p className="leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ if available */}
                {section.faq && (
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
                      Häufige Fragen & Antworten
                    </h5>
                    <div className="space-y-1.5">
                      {section.faq.map((faqItem, idx) => (
                        <div key={idx} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 space-y-0.5">
                          <p className="text-xs font-bold text-slate-200">{faqItem.q}</p>
                          <p className="text-[11px] text-slate-400 leading-relaxed">{faqItem.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};
