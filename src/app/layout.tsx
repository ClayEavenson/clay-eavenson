import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Clay Eavenson — Sit Down, Shut Up, Hold On",
  description: "Sit Down, Shut Up, Hold On — lessons from a life of big dreams, insanely bad circumstances, and starting over. By Clay Eavenson.",
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
      </body>
    </html>
  );
}
