import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-4 py-3.5 md:px-8 bg-navy-950/85 backdrop-blur-xl border-b border-navy-300/15"
      id="start"
    >
      <Link
        href="#start"
        className="flex items-center gap-3 group transition-transform hover:scale-[1.02]"
        aria-label="Baza Padel Grudziądz — strona główna"
      >
        <Image
          src="/images/baza-logo.png"
          alt="Baza Padel Club"
          width={180}
          height={68}
          priority
          className="h-8 md:h-10 w-auto object-contain brightness-105"
        />
      </Link>

      <nav
        aria-label="Główna nawigacja"
        className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide text-navy-100"
      >
        <Link href="#promocje" className="hover:text-gold-400 transition-colors">
          Zacznij grać
        </Link>
        <Link href="#trenerzy" className="hover:text-gold-400 transition-colors">
          Trenerzy
        </Link>
        <Link href="#partnerzy" className="hover:text-gold-400 transition-colors">
          Dla firm
        </Link>
        <Link href="#klub" className="hover:text-gold-400 transition-colors">
          Klub
        </Link>
        <Link
          href="/turnieje"
          className="text-gold-300 hover:text-gold-400 transition-colors flex items-center gap-1 font-bold"
        >
          Turnieje
        </Link>
        <Link href="#opinie" className="hover:text-gold-400 transition-colors">
          Opinie
        </Link>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Droga+Jeziorna+4%2C+86-300+Grudzi%C4%85dz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gold-400 transition-colors flex items-center gap-1 text-navy-200"
        >
          Dojazd <span className="text-xs">↗</span>
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <Link
          href="/turnieje"
          className="hidden sm:inline-flex lg:hidden text-xs font-bold text-gold-300 hover:text-gold-400 px-3 py-2 rounded-xl bg-navy-800/80 border border-gold-500/25 transition-all"
        >
          Turnieje
        </Link>
        <a
          href="https://playmore.pl/klub/baza-padel-club/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs md:text-sm !py-2.5 !px-5"
        >
          Rezerwuję kort ↗
        </a>
      </div>
    </header>
  );
}
