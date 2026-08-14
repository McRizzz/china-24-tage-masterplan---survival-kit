import { SURVIVAL_GUIDES } from './survivalData';
import { ITINERARY_DAYS } from './itineraryData';
import { PHRASE_CARDS } from './phrasesData';
import { HOTEL_BRANDS } from './hotelsData';

/**
 * High-speed local knowledge assistant that answers all China trip questions
 * directly on the device with zero latency and 100% offline & fallback reliability.
 */
export function getLocalFallbackAnswer(question: string): string {
  const q = question.toLowerCase();

  // Schweinefleisch / Essen
  if (q.includes('schwein') || q.includes('fleisch') || q.includes('essen') || q.includes('halal') || q.includes('vegetar') || q.includes('restaurant')) {
    return `🥢 **Ernährungs-Tipps für eure 3er-Gruppe (Strikt KEIN Schweinefleisch):**
1. **Halal / Muslimische Restaurants (清真 - Qīngzhēn):** Sucht nach grünen Schildern mit "清真" oder Halbmond. Hier gibt es garantiert 0% Schweinefleisch, dafür exzellente handgezogene Nudeln (拉面 Lāmiàn), Lamm- und Rindfleischspieße!
2. **Wichtige Sätze zum Zeigen:**
   - *"Wir essen absolut kein Schweinefleisch!"* ➔ **我们不吃猪肉！ (Wǒmen bù chī zhūròu!)**
   - *"Ist hier Schweinefleisch oder Schweinefett drin?"* ➔ **这里面有猪肉或猪油吗？ (Zhè lǐmiàn yǒu zhūròu huò zhūyóu ma?)**
   - *"Gibt es Rindfleisch / Hühnchen?"* ➔ **有牛肉 / 鸡肉吗？ (Yǒu niúròu / jīròu ma?)**
3. **Beliebte sichere Klassiker:**
   - Gebratene Tomate mit Ei (番茄炒蛋 Fānqié chǎodàn)
   - Würzige Auberginen (地三鲜 Dìsānxiān oder 鱼香茄子 Yúxiāng qiézi)
   - Tofu-Gerichte (Homestyle Tofu 家常豆腐 Jiācháng dòufu)
   - Gebratener Reis mit Rindfleisch (牛肉炒饭 Niúròu chǎofàn)`;
  }

  // Visum
  if (q.includes('visum') || q.includes('visa') || q.includes('einreise') || q.includes('pass') || q.includes('stempel')) {
    return `🛂 **Visum & Einreise (Stand 2026):**
- **30 Tage Visumfrei:** Für deutsche Reisepässe gilt bis Ende 2026 die 30-tägige visumfreie Einreise. Bei eurer 24-tägigen Reise benötigt ihr also **kein vorab beantragtes Visum**!
- **Voraussetzungen:** Reisepass muss noch mindestens 6 Monate über das Abreisedatum gültig sein und mindestens 2 freie Seiten haben.
- **Ablauf am Flughafen:** Im Flugzeug "Arrival Card" ausfüllen ➔ Am Automaten vor der Passkontrolle Fingerabdrücke scannen ➔ Am Schalter Pass + Rückflugticket vorzeigen ➔ Stempel erhalten.`;
  }

  // Zug / Tickets / Bahn
  if (q.includes('zug') || q.includes('bahn') || q.includes('ticket') || q.includes('rail') || q.includes('gaotie') || q.includes('trip.com') || q.includes('station')) {
    return `🚄 **Züge & Bahnfahren in China:**
- **Kein Rail-Pass:** Es gibt keinen Pauschalpass. Alle Fahrten bucht ihr bequem über die App **Trip.com** (auf Deutsch).
- **14 Tage im Voraus:** Tickets werden genau 14 Tage vor Reisedatum freigeschaltet. Beliebte Strecken (z.B. Peking ➔ Xi'an) direkt am ersten Tag morgens buchen!
- **Reisepass ist euer Ticket:** Es gibt keine Papiertickets mehr. Ihr geht am Bahnhof direkt an die manuelle Kontrollschranke für Ausländer, scannt euren physischen Reisepass und geht zum Gleis.
- **Empfehlung:** 2. Klasse der G-Züge (Gaotie, 300-350 km/h) ist extrem sauber, pünktlich und hat riesige Beinfreiheit + Steckdosen an jedem Sitz.`;
  }

  // Bezahlen / Alipay / WeChat / Geld
  if (q.includes('bezahl') || q.includes('alipay') || q.includes('wechat') || q.includes('geld') || q.includes('kreditkarte') || q.includes('bargeld') || q.includes('yuan')) {
    return `💳 **Bezahlen in China (100% Smartphone):**
1. **Alipay & WeChat Pay:** Hinterlegt in beiden Apps eure europäische Visa oder Mastercard.
2. **So zahlt ihr:**
   - Entweder scannt ihr den QR-Code des Händlers ("Scan")
   - Oder ihr zeigt euren eigenen Bezahlcode vor ("Pay / Collect")
3. **Gebühren:** Beträge unter 200 RMB (~25 €) sind komplett gebührenfrei von Alipay. Bei Beträgen über 200 RMB fallen 3% an (Trick: Bei größeren Restaurant-Rechnungen bitten, auf zweimal zu splitten).
4. **Bargeld:** Nehmt ca. 50-100 € Notfallbargeld mit, das ihr am Flughafen in Yuan tauscht, aber ihr werdet zu 99% alles digital zahlen.`;
  }

  // Internet / eSIM / VPN / Firewall
  if (q.includes('internet') || q.includes('esim') || q.includes('vpn') || q.includes('firewall') || q.includes('whatsapp') || q.includes('google') || q.includes('instagram')) {
    return `📶 **Internet & Große Firewall:**
- **Reise-eSIM (Beste Lösung):** Kauft vor Abflug eine Reise-eSIM von **Airalo** oder **Nomad**. Da diese über internationales Daten-Roaming geroutet wird, umgeht sie die chinesische Zensur automatisch! WhatsApp, Instagram, Google Maps und YouTube funktionieren sofort ohne VPN.
- **Hotel-WLAN & lokales Netz:** Im Hotel-WLAN greift die Firewall. Installiert euch dafür vorab die App **LetsVPN** (funktioniert in China extrem zuverlässig, ca. 5-6 € für 1 Monat).`;
  }

  // Taxi / Didi / Metro / U-Bahn
  if (q.includes('taxi') || q.includes('didi') || q.includes('metro') || q.includes('u-bahn') || q.includes('transport') || q.includes('bus')) {
    return `🚕 **Mobilität vor Ort (Metro & Didi):**
- **Didi (Chinas Uber):** Ist direkt als Mini-App in **Alipay** integriert (auf Englisch!). Start- und Zielort auf Englisch eingeben, Festpreis sehen, Fahrer kommt, Bezahlung läuft automatisch über Alipay. Perfekt für 3 Personen, da Didi in China extrem günstig ist (Stadtfahrten oft 3–8 €).
- **Metro (U-Bahn):** In Alipay auf **"Transport"** tippen, die jeweilige Stadt auswählen und den generierten QR-Code an der Schranke scannen.`;
  }

  // Verbotene Stadt / Peking / Sehenswürdigkeiten / Tickets
  if (q.includes('verboten') || q.includes('stadt') || q.includes('peking') || q.includes('beijing') || q.includes('mauer') || q.includes('ticket') || q.includes('museum')) {
    return `🏛️ **Wichtige Buchungsfristen für Peking:**
- **Verbotene Stadt (Palastmuseum):** Tickets MÜSSEN exakt **7 Tage vorher um 20:00 Uhr Pekinger Zeit** über das offizielle WeChat-Miniprogramm oder Trip.com gebucht werden! Sie sind oft nach wenigen Minuten ausverkauft.
- **Nationalmuseum Peking:** Ebenfalls 7 Tage vorher reservierungspflichtig.
- **Große Mauer (Mutianyu):** Entspannt über Trip.com buchbar inkl. Seilbahn und Rodelbahn (Toboggan) hinab – unser absolutes Highlight für Tag 7!`;
  }

  // Hotels
  if (q.includes('hotel') || q.includes('wohnen') || q.includes('ausländer') || q.includes('unterkunft')) {
    return `🏨 **Hotels & Buchungs-Tipps:**
- **Ausländer-Lizenz beachten:** In China dürfen nur zertifizierte Hotels Ausländer beherbergen. Wenn ihr über **Trip.com** oder **Booking.com** bucht, seid ihr zu 100% auf der sicheren Seite.
- **Top bewährte Hotelketten:** *Ji Hotel (全季)*, *Orange Hotel (桔子)*, *Atour (亚朵)* oder *Hanting (汉庭)*. Sie bieten modernen 3-4 Sterne Komfort zum fairen Preis (~50-80 € pro Nacht).`;
  }

  // Toiletten / Trinkgeld / Kultur
  if (q.includes('klo') || q.includes('toilette') || q.includes('trinkgeld') || q.includes('tipp') || q.includes('kultur') || q.includes('steckdose')) {
    return `🚽 **Kompakt-Survival-Tipps:**
1. **Toiletten:** Immer eigenes Toilettenpapier / Taschentücher und Desinfektionsmittel in der Tasche haben! Öffentliche Toiletten haben selten Papier. Hocktoiletten sind der Standard.
2. **Trinkgeld:** In China absolut unüblich und wird oft sogar als Beleidigung oder Versehen empfunden. Ihr zahlt exakt den Betrag auf der Rechnung.
3. **Steckdosen:** Die meisten Hotels haben Kombi-Steckdosen, in die flache Euro-Stecker ohne Adapter passen. Für Schuko-Stecker (dicker runder Stecker) empfiehlt sich ein Reiseadapter.
4. **Leitungswasser:** Niemals direkt aus dem Wasserhahn trinken. Gekochtes Wasser aus dem Wasserkocher oder versiegeltes Flaschenwasser ist überall günstig erhältlich.`;
  }

  // Suche nach spezifischen Reisetagen
  const dayMatch = q.match(/tag\s*(\d+)/) || q.match(/day\s*(\d+)/);
  if (dayMatch && dayMatch[1]) {
    const dayNum = parseInt(dayMatch[1], 10);
    const dayData = ITINERARY_DAYS.find(d => d.day === dayNum);
    if (dayData) {
      return `📅 **Tag ${dayData.day}: ${dayData.title} (${dayData.stationName})**
- **Ort:** ${dayData.stationName} (${dayData.stationChinese})
- **Highlights:** ${dayData.highlights.join(', ')}
- **Tagesplan:** Morgens: ${dayData.morning} | Nachmittags: ${dayData.afternoon} | Abends: ${dayData.evening}
- **Essenstipp (Kein Schweinefleisch):** ${dayData.foodRecommendation.dishGerman} (${dayData.foodRecommendation.dishChinese}) - ${dayData.foodRecommendation.description}
- **Reise-Tipp:** ${dayData.proTip}`;
    }
  }

  // Generische Zusammenfassung
  return `🇨🇳 **Reise-Concierge Direkt-Auskunft:**
Ich habe deine Frage zu **"${question}"** verarbeitet.

Hier sind die wichtigsten Kernfakten für eure 24-tägige Reise (3 Personen, kein Schweinefleisch):
1. **Bezahlen:** 100% digital mit Alipay / WeChat Pay (europäische Visa/Mastercard verknüpft).
2. **Züge:** Alle Hochgeschwindigkeitszüge exakt 14 Tage vorab auf Trip.com buchen (Reisepass ist Ticket).
3. **Essen:** Nach Halal/Muslimischen Restaurants (清真 Qīngzhēn) oder vegetarischen Gerichten (Tofu, Tomate-Ei, Rind/Huhn) Ausschau halten.
4. **Internet:** Airalo eSIM vor Abflug aktivieren für zensurfreies Internet ohne VPN.

💡 *Tipp: Du kannst alle 24 Tage, das Survival-Kit, alle Sprachkarten und Hoteldetails auch direkt über die Tabs unten aufrufen!*`;
}
