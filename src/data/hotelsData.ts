import { HotelBrand } from '../types';

export const HOTEL_BRANDS: HotelBrand[] = [
  {
    id: 'ji-hotel',
    nameGerman: 'Ji Hotel',
    nameChinese: '全季酒店',
    namePinyin: 'Quánjì Jiǔdiàn',
    tier: 'Mittelklasse',
    stars: 4,
    priceEur: '40–65 €',
    priceRmb: '300–500 ¥',
    description: 'Minimalistisches Zen-Design, helle Eichenholztöne, extrem sauber, erstklassige Betten und erstklassige Schallisolierung.',
    features: [
      'Zen-Teegeschirr & erlesener Tee im Zimmer',
      'Sehr bequeme Memory-Foam Matratzen',
      'Kostenlose Selbstbedienungs-Waschmaschinen & Trockner',
      'Englischsprachige Menüs & zuverlässiges High-Speed WLAN'
    ],
    bestFor: 'Der absolute Preis-Leistungs-Favorit für Paare und Individualreisende in Shanghai, Peking, Xi\'an und Hangzhou.',
    proTip: 'Zeigt dem Taxifahrer die Schriftzeichen: „请带我去全季酒店“ (Bitte bringen Sie mich zum Ji Hotel).'
  },
  {
    id: 'orange-hotel',
    nameGerman: 'Orange Hotel (Crystal)',
    nameChinese: '桔子酒店 / 桔子水晶',
    namePinyin: 'Júzi Jiǔdiàn',
    tier: 'Mittelklasse',
    stars: 4,
    priceEur: '45–70 €',
    priceRmb: '350–550 ¥',
    description: 'Frisches, modernes Lifestyle-Hotel mit cleverer Smart-Home-Technologie (intelligente Lichtsteuerung, Bluetooth-Soundsysteme).',
    features: [
      'Stylisches, jugendliches Boutique-Design',
      'Smart-Room-Steuerung (Vorhänge, Beleuchtungsstimmungen)',
      'Frischer Orangenduft & Bonbons in der Lobby',
      'Sehr zentrale Lagen nahe U-Bahn-Stationen'
    ],
    bestFor: 'Reisende, die modernes urbanes Design und Smart-Tech-Komfort schätzen.',
    proTip: 'Die Variante "Orange Crystal" (桔子水晶) ist noch eine Spur gehobener mit großartigen Regenduschen.'
  },
  {
    id: 'atour-hotel',
    nameGerman: 'Atour Hotel',
    nameChinese: '亚朵酒店',
    namePinyin: 'Yàduǒ Jiǔdiàn',
    tier: 'Gehobene Mittelklasse',
    stars: 4.5,
    priceEur: '55–85 €',
    priceRmb: '420–680 ¥',
    description: 'Chinas Premium-Kette mit Fokus auf Literatur, Fotografie und Tee. Gehobener Service, erstklassiges Frühstücksbuffet und 24h-Bibliotheks-Lounge.',
    features: [
      'Riesige Teeauswahl & traditionelle Willkommens-Teezeremonie',
      'Hervorragendes chinesisches & westliches Frühstücksbuffet',
      'Sehr geräumige Zimmer mit Daunendecken & Kissenmenü',
      'Häufig Lieferservice-Roboter, die Snacks aufs Zimmer bringen!'
    ],
    bestFor: 'Gäste, die nach langen Erkundungstagen maximalen Schlafkomfort und Entspannung suchen.',
    proTip: 'Atour Hotels haben oft hervorragende Lagen direkt an den Altstadt-Highlights (z. B. am Bell Tower in Xi\'an).'
  },
  {
    id: 'hanting-hotel',
    nameGerman: 'Hanting Hotel',
    nameChinese: '汉庭酒店',
    namePinyin: 'Hàntíng Jiǔdiàn',
    tier: 'Budget',
    stars: 3,
    priceEur: '30–45 €',
    priceRmb: '220–350 ¥',
    description: 'Chinas beliebteste und größte Budget-Kette (gehört zur Huazhu-Gruppe). Schnörkellos, funktional, modernisiert und tadellos sauber.',
    features: [
      'Unschlagbares Preis-Leistungs-Verhältnis',
      'Sehr hohe Sauberkeitsstandards mit versiegelten Trinkgläsern',
      'Schneller 24/7 Self-Check-in & Check-out',
      'Dichte Abdeckung an allen Verkehrsknotenpunkten'
    ],
    bestFor: 'Budgetbewusste Reisende und für kurze Zwischenstopps an Bahnhöfen.',
    proTip: 'Achtet auf Hotels mit dem Zusatz "Hanting 3.5" – das sind die neuesten, komplett renovierten Flagship-Filialen.'
  }
];

export const HOTEL_BOOKING_RULES = [
  {
    title: 'Ausländerlizenz (Foreigners Allowed)',
    desc: 'In China dürfen gesetzlich nur Hotels mit einer Lizenz für ausländische Gäste ("Foreign Guests Allowed") Touristen ohne chinesischen Personalausweis beherbergen. Wenn ihr über Trip.com oder Booking.com bucht, filtert das Portal dies automatisch heraus.'
  },
  {
    title: 'Pass-Registrierung an der Rezeption',
    desc: 'Beim Check-in muss jeder Gast seinen Original-Reisepass vorlegen. Das Hotel fotografiert den Pass und meldet den Aufenthalt automatisch bei der örtlichen Polizeidienststelle an (Public Security Bureau). Ihr erhaltet euren Pass nach 2 Minuten direkt zurück.'
  },
  {
    title: 'Kaution (Deposit)',
    desc: 'Einige Hotels verlangen beim Check-in eine kleine Kaution (ca. 100–300 RMB), die bequem per Alipay oder Kreditkarte autorisiert und beim Check-out sofort freigegeben wird.'
  }
];
