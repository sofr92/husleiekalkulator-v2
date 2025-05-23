"use client";

import SammenligningLeieEie from "./components/SammenligningLeieEie";
import DokumentavgiftEiendomsskatt from "./components/DokumentavgiftEiendomsskatt";
import Ressurser from "./components/Ressurser";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f2d2c2] via-[#fbe8de] to-[#e6b6a4] p-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#7b2d21] mb-8">
          Husleiekalkulator – Leie vs Eie
        </h1>
        <SammenligningLeieEie />
        <DokumentavgiftEiendomsskatt />
        <Ressurser />
      </div>
    </main>
  );
}
