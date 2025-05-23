import { useState } from "react";

export default function SammenligningLeieEie() {
  const [values, setValues] = useState({
    leie: "12000",
    kjopPris: "3500000",
    egenkapital: "500000",
    rente: "5",
    aar: "10",
  });

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const leieNum = parseFloat(values.leie);
  const kjopPrisNum = parseFloat(values.kjopPris);
  const egenkapitalNum = parseFloat(values.egenkapital);
  const renteNum = parseFloat(values.rente);
  const aarNum = parseFloat(values.aar);

  const laanebelop = !isNaN(kjopPrisNum) && !isNaN(egenkapitalNum) ? kjopPrisNum - egenkapitalNum : NaN;
  const totalLeie = !isNaN(leieNum) && !isNaN(aarNum) ? leieNum * 12 * aarNum : NaN;
  const renteKost = !isNaN(laanebelop) && !isNaN(renteNum) && !isNaN(aarNum) ? laanebelop * (renteNum / 100) * aarNum : NaN;
  const totalEie = renteKost;

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
        placeholder="Skriv inn beløp"
      />
    </label>
  );

  return (
    <section className="bg-[#fff5f0] border border-[#f0d6cc] p-4 sm:p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-[#7b2d21]">Leie vs Eie (10 år)</h2>
      <div className="grid gap-4">
        <Input label="Månedlig leie (NOK)" name="leie" />
        <Input label="Kjøpspris bolig (NOK)" name="kjopPris" />
        <Input label="Egenkapital (NOK)" name="egenkapital" />
        <Input label="Rente (% per år)" name="rente" />
        <Input label="Antall år" name="aar" />

        <div className="bg-[#fbe8de] p-3 rounded mt-3 text-sm">
          <p><strong>Totale leiekostnader:</strong> {isNaN(totalLeie) ? "-" : totalLeie.toLocaleString()} kr</p>
          <p><strong>Rentekostnader ved kjøp:</strong> {isNaN(totalEie) ? "-" : totalEie.toLocaleString()} kr</p>
        </div>
      </div>
    </section>
  );
}

