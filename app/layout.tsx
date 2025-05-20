import "./globals.css";

export const metadata = {
  title: "Husleiekalkulator",
  description: "Sammenlign utgifter ved å leie eller kjøpe bolig. Enkel og visuell kalkulator.",
  openGraph: {
    title: "Husleiekalkulator",
    description: "Regn på hva det koster å leie eller eie bolig over tid.",
    url: "https://husleiekalkulator.vercel.app",
    siteName: "Husleiekalkulator",
    locale: "no_NO",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <head>
        <meta name="description" content="Regn på hva det koster å leie eller eie bolig over tid." />
        <meta property="og:title" content="Husleiekalkulator" />
        <meta property="og:description" content="Sammenlign utgifter ved boligkjøp og leie." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/social-preview.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Manrope', sans-serif" }}>{children}</body>
    </html>
  );
}
