import React, { useState } from 'react';
import { 
  MessageSquare, 
  Volume2, 
  Maximize2, 
  Copy, 
  Check, 
  Sparkles, 
  Search, 
  Utensils, 
  Car, 
  Building, 
  AlertCircle, 
  HelpCircle,
  X,
  Send,
  Loader2
} from 'lucide-react';
import { PHRASE_CARDS } from '../data/phrasesData';
import { PhraseCard } from '../types';

export const FlashcardsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [fullscreenCard, setFullscreenCard] = useState<PhraseCard | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);

  // Live AI Custom Translator State
  const [customPhrase, setCustomPhrase] = useState<string>('');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [translatedResult, setTranslatedResult] = useState<PhraseCard | null>(null);

  const categories = [
    { id: 'all', label: 'Alle Sätze', icon: MessageSquare },
    { id: 'dietary', label: 'Kein Koriander / Nicht scharf', icon: Utensils, badge: 'Prio 1' },
    { id: 'taxi', label: 'Taxi & Adressen', icon: Car },
    { id: 'essential', label: 'Basis & Alltag', icon: HelpCircle },
    { id: 'hotel', label: 'Hotel & Gepäck', icon: Building },
    { id: 'emergency', label: 'Notfall & Hilfe (110)', icon: AlertCircle, badge: 'Notfall' },
  ];

  const filteredCards = PHRASE_CARDS.filter((card) => {
    const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
    const matchesSearch = 
      searchQuery === '' ||
      card.german.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.chinese.includes(searchQuery) ||
      card.pinyin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (card.notes && card.notes.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Text-to-Speech function using Web Speech API
  const speakChinese = (text: string, id: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop current speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.85; // Slightly slower for clarity
      
      setIsPlayingAudio(id);
      utterance.onend = () => setIsPlayingAudio(null);
      utterance.onerror = () => setIsPlayingAudio(null);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleTranslateCustom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPhrase.trim()) return;

    setIsTranslating(true);
    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phrase: customPhrase }),
      });
      const data = await res.json();
      if (data && data.hanzi) {
        const newCard: PhraseCard = {
          id: `custom-${Date.now()}`,
          category: 'essential',
          german: customPhrase,
          chinese: data.hanzi,
          pinyin: data.pinyin || '',
          pronunciation: data.pronunciation || '',
          notes: 'Individuelle Übersetzung für Taxifahrer oder Kellner.'
        };
        setTranslatedResult(newCard);
      }
    } catch (err) {
      console.error('Translation error:', err);
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header & Instructions */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-xs font-semibold border border-red-500/20 mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Visuelle Notfall- & Taxikarten mit Audio-Sprachausgabe</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Chinesische Sprachkarten zum Vorzeigen & Abspielen
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Kaum jemand spricht in normalen Restaurants oder Taxis Englisch. Tippt auf eine Karte, um sie im <strong>Vollbildmodus</strong> in extragroßer Schrift dem Fahrer oder Kellner vorzuhalten!
            </p>
          </div>
        </div>

        {/* Live AI Custom Translator Bar */}
        <form onSubmit={handleTranslateCustom} className="pt-2">
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center space-x-2 text-purple-400 flex-shrink-0">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Eigenen Satz übersetzen:</span>
            </div>
            <input
              type="text"
              placeholder="z. B. 'Haben Sie Hafermilch?' oder 'Bitte die Klimaanlage leiser'..."
              value={customPhrase}
              onChange={(e) => setCustomPhrase(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-purple-500 w-full"
            />
            <button
              type="submit"
              disabled={isTranslating || !customPhrase.trim()}
              className="w-full sm:w-auto px-4 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition cursor-pointer"
            >
              {isTranslating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
              <span>Übersetzen</span>
            </button>
          </div>
        </form>

        {/* Custom Translated Result Box if active */}
        {translatedResult && (
          <div className="p-4 bg-purple-950/40 border border-purple-500/40 rounded-xl space-y-2 relative animate-fade-in">
            <button
              onClick={() => setTranslatedResult(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-purple-300">Deine individuelle Karte:</span>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-300">{translatedResult.german}</p>
                <p className="text-2xl font-black text-white mt-1">{translatedResult.chinese}</p>
                <p className="text-xs text-purple-300 italic">{translatedResult.pinyin} • {translatedResult.pronunciation}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => speakChinese(translatedResult.chinese, translatedResult.id)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white flex items-center gap-1 text-xs"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Anhören</span>
                </button>
                <button
                  onClick={() => setFullscreenCard(translatedResult)}
                  className="p-2 rounded-lg bg-purple-600 text-white flex items-center gap-1 text-xs font-semibold"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Groß Vorzeigen</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Category Pills & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="w-full sm:w-64">
          <input
            type="text"
            placeholder="Satz suchen (z. B. Toilette, Rechnung, Koriander)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCards.map((card) => {
          const isEmergency = card.emergencyLevel;
          return (
            <div
              key={card.id}
              className={`bg-slate-900 rounded-2xl border transition-all duration-200 p-5 flex flex-col justify-between space-y-4 hover:border-slate-700 shadow-lg ${
                isEmergency
                  ? 'border-red-500/50 bg-red-950/20'
                  : 'border-slate-800'
              }`}
            >
              <div className="space-y-3">
                {/* Header & Badges */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    {card.german}
                  </span>
                  {isEmergency && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                      Notfall
                    </span>
                  )}
                </div>

                {/* Big Hanzi Chinese Characters */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 text-center">
                  <p className="text-2xl sm:text-3xl font-black text-white tracking-wide">
                    {card.chinese}
                  </p>
                  <p className="text-xs font-semibold text-amber-300 mt-1.5">
                    {card.pinyin}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 italic">
                    Aussprache: „{card.pronunciation}“
                  </p>
                </div>

                {/* Notes */}
                {card.notes && (
                  <p className="text-xs text-slate-400 leading-relaxed">
                    💡 {card.notes}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                <button
                  onClick={() => speakChinese(card.chinese, card.id)}
                  className={`p-2 rounded-lg transition cursor-pointer flex items-center space-x-1 text-xs font-semibold ${
                    isPlayingAudio === card.id
                      ? 'bg-amber-500/20 text-amber-300'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                  title="Audio-Aussprache abspielen"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Anhören</span>
                </button>

                <div className="flex space-x-1.5">
                  <button
                    onClick={() => copyToClipboard(card.chinese, card.id)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer text-xs"
                    title="Zeichen kopieren"
                  >
                    {copiedId === card.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => setFullscreenCard(card)}
                    className="px-3 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30 text-xs font-semibold flex items-center space-x-1 transition cursor-pointer"
                    title="Im Vollbildmodus groß vorzeigen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Vorzeigen</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FULLSCREEN MODAL FOR PRESENTING TO DRIVERS / WAITERS */}
      {fullscreenCard && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
          <button
            onClick={() => setFullscreenCard(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-2xl w-full space-y-6 bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-700 shadow-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-400 block">
              {fullscreenCard.german}
            </span>

            {/* Huge Chinese Characters */}
            <div className="py-4">
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-wide leading-tight">
                {fullscreenCard.chinese}
              </h1>
              <p className="text-lg sm:text-xl font-bold text-amber-300 mt-4">
                {fullscreenCard.pinyin}
              </p>
              <p className="text-sm text-slate-400 mt-1 italic">
                „{fullscreenCard.pronunciation}“
              </p>
            </div>

            <div className="flex justify-center space-x-3 pt-4">
              <button
                onClick={() => speakChinese(fullscreenCard.chinese, 'modal')}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center space-x-2 transition cursor-pointer"
              >
                <Volume2 className="w-5 h-5 text-amber-400" />
                <span>Laut abspielen</span>
              </button>

              <button
                onClick={() => setFullscreenCard(null)}
                className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
