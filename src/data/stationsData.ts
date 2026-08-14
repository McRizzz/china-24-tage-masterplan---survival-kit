import { Station } from '../types';

export const STATIONS: Station[] = [
  {
    id: 'shanghai-1',
    name: 'Shanghai (Teil 1)',
    chinese: '上海',
    pinyin: 'Shànghǎi',
    daysRange: 'Tag 1–4',
    dayCount: 4,
    theme: 'Futuristische Megacity & Koloniales Erbe',
    color: 'from-blue-600 to-indigo-700',
    bgGradient: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    description: 'Skyline am Bund, Pudong Wolkenkratzer, Yu-Garten, Französische Konzession und Wasserdorf Zhujiajiao.',
    highlights: ['The Bund (Waitan)', 'Shanghai Tower (632m)', 'Yu Garden & Teehaus', 'Französische Konzession', 'Zhujiajiao Wasserdorf']
  },
  {
    id: 'beijing',
    name: 'Peking (Beijing)',
    chinese: '北京',
    pinyin: 'Běijīng',
    daysRange: 'Tag 5–8',
    dayCount: 4,
    theme: 'Kaiserliches Herz & Die Große Mauer',
    color: 'from-amber-600 to-red-700',
    bgGradient: 'bg-red-500/10 border-red-500/20 text-red-400',
    description: 'Verbotene Stadt, Mutianyu Mauer, Himmelstempel, Sommerpalast und traditionelle Hutongs.',
    highlights: ['Verbotene Stadt (7-Tage-Reservierung!)', 'Chinesische Mauer Mutianyu', 'Himmelstempel & Tai Chi', 'Sommerpalast Yiheyuan', 'Pekingente Festmahl']
  },
  {
    id: 'xian',
    name: "Xi'an",
    chinese: '西安',
    pinyin: 'Xī\'ān',
    daysRange: 'Tag 9–11',
    dayCount: 3,
    theme: 'Wiege der Seidenstraße & Terrakotta-Armee',
    color: 'from-emerald-600 to-teal-700',
    bgGradient: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    description: 'Weltberühmte Terrakotta-Krieger, Fahrradtour auf der 14km Stadtmauer, Muslimisches Food-Viertel.',
    highlights: ['Terrakotta-Armee (UNESCO)', 'Fahrrad auf der 14km Stadtmauer', 'Muslimisches Viertel Streetfood', 'Große Wildganspagode', 'Roujiamo (Chinesischer Burger)']
  },
  {
    id: 'chengdu',
    name: 'Chengdu',
    chinese: '成都',
    pinyin: 'Chéngdū',
    daysRange: 'Tag 12–14',
    dayCount: 3,
    theme: 'Pandabären, Teehäuser & Sichuan Hotpot',
    color: 'from-green-600 to-emerald-800',
    bgGradient: 'bg-green-500/10 border-green-500/20 text-green-400',
    description: 'Riesenpandas beim Frühstück beobachten, Leshan Riesenbuddha, Entspannung im Volksgarten & Sichuan Hotpot.',
    highlights: ['Chengdu Giant Panda Breeding Base', 'Leshan Riesenbuddha (71m Felsstatue)', 'Volksgarten Teehauskultur', 'Authentischer Sichuan Hotpot', 'Kuanzhai Alleys']
  },
  {
    id: 'guilin-yangshuo',
    name: 'Guilin & Yangshuo',
    chinese: '桂林 & 阳朔',
    pinyin: 'Guìlín & Yángshuò',
    daysRange: 'Tag 15–18',
    dayCount: 4,
    theme: 'Märchenhafte Karstberge & Reisterrassen',
    color: 'from-teal-600 to-cyan-700',
    bgGradient: 'bg-teal-500/10 border-teal-500/20 text-teal-400',
    description: 'Postkartenlandschaft des 20-Yuan-Scheins, Li-Fluss Kreuzfahrt, Bambusfloß auf dem Yulong-Fluss, Lichtshow Impression Sanjie Liu.',
    highlights: ['Li-Fluss Schifffahrt (20-Yuan Motiv)', 'Bambusfloßfahrt Yulong Fluss', 'E-Roller / Radtour durch Karstberge', 'Impression Sanjie Liu Lichtshow', 'Moon Hill & Ruyi Peak']
  },
  {
    id: 'hangzhou-suzhou',
    name: 'Hangzhou & Suzhou',
    chinese: '杭州 & 苏州',
    pinyin: 'Hángzhōu & Sūzhōu',
    daysRange: 'Tag 19–23',
    dayCount: 5,
    theme: 'Kaiserliche Gärten, Teefelder & Wasserkonturen',
    color: 'from-purple-600 to-indigo-700',
    bgGradient: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    description: 'Westsee & Longjing Drachenbrunnen-Teeplantagen in Hangzhou; Historische Kanäle & Meistergärten in Suzhou.',
    highlights: ['Westsee (Xihu) UNESCO Weltkulturerbe', 'Longjing Grünteeplantagen & Lingyin Tempel', 'Garten des bescheidenen Beamten (Suzhou)', 'Pingjiang Road Kanalromantik', 'Seidenweber-Kultur']
  },
  {
    id: 'shanghai-return',
    name: 'Shanghai (Abschluss & Rückflug)',
    chinese: '上海返程',
    pinyin: 'Shànghǎi Fǎnchéng',
    daysRange: 'Tag 23–24',
    dayCount: 2,
    theme: 'Letzte Souvenirs & Maglev Transrapid High-Speed Transfer',
    color: 'from-blue-600 to-slate-700',
    bgGradient: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    description: 'Rückkehr nach Shanghai (nur 25 Min. von Suzhou), Abschiedsessen, Souvenirs & 300 km/h Maglev Fahrt zum Flughafen Pudong.',
    highlights: ['25 Min. High-Speed Zug von Suzhou', 'Abschiedsessen & Skyline bei Nacht', 'Maglev Transrapid (8 Min. zum Flughafen)', 'Pudong International Airport (PVG)']
  }
];
