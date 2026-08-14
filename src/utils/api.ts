/**
 * Central API client configuration & offline handler for Web and iOS/Capacitor Native IPA.
 */

const CLOUD_BACKEND_URL = 'https://ais-dev-ujtytnldi5e6hhtljt6aqm-801266439187.europe-west2.run.app';

export function getApiBaseUrl(): string {
  // If running in browser hosted on the backend server, use relative path
  if (typeof window !== 'undefined') {
    const origin = window.location.origin;
    const isCapacitor = 
      origin.startsWith('capacitor:') || 
      origin.startsWith('ionic:') || 
      origin.startsWith('file:') || 
      (window as any).Capacitor !== undefined ||
      window.location.hostname === 'localhost';

    if (isCapacitor) {
      // In Native iOS (.ipa) or local WebView, route to the live cloud backend
      return CLOUD_BACKEND_URL;
    }
  }
  // Otherwise use relative URL (same-origin)
  return '';
}

export interface ChatApiPayload {
  messages?: Array<{ role: string; content: string }>;
  userQuestion?: string;
  context?: string;
}

export async function sendChatMessage(payload: ChatApiPayload): Promise<{ reply?: string; error?: string }> {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return {
      reply: '⚠️ Du bist aktuell im Offline-Modus (keine Internetverbindung). Alle 24 Reisetage, das Notfall-Survival-Kit, alle Sprachkarten & der Budget-Kalkulator stehen dir hier auf deinem Smartphone komplett offline zur Verfügung! Sobald du wieder online bist, beantwortet die KI wieder deine Live-Fragen.'
    };
  }

  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/chat`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000); // 25s timeout

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

    if (!res.ok) {
      const errorText = await res.text();
      let parsedError = 'Serverfehler beim Abrufen der Antwort.';
      try {
        const errorJson = JSON.parse(errorText);
        parsedError = errorJson.error || errorJson.details || parsedError;
      } catch {
        // use default error
      }
      return { error: parsedError };
    }

    const data = await res.json();
    return { reply: data.reply };
  } catch (err: any) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      return {
        error: 'Die Anfrage hat zu lange gedauert (Zeitüberschreitung). Bitte prüfe deine Internetverbindung oder eSIM.'
      };
    }
    return {
      error: 'Keine Verbindung zum KI-Server möglich. Bitte stelle sicher, dass eine Internetverbindung (WLAN/eSIM) aktiv ist.'
    };
  }
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
