import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 bg-[#151a1f]/95 backdrop-blur-md border-b border-white/10"
      id="start"
    >
      <Link
        href="#start"
        className="flex items-end gap-2 group"
        aria-label="Baza Padel Grudziądz — strona główna"
      >
        <span className="font-archivo text-[24px] md:text-[27px] leading-[0.8] tracking-[-2px] lowercase">
          baza.
        </span>
        <span className="text-[8px] font-black tracking-[1.2px] text-[#087fa8] group-hover:text-cyan transition-colors">
          PADEL CLUB
        </span>
      </Link>

      <nav
        aria-label="Główna nawigacja"
        className="hidden lg:flex items-center gap-6 text-sm font-medium"
      >
        <Link href="#promocje" className="hover:text-[#087fa8] transition-colors">
          Zacznij grać
        </Link>
        <Link href="#trenerzy" className="hover:text-[#087fa8] transition-colors">
          Trenerzy
        </Link>
        <Link href="#partnerzy" className="hover:text-[#087fa8] transition-colors">
          Dla firm
        </Link>
        <Link href="#klub" className="hover:text-[#087fa8] transition-colors">
          Klub
        </Link>
        <Link href="#opinie" className="hover:text-[#087fa8] transition-colors">
          Opinie
        </Link>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Droga+Jeziorna+4%2C+86-300+Grudzi%C4%85dz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#087fa8] transition-colors"
        >
          Dojazd ↗
        </a>
      </nav>

      <a
        href="https://playmore.pl/klub/baza-padel-club/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex bg-lime text-navy border-2 border-navy font-bold px-4 py-2 text-sm shadow-[4px_4px_0_var(--color-navy)] hover:shadow-[2px_2px_0_var(--color-navy)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
      >
        Rezerwuję kort
      </a>
    </header>
  );
}
