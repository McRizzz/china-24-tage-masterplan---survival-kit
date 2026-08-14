import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { ItineraryView } from './components/ItineraryView';
import { SurvivalKitView } from './components/SurvivalKitView';
import { HotelsAndBudgetView } from './components/HotelsAndBudgetView';
import { FlashcardsView } from './components/FlashcardsView';
import { ChecklistView } from './components/ChecklistView';
import { AIChatView } from './components/AIChatView';
import { TabType, ItineraryDay } from './types';
import { ITINERARY_DAYS } from './data/itineraryData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('itinerary');
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    const saved = localStorage.getItem('china_completed_days');
    return saved ? JSON.parse(saved) : [];
  });

  const [aiDayContext, setAiDayContext] = useState<ItineraryDay | null>(null);

  const toggleDayCompleted = (day: number) => {
    setCompletedDays((prev) => {
      const updated = prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day];
      localStorage.setItem('china_completed_days', JSON.stringify(updated));
      return updated;
    });
  };

  const handleAskAIForDay = (day: ItineraryDay) => {
    setAiDayContext(day);
    setActiveTab('ai-assistant');
  };

  // Scroll to top on tab switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-red-500 selection:text-white">
      {/* Mobile-centric container wrapper */}
      <div className="w-full max-w-md sm:max-w-xl mx-auto min-h-screen flex flex-col bg-slate-950 sm:border-x sm:border-slate-900/60 shadow-2xl relative">
        {/* Top Header & Navigation */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          completedDaysCount={completedDays.length}
          totalDays={ITINERARY_DAYS.length}
        />

        {/* Main Content Area with fluid spring animation */}
        <main className="flex-1 pb-28 px-3 pt-3 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              {activeTab === 'itinerary' && (
                <ItineraryView
                  completedDays={completedDays}
                  toggleDayCompleted={toggleDayCompleted}
                  onAskAIForDay={handleAskAIForDay}
                />
              )}

              {activeTab === 'survival' && <SurvivalKitView />}

              {activeTab === 'hotels-budget' && <HotelsAndBudgetView />}

              {activeTab === 'flashcards' && <FlashcardsView />}

              {activeTab === 'checklist' && <ChecklistView />}

              {activeTab === 'ai-assistant' && (
                <AIChatView
                  initialDayContext={aiDayContext}
                  onClearContext={() => setAiDayContext(null)}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Mobile App Bottom Navigation Bar */}
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

