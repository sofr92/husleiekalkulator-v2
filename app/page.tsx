"use client";

/* Mobilvennlig kalkulatorside med terracotta-tema */

import { useEffect, useState } from "react";
import jsPDF from "jspdf";

function useFont() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.fontFamily = "'Manrope', sans-serif";
  }, []);
}

function SammenligningLeieEie() {
  const [leie, setLeie] = useState(12000);
  const [kjopPris, setKjopPris] = useState(3500000);
  const [egenkapital, setEgenkapital] = useState(500000);
  const [rente, setRente] = useState(5);
  const [aar, setAar] = useState(10);

  const laanebelop = kjopPris - egenkapital;
  const totalLeie = leie * 12 * aar;
  const renteKost = laanebelop * (rente / 100) * aar;
  const totalEie = renteKost;

  return (
    <section className="bg-[#fff5f0] border border-[#f0d6cc] p-4 sm:p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-[#7b2d21]">Leie vs Eie (10 år)</h2>
      <div className="grid gap-3">
        <label>Månedlig leie (NOK)
          <input type="number" value={leie} onChange={(e) => setLeie(Number(e.target.value))} className="w-full border rounded p-2" />
        </label>
        <label>Kjøpspris bolig (NOK)
          <input type="number" value={kjopPris} onChange={(e) => setKjopPris(Number(e.target.value))} className="w-full border rounded p-2" />
        </label>
        <label>Egenkapital (NOK)
          <input type="number" value={egenkapital} onChange={(e) => setEgenkapital(Number(e.target.value))} className="w-full border rounded p-2" />
        </label>
        <label>Rente (% per år)
          <input type="number" value={rente} onChange={(e) => setRente(Number(e.target.value))} className="w-full border rounded p-2" />
        </label>
        <label>Antall år
          <input type="number" value={aar} onChange={(e) => setAar(Number(e.target.value))} className="w-full border rounded p-2" />
        </label>
        <div className="bg-[#fbe8de] p-3 rounded mt-3 text-sm">
          <p><strong>Totale leiekostnader:</strong> {totalLeie.toLocaleString()} kr</p>
          <p><strong>Rentekostnader ved kjøp:</strong> {totalEie.toLocaleString()} kr</p>
        </div>
      </div>
    </section>
  );
}

function DokumentavgiftEiendomsskatt() {
  const [kjopPris, setKjopPris] = useState(3000000);
  const [kommuneskatt, setKommuneskatt] = useState(0.0035);
  const [tinglysing, setTinglysing] = useState(585);
  const dokumentavgift = kjopPris * 0.025;
  const eiendomsskatt = kjopPris * kommuneskatt;
  const totalKostnad = dokumentavgift + eiendomsskatt + tinglysing;

  return (
    <section className="bg-[#fff5f0] border border-[#f0d6cc] p-4 sm:p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-[#7b2d21]">Dokumentavgift og Eiendomsskatt</h2>
      <div className="grid gap-3">
        <label>Kjøpesum (NOK)
          <input type="number" value={kjopPris} onChange={(e) => setKjopPris(Number(e.target.value))} className="w-full border rounded p-2" />
        </label>
        <label>Eiendomsskatt (% i desimalform)
          <input type="number" step="0.0001" value={kommuneskatt} onChange={(e) => setKommuneskatt(Number(e.target.value))} className="w-full border rounded p-2" />
        </label>
        <label>Tinglysingsgebyr
          <input type="number" value={tinglysing} onChange={(e) => setTinglysing(Number(e.target.value))} className="w-full border rounded p-2" />
        </label>
        <div className="bg-[#fbe8de] p-3 rounded mt-3 text-sm">
          <p><strong>Dokumentavgift (2.5%):</strong> {dokumentavgift.toLocaleString()} kr</p>
          <p><strong>Eiendomsskatt:</strong> {eiendomsskatt.toLocaleString()} kr</p>
          <p><strong>Tinglysingsgebyr:</strong> {tinglysing.toLocaleString()} kr</p>
          <p className="font-bold">Totale kjøpskostnader: {totalKostnad.toLocaleString()} kr</p>
        </div>
      </div>
    </section>
  );
}

function ExportToPDF({ title, content }: { title: string; content: string[] }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(title, 10, 10);
    let y = 20;
    content.forEach((line) => {
      doc.text(line, 10, y);
      y += 10;
    });
    doc.save("utregning.pdf");
  };
  return <button onClick={generatePDF} className="mt-4 w-full bg-blue-600 text-white p-2 rounded">Last ned PDF</button>;
}

function Ressurser() {
  const lenker = [
    {
      navn: "Finn.no – Leieboliger",
      beskrivelse: "Se ledige boliger over hele Norge.",
      url: "https://www.finn.no/realestate/lettings/search.html",
      emoji: "🏡"
    },
    {
      navn: "NAV – Bostøtte",
      beskrivelse: "Søk støtte hvis du har lav inntekt.",
      url: "https://www.nav.no/tema/bostotte",
      emoji: "💰"
    },
    {
      navn: "DNB – Boliglån",
      beskrivelse: "Se lån, kalkulator og renter.",
      url: "https://www.dnb.no/lan/boliglan",
      emoji: "🏦"
    },
    {
      navn: "Husbanken",
      beskrivelse: "Startlån og støtteordninger.",
      url: "https://www.husbanken.no/",
      emoji: "📋"
    },
    {
      navn: "Smarte Penger",
      beskrivelse: "Privatøkonomiske guider og kalkulatorer.",
      url: "https://www.smartepenger.no/",
      emoji: "📊"
    }
  ];

  return (
    <section className="bg-[#fbe8de] backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 mt-12">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-[#a4442f] mb-6">🔗 Nyttige ressurser</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {lenker.map((lenke) => (
          <a
            key={lenke.navn}
            href={lenke.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fff5f0] border border-[#f0d6cc] rounded-xl p-4 hover:shadow-lg transition flex flex-col gap-2"
          >
            <div className="text-lg text-[#7b2d21]">{lenke.emoji} <strong>{lenke.navn}</strong></div>
            <p className="text-sm text-[#5f3d36]">{lenke.beskrivelse}</p>
          </a>
        ))}
      </div>
    </section>
  );
}


export default function Hjemmeside() {
  useFont();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2d2c2] via-[#fbe8de] to-[#e6b6a4] text-gray-900 py-6 sm:py-12">
      {/* Google AdSense-blokk */}
      <div className="flex justify-center gap-6 px-4">
        {/* Venstre annonse (skjult på mobil) */}
        <div className="hidden lg:block w-60">
          <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-5278856821470925"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});` }} />
        </div>

        {/* Hovedinnhold */}
        <main className="max-w-3xl flex-1 space-y-12 sm:space-y-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#7b2d21] mb-8">
            Husleiekalkulator – Leie vs Eie
          </h1>
          <SammenligningLeieEie />
          <DokumentavgiftEiendomsskatt />
          <Ressurser />
        </main>

        {/* Høyre annonse (skjult på mobil) */}
        <div className="hidden lg:block w-60">
          <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-5278856821470925"
              data-ad-slot="2345678901"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});` }} />
        </div>
      </div>
    </div>
  );
}
