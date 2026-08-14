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
        content: result.reply || 'Entschuldigung, ich konnte keine Antwort abrufen.',
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
    <div className="flex flex-col h-[calc(100vh-145px)] min-h-[520px] max-w-full space-y-3">
      {/* Top AI Bar */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-3.5 flex items-center justify-between shadow-md flex-shrink-0">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-600/20 flex-shrink-0">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-bold text-white tracking-tight">China Reise-Concierge (AI)</h3>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Gemini 3.7
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Goldene Route Insidertipps, Transport & Zeichen
            </p>
          </div>
        </div>

        <button
          onClick={() => setMessages([messages[0]])}
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer text-xs flex items-center gap-1 active:scale-95 shadow-sm"
          title="Chat neu starten"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Neustart</span>
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 bg-slate-950/80 rounded-2xl border border-slate-800 p-3.5 overflow-y-auto space-y-3 shadow-inner">
        {messages.map((m) => {
          const isUser = m.role === 'user';
          return (
            <div
              key={m.id}
              className={`flex items-start space-x-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed shadow-md ${
                  isUser
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-tr-none'
                    : 'bg-slate-900/95 text-slate-200 border border-slate-800 rounded-tl-none whitespace-pre-line'
                }`}
              >
                {m.content}
                <span className={`block text-[9px] mt-1.5 ${isUser ? 'text-red-200/80 text-right' : 'text-slate-500'}`}>
                  {m.timestamp}
                </span>
              </div>

              {isUser && (
                <div className="w-7 h-7 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center space-x-2.5 justify-start">
            <div className="w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="bg-slate-900/90 rounded-2xl rounded-tl-none p-3 border border-slate-800 flex items-center space-x-2 text-slate-400 text-xs shadow-md">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-400" />
              <span>Concierge recherchiert Reisetipps...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Chips */}
      <div className="bg-slate-950/90 rounded-xl border border-slate-800/80 px-2.5 py-1.5 flex items-center space-x-1.5 overflow-x-auto scrollbar-none flex-shrink-0">
        <span className="text-[10px] font-semibold text-slate-500 whitespace-nowrap">Fragen:</span>
        {starterQuestions.map((q, idx) => {
          const Icon = q.icon;
          return (
            <button
              key={idx}
              onClick={() => handleSendMessage(q.label)}
              className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-full text-[11px] font-medium whitespace-nowrap transition cursor-pointer flex items-center space-x-1 active:scale-95"
            >
              <Icon className="w-3 h-3 text-red-400" />
              <span>{q.label}</span>
            </button>
          );
        })}
      </div>

      {/* Input Box Footer */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-2.5 shadow-xl flex-shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            placeholder="Frage zu deiner China-Reise..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition cursor-pointer shadow-md shadow-red-950/40 active:scale-95"
          >
            {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">Senden</span>
          </button>
        </form>
      </div>
    </div>
  );
};
