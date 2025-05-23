"use client";

import SammenligningLeieEie from "./components/SammenligningLeieEie";
import DokumentavgiftEiendomsskatt from "./components/DokumentavgiftEiendomsskatt";
import Ressurser from "./components/Ressurser";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2d2c2] via-[#fbe8de] to-[#e6b6a4] text-gray-900 py-6 sm:py-12">
      <div className="flex justify-center gap-6 px-4">
        {/* Venstre annonse (skjult på mobil) */}
        <div className="hidden lg:block w-60">
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-5278856821470925"
            data-ad-slot="7070925323"
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

          {/* Reklame mellom kalkulatorene */}
          <div className="my-6">
            <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-5278856821470925"
              data-ad-slot="4511360534"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});` }} />
          </div>

          <DokumentavgiftEiendomsskatt />
          <Ressurser />
        </main>

        {/* Høyre annonse (skjult på mobil) */}
        <div className="hidden lg:block w-60">
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-5278856821470925"
            data-ad-slot="7050502774"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});` }} />
        </div>
      </div>
    </div>
  );
}
