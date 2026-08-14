export type TabType = 'itinerary' | 'survival' | 'hotels-budget' | 'flashcards' | 'checklist' | 'ai-assistant';

export interface ItineraryDay {
  day: number;
  dateSuggestion?: string;
  stationId: string;
  stationName: string;
  stationChinese: string;
  title: string;
  subtitle: string;
  morning: string;
  afternoon: string;
  evening: string;
  highlights: string[];
  foodRecommendation: {
    dishGerman: string;
    dishChinese: string;
    dishPinyin: string;
    description: string;
  };
  logistics?: {
    trainInfo?: string;
    duration?: string;
    distance?: string;
    speed?: string;
    departureStation?: string;
    arrivalStation?: string;
    ticketAlert?: string;
  };
  proTip: string;
  photoSpot?: string;
  hotelRecommendation?: string;
}

export interface Station {
  id: string;
  name: string;
  chinese: string;
  pinyin: string;
  daysRange: string;
  dayCount: number;
  theme: string;
  color: string;
  bgGradient: string;
  description: string;
  highlights: string[];
}

export interface SurvivalCategory {
  id: string;
  title: string;
  icon: string;
  summary: string;
  urgency: 'critical' | 'high' | 'medium';
  steps: {
    title: string;
    desc: string;
    codeSnippet?: string;
    tips?: string[];
  }[];
}

export interface HotelBrand {
  id: string;
  nameGerman: string;
  nameChinese: string;
  namePinyin: string;
  tier: 'Budget' | 'Mittelklasse' | 'Gehobene Mittelklasse';
  stars: number;
  priceEur: string;
  priceRmb: string;
  description: string;
  features: string[];
  bestFor: string;
  proTip: string;
}

export interface PhraseCard {
  id: string;
  category: 'essential' | 'food' | 'taxi' | 'hotel' | 'emergency' | 'dietary';
  german: string;
  chinese: string;
  pinyin: string;
  pronunciation: string;
  notes?: string;
  emergencyLevel?: boolean;
}

export interface ChecklistItem {
  id: string;
  category: 'pre-departure' | 'apps' | 'tech' | 'hygiene' | 'documents';
  title: string;
  detail: string;
  essential: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
