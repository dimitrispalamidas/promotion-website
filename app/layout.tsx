import "./globals.css";
import { Roboto, Open_Sans, Merriweather } from "next/font/google";

import type { Metadata } from "next";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Promotion",
  description: "Promotion Marketing Page",
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
