"use client";
import { useState } from "react";

export default function DokumentavgiftEiendomsskatt() {
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
