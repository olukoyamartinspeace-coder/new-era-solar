import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealScript from "@/components/RevealScript";

export const metadata: Metadata = {
  title: "New Era Solar World | Premium Sustainable Energy Solutions",
  description:
    "Reliable Solar Solutions for Every Need. Power your home and business with sustainable energy from New Era Solar World.",
  keywords:
    "solar, solar panels, renewable energy, solar installation, Nigeria solar, New Era Solar World",
  openGraph: {
    title: "New Era Solar World | Premium Sustainable Energy Solutions",
    description:
      "Power your home and business with sustainable energy from New Era Solar World.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface selection:bg-secondary selection:text-on-secondary overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealScript />
      </body>
    </html>
  );
}
