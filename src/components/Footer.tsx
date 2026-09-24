import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white px-6 py-16 flex flex-col items-center text-center border-t border-navy-300/15">
      <Link href="#start" className="flex items-center gap-3 group mb-5 transition-transform hover:scale-[1.02]">
        <Image
          src="/images/baza-logo.png"
          alt="Baza Padel Club"
          width={180}
          height={68}
          className="h-9 md:h-11 w-auto object-contain brightness-105"
        />
      </Link>
      <p className="text-navy-300 text-sm md:text-base mb-8 max-w-sm text-balance">
        Najnowocześniejszy klub padla na Pomorzu.
      </p>
      <Link href="#start" className="text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors uppercase tracking-widest flex items-center gap-1.5">
        <span>Do góry</span> <span>↑</span>
      </Link>
    </footer>
  );
}
