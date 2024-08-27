import "./globals.css";
import { Merriweather } from "next/font/google";

import type { Metadata } from "next";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "S.T.Promotion",
  description: "Promotion Kalamata",
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
    <html lang='en'>
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
