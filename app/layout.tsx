import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "S.T.Promotion | Professional Promotion Services",
  description: "Leading promotion services in Kalamata, Greece. We specialize in creating memorable experiences and successful events.",
  keywords: "promotion, events, Kalamata, Greece, marketing, professional services",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
