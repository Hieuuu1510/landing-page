import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Slides from "@/components/slides";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Cozy Stay</title>
      </Head>
      <Navbar />
      <Slides />
    </>
  );
}
