import { useState } from "react";

export default function SammenligningLeieEie({ useTextInputs = false }) {
  const [leie, setLeie] = useState("12000");
  const [kjopPris, setKjopPris] = useState("3500000");
  const [egenkapital, setEgenkapital] = useState("500000");
  const [rente, setRente] = useState("5");
  const [aar, setAar] = useState("10");

  const laanebelop = parseFloat(kjopPris) - parseFloat(egenkapital);
  const totalLeie = parseFloat(leie) * 12 * parseFloat(aar);
  const renteKost = laanebelop * (parseFloat(rente) / 100) * parseFloat(aar);
  const totalEie = renteKost;

  type InputProps = {
    label: string;
    value: string;
    onChange: (val: string) => void;
  };

  const Input = ({ label, value, onChange }: InputProps) => (
    <label>
      {label}
      <input
        type={useTextInputs ? "text" : "number"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded p-2"
      />
    </label>
  );

  return (
    <section className="bg-[#fff5f0] border border-[#f0d6cc] p-4 sm:p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-[#7b2d21]">Leie vs Eie (10 år)</h2>
      <div className="grid gap-3">
        <Input label="Månedlig leie (NOK)" value={leie} onChange={setLeie} />
        <Input label="Kjøpspris bolig (NOK)" value={kjopPris} onChange={setKjopPris} />
        <Input label="Egenkapital (NOK)" value={egenkapital} onChange={setEgenkapital} />
        <Input label="Rente (% per år)" value={rente} onChange={setRente} />
        <Input label="Antall år" value={aar} onChange={setAar} />

        <div className="bg-[#fbe8de] p-3 rounded mt-3 text-sm">
          <p><strong>Totale leiekostnader:</strong> {totalLeie.toLocaleString()} kr</p>
          <p><strong>Rentekostnader ved kjøp:</strong> {totalEie.toLocaleString()} kr</p>
        </div>
      </div>
    </section>
  );
}
