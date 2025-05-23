import { useState } from "react";

export default function SammenligningLeieEie({ useTextInputs = false }) {
  const [leie, setLeie] = useState("12000");
  const [kjopPris, setKjopPris] = useState("3500000");
  const [egenkapital, setEgenkapital] = useState("500000");
  const [rente, setRente] = useState("5");
  const [aar, setAar] = useState("10");

  const leieNum = parseFloat(leie);
  const kjopPrisNum = parseFloat(kjopPris);
  const egenkapitalNum = parseFloat(egenkapital);
  const renteNum = parseFloat(rente);
  const aarNum = parseFloat(aar);

  const laanebelop = !isNaN(kjopPrisNum) && !isNaN(egenkapitalNum) ? kjopPrisNum - egenkapitalNum : NaN;
  const totalLeie = !isNaN(leieNum) && !isNaN(aarNum) ? leieNum * 12 * aarNum : NaN;
  const renteKost = !isNaN(laanebelop) && !isNaN(renteNum) && !isNaN(aarNum) ? laanebelop * (renteNum / 100) * aarNum : NaN;
  const totalEie = renteKost;

  type InputProps = {
    label: string;
    value: string;
    onChange: (val: string) => void;
  };

  const Input = ({ label, value, onChange }: InputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      requestAnimationFrame(() => onChange(e.target.value));
    };

    return (
      <label className="block">
        <span className="text-sm text-gray-700">{label}</span>
        <input
          type={useTextInputs ? "text" : "number"}
          inputMode="decimal"
          pattern="[0-9]*"
          value={value}
          onChange={handleChange}
          className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#f0b8a4]"
          placeholder="Skriv inn beløp"
        />
      </label>
    );
  };

  return (
    <section className="bg-[#fff5f0] border border-[#f0d6cc] p-4 sm:p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-[#7b2d21]">Leie vs Eie (10 år)</h2>
      <div className="grid gap-4">
        <Input label="Månedlig leie (NOK)" value={leie} onChange={setLeie} />
        <Input label="Kjøpspris bolig (NOK)" value={kjopPris} onChange={setKjopPris} />
        <Input label="Egenkapital (NOK)" value={egenkapital} onChange={setEgenkapital} />
        <Input label="Rente (% per år)" value={rente} onChange={setRente} />
        <Input label="Antall år" value={aar} onChange={setAar} />

        <div className="bg-[#fbe8de] p-3 rounded mt-3 text-sm">
          <p><strong>Totale leiekostnader:</strong> {isNaN(totalLeie) ? "-" : totalLeie.toLocaleString()} kr</p>
          <p><strong>Rentekostnader ved kjøp:</strong> {isNaN(totalEie) ? "-" : totalEie.toLocaleString()} kr</p>
        </div>
      </div>
    </section>
  );
}

