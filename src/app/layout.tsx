import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealScript from "@/components/RevealScript";
import LoadingScreen from "@/components/LoadingScreen";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-family-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-family-body",
  display: "swap",
});

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-background text-on-surface selection:bg-secondary selection:text-on-secondary overflow-x-hidden">
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealScript />
      </body>
    </html>
  );
}
