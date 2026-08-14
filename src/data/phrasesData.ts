import { PhraseCard } from '../types';

export const PHRASE_CARDS: PhraseCard[] = [
  // --- DIETARY & ESSEN (EXTREM WICHTIG!) ---
  {
    id: 'food-no-cilantro',
    category: 'dietary',
    german: 'Bitte keinen Koriander! (Wichtig)',
    chinese: '不要放香菜！',
    pinyin: 'Bú yào fàng xiāngcài!',
    pronunciation: 'Bu yao fang ssiang-tsai!',
    notes: 'Koriander wird in China standardmäßig auf fast jede Suppe gestreut. Zeigt diese Karte vor der Zubereitung!'
  },
  {
    id: 'food-not-spicy',
    category: 'dietary',
    german: 'Überhaupt nicht scharf, bitte!',
    chinese: '请不要辣！一点辣都不要。',
    pinyin: 'Qǐng bú yào là! Yìdiǎn là dōu bú yào.',
    pronunciation: 'Tsching bu yao la! I-dien la do bu yao.',
    notes: 'Besonders in Sichuan (Chengdu) und Xi\'an unerlässlich.'
  },
  {
    id: 'food-mildly-spicy',
    category: 'dietary',
    german: 'Nur ganz leicht / mild scharf bitte.',
    chinese: '微辣就可以了。',
    pinyin: 'Wēi là jiù kěyǐ le.',
    pronunciation: 'Wei la djiou ke-yi le.',
    notes: 'Für Hotpot und Nudeln, wenn ihr etwas Aroma wollt ohne Flammen im Mund.'
  },
  {
    id: 'food-vegetarian',
    category: 'dietary',
    german: 'Ich bin Vegetarier (kein Fleisch/Fisch)',
    chinese: '我吃素，不要肉也不要海鲜。',
    pinyin: 'Wǒ chī sù, bú yào ròu yě bú yào hǎixiān.',
    pronunciation: 'Wo tschi su, bu yao ro ye bu yao hai-ssien.',
    notes: 'Präzisiert, dass auch keine tierische Brühe oder tierisches Fett verwendet werden soll.'
  },
  {
    id: 'food-no-pork',
    category: 'dietary',
    german: 'Kein Schweinefleisch bitte!',
    chinese: '我不吃猪肉。',
    pinyin: 'Wǒ bù chī zhūròu.',
    pronunciation: 'Wo bu tschi dshu-ro.',
    notes: 'Wichtig vor Ort zur Sicherheit beim Bestellen vorzeigen.'
  },
  {
    id: 'food-halal',
    category: 'dietary',
    german: 'Ist das ein Halal-Restaurant? (Qingzhen)',
    chinese: '请问这是清真餐厅吗？',
    pinyin: 'Qǐngwèn zhè shì qīngzhēn cāntīng ma?',
    pronunciation: 'Tsching-wen dshe schi tsching-dshen tsan-ting ma?',
    notes: 'Qingzhen (清真) Kennzeichnung garantiert 100% Schweinefleisch-freie Zubereitung.'
  },
  {
    id: 'food-no-innards',
    category: 'dietary',
    german: 'Keine Innereien / kein Tierfett / keine Meeresfrüchte',
    chinese: '不要内脏，不要动物油，不要海鲜。',
    pinyin: 'Bú yào nèizàng, bú yào dòngwù yóu, bú yào hǎixiān.',
    pronunciation: 'Bu yao nei-zang, bu yao dong-wu you, bu yao hai-ssien.',
    notes: 'Perfekt um sicherzustellen, dass nur reguläre, saubere Zutaten in Topf oder Wok landen.'
  },
  {
    id: 'food-veggies-chicken-beef',
    category: 'dietary',
    german: 'Nur Gemüse, Tofu, Geflügel oder Rindfleisch bitte',
    chinese: '我们只吃蔬菜、豆腐、鸡肉或牛肉。',
    pinyin: 'Wǒmen zhǐ chī shūcài, dòufu, jīròu huò niúròu.',
    pronunciation: 'Wo-men dshi tschi schu-tsai, dou-fu, dji-ro huo niu-ro.',
    notes: 'Klare Ansage für die Küche, wenn ihr unklares Fleisch meiden wollt.'
  },
  {
    id: 'food-three-people',
    category: 'food',
    german: 'Wir sind zu dritt (Tisch für 3 Personen)',
    chinese: '我们三位 / 三个人。',
    pinyin: 'Wǒmen sān wèi / sān ge rén.',
    pronunciation: 'Wo-men san wei / san ge ren.',
    notes: 'Praktisch beim Betreten von Restaurants oder Teestuben.'
  },
  {
    id: 'food-bill',
    category: 'food',
    german: 'Die Rechnung bitte / Bezahlen',
    chinese: '买单！/ 结账。',
    pinyin: 'Mǎidān! / Jiézhàng.',
    pronunciation: 'Mai-dan! / Djié-dshang.',
    notes: 'Ruft dem Kellner einfach freundlich "Mǎidān" zu und haltet euer Alipay bereit.'
  },
  {
    id: 'food-delicious',
    category: 'food',
    german: 'Das Essen schmeckt fantastisch!',
    chinese: '太好吃了！',
    pinyin: 'Tài hǎochī le!',
    pronunciation: 'Tai hao-tschi le!',
    notes: 'Köche und Wirtsleute freuen sich riesig über dieses Lob.'
  },
  {
    id: 'food-tapwater',
    category: 'food',
    german: 'Eine Flasche Mineralwasser bitte',
    chinese: '请给我一瓶矿泉水。',
    pinyin: 'Qǐng gěi wǒ yì píng kuàngquánshuǐ.',
    pronunciation: 'Tsching gei wo i ping kuang-tschüen-schwei.',
    notes: 'Im Restaurant fragen sie oft "Changwen" (Zimmertemperatur) oder "Bingde" (gekühlt).'
  },

  // --- TAXI & WEGWEISER ---
  {
    id: 'taxi-hotel',
    category: 'taxi',
    german: 'Bitte bringen Sie mich zu dieser Adresse / Hotel',
    chinese: '师傅，请带我去这个地方：',
    pinyin: 'Shīfu, qǐng dài wǒ qù zhè ge dìfang:',
    pronunciation: 'Schi-fu, tsching dai wo tschü dshe ge di-fang:',
    notes: 'Dem Fahrer diese Karte zusammen mit dem chinesischen Hotelnamen/Adresse auf dem Smartphone zeigen.'
  },
  {
    id: 'taxi-train-station',
    category: 'taxi',
    german: 'Bitte zum Hochgeschwindigkeits-Bahnhof!',
    chinese: '请去高铁站 / 火车站。',
    pinyin: 'Qǐng qù gāotiě zhàn / huǒchē zhàn.',
    pronunciation: 'Tsching tschü gao-ti-e dshan / huo-tsche dshan.',
    notes: 'Gaotiezhan = High-Speed-Bahnhof.'
  },
  {
    id: 'taxi-airport',
    category: 'taxi',
    german: 'Bitte zum internationalen Flughafen!',
    chinese: '请去国际机场。',
    pinyin: 'Qǐng qù guójì jīchǎng.',
    pronunciation: 'Tsching tschü guo-dji dji-tschang.',
    notes: 'Sagt dem Fahrer auch euer Abflug-Terminal (T1 oder T2).'
  },
  {
    id: 'taxi-meter',
    category: 'taxi',
    german: 'Bitte schalten Sie das Taxameter ein.',
    chinese: '请打表。',
    pinyin: 'Qǐng dǎbiǎo.',
    pronunciation: 'Tsching da-biao.',
    notes: 'Falls ihr ein normales Straßentaxi nehmt statt Didi.'
  },
  {
    id: 'taxi-stop-here',
    category: 'taxi',
    german: 'Bitte halten Sie hier am Straßenrand an.',
    chinese: '请靠边停一下，谢谢！',
    pinyin: 'Qǐng kàobiān tíng yíxià, xièxie!',
    pronunciation: 'Tsching kao-bien ting i-hsia, ssie-ssie!',
    notes: 'Um dem Fahrer zu signalisieren, dass ihr an Ort und Stelle aussteigen möchtet.'
  },

  // --- ALLTAG & HOTEL ---
  {
    id: 'daily-toilet',
    category: 'essential',
    german: 'Wo ist die Toilette? (Überlebenswichtig!)',
    chinese: '请问洗手间 / 厕所在哪里？',
    pinyin: 'Qǐngwèn xǐshǒujiān / cèsuǒ zài nǎlǐ?',
    pronunciation: 'Tsching-wen ssi-shou-dsien / tse-suo zai na-li?',
    notes: 'Denkt an eure mitgebrachten Taschentücher vor dem Eintreten!'
  },
  {
    id: 'hotel-luggage',
    category: 'hotel',
    german: 'Können wir unser Gepäck hier aufbewahren?',
    chinese: '我们可以把行李寄存在这里吗？',
    pinyin: 'Wǒmen kěyǐ bǎ xíngli jìcún zài zhèlǐ ma?',
    pronunciation: 'Wo-men ke-yi ba ssing-li dji-tsuen zai dshe-li ma?',
    notes: 'Fast jedes Hotel bewahrt euer Gepäck vor dem Check-in oder nach dem Check-out kostenlos auf.'
  },
  {
    id: 'hotel-wifi-pw',
    category: 'hotel',
    german: 'Wie lautet das WLAN-Passwort?',
    chinese: '请问 WiFi 密码是多少？',
    pinyin: 'Qǐngwèn WiFi mìmǎ shì duōshao?',
    pronunciation: 'Tsching-wen WiFi mi-ma schi duo-shao?',
    notes: 'Oft ist das Passwort die Telefonnummer des Hotels oder 8-mal die Zahl 8.'
  },
  {
    id: 'hotel-hot-water',
    category: 'essential',
    german: 'Gibt es hier kochend heißes Trinkwasser?',
    chinese: '请问哪里有开水？',
    pinyin: 'Qǐngwèn nǎlǐ yǒu kāishuǐ?',
    pronunciation: 'Tsching-wen na-li you kai-schwei?',
    notes: 'Kaishui = Gekochtes Trinkwasser (perfekt zum Auffüllen der Thermosflasche).'
  },
  {
    id: 'essential-hello',
    category: 'essential',
    german: 'Hallo / Guten Tag',
    chinese: '你好！/ 您好！',
    pinyin: 'Nǐ hǎo! / Nín hǎo!',
    pronunciation: 'Ni hao! / Nin hao!',
    notes: 'Nín hǎo ist die besonders höfliche Form für Ältere oder Dienstleister.'
  },
  {
    id: 'essential-thanks',
    category: 'essential',
    german: 'Vielen herzlichen Dank!',
    chinese: '非常感谢！/ 谢谢！',
    pinyin: 'Fēicháng gǎnxiè! / Xièxie!',
    pronunciation: 'Fei-tschang gan-ssie! / Ssie-ssie!',
    notes: 'Das wichtigste Zauberwort in China.'
  },
  {
    id: 'essential-price',
    category: 'essential',
    german: 'Wie viel kostet das? (Alipay / WeChat)',
    chinese: '这个多少钱？可以扫码支付吗？',
    pinyin: 'Zhège duōshao qián? Kěyǐ sǎomǎ zhīfù ma?',
    pronunciation: 'Dshe-ge duo-shao tschi-en? Ke-yi sao-ma dshi-fu ma?',
    notes: 'Fragt nach dem Preis und QR-Code-Scannen.'
  },

  // --- NOTFALL & SICHERHEIT ---
  {
    id: 'emergency-help',
    category: 'emergency',
    german: 'Bitte helfen Sie mir! (Notfall)',
    chinese: '请帮帮我！我需要帮助。',
    pinyin: 'Qǐng bāngbang wǒ! Wǒ xūyào bāngzhù.',
    pronunciation: 'Tsching bang-bang wo! Wo ssü-yao bang-dshu.',
    emergencyLevel: true,
    notes: 'Chinesen sind Touristen gegenüber extrem hilfsbereit.'
  },
  {
    id: 'emergency-doctor',
    category: 'emergency',
    german: 'Ich brauche einen Arzt / Krankenhaus!',
    chinese: '我感觉很不舒服，请带我去医院 / 看医生。',
    pinyin: 'Wǒ gǎnjué hěn bù shūfu, qǐng dài wǒ qù yīyuàn / kàn yīshēng.',
    pronunciation: 'Wo gan-djüe hen bu schu-fu, tsching dai wo tschü i-yüan.',
    emergencyLevel: true,
    notes: 'Gibt dem Gegenüber sofort zu verstehen, dass medizinische Hilfe benötigt wird.'
  },
  {
    id: 'emergency-police',
    category: 'emergency',
    german: 'Bitte rufen Sie die Polizei (Notruf 110)',
    chinese: '请帮我报警 (110)！',
    pinyin: 'Qǐng bāng wǒ bàojǐng (110)!',
    pronunciation: 'Tsching bang wo bao-djing!',
    emergencyLevel: true,
    notes: 'Die Polizei-Notrufnummer in China ist die 110.'
  },
  {
    id: 'emergency-lost',
    category: 'emergency',
    german: 'Ich habe mich verlaufen, wo ist die U-Bahn?',
    chinese: '我迷路了，请问最近的地铁站在哪里？',
    pinyin: 'Wǒ mílù le, qǐngwèn zuìjìn de dìtiě zhàn zài nǎlǐ?',
    pronunciation: 'Wo mi-lu le, tsching-wen dzui-djin de di-ti-e dshan zai na-li?',
    emergencyLevel: false,
    notes: 'Ditiezhan = Metrostation.'
  }
];
