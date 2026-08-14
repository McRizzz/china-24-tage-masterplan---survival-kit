import { ItineraryDay } from '../types';

export const ITINERARY_DAYS: ItineraryDay[] = [
  // --- SHANGHAI (TAG 1-4) ---
  {
    day: 1,
    stationId: 'shanghai-1',
    stationName: 'Shanghai',
    stationChinese: '上海',
    title: 'Ankunft & Der legendäre Bund',
    subtitle: 'Eintauchen in Chinas Megacity & Blick auf die futuristische Pudong-Skyline',
    morning: 'Landung am Flughafen Shanghai Pudong (PVG). Schnelle Einreisekontrolle mit Reisepass (visumfrei für deutsche Staatsbürger bis 30 Tage). Fahrt mit der Metro Linie 2 oder Maglev ins Stadtzentrum und Check-in im Hotel (z. B. Ji Hotel nahe People\'s Square).',
    afternoon: 'Frisch machen, Jetlag abschütteln und erster Spaziergang über den People\'s Square (Volksplatz) und entlang der Fußgängerzone East Nanjing Road.',
    evening: 'Spaziergang an der berühmten Uferpromenade The Bund (Waitan). Wenn die Lichter um 19:00 Uhr angehen, strahlen die historischen Kolonialbauten auf der einen und die Wolkenkratzer von Lujiazui auf der anderen Seite. Fahrt mit der 2-RMB-Flussfähre über den Huangpu-Fluss.',
    highlights: ['The Bund (Waitan)', 'Pudong Skyline Lichtershow', '2-RMB Huangpu Flussfähre', 'East Nanjing Road'],
    foodRecommendation: {
      dishGerman: 'Xiaolongbao (Gedämpfte Teigtaschen)',
      dishChinese: '小笼包',
      dishPinyin: 'Xiǎolóngbāo',
      description: 'Zarte gedämpfte Teigtaschen mit saftiger Gemüse- oder Geflügelfüllung und feiner, heißer Brühe.'
    },
    proTip: 'In der Alipay-App direkt unter "Transport" den U-Bahn-Code für Shanghai aktivieren. Damit spart ihr euch jedes Schlangestehen am Ticketautomaten.',
    photoSpot: 'The Bund gegenüber dem Oriental Pearl Tower um die blaue Stunde (ca. 18:45–19:30 Uhr).',
    hotelRecommendation: 'Ji Hotel (People\'s Square oder Jing\'an Temple)'
  },
  {
    day: 2,
    stationId: 'shanghai-1',
    stationName: 'Shanghai',
    stationChinese: '上海',
    title: 'Tradition & Kolonialflair',
    subtitle: 'Klassischer Yu-Garten, historischer Basar und die Französische Konzession',
    morning: 'Früher Besuch des Yu-Gartens (Yu Garden / 豫园) aus der Ming-Dynastie mit gewundenen Drachenmauern, Karpfenteichen und Pavillons. Danach Bummel über die Zickzack-Brücke zum ältesten Teehaus Huxinting.',
    afternoon: 'Spaziergang durch die schattigen Platanen-Alleen der ehemaligen Französischen Konzession (French Concession). Erkundung der engen Backsteingassen von Tianzifang (Shikumen-Architektur) mit Kunsthandwerk und Cafés.',
    evening: 'Abendessen im Viertel Xintiandi oder in einem traditionellen Restaurant für Shanghaier Küche (Benbang-Küche).',
    highlights: ['Yu Garden (豫园)', 'Huxinting Teehaus', 'Französische Konzession', 'Tianzifang Gassen'],
    foodRecommendation: {
      dishGerman: 'Shengjianbao (Gebratene Shanghaier Teigtaschen)',
      dishChinese: '生煎包',
      dishPinyin: 'Shēngjiānbāo',
      description: 'Unten herrlich knusprig in der Riesenpfanne ausgebacken, oben weich mit Sesam und Frühlingszwiebeln bestreut.'
    },
    proTip: 'Im Yu-Garten früh um 08:30 Uhr da sein, bevor die großen Reisegruppen eintreffen.',
    photoSpot: 'Tianzifang Backsteingassen mit roten Laternen und Hängepflanzen.'
  },
  {
    day: 3,
    stationId: 'shanghai-1',
    stationName: 'Shanghai',
    stationChinese: '上海',
    title: 'Über den Wolken von Pudong',
    subtitle: 'Shanghai Tower, Wolkenkratzer-Aussicht & Streetfood-Shopping',
    morning: 'Fahrt mit der U-Bahn nach Pudong Lujiazui. Auffahrt auf den Shanghai Tower (632 m, zweithöchstes Gebäude der Welt) mit dem weltrekord-schnellen Aufzug zur 118. Etage für ein 360-Grad-Panorama.',
    afternoon: 'Bummel durch das moderne Finanzviertel (vorbei am Flaschenöffner Shanghai World Financial Center und Jin Mao Tower). Nachmittags Einkaufen und Entdecken auf der Nanjing West Road und im Jing\'an-Tempel.',
    evening: 'Cocktail oder Mocktail in einer Rooftop-Bar am Bund (z. B. Vue Bar oder Bar Rouge) mit atemberaubendem Blick auf den Huangpu-Fluss.',
    highlights: ['Shanghai Tower Aussichtsplattform (118. Stock)', 'Jing\'an Tempel', 'Lujiazui Finanzviertel', 'Rooftop Blick'],
    foodRecommendation: {
      dishGerman: 'Songshu Guiyu (Knuspriger Mandarin-Fisch süß-sauer)',
      dishChinese: '松鼠鳜鱼',
      dishPinyin: 'Sōngshǔ guìyú',
      description: 'Ikonisches Traditionsgericht: Frischer Fisch meisterhaft fächerförmig eingeschnitten, goldgelb knusprig ausgebacken und mit süß-saurer Sauce und Pinienkernen serviert.'
    },
    proTip: 'Tickets für den Shanghai Tower am besten über Trip.com buchen, um Warteschlangen am Schalter zu umgehen.',
    photoSpot: 'Vom Lujiazui Fußgänger-Kreisverkehr nach oben zu den 3 Super-Wolkenkratzern fotografieren.'
  },
  {
    day: 4,
    stationId: 'shanghai-1',
    stationName: 'Shanghai nach Peking',
    stationChinese: '上海 → 北京',
    title: 'Wasserdorf Zhujiajiao & High-Speed nach Peking',
    subtitle: 'Historische Kanäle & 350 km/h Schnellzug ins kaiserliche Herz Chinas',
    morning: 'Halbtagesausflug ins historische Wasserdorf Zhujiajiao (bequem mit der Metro-Linie 17 erreichbar). Schlendern über uralte Steinbrücken, durch enge Kopfsteinpflastergassen und entlang ruhiger Wasserkanäle.',
    afternoon: 'Gondelfahrt auf den Kanälen von Zhujiajiao. Rückfahrt zum Hotel, Gepäck abholen und Transfer zum Bahnhof Shanghai Hongqiao (上海虹桥站).',
    evening: 'Fahrt mit dem High-Speed Zug (G-Train, ca. 350 km/h) nach Peking (ca. 4,5 Stunden). Ankunft am Bahnhof Beijing South (北京南站), Transfer zum Hotel (z. B. Nähe Wangfujing/Dongcheng).',
    highlights: ['Zhujiajiao Wasserdorf & Fangsheng-Brücke', 'Gondelfahrt auf Kanälen', 'High-Speed Zugfahrt (4,5h mit 350 km/h)', 'Ankunft in Beijing'],
    foodRecommendation: {
      dishGerman: 'Zongzi (Gedämpfte Klebreispäckchen im Schilfblatt)',
      dishChinese: '粽子',
      dishPinyin: 'Zòngzi',
      description: 'Traditionelle Spezialität aus Zhujiajiao, herzhaft mit mariniertem Fleisch oder süß mit roten Bohnen gefüllt.'
    },
    logistics: {
      trainInfo: 'G-Zug (Fuxing Hao) Shanghai Hongqiao → Beijing South',
      duration: 'ca. 4 Std. 28 Min.',
      speed: '350 km/h',
      departureStation: 'Shanghai Hongqiao (上海虹桥)',
      arrivalStation: 'Beijing South (北京南)',
      ticketAlert: 'Zugticket 14 Tage vorab auf Trip.com buchen. Am Bahnhof reicht der Reisepass am Scanner!'
    },
    proTip: 'Im Schnellzug gibt es heißes Wasser und Bordverpflegung. Ihr könnt euch im Bahnhof vor Abfahrt frische Früchte und Nudeln kaufen.',
    hotelRecommendation: 'Orange Hotel oder Ji Hotel (Nähe Wangfujing / Dongcheng)'
  },

  // --- PEKING (TAG 5-8) ---
  {
    day: 5,
    stationId: 'beijing',
    stationName: 'Peking (Beijing)',
    stationChinese: '北京',
    title: 'Das Kaiserliche Zentrum & Pekingente',
    subtitle: 'Tian\'anmen-Platz, Verbotene Stadt und Panoramablick vom Jingshan-Park',
    morning: 'Früher Sicherheitscheck am Tian\'anmen-Platz (Reisepass erforderlich!). Betreten der majestätischen Verbotenen Stadt (Palastmuseum / 故宫) durch das Meridian-Tor. Erkundung der Hallen der höchsten Harmonie.',
    afternoon: 'Durchqueren des Kaiserlichen Gartens und Verlassen durch das Nordtor (Shenwumen). Direkt gegenüber auf den Hügel im Jingshan-Park steigen für das ikonische Panorama über die goldenen Palastdächer.',
    evening: 'Großes Willkommensessen in Peking: Authentische, knusprige Pekingente (Beijing Kaoya) im Traditionsrestaurant (z. B. Siji Minfu / 四季民福 oder Dadong).',
    highlights: ['Tian\'anmen-Platz', 'Verbotene Stadt (Palastmuseum)', 'Jingshan-Park Aussichtshügel', 'Traditionelle Pekingente'],
    foodRecommendation: {
      dishGerman: 'Pekingente (Beijing Kaoya)',
      dishChinese: '北京烤鸭',
      dishPinyin: 'Běijīng kǎoyā',
      description: 'Hauchdünne knusprige Entenhaut, saftiges Fleisch, serviert mit Frühlingszwiebeln, Gurkenstreifen und süßer Bohnensauce in winzigen Dämpffladen.'
    },
    proTip: 'ACHTUNG: Tickets für die Verbotene Stadt MÜSSEN exakt 7 Tage vorher um 20:00 Uhr Pekinger Zeit online gebucht werden (über Trip.com oder WeChat)! Vor Ort gibt es keine Kasse.',
    photoSpot: 'Wanguiting-Pavillon im Jingshan-Park mit Blick auf die gesamte Verbotene Stadt im Nachmittagslicht.'
  },
  {
    day: 6,
    stationId: 'beijing',
    stationName: 'Peking (Beijing)',
    stationChinese: '北京',
    title: 'Die Große Mauer bei Mutianyu',
    subtitle: 'Wandern auf dem Weltwunder der Menschheit & Abfahrt per Sommerrodelbahn',
    morning: 'Tagesausflug zur Großen Mauer bei Mutianyu (慕田峪长城) – ca. 1,5 Std. Fahrt per Didi oder speziellem Touristen-Shuttlebus. Auffahrt mit der Seilbahn zum Wachturm 14.',
    afternoon: 'Wanderung entlang der Mauerzinnen zwischen Wachturm 14 und Turm 20 (spektakuläre Ausblicke auf die bewaldeten Bergkämme). Anschließend rasante Abfahrt mit der berühmten Sommerrodelbahn (Toboggan)!',
    evening: 'Rückkehr nach Peking. Entspannter Abendspaziergang um den Shichahai-See mit seinen lebendigen Bars und Straßenmusikern.',
    highlights: ['Große Mauer bei Mutianyu', 'Wanderung auf den Zinnen', 'Sommerrodelbahn-Abfahrt', 'Shichahai-See'],
    foodRecommendation: {
      dishGerman: 'Zhajiangmian (Pekinger Nudeln mit aromatischer Sojabohnensauce)',
      dishChinese: '炸酱面',
      dishPinyin: 'Zhájiàngmiàn',
      description: 'Handgemachte dicke Weizennudeln, gekrönt von herzhafter, aromatischer Sojabohnensauce, frischen Gurkenstreifen, Sojasprossen und Radieschen.'
    },
    proTip: 'Mutianyu ist viel schöner und deutlich weniger überlaufen als der Abschnitt Badaling. Feste Wanderschuhe und Sonnenschutz einpacken!',
    photoSpot: 'Wachturm 20 bei Mutianyu mit dem geschwungenen Mauerverlauf über die Bergkämme.'
  },
  {
    day: 7,
    stationId: 'beijing',
    stationName: 'Peking (Beijing)',
    stationChinese: '北京',
    title: 'Himmelstempel & Der Sommerpalast',
    subtitle: 'Morgendliches Tai Chi im Park & kaiserliche Sommerresidenz am Kunming-See',
    morning: 'Früh zum Himmelstempel (Tiantan / 天坛). Beobachtet hunderte einheimische Senioren beim Tai Chi, Fächertanz, Kalligrafie mit Wasser auf dem Pflaster und Hacky Sack. Besichtigung der kreisrunden Halle der Erntegebete.',
    afternoon: 'Fahrt mit der Metro zum Sommerpalast (Yiheyuan / 颐和园). Spaziergang entlang des Langen Korridors mit tausenden mythologischen Malereien, Besichtigung des Marmorschiffs und Bootsfahrt auf dem Kunming-See.',
    evening: 'Abendessen in der Nähe des Sommerpalasts oder Rückfahrt ins Zentrum.',
    highlights: ['Himmelstempel (Tiantan)', 'Morgenaktivitäten & Tai Chi im Tiantan-Park', 'Sommerpalast (Yiheyuan)', 'Langer Korridor & Marmorschiff'],
    foodRecommendation: {
      dishGerman: 'Chuan\'r (Nordchinesische Lammfleisch-Grillspieße mit Kreuzkümmel)',
      dishChinese: '羊肉串',
      dishPinyin: 'Yángròu chuàn',
      description: 'Über Holzkohle gegrillte zarte Lammfleischspieße, gewürzt mit reichlich gemahlenem Kreuzkümmel und Chilipulver.'
    },
    proTip: 'Im Tiantan-Park am besten den "Through Ticket" (All-Inclusive-Pass) buchen, damit ihr auch in die Echowand und die Erntegebetshalle kommt.',
    photoSpot: 'Halle der Erntegebete von der Südachse aus; 17-Bogen-Brücke im Sommerpalast.'
  },
  {
    day: 8,
    stationId: 'beijing',
    stationName: 'Peking nach Xi\'an',
    stationChinese: '北京 → 西安',
    title: 'Hutongs, Lamaklöster & Zug nach Xi\'an',
    subtitle: 'Traditionelle Wohngassen, duftender Weihrauch & Weiterfahrt zur Seidenstraße',
    morning: 'Spaziergang durch die traditionellen Hutong-Gassen rund um den Glocken- und Trommelturm (Gulou & Zhonglou). Kaffeepause in einem versteckten Dachterrassencafé mit Blick auf die grauen Ziegeldächer.',
    afternoon: 'Besuch des Lama-Tempels (Yonghegong / 雍和宫) – Pekings prächtigstes tibetisch-buddhistisches Kloster mit der 18 Meter hohen Buddha-Statue aus einem einzigen Sandelholzstamm. Anschließend Transfer zum Bahnhof Beijing West.',
    evening: 'Fahrt mit dem High-Speed-Zug nach Xi\'an (ca. 4,5 Stunden). Ankunft am Bahnhof Xi\'an North (西安北站), Check-in im Hotel (nahe Glockenturm / Bell Tower).',
    highlights: ['Glocken- und Trommelturm Hutongs', 'Lama-Tempel (Yonghegong)', '18m Sandelholz-Buddha', 'Schnellzugfahrt nach Shaanxi'],
    foodRecommendation: {
      dishGerman: 'Jianbing (Chinesischer herzhafter Frühstücks-Crêpe)',
      dishChinese: '煎饼果子',
      dishPinyin: 'Jiānbing guǒzi',
      description: 'Auf der runden Grillplatte frisch zubereitet mit Ei, Frühlingszwiebeln, Koriander, süßer Chilisauce und einem knusprigen Wonton-Cracker in der Mitte.'
    },
    logistics: {
      trainInfo: 'G-Zug Beijing West → Xi\'an North',
      duration: 'ca. 4 Std. 20 Min.',
      speed: '300–350 km/h',
      departureStation: 'Beijing West (北京西)',
      arrivalStation: 'Xi\'an North (西安北)',
      ticketAlert: 'Zugtickets 14 Tage vorher auf Trip.com sichern.'
    },
    proTip: 'Im Lama-Tempel bekommt jeder Besucher am Eingang kostenlos ökologische Weihrauchstäbchen geschenkt.',
    hotelRecommendation: 'Atour Hotel oder Ji Hotel (nahe Bell Tower / Glockenturm)'
  },

  // --- XI'AN (TAG 9-11) ---
  {
    day: 9,
    stationId: 'xian',
    stationName: 'Xi\'an',
    stationChinese: '西安',
    title: 'Die Armee des ersten Kaisers',
    subtitle: 'Begegnung mit den lebensgroßen Kriegern der Terrakotta-Armee',
    morning: 'Fahrt zur weltberühmten Terrakotta-Armee (ca. 1 Stunde nordöstlich von Xi\'an per Didi oder Expressbus). Besichtigung von Grube 1 (die größte Halle mit über 6.000 Fußsoldaten in Schlachtordnung).',
    afternoon: 'Erkundung von Grube 2 (Kavallerie und Bogenschützen), Grube 3 (Kommandozentrale) und der Ausstellung der filigranen Bronzewagen des Kaisers Qin Shi Huang. Rückfahrt nach Xi\'an.',
    evening: 'Erster Bummel durch das abends hell erleuchtete Stadtzentrum rund um den Glockenturm (Bell Tower) und Trommelturm.',
    highlights: ['Terrakotta-Armee Grube 1, 2 & 3', 'Kaiserliche Bronzewagen', 'Glockenturm bei Nacht'],
    foodRecommendation: {
      dishGerman: 'Biangbiang Nudeln (Gürtel-Nudeln mit Chiliöl & Knoblauch)',
      dishChinese: '油泼Biangbiang面',
      dishPinyin: 'Yóupō Biángbiángmiàn',
      description: 'Extrabreite, handgezogene dicke Nudeln, übergossen mit zischend heißem Chili-Knoblauch-Öl, Sojasauce und frischem Gemüse. Der Name stammt vom schlagenden Geräusch beim Nudelteig-Kneten!'
    },
    proTip: 'Vor Ort einen Audioguide mieten oder die kostenlosen Schautafeln gründlich lesen – die Details der einzelnen Gesichter sind verblüffend (kein Krieger gleicht dem anderen).',
    photoSpot: 'Der vordere Eingangssteg in Grube 1 mit dem Blick über das gesamte Terrakotta-Heer.'
  },
  {
    day: 10,
    stationId: 'xian',
    stationName: 'Xi\'an',
    stationChinese: '西安',
    title: 'Radtour auf der Stadtmauer & Food-Himmel',
    subtitle: '14 km auf der 600 Jahre alten Ming-Mauer & Streetfood im Muslimischen Viertel',
    morning: 'Aufstieg zur alten Stadtmauer von Xi\'an (eine der besterhaltenen mittelalterlichen Stadtbefestigungen weltweit). Leiht euch Fahrräder und radelt die kompletten 14 Kilometer oben auf der 12 Meter breiten Mauer rund um die historische Altstadt.',
    afternoon: 'Besuch der Großen Moschee von Xi\'an – eine faszinierende architektonische Verschmelzung von traditionellem chinesischem Pagodenstil und islamischer Gartenkunst.',
    evening: 'Tauchgang in das kulinarische Paradies des Muslimischen Viertels (Huimin Jie): dampfende Garküchen, hämmernde Zuckerbäcker, gegrillte Lammspieße und süße Granatapfelsäfte.',
    highlights: ['Fahrradtour auf der 14km Stadtmauer', 'Große Moschee von Xi\'an', 'Muslimisches Viertel (Huimin Jie) Food Market'],
    foodRecommendation: {
      dishGerman: 'Roujiamo (Der chinesische Burger)',
      dishChinese: '肉夹馍',
      dishPinyin: 'Ròujiāmó',
      description: 'Ein knuspriges, warmes Fladenbrot gefüllt mit stundenlang saftig geschmortem, fein gehacktem Fleisch und Gewürzen. Ein absolutes Muss in Shaanxi!'
    },
    proTip: 'Die Radtour auf der Stadtmauer am besten am späten Vormittag oder späten Nachmittag machen, wenn die Sonne nicht senkrecht steht.',
    photoSpot: 'Auf der Stadtmauer mit Blick auf das Südtor (Yongning-Tor) und die moderne Stadtsilhouette im Hintergrund.'
  },
  {
    day: 11,
    stationId: 'xian',
    stationName: 'Xi\'an nach Chengdu',
    stationChinese: '西安 → 成都',
    title: 'Wildganspagode & High-Speed nach Sichuan',
    subtitle: 'Tang-Dynastie Kultur & Fahrt in die Heimat der Pandas und des Hotpots',
    morning: 'Besuch der Großen Wildganspagode (Dayan Ta / 大雁塔), erbaut im Jahr 652 zur Aufbewahrung buddhistischer Schriften, die der Mönch Xuanzang aus Indien mitbrachte. Spaziergang durch den Da Ci\'en Tempelpark.',
    afternoon: 'Bummel durch das Fußgänger-Areal "Da Tang Everbright City". Nachmittags Transfer zum Bahnhof Xi\'an North.',
    evening: 'Fahrt mit dem Schnellzug durch die Qinling-Bergtunnel nach Chengdu (ca. 3,5–4 Stunden). Ankunft in der Provinz Sichuan, Check-in im Hotel (nahe Chunxi Road / Tianfu Square).',
    highlights: ['Große Wildganspagode (Dayan Ta)', 'Da Tang Everbright City', 'Schnellzugfahrt durch die Qinling-Berge', 'Ankunft in Chengdu'],
    foodRecommendation: {
      dishGerman: 'Yangrou Paomo (Fladenbrot-Suppe mit geschmortem Lammfleisch)',
      dishChinese: '羊肉泡馍',
      dishPinyin: 'Yángròu pàomó',
      description: 'Traditionelles Ritual: Ihr zupft das trockene Fladenbrot selbst in erbsengroße Stücke, die der Koch dann mit kochend heißer Lammsuppe, Glasnudeln und Frühlingszwiebeln übergießt.'
    },
    logistics: {
      trainInfo: 'G-Zug Xi\'an North → Chengdu East',
      duration: 'ca. 3 Std. 45 Min.',
      speed: '250–300 km/h',
      departureStation: 'Xi\'an North (西安北)',
      arrivalStation: 'Chengdu East (成都东)',
      ticketAlert: 'Ticket 14 Tage vorab buchen.'
    },
    proTip: 'Chengdu ist bekannt für seinen entspannten Lebensstil ("Die Stadt, die man nie verlassen möchte"). Hier geht alles etwas gemütlicher zu.',
    hotelRecommendation: 'Hanting Hotel, Orange Hotel oder Ibis Styles (Nähe Chunxi Road)'
  },

  // --- CHENGDU (TAG 12-14) ---
  {
    day: 12,
    stationId: 'chengdu',
    stationName: 'Chengdu',
    stationChinese: '成都',
    title: 'Riesenpandas & Teehaus-Gemütlichkeit',
    subtitle: 'Frühstück mit den Pandas & Entschleunigung im berühmten Volksgarten',
    morning: 'Frühe Ankunft (ca. 07:30–08:00 Uhr) an der Chengdu Giant Panda Breeding Base (成都大熊猫繁育研究基地). Um diese Zeit sind die Riesenpandas und die verspielten Roten Pandas am aktivsten und fressen frischen Bambus.',
    afternoon: 'Rückfahrt ins Stadtzentrum. Entspannung im People\'s Park (Renmin Gongyuan / 人民公园): Setzt euch in das historische Heming-Teehaus unter Bambusdächer, trinkt Jasmintee aus Gaiwan-Tassen und beobachtet das Geschehen.',
    evening: 'Erster Abend in Chengdu: Spaziergang über die lebendige Fußgängerzone Chunxi Road und Fotos vom kletternden 3D-Riesenpanda an der Fassade des IFS-Einkaufszentrums.',
    highlights: ['Giant Panda Breeding Base (Morgens füttern)', 'Rote Pandas in den Bäumen', 'Heming Teehaus im Volksgarten', 'IFS Panda-Skulptur'],
    foodRecommendation: {
      dishGerman: 'Dan Dan Nudeln (Würzige Sichuan-Nudeln mit Chili-Sesam-Sauce)',
      dishChinese: '担担面',
      dishPinyin: 'Dàndànmiàn',
      description: 'Feine Nudeln in einer pikanten Sauce aus Sichuan-Pfefferöl, Sesampaste, Knoblauch, gerösteten Erdnüssen und frischen Frühlingszwiebeln.'
    },
    proTip: 'Unbedingt vor 08:30 Uhr bei den Pandas sein! Ab 10:30 Uhr schlafen die meisten ausgewachsenen Pandas im Schatten oder in klimatisierten Räumen.',
    photoSpot: 'Panda-Kinderstube (Moon/Sun Delivery House) und der kletternde Riesenpanda auf dem Dach des IFS Gebäudes.'
  },
  {
    day: 13,
    stationId: 'chengdu',
    stationName: 'Chengdu & Leshan',
    stationChinese: '成都 & 乐山',
    title: 'Der Große Buddha von Leshan & Sichuan Hotpot',
    subtitle: '71 Meter hohe Felsstatue & das legendäre kulinarische Feuerwerk am Abend',
    morning: 'Tagesausflug nach Leshan: Mit dem Schnellzug in nur 45–55 Minuten von Chengdu nach Leshan. Besichtigung des Großen Buddha von Leshan (乐山大佛) – die größte sitzende Steinstatue der Welt, direkt in den roten Sandsteinfelsen geschlagen.',
    afternoon: 'Abstieg über die schmalen Treppen entlang der Füße des Buddhas oder Bootsfahrt auf dem Fluss für die perfekte Gesamtansicht. Nachmittags Rückfahrt mit dem Zug nach Chengdu.',
    evening: 'Das kulinarische Highlight: Echter Sichuan Hotpot (Sichuan Huoguo)! Bestellt einen zweigeteilten Topf (Yuan Yang Guo: eine Hälfte feurig mit Chilis und betäubendem Sichuan-Pfeffer "Mala", die andere mild mit Pilz- oder Knochenbrühe).',
    highlights: ['Leshan Riesenbuddha (71 Meter)', 'Treppenabstieg an den Füßen des Buddhas', 'Flussblick auf die 3 Flussmündungen', 'Sichuan Hotpot Festmahl'],
    foodRecommendation: {
      dishGerman: 'Sichuan Hotpot (Yuan Yang Zweigeteilter Feuertopf)',
      dishChinese: '鸳鸯火锅',
      dishPinyin: 'Yuānyāng huǒguō',
      description: 'Frische Zutaten (hauchdünnes Rindfleisch, Lotuswurzeln, Tofu, Pilze) selbst am Tisch in der brodelnden Brühe garen und in Sesamöl mit Knoblauch dippen.'
    },
    proTip: 'Für Hotpot-Anfänger: Immer "Wei La" (微辣 = mild scharf) bestellen. Sogar mild scharf hat in Sichuan ordentlich Feuer!',
    photoSpot: 'Vom Boot aus der Gesamtwinkel auf den 71m hohen Leshan Buddha am Fluss.'
  },
  {
    day: 14,
    stationId: 'chengdu',
    stationName: 'Chengdu nach Guilin',
    stationChinese: '成都 → 桂林',
    title: 'Kuanzhai-Gassen & High-Speed nach Guilin',
    subtitle: 'Alte Qing-Architektur, Sichuan-Oper & Fahrt in die märchenhafte Karstwelt',
    morning: 'Spaziergang durch die malerischen Kuanzhai-Gassen (Breite und Enge Gassen / 宽窄巷子) mit restaurierten Innenhöfen aus der Qing-Dynastie, Holzschnitzereien und Streetfood-Ständen.',
    afternoon: 'Besuch des Wenshu-Klosters mit seinen friedlichen Gärten. Nachmittags Transfer zum Bahnhof Chengdu East.',
    evening: 'Fahrt mit dem Hochgeschwindigkeitszug durch die malerischen Berglandschaften von Guizhou und Guangxi nach Guilin (ca. 5,5 Stunden). Ankunft in Guilin, Hotel-Check-in.',
    highlights: ['Kuanzhai Alleys (Breite und Enge Gassen)', 'Wenshu-Kloster', 'Panoramazugfahrt nach Südchina', 'Ankunft in Guilin'],
    foodRecommendation: {
      dishGerman: 'Mapo Tofu (Würziger Tofu mit fermentierten Bohnen & Sichuan-Pfeffer)',
      dishChinese: '麻婆豆腐',
      dishPinyin: 'Mápó dòufu',
      description: 'Seidiger Tofu in feuriger, leicht betäubender Chilisauce mit Rinderhack und Frühlingszwiebeln – die Essenz der Sichuan-Küche.'
    },
    logistics: {
      trainInfo: 'G-Zug Chengdu East → Guilin West / Guilin',
      duration: 'ca. 5 Std. 30 Min.',
      speed: '250–300 km/h',
      departureStation: 'Chengdu East (成都东)',
      arrivalStation: 'Guilin (桂林 / 桂林西)',
      ticketAlert: 'Zugticket 14 Tage vorab auf Trip.com buchen.'
    },
    proTip: 'Die Zugfahrt von Chengdu nach Guilin führt über spektakuläre Brücken und Viadukte durch die Berge!',
    hotelRecommendation: 'Hotel im Zentrum von Guilin oder direkt Transfer nach Yangshuo'
  },

  // --- GUILIN & YANGSHUO (TAG 15-18) ---
  {
    day: 15,
    stationId: 'guilin-yangshuo',
    stationName: 'Guilin nach Yangshuo',
    stationChinese: '桂林 → 阳朔',
    title: 'Schifffahrt auf dem Li-Fluss',
    subtitle: 'Die weltberühmte 20-Yuan-Postkartenlandschaft zwischen kegelförmigen Karstbergen',
    morning: 'Früher Transfer zum Schiffsanleger Zhujiang/Mopanshan. Start der 4-stündigen Li-Fluss-Kreuzfahrt (Lijiang / 漓江) von Guilin stromabwärts nach Yangshuo.',
    afternoon: 'Vorbeigleiten an den majestätischen Karstkegeln, Wasserbüffeln am Ufer, Bambushainen und Fischern mit Kormoranen. Fotostopp an der berühmten Stelle "Gelbe Tuch-Spiegelung" (das Motiv auf dem 20-Yuan-Geldschein!). Ankunft in Yangshuo.',
    evening: 'Check-in im Hotel (am besten in den ruhigen Reisfeldern am Yulong-Fluss). Abends Bummel über die West Street (Xi Jie) in Yangshuo.',
    highlights: ['Li-Fluss Schifffahrt (4 Stunden)', '20-Yuan Geldschein-Fotomotiv (Xingping)', 'Karstberge & Kormoranfischer', 'West Street Yangshuo'],
    foodRecommendation: {
      dishGerman: 'Bierfisch nach Yangshuo-Art (Pijiu Yu)',
      dishChinese: '阳朔啤酒鱼',
      dishPinyin: 'Yángshuò píjiǔ yú',
      description: 'Frischer Flussfisch, knusprig angebraten und mit lokalem Bier, Tomaten, Paprika und Knoblauch geschmort – das berühmteste Gericht von Yangshuo.'
    },
    proTip: 'Haltet einen 20-Yuan-Geldschein griffbereit, um das Foto zu schießen, bei dem ihr den Geldschein vor die echte Landschaft haltet!',
    photoSpot: 'Oberdeck des Schiffes bei Xingping mit Blick auf die Karstspitzen der 20-Yuan-Note.',
    hotelRecommendation: 'Gästehaus oder Boutique-Hotel in den Reisfeldern am Yulong-Fluss (ruhig & traumhaft)'
  },
  {
    day: 16,
    stationId: 'guilin-yangshuo',
    stationName: 'Yangshuo',
    stationChinese: '阳朔',
    title: 'Bambusflöße & Radeln durch Reisfelder',
    subtitle: 'Natur pur entlang des ruhigen Yulong-Flusses & traditionelle Holzbrücken',
    morning: 'Leiht euch E-Roller (Scooter) oder Fahrräder. Gemütliche Fahrt entlang des autofreien Uferwegs des Yulong-Flusses (Drachenfluss) vorbei an Karstfelsen und Obstgärten.',
    afternoon: 'Fahrt auf einem handgestakten, traditionellen Bambusfloß auf dem Yulong-Fluss. Gleitet lautlos durch das Wasser und rutscht über kleine Wasserwehre hinab.',
    evening: 'Besuch der 600 Jahre alten Yulong-Steinbrücke. Abendessen auf einer Restaurant-Terrasse mitten im Grünen mit Blick auf den Sonnenuntergang hinter den Bergen.',
    highlights: ['E-Roller / Radtour durch Karstlandschaft', 'Yulong Fluss Bambusfloßfahrt', '600 Jahre alte Yulong-Brücke', 'Sonnenuntergang über den Reisfeldern'],
    foodRecommendation: {
      dishGerman: 'Guilin Mifen (Traditionelle Guilin-Reisnudelsuppe)',
      dishChinese: '桂林米粉',
      dishPinyin: 'Guìlín mǐfěn',
      description: 'Runde, seidige Reisnudeln in aromatischer Knochenbrühe mit knusprigen Rindfleischscheiben, frittierten Erdnüssen und eingelegtem Senfgemüse.'
    },
    proTip: 'E-Scooter mieten ist in Yangshuo extrem einfach und macht riesigen Spaß – man braucht keinen Führerschein und kommt mühelos in die abgelegensten Täler.',
    photoSpot: 'Yulong-Steinbrücke mit dem Bambusfloß auf dem spiegelglatten Wasser.'
  },
  {
    day: 17,
    stationId: 'guilin-yangshuo',
    stationName: 'Yangshuo',
    stationChinese: '阳朔',
    title: 'Mondberg & Die Lichtshow auf dem Wasser',
    subtitle: 'Aussichtsgipfel Ruyi Peak & das Open-Air-Spektakel Impression Sanjie Liu',
    morning: 'Fahrt mit der Seilbahn auf den Ruyi Peak (oder Wanderung auf den Moon Hill / Mondberg) mit spektakulären Hängebrücken und gläsernen Aussichtsplattformen über das Karstberg-Panorama.',
    afternoon: 'Entspannung am Pool oder in einem gemütlichen Café in den Reisfeldern. Zeit für eine traditionelle chinesische Fußmassage.',
    evening: 'Besuch der weltberühmten Open-Air-Licht- und Musikshow "Impression Sanjie Liu" (unter Regie von Zhang Yimou, der auch die Olympia-Eröffnung 2008 inszenierte). Über 600 Darsteller agieren direkt auf dem Li-Fluss mit den beleuchteten Karstbergen als Naturkulisse.',
    highlights: ['Ruyi Peak Seilbahn & Glasbrücke', 'Moon Hill (Yueliang Shan)', 'Impression Sanjie Liu Show auf dem Fluss', 'Fußmassage'],
    foodRecommendation: {
      dishGerman: 'Bambusrohr-Reis (Zhutongfan)',
      dishChinese: '竹筒饭',
      dishPinyin: 'Zhútǒngfàn',
      description: 'Klebreis, Schinken und Bohnen, in frischen grünen Bambusrohren über Holzkohle gegart – herrlich rauchig-duftend.'
    },
    proTip: 'Tickets für Impression Sanjie Liu (am besten Kategorie VIP B2 oder B1) über das Hotel oder Trip.com reservieren lassen.',
    photoSpot: 'Blick vom Glassteg am Ruyi Peak über das endlose Meer an Karstkegeln.'
  },
  {
    day: 18,
    stationId: 'guilin-yangshuo',
    stationName: 'Yangshuo nach Hangzhou',
    stationChinese: '阳朔 → 杭州',
    title: 'Abschied von den Bergen & Flug/Zug nach Hangzhou',
    subtitle: 'Letzte Morgenstille in Yangshuo & Weiterreise in die Stadt des Tees und der Poeten',
    morning: 'Früher Morgenspaziergang im Nebel über den Reisfeldern. Letztes Frühstück mit Blick auf die Karstspitzen.',
    afternoon: 'Transfer zum Bahnhof Guilin / Yangshuo oder Flughafen Guilin Liangjiang (KWL). Schnellzug oder kurzer Inlandsflug nach Hangzhou.',
    evening: 'Ankunft in Hangzhou (Provinz Zhejiang). Check-in im Hotel (nahe Westsee / Xihu). Erste Erkundung der Uferpromenade am Westsee.',
    highlights: ['Morgennebel in den Karstbergen', 'Transfer & Reise nach Hangzhou', 'Ankunft in der UNESCO-Stadt Hangzhou', 'Westsee Abendstimmung'],
    foodRecommendation: {
      dishGerman: 'Longjing Cha Xiang Ji (Gebratenes Hähnchen / Tofu mit feinstem Grüntee)',
      dishChinese: '茶香鸡 / 绿茶豆腐',
      dishPinyin: 'Cháxiāng jī / Lǜchá dòufu',
      description: 'Zartes Hähnchenfilet oder frischer Tofu, sanft zubereitet mit aromatischen Hangzhou-Longjing-Teeblättern.'
    },
    logistics: {
      trainInfo: 'Schnellzug Guilin → Hangzhou East (oder Inlandsflug KWL → HGH)',
      duration: 'Zug ca. 7 Std. / Flug 2 Std.',
      departureStation: 'Guilin / Yangshuo',
      arrivalStation: 'Hangzhou East (杭州东)',
      ticketAlert: 'Ticket frühzeitig über Trip.com buchen.'
    },
    proTip: 'Marco Polo nannte Hangzhou einst "die schönste und prächtigste Stadt der Welt".',
    hotelRecommendation: 'Ji Hotel oder Atour Hotel (Nähe West Lake / Xihu)'
  },

  // --- HANGZHOU & SUZHOU (TAG 19-23) ---
  {
    day: 19,
    stationId: 'hangzhou-suzhou',
    stationName: 'Hangzhou',
    stationChinese: '杭州',
    title: 'Der legendäre Westsee',
    subtitle: 'Bootsfahrt, Drei Teiche die den Mond spiegeln & Leifeng-Pagode',
    morning: 'Morgendlicher Spaziergang entlang des Su-Damms (Su Di) am Westsee (Xihu / 西湖). Fahrt mit einem traditionellen Holzboot zu den "Drei Teichen, die den Mond spiegeln" (Motiv des 1-Yuan-Geldscheins).',
    afternoon: 'Besuch der markanten Leifeng-Pagode (雷峰塔) mit Panoramablick über den gesamten Westsee und die umliegenden bewaldeten Hügel. Erkundung der historischen Straße Qinghefang.',
    evening: 'Abendessen in einem traditionellen Teerestaurant (z. B. Lou Wai Lou / 楼外楼 am See).',
    highlights: ['Westsee Bootsfahrt (UNESCO Welterbe)', 'Drei Teiche spiegeln den Mond', 'Leifeng-Pagode', 'Qinghefang Fußgängerzone'],
    foodRecommendation: {
      dishGerman: 'Westsee-Fisch in süß-saurer Essigsauce (Xihu Cuyu)',
      dishChinese: '西湖醋鱼',
      dishPinyin: 'Xīhú cùyú',
      description: 'Frischer Graskarpfen aus dem Westsee, zart gedämpft und mit einer glänzenden süß-säuerlichen Essigsauce überzogen.'
    },
    proTip: 'Rund um den Westsee kann man sich an öffentlichen Stationen Fahrräder leihen oder ein Elektro-Sammeltaxi nehmen.',
    photoSpot: 'Pavillon auf der Insel der Drei Teiche mit dem See und den Pagoden im Hintergrund.'
  },
  {
    day: 20,
    stationId: 'hangzhou-suzhou',
    stationName: 'Hangzhou nach Suzhou',
    stationChinese: '杭州 → 苏州',
    title: 'Longjing Teeplantagen, Lingyin-Tempel & Zug nach Suzhou',
    subtitle: 'Grünteepflücken im Drachenbrunnendorf & Fahrt ins Venedig des Ostens',
    morning: 'Ausflug ins malerische Teedorf Longjing (Drachenbrunnentee / 龙井茶). Spaziergang durch die terrassierten, saftig grünen Teefelder und frische Teeverkostung in einem Bauernhaus.',
    afternoon: 'Besuch des imposanten Lingyin-Tempels (Kloster der Seelen-Zuflucht) und der Felsgrotten Feilai Feng mit hunderten 1000 Jahre alten Buddha-Reliefs. Nachmittags Transfer zum Bahnhof Hangzhou.',
    evening: 'Kurze Schnellzugfahrt nach Suzhou (nur ca. 1,5 Stunden). Check-in im Hotel (z. B. nahe der historischen Pingjiang Road).',
    highlights: ['Longjing Drachenbrunnen-Teefelder', 'Lingyin-Tempel & Feilai Feng Felsgrotten', 'Kurze Zugfahrt nach Suzhou', 'Abendliche Pingjiang Road'],
    foodRecommendation: {
      dishGerman: 'Su Shi Doufu (Knuspriger Tofu nach Suzhou-Art mit Lotusgemüse)',
      dishChinese: '苏式脆皮豆腐',
      dishPinyin: 'Sūshì cuìpí dòufu',
      description: 'Goldgelb gebratener Seidentofu mit feiner milder Sojasauce, Lotuswurzeln und knackigem Frühlingsgemüse.'
    },
    logistics: {
      trainInfo: 'G-Zug Hangzhou East → Suzhou',
      duration: 'ca. 1 Std. 30 Min.',
      speed: '300 km/h',
      departureStation: 'Hangzhou East (杭州东)',
      arrivalStation: 'Suzhou (苏州)',
      ticketAlert: 'Ticket auf Trip.com buchen.'
    },
    proTip: 'Echter Longjing-Frühlingstee (Mingqian Longjing) gilt als der teuerste und edelste Grüntee Chinas.',
    hotelRecommendation: 'Boutique-Hotel an der Pingjiang Road oder Ji Hotel (Suzhou Zentrum)'
  },
  {
    day: 21,
    stationId: 'hangzhou-suzhou',
    stationName: 'Suzhou',
    stationChinese: '苏州',
    title: 'Kaiserliche Meistergärten von Suzhou',
    subtitle: 'UNESCO-Weltkulturerbe der chinesischen Gartenbaukunst & Pingjiang Road',
    morning: 'Früher Besuch des Gartens des bescheidenen Beamten (Zhuozheng Yuan / 拙政园) – der größte und berühmteste klassische Garten Chinas mit Teichen, Pavillons und Bambushainen.',
    afternoon: 'Besuch des intimen Gartens des Meisters der Netze (Wangshi Yuan) – ein architektonisches Meisterwerk der Raumillusion. Anschließend Bummel entlang der historischen Kanalstraße Pingjiang Road.',
    evening: 'Kleine Bootstour durch die schmalen Kanäle von Suzhou unter alten Steinbrücken hindurch. Lauscht dem traditionellen Pingtan-Gesang (Saitenmusik) im Teehaus.',
    highlights: ['Garten des bescheidenen Beamten (UNESCO)', 'Garten des Meisters der Netze', 'Pingjiang Road Kanalgassen', 'Pingtan Musikaufführung'],
    foodRecommendation: {
      dishGerman: 'Eichhörnchen-Fisch (Songshu Guiyu)',
      dishChinese: '松鼠鳜鱼',
      dishPinyin: 'Sōngshǔ guìyú',
      description: 'Kunstvoll wie ein Eichhörnchenfell eingeschnittener Mandarin-Fisch, goldbraun frittiert und mit süß-saurer Fruchtsauce und Pinienkernen serviert.'
    },
    proTip: 'Im Garten des bescheidenen Beamten direkt um 07:30 Uhr morgens da sein, um die Gärten in stiller Atmosphäre ohne Reisegruppen zu fotografieren.',
    photoSpot: 'Pavillon der duftenden Lotusbrise im Zhuozheng Yuan mit Wasserspiegelung.'
  },
  {
    day: 22,
    stationId: 'hangzhou-suzhou',
    stationName: 'Suzhou',
    stationChinese: '苏州',
    title: 'Seidenweber & Das Wasserdorf Tongli',
    subtitle: 'Jahrtausende Seidengeschichte & Ausflug ins idyllische Kanalstädtchen',
    morning: 'Besuch des Suzhou Seidenmuseums (Suzhou Silk Museum): Erfahrt, wie aus Seidenraupen die feinsten Stoffe der Seidenstraße gewoben wurden.',
    afternoon: 'Halbtagesausflug ins historische Wasserdorf Tongli (mit der Metro-Linie 4 von Suzhou erreichbar). Besichtigung des Tuisi-Gartens (Garten des Rückzugs und der Besinnung) und Spaziergang über die Drei Brücken.',
    evening: 'Rückkehr nach Suzhou. Letztes Abendessen in der Altstadt bei gedämpften Teigtaschen und Jasmintee.',
    highlights: ['Suzhou Seidenmuseum', 'Tongli Wasserdorf & Drei Brücken', 'Tuisi Garten (UNESCO)', 'Kanalromantik'],
    foodRecommendation: {
      dishGerman: 'Suzhou Tangbao (Zarte Teigtaschen mit süßlicher Fleischbrühe)',
      dishChinese: '苏州汤包',
      dishPinyin: 'Sūzhōu tāngbāo',
      description: 'Die Suzhou-Variante der Suppenteigtaschen, feiner gewürzt und leicht süßlich abgerundet.'
    },
    proTip: 'Seidenprodukte (Schals, Kissenbezüge) am besten im staatlichen Seidenmuseum oder lizenzierten Geschäften kaufen, um echte Maulbeerseide zu erhalten.',
    photoSpot: 'Die Drei Brücken von Tongli mit den roten Hängelaternen im Abendlicht.'
  },
  {
    day: 23,
    stationId: 'shanghai-return',
    stationName: 'Suzhou nach Shanghai',
    stationChinese: '苏州 → 上海',
    title: 'Rückkehr nach Shanghai & Abschiedsfest',
    subtitle: 'Nur 25 Minuten Zugfahrt, letzte Souvenireinkäufe & Skyline-Abschied',
    morning: 'Ausschlafen, gemütliches Frühstück in Suzhou. Transfer zum Bahnhof Suzhou.',
    afternoon: 'Ultraschnelle Fahrt mit dem High-Speed Zug zurück nach Shanghai (nur 25–30 Minuten!). Check-in im Hotel (z. B. Nähe People\'s Square oder Pudong). Letzte Souvenireinkäufe (Tee, Seide, Snacks).',
    evening: 'Großes Abschiedsessen: Rückblick auf 24 unvergessliche Tage in China. Ein letzter nächtlicher Spaziergang am Bund mit Blick auf die futuristische Skyline.',
    highlights: ['25 Min. Schnellzug Suzhou → Shanghai', 'Letzte Souvenirs & Einkäufe', 'Abschiedsessen & Skyline bei Nacht', 'Reisekoffer packen'],
    foodRecommendation: {
      dishGerman: 'Shanghai Congyou Banmian (Hausgemachte Frühlingszwiebel-Nudeln)',
      dishChinese: '葱油拌面',
      dishPinyin: 'Cōngyóu bànmiàn',
      description: 'Der Klassiker: Handgemachte Weizennudeln geschwenkt in herrlich duftendem, langsam geröstetem Frühlingszwiebel-Öl und milder Sojasauce.'
    },
    logistics: {
      trainInfo: 'G-Zug Suzhou → Shanghai Hongqiao / Shanghai Station',
      duration: 'nur 25–30 Min.',
      speed: '300 km/h',
      departureStation: 'Suzhou (苏州)',
      arrivalStation: 'Shanghai Hongqiao (上海虹桥)',
      ticketAlert: 'Züge fahren alle 10-15 Minuten.'
    },
    proTip: 'Verpackt Tee luftdicht und packt Flüssigkeiten ins Aufgabegepäck.',
    hotelRecommendation: 'Ji Hotel oder Radisson Collection (Shanghai)'
  },
  {
    day: 24,
    stationId: 'shanghai-return',
    stationName: 'Shanghai (Abreise)',
    stationChinese: '上海 (离境)',
    title: 'Maglev Transrapid & Heimflug',
    subtitle: 'Mit 300+ km/h in 8 Minuten zum Flughafen Pudong & Rückflug nach Hause',
    morning: 'Letztes chinesisches Frühstück (Jianbing oder frische Teigtaschen). Fahrt mit der Metro zur Longyang Road Station.',
    afternoon: 'Fahrt mit dem berühmten Magnetschwebezug (Transrapid / Maglev): Schwebend mit über 300 km/h in nur 8 Minuten direkt zum Terminal des Flughafens Pudong (PVG)!',
    evening: 'Check-in, Sicherheitskontrolle und Ausreise. Rückflug nach Deutschland / Europa mit unzähligen Fotos, Erinnerungen und neu gewonnenem China-Know-how im Gepäck.',
    highlights: ['Maglev Transrapid Fahrt (300+ km/h in 8 Min.)', 'Pudong International Airport (PVG)', 'Visumfreie Ausreise', 'Heimflug mit Erinnerungen'],
    foodRecommendation: {
      dishGerman: 'Chinesischer Grüntee & Bäckerei-Snacks für den Flug',
      dishChinese: '绿茶 & 点心',
      dishPinyin: 'Lǜchá & Diǎnxīn',
      description: 'Eine Flasche heißer Tee und frische Teigpasteten für den Langstreckenflug.'
    },
    logistics: {
      trainInfo: 'Shanghai Maglev Train (Longyang Road → Pudong Airport)',
      duration: 'exakt 8 Minuten',
      speed: '301–431 km/h',
      ticketAlert: 'Ticket mit Flugticket-Rabatt am Schalter oder per U-Bahn-Karte für 40–50 RMB.'
    },
    proTip: 'Zeigt am Maglev-Ticketschalter euer Flugticket vor – dann kostet das Ticket nur 40 RMB statt 50 RMB.',
    photoSpot: 'Tacho-Anzeige im Maglev-Zug, wenn die 300 km/h Marke überschritten wird!'
  }
];
