import Image from "next/image";
import { Geist, Geist_Mono, Josefin_Slab } from "next/font/google";
import Navbar from "@/components/navbar";
import Slides from "@/components/slides";

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
      <Navbar />
      <Slides />
    </>
  );
}
