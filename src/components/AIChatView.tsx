import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Loader2, 
  Bot, 
  User, 
  Compass, 
  HelpCircle, 
  Train, 
  Utensils, 
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { ChatMessage, ItineraryDay } from '../types';
import { sendChatMessage } from '../utils/api';

interface AIChatViewProps {
  initialDayContext?: ItineraryDay | null;
  onClearContext?: () => void;
}

export const AIChatView: React.FC<AIChatViewProps> = ({
  initialDayContext,
  onClearContext,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      role: 'assistant',
      content: `Ni Hao! 🇨🇳 Ich bin dein persönlicher **China-Reise-Concierge** für deine 24-tägige Reise auf der Goldenen Route (Shanghai, Peking, Xi'an, Chengdu, Guilin & Yangshuo, Hangzhou, Suzhou).

Frage mich jederzeit zu:
- **Digitalem Setup**: Alipay, WeChat, Metro-QR-Codes, eSIM & VPN
- **Zugreisen**: Buchung auf Trip.com (14 Tage vorher), Bahnhöfe & Pass-Scanner
- **Tickets**: 7-Tage-Vorabreservierung für die Verbotene Stadt
- **Essen & Kultur**: Speisekarten, Vegetarisch, Koriander/Schärfe & Tischsitten
- **Tagesplan-Optimierung**: Tipps für jeden der 24 Reisetage

Was liegt dir auf dem Herzen?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // If a day was passed from the itinerary view, auto-populate a prompt
  useEffect(() => {
    if (initialDayContext) {
      const prompt = `Gib mir konkrete Insidertipps für Tag ${initialDayContext.day} (${initialDayContext.title} in ${initialDayContext.stationName}): Welche Uhrzeit ist für ${initialDayContext.highlights[0]} am besten, und worauf müssen wir bei Transport & Essen achten?`;
      handleSendMessage(prompt);
      if (onClearContext) onClearContext();
    }
  }, [initialDayContext]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const result = await sendChatMessage({
        messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
      });

      const botMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: result.reply || result.error || 'Entschuldigung, ich konnte keine Antwort abrufen.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...newMessages, botMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: 'Es gab ein Verbindungsproblem zum Reise-Assistenten. Bitte stelle sicher, dass du online bist oder nutze die Offline-Bereiche der App.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...newMessages, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const starterQuestions = [
    { label: 'Wie richte ich Alipay & Metro-QR ein?', icon: ShieldCheck },
    { label: 'Wie funktioniert das Zugticket mit Reisepass?', icon: Train },
    { label: 'Verbotene Stadt 7-Tage Buchungstrick', icon: Compass },
    { label: 'Wo gibt es die beste Pekingente in Peking?', icon: Utensils },
    { label: 'Was tun bei einer Magenverstimmung unterwegs?', icon: HelpCircle },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col h-[calc(100vh-140px)] min-h-[600px]">
      {/* Top AI Bar */}
      <div className="bg-slate-900 rounded-t-2xl border border-slate-800 p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-600/20">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-base font-bold text-white">China Reise-Concierge (AI)</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Gemini 3.7
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Spezialisiert auf die 24-Tage Goldene Route, chinesische Schriftzeichen & digitale Zahlungen
            </p>
          </div>
        </div>

        <button
          onClick={() => setMessages([messages[0]])}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer text-xs flex items-center gap-1"
          title="Chat neu starten"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Neuer Chat</span>
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 bg-slate-950/80 border-x border-slate-800 p-4 sm:p-6 overflow-y-auto space-y-4">
        {messages.map((m) => {
          const isUser = m.role === 'user';
          return (
            <div
              key={m.id}
              className={`flex items-start space-x-3 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-md ${
                  isUser
                    ? 'bg-red-600 text-white rounded-tr-none'
                    : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none whitespace-pre-line'
                }`}
              >
                {m.content}
                <span className={`block text-[10px] mt-2 ${isUser ? 'text-red-200 text-right' : 'text-slate-500'}`}>
                  {m.timestamp}
                </span>
              </div>

              {isUser && (
                <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center space-x-3 justify-start">
            <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-slate-900 rounded-2xl rounded-tl-none p-4 border border-slate-800 flex items-center space-x-2 text-slate-400 text-xs">
              <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
              <span>Concierge recherchiert Reisetipps...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Chips */}
      <div className="bg-slate-950 border-x border-slate-800 px-4 py-2 flex items-center space-x-2 overflow-x-auto scrollbar-none">
        <span className="text-[11px] font-semibold text-slate-500 whitespace-nowrap">Häufig gefragt:</span>
        {starterQuestions.map((q, idx) => {
          const Icon = q.icon;
          return (
            <button
              key={idx}
              onClick={() => handleSendMessage(q.label)}
              className="px-3 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-full text-xs font-medium whitespace-nowrap transition cursor-pointer flex items-center space-x-1.5"
            >
              <Icon className="w-3 h-3 text-red-400" />
              <span>{q.label}</span>
            </button>
          );
        })}
      </div>

      {/* Input Box Footer */}
      <div className="bg-slate-900 rounded-b-2xl border border-slate-800 p-4 shadow-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            placeholder="Stelle eine beliebige Frage zu deiner China-Reise..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-5 py-3 bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-1.5 transition cursor-pointer shadow-md shadow-red-600/20"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            <span className="hidden sm:inline">Senden</span>
          </button>
        </form>
      </div>
    </div>
  );
};
