/**
 * Central API client configuration & offline handler for Web and iOS/Capacitor Native IPA.
 */

import { getLocalFallbackAnswer } from '../data/offlineKnowledge';

const CLOUD_BACKEND_URL = 'https://ais-dev-ujtytnldi5e6hhtljt6aqm-801266439187.europe-west2.run.app';

export function getApiBaseUrl(): string {
  if (typeof window !== 'undefined') {
    const origin = window.location.origin;
    const isCapacitor = 
      origin.startsWith('capacitor:') || 
      origin.startsWith('ionic:') || 
      origin.startsWith('file:') || 
      (window as any).Capacitor !== undefined ||
      window.location.hostname === 'localhost';

    if (isCapacitor) {
      return CLOUD_BACKEND_URL;
    }
  }
  return '';
}

export interface ChatApiPayload {
  messages?: Array<{ role: string; content: string }>;
  userQuestion?: string;
  context?: string;
}

export async function sendChatMessage(payload: ChatApiPayload): Promise<{ reply: string }> {
  // Extract latest user question for fallback processing
  const lastUserMsg = payload.messages && payload.messages.length > 0
    ? [...payload.messages].reverse().find(m => m.role === 'user')?.content || ''
    : payload.userQuestion || '';

  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/chat`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.reply && typeof data.reply === 'string' && data.reply.trim().length > 0) {
        return { reply: data.reply };
      }
    }
  } catch (err) {
    clearTimeout(timeoutId);
    // Network or server unreachable - gracefully fallback to on-device expert knowledge
  }

  // Guaranteed instant response from on-device local China knowledge engine
  const fallbackReply = getLocalFallbackAnswer(lastUserMsg);
  return { reply: fallbackReply };
}

export async function translatePhrase(phrase: string): Promise<{
  hanzi?: string;
  pinyin?: string;
  pronunciation?: string;
  german?: string;
  error?: string;
}> {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return {
      error: 'Live-Übersetzung erfordert eine aktive Internetverbindung. Die über 40 vorgefertigten Sprachkarten im Menü funktionieren 100% offline!'
    };
  }

  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/translate`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 20000);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phrase }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return { error: 'Übersetzung konnte nicht geladen werden.' };
    }

    const data = await res.json();
    return data;
  } catch (err: any) {
    clearTimeout(timeoutId);
    return { error: 'Verbindungsfehler bei der Übersetzung.' };
  }
}
