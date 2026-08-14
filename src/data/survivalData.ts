export interface SurvivalSection {
  id: string;
  category: 'critical' | 'tech' | 'daily' | 'transit';
  title: string;
  badge: string;
  iconName: string;
  summary: string;
  color: string;
  actionItems: string[];
  keyFacts: {
    label: string;
    value: string;
    isHighlight?: boolean;
  }[];
  detailedGuide: string[];
  warningNotice?: string;
  faq?: { q: string; a: string }[];
}

export const SURVIVAL_GUIDES: SurvivalSection[] = [
  {
    id: 'visa',
    category: 'critical',
    title: '1. Visum: Braucht ihr eins?',
    badge: '30 Tage Visumfrei!',
    iconName: 'ShieldCheck',
    color: 'emerald',
    summary: 'Entwarnung: Für Inhaber eines deutschen Passes (sowie vieler anderer EU-Länder) gilt bis Ende 2026 eine visumfreie Einreise für bis zu 30 Tage.',
    actionItems: [
      'Reisepass auf Gültigkeit prüfen (mindestens 6 Monate über das Ausreisedatum hinaus gültig)',
      'Mindestens 2 freie Seiten im Reisepass für Ein- und Ausreisestempel',
      'Kein bürokratischer Visumsantrag vorab nötig!',
      'Rückflugticket oder Weiterreiseticket als Nachweis griffbereit halten (z. B. auf dem Handy)'
    ],
    keyFacts: [
      { label: 'Visumfreiheit', value: 'Bis zu 30 Tage touristisch', isHighlight: true },
      { label: 'Gültig bis', value: 'Ende 2026 (offizielle Verlängerung)' },
      { label: 'Eure Reisedauer', value: '24–25 Tage (perfekt im Zeitfenster)' },
      { label: 'Kosten für Visum', value: '0 € (spart ca. 140 € p.P.)' }
    ],
    detailedGuide: [
      'Bei der Landung in China füllt ihr im Flugzeug oder direkt vor der Passkontrolle die gelb-blaue "Arrival Card" (Ankunftskarte) aus.',
      'An den Selbstbedienungs-Automaten vor der Passkontrolle scannt ihr zuerst euren Reisepass und lasst eure Fingerabdrücke digital erfassen (dauert 1 Minute).',
      'Am Schalter der Grenzkontrolle legt ihr den Pass, die Arrival Card und euer Rückflugticket vor. Der Beamte stempelt den Pass mit 30 Tagen Aufenthalt ab – fertig!'
    ],
    warningNotice: 'Achtung: Die 30 Tage zählen ab dem Tag nach der Einreise (Tag der Einreise = Tag 0). Bleibt keinesfalls länger als 30 Tage, da dies hohe Strafen nach sich zieht.'
  },
  {
    id: 'rail',
    category: 'transit',
    title: '2. Gibt es ein Zug-Abo oder Rail-Pass?',
    badge: 'Kein Pass – Trip.com nutzen',
    iconName: 'Train',
    color: 'blue',
    summary: 'Nein, es gibt in China keinen All-inclusive-Zugpass (wie den JR Pass in Japan oder Interrail). Das Ticket-System ist jedoch extrem modern und unkompliziert.',
    actionItems: [
      'App "Trip.com" herunterladen und Account anlegen (auf Deutsch verfügbar)',
      'Reisepassdaten der Mitreisenden in Trip.com hinterlegen',
      'Züge exakt 14 Tage vor dem Reisedatum buchen',
      'Am Bahnhof direkt mit dem physischen Reisepass durch die Schranke gehen (kein Papierticket nötig!)'
    ],
    keyFacts: [
      { label: 'Zugkategorie', value: 'G-Züge (Gaotie, 300–350 km/h)', isHighlight: true },
      { label: 'Buchungsfenster', value: 'Exakt 14 Tage vor Reisedatum' },
      { label: 'Papierticket', value: 'Gibt es nicht mehr (Reisepass ist Ticket)' },
      { label: 'Empfohlene Klasse', value: '2. Klasse (sehr sauber, riesige Beinfreiheit)' }
    ],
    detailedGuide: [
      'Chinas Hochgeschwindigkeitsnetz ist das größte und pünktlichste der Welt. Die Züge der G-Klasse fahren mit 300 bis 350 km/h.',
      'Buchung über Trip.com: Trip.com berechnet nur eine minimale Servicegebühr, ist auf Deutsch und akzeptiert europäische Kreditkarten und PayPal.',
      'Wie ihr in den Zug kommt: An den Bahnhöfen gibt es automatische Schranken mit Pass-Scannern oder manuelle Schalter mit Beamten ("Manual Lane"). Haltet einfach euren Reisepass an den Scanner – das System erkennt eure Buchung sofort!',
      'Gepäck & Pünktlichkeit: Am Bahnhofseingang gibt es eine schnelle Sicherheitskontrolle (wie am Flughafen, Taschen durchleuchten). Seid ca. 30–45 Minuten vor Abfahrt am Bahnhof.'
    ],
    faq: [
      { q: 'Ist die 2. Klasse gut genug?', a: 'Ja, absolut! Die 2. Klasse in chinesischen High-Speed-Zügen bietet mehr Beinfreiheit als die 1. Klasse der Deutschen Bahn und ist klimatisiert, extrem ruhig und sauber.' },
      { q: 'Gibt es Steckdosen und heißes Wasser?', a: 'Ja! An jedem Sitzplatz gibt es Steckdosen (chinesischer/europäischer Stecker) und in jedem Waggon kochend heißes Trinkwasser für Tee oder Instant-Nudeln.' }
    ]
  },
  {
    id: 'payment',
    category: 'critical',
    title: '3. Bezahlen: Bargeld & Kreditkarten existieren nicht mehr',
    badge: '100% Digital mit Alipay',
    iconName: 'CreditCard',
    color: 'amber',
    summary: 'In China zahlt absolut jeder per QR-Code mit dem Smartphone. Physische Kreditkarten werden in normalen Geschäften fast nirgends akzeptiert, Bargeld wird nur ungern gewechselt.',
    actionItems: [
      'Alipay App (und optional WeChat) vor der Abreise aufs Handy laden',
      'Account mit Handynummer registrieren und mit Pass verifizieren (Real-Name Verification)',
      'Deutsche Visa- oder Mastercard als primäre Zahlungsmethode in Alipay hinterlegen',
      'In Alipay das "Transport"-Feature für Metro-QR-Codes aktivieren'
    ],
    keyFacts: [
      { label: 'Haupt-App', value: 'Alipay (am einfachsten für Ausländer)', isHighlight: true },
      { label: 'Gebühren', value: 'Unter 200 RMB gebührenfrei von Alipay' },
      { label: 'Kreditkarten im Laden', value: 'Fast nirgends akzeptiert' },
      { label: 'Bargeld', value: 'Maximal 300-500 RMB als Notreserve' }
    ],
    detailedGuide: [
      'So funktioniert das Bezahlen vor Ort: Entweder ihr scannt den QR-Code des Händlers ("Scan"-Button oben links) und gebt den Betrag ein, ODER der Händler scannt euren persönlichen Zahlungs-Barcode ("Pay/Collect"-Button).',
      'Transaktionen unter 200 RMB (ca. 26 €) sind bei Alipay völlig frei von Bearbeitungsgebühren. Ab 200 RMB fällt eine kleine Gebühr von ca. 3% an.',
      'U-Bahn Schranken: Öffnet in Alipay "Transport", wählt die Stadt (z.B. Shanghai Metro) und haltet den generierten QR-Code an die Schranke beim Ein- und Aussteigen. Das Geld wird automatisch von eurer Kreditkarte abgebucht!',
      'Taxis buchen mit Didi: In Alipay ist die Taxi-App Didi integriert – komplett auf Englisch mit automatischer Bezahlung und Festpreis vor Fahrtantritt.'
    ],
    warningNotice: 'Wichtig: Richtet Alipay und die Kreditkartenverknüpfung UNBEDINGT vor der Abreise zu Hause in Deutschland ein, damit eure Hausbank die Verifizierung (2-Faktor-SMS/App) bestätigen kann.'
  },
  {
    id: 'internet',
    category: 'tech',
    title: '4. Internet & Die „Great Firewall“',
    badge: 'eSIM umgeht Firewall automatisch!',
    iconName: 'Wifi',
    color: 'purple',
    summary: 'Google, Google Maps, WhatsApp, Instagram, YouTube und westliche Webseiten sind in China gesperrt. Eine Reise-eSIM löst dieses Problem komplett.',
    actionItems: [
      'Vorab eine Reise-eSIM kaufen (z.B. Airalo, Nomad oder Holafly mit China-Datenpaket)',
      'eSIM vor dem Abflug aktivieren (roamt über Hongkong/Singapur und umgeht die Firewall)',
      'Als Backup für Hotel-WLAN: VPN-App "LetsVPN" auf dem Smartphone vorab installieren',
      'Offline-Wörterbücher und Offline-Karten vor Abflug herunterladen'
    ],
    keyFacts: [
      { label: 'Beste Lösung', value: 'Reise-eSIM (Airalo / Nomad / Holafly)', isHighlight: true },
      { label: 'Firewall-Status', value: 'Über eSIM automatisch umgangen' },
      { label: 'WhatsApp / Google', value: 'Funktioniert mit eSIM ganz normal' },
      { label: 'Backup-VPN', value: 'LetsVPN (funktioniert stabil in China)' }
    ],
    detailedGuide: [
      'Warum eSIM die beste Wahl ist: Reise-eSIMs nutzen ausländisches Datenroaming (meist über Hongkong oder Singapur). Da der Datenverkehr nicht über das Festland geleitet wird, greift die chinesische Zensur nicht!',
      'Ihr könnt WhatsApp Nachrichten schreiben, Instagram posten, E-Mails abrufen und Google nutzen wie zu Hause.',
      'Hotel-WLAN: Sobald ihr euch im Hotel ins WLAN einwählt, greift die Firewall wieder. Schaltet dann einfach LetsVPN ein oder bleibt auf mobilen Daten.',
      'Achtung bei VPN-Apps: Installiert VPNs unbedingt VOR dem Betreten Chinas, da die Download-Seiten und App-Stores in China blockiert sind.'
    ]
  },
  {
    id: 'navigation',
    category: 'tech',
    title: '5. Navigation & Übersetzung',
    badge: 'Apple Maps + Didi + DeepL',
    iconName: 'MapPin',
    color: 'sky',
    summary: 'Google Maps ist in China offline und ungenau. Mit der richtigen Kombination aus Apple Maps, Didi und Übersetzungs-Apps findet ihr euch kinderleicht zurecht.',
    actionItems: [
      'iPhone-Nutzer: Apple Maps verwenden (funktioniert in China perfekt mit aktuellen Metrolinien auf Englisch)',
      'Android-Nutzer: Amap (Gaudé) oder Baidu Maps als visuelle Karten nutzen',
      'In Alipay "Didi" für Taxis nutzen (sehr günstig: 2–5 € pro Fahrt im Stadtgebiet)',
      'DeepL und Sprachübersetzer-Apps mit Offline-Paket Deutsch/Chinesisch installieren'
    ],
    keyFacts: [
      { label: 'Beste Karten-App (iOS)', value: 'Apple Maps (auf Englisch & aktuell)', isHighlight: true },
      { label: 'Taxi-App', value: 'Didi (integriert in Alipay auf Englisch)' },
      { label: 'Taxi-Preise', value: '2–5 € für 15-20 Min. Fahrt' },
      { label: 'Übersetzer', value: 'DeepL / Alipay Foto-Übersetzer' }
    ],
    detailedGuide: [
      'Apple Maps zeigt U-Bahn-Eingänge, Umsteigewege, genaue Abfahrtszeiten und die passende Ausgansnummer (z. B. "Exit B2") im Bahnhof an.',
      'Didi Taxi buchen: In Alipay auf "Didi" tippen, Zielort eingeben (z. B. Hotelname oder Sehenswürdigkeit auf Englisch). Ihr seht vorab den garantierten Festpreis und das Kennzeichen des Wagens.',
      'Speisekarten übersetzen: Einfach mit der Kamera in Alipay oder DeepL die Speisekarte scannen – die App übersetzt die chinesischen Zeichen in Sekundenschnelle.'
    ]
  },
  {
    id: 'tickets',
    category: 'critical',
    title: '6. Vorabreservierung für Sehenswürdigkeiten',
    badge: '7 Tage vorher reservieren!',
    iconName: 'CalendarCheck',
    color: 'rose',
    summary: 'Spontankäufer an der Kasse haben bei Chinas Top-Attraktionen keine Chance. Tickets für die Verbotene Stadt und Nationalmuseen MÜSSEN 7 Tage vorher online reserviert werden.',
    actionItems: [
      'Kalenderwecker stellen: Exakt 7 Tage vor eurem Besuchstag in Peking',
      'Verbotene Stadt: Buchung öffnet täglich um 20:00 Uhr Pekinger Zeit (14:00 bzw. 13:00 Uhr dt. Zeit)',
      'Buchung über Trip.com oder WeChat Mini-Programm vornehmen',
      'Reisepassnummern aller Mitreisenden exakt angeben'
    ],
    keyFacts: [
      { label: 'Verbotene Stadt', value: 'Exakt 7 Tage vorher buchen (20:00 Uhr CST)', isHighlight: true },
      { label: 'Nationalmuseum', value: 'Exakt 7 Tage vorher (oft in Min. vergriffen)' },
      { label: 'Terrakotta-Armee', value: '3–5 Tage vorher über Trip.com' },
      { label: 'Chinesische Mauer', value: '1–2 Tage vorher oder vor Ort' }
    ],
    detailedGuide: [
      'Tageskontingente: Die Verbotene Stadt lässt täglich nur eine begrenzte Zahl Besucher hinein. In der Hauptsaison sind Tickets innerhalb weniger Minuten nach Freischaltung ausverkauft!',
      'Wenn ihr über Trip.com bucht: Ihr könnt bei Trip.com oft schon vor den 7 Tagen eine Vorab-Anfrage stellen, und Trip.com bucht das Ticket automatisch, sobald das Buchungsfenster öffnet.',
      'Einlass: Auch bei Sehenswürdigkeiten gibt es keine Papiertickets. Euer Reisepass wird am Eingang gescannt.'
    ],
    warningNotice: 'Ohne Vorabreservierung kommt ihr definitiv nicht in die Verbotene Stadt hinein! Setzt euch eine Erinnerung im Handy.'
  },
  {
    id: 'daily',
    category: 'daily',
    title: '7. Wichtige Alltags-Tipps & Hygiene',
    badge: 'Taschentücher & Heißes Wasser',
    iconName: 'Sparkles',
    color: 'amber',
    summary: 'Mit diesen 4 goldenen Alltagsregeln meistert ihr jede Situation wie ein erfahrener China-Profi.',
    actionItems: [
      'Immer 2–3 Päckchen Papiertaschentücher und feuchte Desinfektionstücher in der Tasche haben',
      'Kein Leitungswasser trinken – nur abgepacktes Flaschenwasser (2–3 RMB überall)',
      'Thermobecher mitnehmen, um an den kostenlosen Heißwasserspendern Tee aufzugießen',
      'Kein Trinkgeld geben (gilt als unhöflich oder wird verwirrt abgelehnt)'
    ],
    keyFacts: [
      { label: 'Toilettenpapier', value: 'Auf öffentlichen WCs fast nie vorhanden!', isHighlight: true },
      { label: 'WC-Art', value: 'Meist Hocktoiletten (Squat Toilets)' },
      { label: 'Leitungswasser', value: 'Kein Trinkwasser (nur zum Zähneputzen ok)' },
      { label: 'Sicherheit', value: 'Extrem sicher (Tag & Nacht)' },
      { label: 'Trinkgeld', value: '0 % (völlig unüblich)' }
    ],
    detailedGuide: [
      'Öffentliche Toiletten: Öffentliche WCs sind in China extrem zahlreich und meist sauber, haben aber fast NIE Toilettenpapier bereitgestellt und sind überwiegend Hocktoiletten (in Einkaufszentren und Hotels gibt es westliche Sitztoiletten). Werfe das benutzte Papier in den Mülleimer neben der Toilette.',
      'Trinkwasser: Gekochtes Wasser gilt in China als Heilmittel für alles. An allen Bahnhöfen, in Zügen und Hotels gibt es Spender mit kochend heißem Wasser ("Kaishui").',
      'Sicherheit & Kriminalität: China ist eines der sichersten Reiseländer weltweit. Gewaltkriminalität oder Taschendiebstahl gegen Touristen sind extrem selten. Ihr könnt euch nachts völlig sorgenfrei bewegen.'
    ]
  }
];
