import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClubFacts from "@/components/ClubFacts";
import ClubShowcase from "@/components/ClubShowcase";
import Promos from "@/components/Promos";
import Coaches from "@/components/Coaches";
import Business from "@/components/Business";
import Club from "@/components/Club";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import QuickBook from "@/components/QuickBook";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baza Padel Grudziądz — graj, trenuj, współpracuj</title>
      </Head>
      
      <Navbar />
      
      <main>
        <Hero />
        <ClubFacts />
        <ClubShowcase />
        <Promos />
        <Coaches />
        <Business />
        <Club />
        <Gallery />
        <Reviews />
        <CTA />
      </main>
      
      <QuickBook />
      <Footer />
    </>
  );
}
