import React, { useState } from 'react';
import { 
  Building, 
  DollarSign, 
  CreditCard, 
  Users, 
  Calendar, 
  Train, 
  Utensils, 
  Ticket, 
  Sparkles, 
  Info, 
  Copy, 
  Check,
  Calculator,
  ArrowRightLeft
} from 'lucide-react';
import { HOTEL_BRANDS, HOTEL_BOOKING_RULES } from '../data/hotelsData';

export const HotelsAndBudgetView: React.FC = () => {
  // Budget Calculator State
  const [travelersCount, setTravelersCount] = useState<number>(3);
  const [totalDays, setTotalDays] = useState<number>(24);
  const [hotelTier, setHotelTier] = useState<'budget' | 'mid' | 'premium'>('mid');
  const [foodTier, setFoodTier] = useState<'budget' | 'medium' | 'foodie'>('medium');
  const [trainClass, setTrainClass] = useState<'second' | 'first'>('second');
  const [includeShowTickets, setIncludeShowTickets] = useState<boolean>(true);

  // Currency Converter State
  const [eurInput, setEurInput] = useState<string>('100');
  const [cnyInput, setCnyInput] = useState<string>('780');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const EXCHANGE_RATE = 7.85; // 1 EUR = 7.85 RMB / CNY

  const handleEurChange = (val: string) => {
    setEurInput(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setCnyInput((num * EXCHANGE_RATE).toFixed(1));
    } else {
      setCnyInput('');
    }
  };

  const handleCnyChange = (val: string) => {
    setCnyInput(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setEurInput((num / EXCHANGE_RATE).toFixed(1));
    } else {
      setEurInput('');
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Hotel cost calculation (assuming 2 persons share a double room)
  const roomsNeeded = Math.ceil(travelersCount / 2);
  const hotelRatePerNight = hotelTier === 'budget' ? 38 : hotelTier === 'mid' ? 52 : 75;
  const totalHotelCost = roomsNeeded * totalDays * hotelRatePerNight;

  // Food cost per person per day
  const foodRatePerDay = foodTier === 'budget' ? 8 : foodTier === 'medium' ? 16 : 30;
  const totalFoodCost = travelersCount * totalDays * foodRatePerDay;

  // Local transport (Metro, Didi Taxi) per person per day
  const localTransportRate = 4.5;
  const totalLocalTransport = travelersCount * totalDays * localTransportRate;

  // High-Speed Trains total across the 6 major legs
  const trainRatePerPerson = trainClass === 'second' ? 280 : 450;
  const totalTrainsCost = travelersCount * trainRatePerPerson;

  // Sightseeing & Attraction Tickets (Forbidden City, Terracotta, Mutianyu Cable car, Li River Cruise, Impression Show)
  const ticketsBasePerPerson = 120 + (includeShowTickets ? 50 : 0);
  const totalTicketsCost = travelersCount * ticketsBasePerPerson;

  // Total Calculations
  const grandTotalEur = Math.round(totalHotelCost + totalFoodCost + totalLocalTransport + totalTrainsCost + totalTicketsCost);
  const perPersonEur = Math.round(grandTotalEur / travelersCount);
  const perPersonCny = Math.round(perPersonEur * EXCHANGE_RATE);

  return (
    <div className="space-y-6 max-w-full">
      {/* SECTION 1: DYNAMIC BUDGET CALCULATOR */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-xl space-y-4">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full text-[11px] font-semibold border border-emerald-500/20">
            <Calculator className="w-3 h-3" />
            <span>Budget-Kalkulator (vor Ort)</span>
          </div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            Reisekosten für 3,5 Wochen China
          </h2>
          <p className="text-xs text-slate-400">
            Berechnung für {travelersCount} Personen (exkl. Langstreckenflug).
          </p>
        </div>

        {/* Result Card Big */}
        <div className="bg-gradient-to-br from-emerald-950/80 to-slate-950 p-3.5 rounded-xl border border-emerald-500/30 flex items-center justify-between shadow-lg">
          <div>
            <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider block">
              Gesamt ({travelersCount} Pers.):
            </span>
            <div className="text-2xl font-black text-white">
              ~{grandTotalEur.toLocaleString('de-DE')} €
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block">Pro Person:</span>
            <div className="text-sm font-bold text-emerald-300">
              ≈ {perPersonEur.toLocaleString('de-DE')} €
            </div>
            <span className="text-[10px] text-slate-400">({perPersonCny.toLocaleString('de-DE')} ¥)</span>
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Travelers & Days */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-2">
            <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-red-400" /> Reisende:
            </label>
            <div className="flex space-x-1.5">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setTravelersCount(num)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    travelersCount === num
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {num} Pers.
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400 pt-0.5">
              <span>Zimmerbedarf:</span>
              <span className="font-semibold text-white">{roomsNeeded} Doppelzimmer</span>
            </div>
          </div>

          {/* Hotel Tier */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-2">
            <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-amber-400" /> Hotel-Kategorie:
            </label>
            <div className="grid grid-cols-3 gap-1">
              <button
                onClick={() => setHotelTier('budget')}
                className={`py-1.5 px-1 rounded-lg text-[10px] font-bold transition cursor-pointer text-center ${
                  hotelTier === 'budget'
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                Budget (38€)
              </button>
              <button
                onClick={() => setHotelTier('mid')}
                className={`py-1.5 px-1 rounded-lg text-[10px] font-bold transition cursor-pointer text-center ${
                  hotelTier === 'mid'
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                Mittel (52€)
              </button>
              <button
                onClick={() => setHotelTier('premium')}
                className={`py-1.5 px-1 rounded-lg text-[10px] font-bold transition cursor-pointer text-center ${
                  hotelTier === 'premium'
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                Gehoben (75€)
              </button>
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400 pt-0.5">
              <span>Hotels ({totalDays}T):</span>
              <span className="font-semibold text-white">~{totalHotelCost} €</span>
            </div>
          </div>

          {/* Food Tier */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-2">
            <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-emerald-400" /> Verpflegung:
            </label>
            <div className="grid grid-cols-3 gap-1">
              <button
                onClick={() => setFoodTier('budget')}
                className={`py-1.5 px-1 rounded-lg text-[10px] font-bold transition cursor-pointer text-center ${
                  foodTier === 'budget'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                Streetfood (8€)
              </button>
              <button
                onClick={() => setFoodTier('medium')}
                className={`py-1.5 px-1 rounded-lg text-[10px] font-bold transition cursor-pointer text-center ${
                  foodTier === 'medium'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                Normal (16€)
              </button>
              <button
                onClick={() => setFoodTier('foodie')}
                className={`py-1.5 px-1 rounded-lg text-[10px] font-bold transition cursor-pointer text-center ${
                  foodTier === 'foodie'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                Gourmet (30€)
              </button>
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400 pt-0.5">
              <span>Essen Gesamt:</span>
              <span className="font-semibold text-white">~{totalFoodCost} €</span>
            </div>
          </div>

          {/* High-Speed Train Class */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-2">
            <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Train className="w-3.5 h-3.5 text-blue-400" /> Schnellzug-Klasse:
            </label>
            <div className="flex space-x-1.5">
              <button
                onClick={() => setTrainClass('second')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  trainClass === 'second'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                2. Klasse (~280€)
              </button>
              <button
                onClick={() => setTrainClass('first')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  trainClass === 'first'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                1. Klasse (~450€)
              </button>
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400 pt-0.5">
              <span>Züge Gesamt:</span>
              <span className="font-semibold text-white">~{totalTrainsCost} €</span>
            </div>
          </div>

          {/* Sightseeing & Shows */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-2">
            <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Ticket className="w-3.5 h-3.5 text-purple-400" /> Eintritt & Lichtshows:
            </label>
            <div className="flex items-center space-x-2 pt-0.5">
              <input
                type="checkbox"
                id="showTickets"
                checked={includeShowTickets}
                onChange={(e) => setIncludeShowTickets(e.target.checked)}
                className="h-4 w-4 rounded border-slate-700 text-purple-600 focus:ring-purple-500 bg-slate-900 cursor-pointer"
              />
              <label htmlFor="showTickets" className="text-[11px] text-slate-300 cursor-pointer">
                Inkl. Sanjie Liu Lichtshow & Li-Fluss Boot (~170€ p.P.)
              </label>
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400 pt-0.5">
              <span>Eintritte Gesamt:</span>
              <span className="font-semibold text-white">~{totalTicketsCost} €</span>
            </div>
          </div>

          {/* Local Transport (Metro & Taxis) */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-2 flex flex-col justify-between">
            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-sky-400" /> U-Bahn & Didi Taxis vor Ort:
              </label>
              <p className="text-[11px] text-slate-400 mt-1">
                Tägliche Metro-Fahrten (0,40–0,80 €) + Didi Taxis (2–4 €).
              </p>
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400 pt-0.5">
              <span>Nahverkehr Gesamt:</span>
              <span className="font-semibold text-white">~{totalLocalTransport} €</span>
            </div>
          </div>
        </div>

        {/* Cost Breakdown Visual Bar */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">
            Kostenaufteilung im Überblick:
          </span>
          <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden flex border border-slate-800">
            <div style={{ width: `${(totalHotelCost / grandTotalEur) * 100}%` }} className="bg-amber-500 h-full" title="Hotels" />
            <div style={{ width: `${(totalFoodCost / grandTotalEur) * 100}%` }} className="bg-emerald-500 h-full" title="Essen" />
            <div style={{ width: `${(totalTrainsCost / grandTotalEur) * 100}%` }} className="bg-blue-500 h-full" title="Züge" />
            <div style={{ width: `${(totalTicketsCost / grandTotalEur) * 100}%` }} className="bg-purple-500 h-full" title="Eintritte" />
            <div style={{ width: `${(totalLocalTransport / grandTotalEur) * 100}%` }} className="bg-sky-500 h-full" title="Nahverkehr" />
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-1">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Hotels ({Math.round((totalHotelCost / grandTotalEur) * 100)}%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Essen ({Math.round((totalFoodCost / grandTotalEur) * 100)}%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Schnellzüge ({Math.round((totalTrainsCost / grandTotalEur) * 100)}%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Eintritte ({Math.round((totalTicketsCost / grandTotalEur) * 100)}%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sky-500" /> U-Bahn & Taxis ({Math.round((totalLocalTransport / grandTotalEur) * 100)}%)</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: LIVE CURRENCY CONVERTER & PRICE ANCHORS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Converter */}
        <div className="lg:col-span-5 bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl">
          <div className="flex items-center space-x-2 text-white font-bold text-lg">
            <ArrowRightLeft className="w-5 h-5 text-red-400" />
            <h3>Währungsrechner (EUR ↔ RMB / CNY)</h3>
          </div>
          <p className="text-xs text-slate-400">
            Offizieller Richtwert: 1 EUR ≈ 7,85 RMB (Yuan). Funktioniert auch offline.
          </p>

          <div className="space-y-3 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Euro (€):</label>
              <input
                type="number"
                value={eurInput}
                onChange={(e) => handleEurChange(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-base font-bold text-white focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Chinesische Yuan / RMB (¥):</label>
              <input
                type="number"
                value={cnyInput}
                onChange={(e) => handleCnyChange(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-base font-bold text-emerald-400 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Quick Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['10', '50', '100', '500', '1000'].map((amt) => (
              <button
                key={amt}
                onClick={() => handleEurChange(amt)}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-medium text-slate-300 transition cursor-pointer"
              >
                {amt} €
              </button>
            ))}
          </div>
        </div>

        {/* Real-Life Price Anchors in China */}
        <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl">
          <div className="flex items-center space-x-2 text-white font-bold text-lg">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3>Was kostet das Leben in China wirklich?</h3>
          </div>
          <p className="text-xs text-slate-400">
            Typische Preis-Beispiele für den Alltag, um ein Gefühl für Yuan zu bekommen:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block">Flasche Mineralwasser (0,5L)</span>
              <span className="text-sm font-bold text-white">2–3 ¥ (ca. 0,30–0,40 €)</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block">U-Bahn Einzelfahrt</span>
              <span className="text-sm font-bold text-white">3–6 ¥ (ca. 0,40–0,75 €)</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block">Schüssel handgezogene Nudeln</span>
              <span className="text-sm font-bold text-white">15–25 ¥ (ca. 2,00–3,20 €)</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block">15-Minuten Didi-Taxifahrt</span>
              <span className="text-sm font-bold text-white">20–35 ¥ (ca. 2,50–4,50 €)</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block">Ganze knusprige Pekingente (2 Pers.)</span>
              <span className="text-sm font-bold text-white">180–260 ¥ (ca. 23–33 €)</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block">High-Speed Zug 1.300 km (Peking-Shanghai)</span>
              <span className="text-sm font-bold text-white">550 ¥ (ca. 70 €)</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: RECOMMENDED HOTEL BRANDS */}
      <div className="space-y-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs font-semibold border border-amber-500/20 mb-2">
            <Building className="w-3.5 h-3.5" />
            <span>Teil 2 des Masterplans: Saubere & Bezahlbare Hotelketten</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Die 4 besten Hotelketten für westliche Reisende (3–4 Sterne)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Bucht Hotels ausschließlich über <strong>Trip.com</strong> oder <strong>Booking.com</strong>. Diese Portale filtern automatisch Hotels mit offizieller Ausländerlizenz heraus.
          </p>
        </div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOTEL_BRANDS.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4 hover:border-slate-700 transition shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-400 border border-slate-700">
                      {'★'.repeat(Math.floor(hotel.stars))} {hotel.tier}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1.5">{hotel.nameGerman}</h3>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-black text-emerald-400 block">{hotel.priceEur}</span>
                    <span className="text-[11px] text-slate-400">{hotel.priceRmb} / Nacht</span>
                  </div>
                </div>

                {/* Chinese Name Box with Copy */}
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Chinesischer Name:</span>
                    <span className="text-base font-bold text-amber-300">{hotel.nameChinese}</span>
                    <span className="text-xs text-slate-400 ml-2 italic">({hotel.namePinyin})</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(hotel.nameChinese, hotel.id)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer flex items-center gap-1 text-xs"
                    title="Chinesischen Namen für Taxifahrer kopieren"
                  >
                    {copiedId === hotel.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === hotel.id ? 'Kopiert!' : 'Kopieren'}</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {hotel.description}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 pt-1">
                  {hotel.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tip */}
              <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400 space-y-1">
                <p><strong className="text-slate-300">Ideal für:</strong> {hotel.bestFor}</p>
                <p className="text-amber-400/90 italic">💡 {hotel.proTip}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Important Hotel Booking Rules */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-400" />
            3 Gesetzesregeln bei Hotelübernachtungen in China
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {HOTEL_BOOKING_RULES.map((rule, idx) => (
              <div key={idx} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                <h4 className="font-bold text-white text-sm">{rule.title}</h4>
                <p className="text-slate-400 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
