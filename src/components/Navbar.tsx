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
        <Link href="#promocje" className="hover:text-orange-400 transition-colors">
          Zacznij grać
        </Link>
        <Link href="#trenerzy" className="hover:text-orange-400 transition-colors">
          Trenerzy
        </Link>
        <Link href="#partnerzy" className="hover:text-orange-400 transition-colors">
          Dla firm
        </Link>
        <Link href="#klub" className="hover:text-orange-400 transition-colors">
          Klub
        </Link>
        <a
          href="/turnieje"
          className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1 font-bold"
        >
          Turnieje
        </a>
        <Link href="#opinie" className="hover:text-orange-400 transition-colors">
          Opinie
        </Link>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Droga+Jeziorna+4%2C+86-300+Grudzi%C4%85dz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition-colors flex items-center gap-1 text-navy-200"
        >
          Dojazd <span className="text-xs">↗</span>
        </a>
      </nav>

      <div className="flex items-center gap-2.5">
        {/* Social Links: FB & IG */}
        <div className="flex items-center gap-1.5 mr-1">
          <a
            href="https://www.facebook.com/BazaPadelClub/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Baza Padel Club"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-navy-200 hover:text-white hover:bg-navy-800 border border-navy-300/20 transition-all hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/bazapadel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Baza Padel Club"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-navy-200 hover:text-white hover:bg-navy-800 border border-navy-300/20 transition-all hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        <a
          href="/turnieje"
          className="hidden sm:inline-flex lg:hidden text-xs font-bold text-orange-400 hover:text-orange-300 px-3 py-2 rounded-xl bg-navy-800/80 border border-orange-500/25 transition-all"
        >
          Turnieje
        </a>
        <a
          href="https://kluby.org/baza-padel-club"
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
