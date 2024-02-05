'use client'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <audio src="/valentines.mp3" autoPlay>
          <source src="/valentines.mp3" type="audio/mpeg" />
        </audio>
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
