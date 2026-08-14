import { ChecklistItem } from '../types';

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  // --- VOR DER ABREISE ---
  {
    id: 'prep-passport',
    category: 'documents',
    title: 'Reisepass Gültigkeit prüfen',
    detail: 'Muss bei Einreise noch mindestens 6 Monate gültig sein und mindestens 2 leere Seiten haben.',
    essential: true
  },
  {
    id: 'prep-visafree-rule',
    category: 'documents',
    title: 'Visumfreie 30-Tage Regel verinnerlichen',
    detail: 'Deutsche Staatsbürger reisen bis Ende 2026 für 30 Tage visumfrei ein. Kein Visumsantrag vorab nötig.',
    essential: true
  },
  {
    id: 'prep-return-ticket',
    category: 'documents',
    title: 'Rückflugticket / Buchungsbestätigung ausdrucken & digital speichern',
    detail: 'Wird am Check-in in Deutschland und bei der Passkontrolle in China als Nachweis der Ausreise verlangt.',
    essential: true
  },
  {
    id: 'prep-insurance',
    category: 'documents',
    title: 'Auslandskrankenversicherung abschließen',
    detail: 'Inklusive Rücktransport und 24h-Notfall-Hotline-Nummer im Handy notiert.',
    essential: true
  },

  // --- APPS & DIGITALES SETUP ---
  {
    id: 'app-alipay-setup',
    category: 'apps',
    title: 'Alipay App installieren & Kreditkarte verknüpfen',
    detail: 'Alipay auf dem Handy installieren, Real-Name Verification mit Reisepass durchführen und deutsche Visa/Mastercard hinterlegen.',
    essential: true
  },
  {
    id: 'app-alipay-transport',
    category: 'apps',
    title: 'Metro-Transport QR-Code in Alipay aktivieren',
    detail: 'In Alipay unter "Transport" den U-Bahn-Code für Shanghai/Peking aktivieren – spart Fahrkartenkauf an Schaltern!',
    essential: true
  },
  {
    id: 'app-wechat',
    category: 'apps',
    title: 'WeChat als Zweit-App installieren',
    detail: 'Zur Kommunikation mit Hotels, Tourguides und als alternatives Zahlungsmittel.',
    essential: false
  },
  {
    id: 'app-trip-com',
    category: 'apps',
    title: 'Trip.com App herunterladen & Reisepassdaten hinterlegen',
    detail: 'Wichtigste App für Zugbuchungen (14 Tage vorher) und Hotelbuchungen mit Ausländerlizenz.',
    essential: true
  },
  {
    id: 'app-esim',
    category: 'apps',
    title: 'Reise-eSIM kaufen (Airalo, Nomad oder Holafly)',
    detail: 'Umgeht die chinesische Firewall (Great Firewall) automatisch ohne zusätzlichen VPN. WhatsApp & Google funktionieren!',
    essential: true
  },
  {
    id: 'app-vpn-backup',
    category: 'apps',
    title: 'LetsVPN als Backup für Hotel-WLAN installieren',
    detail: 'UNBEDINGT vor Abflug in Europa installieren, da App-Stores und VPN-Seiten in China blockiert sind.',
    essential: true
  },
  {
    id: 'app-deepl-translator',
    category: 'apps',
    title: 'DeepL / Übersetzungs-App mit Offline-Paket laden',
    detail: 'Chinesisches Offline-Sprachpaket herunterladen für Speisekarten- und Textübersetzungen.',
    essential: true
  },

  // --- TECHNIK & GEPÄCK ---
  {
    id: 'tech-powerbank',
    category: 'tech',
    title: 'Powerbank mit sichtbarem mAh-Aufdruck (unter 20.000 mAh)',
    detail: 'ACHTUNG: An chinesischen Flughäfen werden Powerbanks ohne gut lesbaren Kapazitätsaufdruck (max. 100 Wh / 20.000 mAh) konfisziert! Muss ins Handgepäck.',
    essential: true
  },
  {
    id: 'tech-adapter',
    category: 'tech',
    title: 'Steckdosen-Adapter & Ladekabel',
    detail: 'Chinesische Steckdosen nutzen oft flache 2-polige Stecker (Typ A/C). Eurostecker passen meist, Schuko-Stecker nicht.',
    essential: false
  },
  {
    id: 'tech-thermos',
    category: 'tech',
    title: 'Kleine Thermosflasche / Trinkflasche',
    detail: 'Perfekt zum kostenlosen Nachfüllen von heißem Teewasser an Bahnhöfen, in Zügen und Hotels.',
    essential: false
  },

  // --- HYGIENE & GESUNDHEIT ---
  {
    id: 'hygiene-tissues',
    category: 'hygiene',
    title: 'Papiertaschentücher & Toilettenpapier-Vorrat (Pockets)',
    detail: 'GOLDENE REGEL: Öffentliche Toiletten in China haben fast nie Toilettenpapier! Immer 2–3 Packungen im Rucksack tragen.',
    essential: true
  },
  {
    id: 'hygiene-wetwipes',
    category: 'hygiene',
    title: 'Desinfektionstücher & Feuchttücher',
    detail: 'Ideal zum schnellen Händesäubern vor Streetfood und unterwegs nach Metro-Fahrten.',
    essential: true
  },
  {
    id: 'hygiene-meds',
    category: 'hygiene',
    title: 'Reiseapotheke (Magen-Darm, Schmerzmittel, Pflaster)',
    detail: 'Loperamid, Elektrolyte, Ibuprofen, persönliche Medikamente in Originalverpackung.',
    essential: true
  }
];
