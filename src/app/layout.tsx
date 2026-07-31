import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

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
    <html lang="en" className={archivo.variable}>
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
