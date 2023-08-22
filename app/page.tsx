"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "./components/home/nav-bar";
import HomeSection from "./components/home/home-section";

export default function Home() {
  const router = useRouter();

  // router.push("http://localhost:3000/login")
  return (
    <main className="home-container w-full h-screen overflow-hidden bg-[#F6F6F6]">
      <Navbar />
      <HomeSection />
    </main>
  );
}
