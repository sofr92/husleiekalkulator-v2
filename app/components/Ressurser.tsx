"use client";

export default function Ressurser() {
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
