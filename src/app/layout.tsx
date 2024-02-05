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
        <div className='flex justify-center mt-8 -mb-8'>
        <audio className='inline-block w-[200px]' src="/valentines.mp3" controls autoPlay>
          zagraj
          <source src="/valentines.mp3" type="audio/mpeg" />
        </audio>
        </div>
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
