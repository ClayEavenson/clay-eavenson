import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://clayeavenson.com"),
  title: {
    template: "%s | Clay Eavenson",
    default: "Clay Eavenson — Sit Down, Shut Up, Hold On",
  },
  description: "Sit Down, Shut Up, Hold On — lessons from a life of big dreams, insanely bad circumstances, and starting over. By Clay Eavenson.",
  openGraph: {
    title: "Clay Eavenson — Sit Down, Shut Up, Hold On",
    description: "Sit Down, Shut Up, Hold On — lessons from a life of big dreams, insanely bad circumstances, and starting over. By Clay Eavenson.",
    url: "https://clayeavenson.com",
    siteName: "Clay Eavenson",
    images: [
      {
        url: "/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Sit Down, Shut Up, Hold On - Clay Eavenson",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clay Eavenson — Sit Down, Shut Up, Hold On",
    description: "Sit Down, Shut Up, Hold On — lessons from a life of big dreams, insanely bad circumstances, and starting over. By Clay Eavenson.",
    images: ["/hero-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,400..900;1,62..125,400..900&display=swap" />
      </head>
      <body>
        <Navigation />
        {children}
        <footer className="site-footer">
          <span>&#169; 2026 Clay Eavenson</span>
          <span>Sit Down, Shut Up, Hold On</span>
          <a href="https://www.amazon.com/Sit-Down-Shut-Hold-Circumstances/dp/B0HBYMB5ZH/ref=sr_1_1" rel="noopener noreferrer" target="_blank">Buy the book &#8594;</a>
          <span>
            Designed and Maintained by{" "}
            <a href="https://steamworks.io" rel="noopener noreferrer" target="_blank">
              SteamWorks.io
            </a>
          </span>
        </footer>
      </body>
    </html>
  );
}
