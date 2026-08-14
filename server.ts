import express from "express";
import path from "path";
import cors from "cors";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Initialize Google GenAI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Travel Concierge for China Trip
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, userQuestion, context } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(200).json({
        reply:
          "Hinweis: Der Gemini API-Schlüssel ist noch nicht hinterlegt. Du kannst dennoch alle Offline-Funktionen, den 24-Tage-Masterplan, die Survival-Guides, Sprachkarten und den Budgetrechner uneingeschränkt nutzen!",
      });
    }

    const systemInstruction = `Du bist ein hochkompetenter, freundlicher und praxisnaher Reise-Concierge für eine 24-tägige China-Reise („Klassische Goldene Route“: Shanghai -> Peking -> Xi'an -> Chengdu -> Guilin/Yangshuo -> Hangzhou & Suzhou -> Shanghai).

Reisegruppe & Ernährungsvorlieben:
- Die Reisegruppe besteht aus 3 Personen.
- ERNÄHRUNG: Sie essen STRIKT KEIN SCHWEINEFLEISCH und meiden unklares Fleisch. Erwähne oder empfehle NIEMALS Schweinefleischgerichte. Bevorzuge vegetarische Empfehlungen (Tofu, Gemüse, Pilze, Auberginen, Ei-Tomate), Fisch/Meeresfrüchte, Geflügel, Lamm/Rind oder Halal/Qingzhen (清真)-Restaurants.

Wichtigste Reisefakten & Kontext:
- Visum: Für deutsche Pässe gilt 30 Tage visumfreie Einreise bis Ende 2026.
- Bezahlung: 100% digital via Alipay & WeChat Pay (hinterlegte europäische Visa/Mastercard). Fast kein Bargeld, keine physischen Kreditkarten in Läden.
- U-Bahn & Taxis: In Alipay 'Transport'-QR für U-Bahn Schranken; 'Didi' Taxi-App direkt in Alipay auf Englisch.
- Züge: Kein Pauschalpass! High-Speed G-Züge (300-350 km/h) über Trip.com 14 Tage im Voraus buchbar. Reisepass ist das Ticket (Scanner am Bahnhof).
- Internet: Reise-eSIM (Airalo/Nomad) umgeht chinesische Firewall automatisch (WhatsApp/Google funktionieren ohne VPN). Hotel-WLAN erfordert LetsVPN.
- Tickets: Verbotene Stadt & Nationalmuseum Peking MÜSSEN exakt 7 Tage vorher reserviert werden!
- Unterkünfte: Nur Hotels mit Ausländerlizenz (z. B. Ji Hotel 全季, Orange Hotel 桔子, Hanting 汉庭, Atour 亚朵).
- Toiletten: Immer eigene Papiertaschentücher & Feuchttücher mitnehmen! Hocktoiletten sind Standard.
- Trinkgeld: Völlig unüblich.

Beantworte Fragen präzise auf Deutsch, empathisch, mit konkreten Tipps, chinesischen Schriftzeichen (Hanzi) + Pinyin, wo es nützlich ist (z. B. für Schilder, Gerichte, Bahnhöfe). Halte Antworten gut lesbar formatiert.`;

    let prompt = "";
    if (userQuestion) {
      prompt = userQuestion;
      if (context) {
        prompt = `Kontext: ${context}\n\nFrage des Reisenden: ${userQuestion}`;
      }
    } else if (messages && Array.isArray(messages) && messages.length > 0) {
      prompt = messages
        .map((m: { role: string; content: string }) => `${m.role === "user" ? "Reisender" : "Concierge"}: ${m.content}`)
        .join("\n\n");
    } else {
      return res.status(400).json({ error: "Keine Nachricht übergeben" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Entschuldigung, ich konnte keine passende Antwort generieren.";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: "Fehler bei der Kommunikation mit dem KI-Reiseassistenten.",
      details: error?.message || String(error),
    });
  }
});

// Quick Phrase Translator to Hanzi + Pinyin
app.post("/api/translate", async (req, res) => {
  try {
    const { phrase } = req.body;
    if (!phrase) {
      return res.status(400).json({ error: "Kein Begriff übergeben" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(200).json({
        hanzi: phrase,
        pinyin: "",
        explanation: "API-Key nicht konfiguriert.",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: `Übersetze folgenden deutschen Reisesatz oder Begriff ins Chinesische (Kurzzeichen) für einen Touristen in China (z. B. für Taxi, Restaurant, Hotel, Notfall):
Text: "${phrase}"

Antworte ausschließlich im JSON-Format mit folgendem Schema:
{
  "hanzi": "chinesische Schriftzeichen",
  "pinyin": "Pinyin mit Tonzeichen",
  "pronunciation": "Vereinfachte deutsche Aussprachehilfe",
  "german": "Deutsche Übersetzung/Bedeutung"
}`,
      config: {
        responseMimeType: "application/json",
        temperature: 0.2,
      },
    });

    const jsonStr = response.text?.trim() || "{}";
    const data = JSON.parse(jsonStr);
    res.json(data);
  } catch (error: any) {
    console.error("Translation error:", error);
    res.status(500).json({ error: "Übersetzungsfehler" });
  }
});

// Vite middleware & Static file serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`China Masterplan App running on http://localhost:${PORT}`);
  });
}

startServer();
