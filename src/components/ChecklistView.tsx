import React, { useState, useEffect } from 'react';
import { 
  CheckSquare, 
  CheckCircle2, 
  Circle, 
  AlertTriangle, 
  Plus, 
  Trash2, 
  Sparkles,
  FileText,
  Smartphone,
  BatteryCharging,
  HeartPulse,
  RotateCcw
} from 'lucide-react';
import { CHECKLIST_ITEMS } from '../data/checklistData';
import { ChecklistItem } from '../types';

export const ChecklistView: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('china_travel_checklist');
    return saved ? JSON.parse(saved) : {};
  });

  const [customItems, setCustomItems] = useState<ChecklistItem[]>(() => {
    const saved = localStorage.getItem('china_custom_checklist');
    return saved ? JSON.parse(saved) : [];
  });

  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'documents' | 'apps' | 'tech' | 'hygiene'>('tech');

  const allItems = [...CHECKLIST_ITEMS, ...customItems];

  const toggleItem = (id: string) => {
    const updated = { ...checkedIds, [id]: !checkedIds[id] };
    setCheckedIds(updated);
    localStorage.setItem('china_travel_checklist', JSON.stringify(updated));
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem: ChecklistItem = {
      id: `custom-${Date.now()}`,
      category: newCategory,
      title: newTitle.trim(),
      detail: 'Persönlich hinzugefügter Gegenstand.',
      essential: false,
    };

    const updated = [...customItems, newItem];
    setCustomItems(updated);
    localStorage.setItem('china_custom_checklist', JSON.stringify(updated));
    setNewTitle('');
  };

  const handleDeleteCustom = (id: string) => {
    const updated = customItems.filter((i) => i.id !== id);
    setCustomItems(updated);
    localStorage.setItem('china_custom_checklist', JSON.stringify(updated));
  };

  const resetAll = () => {
    if (window.confirm('Möchtest du alle Häkchen auf der Packliste zurücksetzen?')) {
      setCheckedIds({});
      localStorage.removeItem('china_travel_checklist');
    }
  };

  const completedCount = allItems.filter((i) => checkedIds[i.id]).length;
  const progressPercent = allItems.length > 0 ? Math.round((completedCount / allItems.length) * 100) : 0;

  const categories = [
    { id: 'documents', label: '1. Dokumente & Einreise', icon: FileText },
    { id: 'apps', label: '2. Apps & Digitales Setup (Alipay / eSIM)', icon: Smartphone },
    { id: 'tech', label: '3. Technik, Powerbank & Stecker', icon: BatteryCharging },
    { id: 'hygiene', label: '4. Hygiene & Taschentücher (Wichtig!)', icon: HeartPulse },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header Banner & Progress */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/20 mb-2">
              <CheckSquare className="w-3.5 h-3.5" />
              <span>Vorbereitungs- & Kofferpackliste</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              China Vorbereitungs- & Packliste
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Hakt alle wesentlichen Dinge vor dem Abflug ab. Speichert euren Fortschritt automatisch auf diesem Gerät.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={resetAll}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer text-xs font-semibold flex items-center gap-1.5"
              title="Alle Markierungen zurücksetzen"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Zurücksetzen</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-300">Pack- & Vorbereitungsfortschritt:</span>
            <span className="font-bold text-emerald-400">{completedCount} von {allItems.length} erledigt ({progressPercent}%)</span>
          </div>
          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Add Custom Item Form */}
      <form onSubmit={handleAddCustom} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center gap-3">
        <div className="flex items-center space-x-2 text-slate-400 text-xs font-semibold flex-shrink-0">
          <Plus className="w-4 h-4 text-emerald-400" />
          <span>Eigenen Eintrag hinzufügen:</span>
        </div>
        <input
          type="text"
          placeholder="z. B. Bequeme Laufschuhe für die Mauer, Reiseadapter..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 w-full"
        />
        <select
          value={newCategory}
          onChange={(e: any) => setNewCategory(e.target.value)}
          className="bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
        >
          <option value="documents">Dokumente</option>
          <option value="apps">Apps & Digital</option>
          <option value="tech">Technik</option>
          <option value="hygiene">Hygiene & Gesundheit</option>
        </select>
        <button
          type="submit"
          disabled={!newTitle.trim()}
          className="w-full sm:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition cursor-pointer"
        >
          Hinzufügen
        </button>
      </form>

      {/* Categorized Checklist Sections */}
      <div className="space-y-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const itemsInCat = allItems.filter((i) => i.category === cat.id);
          if (itemsInCat.length === 0) return null;

          return (
            <div key={cat.id} className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-lg">
              <div className="flex items-center space-x-2 pb-2 border-b border-slate-800">
                <Icon className="w-5 h-5 text-red-400" />
                <h3 className="text-lg font-bold text-white">{cat.label}</h3>
              </div>

              <div className="space-y-3">
                {itemsInCat.map((item) => {
                  const isChecked = !!checkedIds[item.id];
                  const isCustom = item.id.startsWith('custom-');

                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-4 rounded-xl border transition flex items-start justify-between gap-3 cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-950/20 border-emerald-500/30'
                          : 'bg-slate-950/70 border-slate-800 hover:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex items-start space-x-3.5">
                        <div className="mt-0.5 flex-shrink-0">
                          {isChecked ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-500" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 flex-wrap">
                            <span className={`text-sm font-semibold text-white ${isChecked ? 'line-through text-slate-400' : ''}`}>
                              {item.title}
                            </span>
                            {item.essential && (
                              <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                                Unverzichtbar
                              </span>
                            )}
                          </div>
                          <p className={`text-xs text-slate-400 mt-1 leading-relaxed ${isChecked ? 'line-through text-slate-500' : ''}`}>
                            {item.detail}
                          </p>
                        </div>
                      </div>

                      {isCustom && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteCustom(item.id);
                          }}
                          className="text-slate-500 hover:text-red-400 p-1 transition cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
