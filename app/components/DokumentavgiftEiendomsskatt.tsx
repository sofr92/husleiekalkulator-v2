"use client";
import { useState } from "react";

export default function DokumentavgiftEiendomsskatt() {
  const [values, setValues] = useState({
    kjopPris: "3000000",
    kommuneskatt: "0.0035",
    tinglysing: "585"
  });

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const kjopPrisNum = parseFloat(values.kjopPris);
  const kommuneskattNum = parseFloat(values.kommuneskatt);
  const tinglysingNum = parseFloat(values.tinglysing);

  const dokumentavgift = kjopPrisNum * 0.025;
  const eiendomsskatt = kjopPrisNum * kommuneskattNum;
  const totalKostnad = dokumentavgift + eiendomsskatt + tinglysingNum;

  const Input = ({ label, name }: { label: string; name: keyof typeof values }) => (
    <label className="block">
      <span className="text-sm text-gray-700">{label}</span>
      <input
        name={name}
        type="text"
        inputMode="decimal"
        defaultValue={values[name]}
        onBlur={handleBlur}
        className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#f0b8a4]"
        placeholder="Skriv inn verdi"
      />
    </label>
  );

  return (
    <section className="bg-[#fff5f0] border border-[#f0d6cc] p-4 sm:p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-[#7b2d21]">Dokumentavgift og Eiendomsskatt</h2>
      <div className="grid gap-4">
        <Input label="Kjøpesum (NOK)" name="kjopPris" />
        <Input label="Eiendomsskatt (% som desimal)" name="kommuneskatt" />
        <Input label="Tinglysingsgebyr" name="tinglysing" />

        <div className="bg-[#fbe8de] p-3 rounded mt-3 text-sm">
          <p><strong>Dokumentavgift (2.5%):</strong> {isNaN(dokumentavgift) ? "-" : dokumentavgift.toLocaleString()} kr</p>
          <p><strong>Eiendomsskatt:</strong> {isNaN(eiendomsskatt) ? "-" : eiendomsskatt.toLocaleString()} kr</p>
          <p><strong>Tinglysingsgebyr:</strong> {isNaN(tinglysingNum) ? "-" : tinglysingNum.toLocaleString()} kr</p>
          <p className="font-bold">Totale kjøpskostnader: {isNaN(totalKostnad) ? "-" : totalKostnad.toLocaleString()} kr</p>
        </div>
      </div>
    </section>
  );
}
