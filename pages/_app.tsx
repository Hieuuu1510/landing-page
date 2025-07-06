import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/slide.css";

import type { AppProps } from "next/app";

import { Inter, Calistoga } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "600",
  display: "swap",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calistoga",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${calistoga.variable} font-inter`}>
      <Component {...pageProps} />
    </main>
  );
}
