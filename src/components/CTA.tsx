import Image from "next/image";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-950 to-[#030810] text-white py-20 px-6 md:px-[6vw] relative overflow-hidden border-b border-navy-300/15" id="kontakt">
      {/* Background glow and decorative emblem */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="absolute -top-10 -right-10 md:right-10 w-44 h-44 md:w-56 md:h-56 glass-card-gold !rounded-full flex flex-col items-center justify-center font-archivo text-2xl md:text-3xl leading-none text-center transform rotate-12 opacity-85 z-0 pointer-events-none shadow-2xl">
        <Image 
          src="/images/baza-signet.png" 
          alt="Baza signet" 
          width={64} 
          height={64} 
          className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2 brightness-110" 
        />
        <span className="text-gold-400 tracking-tight text-lg md:text-xl font-bold">LET&apos;S<br />PLAY!</span>
      </div>
      
      <div className="relative z-10 max-w-2xl mb-12">
        <span className="badge badge-gold mb-4">TWOJA KOLEJ</span>
        <h2 className="font-archivo text-4xl md:text-[clamp(48px,5.8vw,80px)] leading-[0.92] my-5 tracking-tighter text-white">
          Widzimy się<br />
          <em className="text-gold-400 not-italic">na korcie?</em>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-navy-100 font-normal">
          Napisz lub zadzwoń — dobierzemy dogodny termin, poziom gry i najlepszą opcję dla Ciebie, Twojej ekipy albo firmy.
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4">
        <a
          href="tel:+48735077481"
          className="btn-primary !py-3.5 !px-7"
        >
          Zadzwoń: 735 077 481 <span className="font-normal text-base">↗</span>
        </a>
        <a
          href="mailto:biuro@baza-padel.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary !py-3.5 !px-6"
        >
          Napisz wiadomość
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Droga+Jeziorna+4%2C+86-300+Grudzi%C4%85dz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Wyznacz trasę do Baza Padel Club w Google Maps"
          className="btn-secondary !py-3.5 !px-6"
        >
          <span className="text-base leading-none text-gold-400">⌖</span> Jak dojechać — Google Maps
        </a>
        
        <small className="block mt-6 md:mt-0 md:ml-auto text-sm text-navy-300 font-medium text-left md:text-right leading-relaxed">
          ul. Droga Jeziorna 4, 86-300 Grudziądz<br />
          <a href="mailto:biuro@baza-padel.pl" className="hover:text-gold-400 transition-colors">biuro@baza-padel.pl</a>
        </small>
      </div>
    </section>
  );
}
