export default function CTA() {
  return (
    <section className="bg-lime text-navy py-20 px-6 md:px-[6vw] relative overflow-hidden" id="kontakt">
      <div className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-cyan border-[12px] border-navy shadow-[10px_10px_0_var(--color-navy)] rounded-full flex items-center justify-center font-archivo text-3xl md:text-5xl leading-none text-center transform rotate-12 opacity-80 z-0">
        LET&apos;S<br />PLAY!
      </div>
      
      <div className="relative z-10 max-w-3xl mb-12">
        <span className="text-[#087fa8] font-bold tracking-widest text-sm uppercase">TWOJA KOLEJ</span>
        <h2 className="font-archivo text-5xl md:text-[clamp(50px,6vw,84px)] leading-[0.9] my-6 tracking-tighter">
          Widzimy się<br />na korcie?
        </h2>
        <p className="text-xl leading-relaxed max-w-xl font-medium">
          Napisz lub zadzwoń — dobierzemy termin, poziom gry i najlepszą opcję dla Ciebie, Twojej ekipy albo firmy.
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 md:gap-6">
        <a
          href="tel:+48735077481"
          className="inline-flex bg-navy text-white border-2 border-navy font-bold px-6 py-4 shadow-[4px_4px_0_#fff] hover:shadow-[2px_2px_0_#fff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all items-center gap-2"
        >
          Zadzwoń: 735 077 481 <span className="font-normal text-lg">↗</span>
        </a>
        <a
          href="mailto:biuro@baza-padel.pl"
          className="inline-flex bg-transparent text-navy border-2 border-navy font-bold px-6 py-4 hover:bg-navy hover:text-white transition-colors"
        >
          Napisz wiadomość
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Droga+Jeziorna+4%2C+86-300+Grudzi%C4%85dz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Wyznacz trasę do Baza Padel Club w Google Maps"
          className="inline-flex bg-cyan text-navy border-2 border-navy font-bold px-6 py-4 shadow-[4px_4px_0_var(--color-navy)] hover:shadow-[2px_2px_0_var(--color-navy)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all items-center gap-2"
        >
          <span className="text-xl leading-none">⌖</span> Jak dojechać — Google Maps
        </a>
        
        <small className="block mt-6 md:mt-0 md:ml-auto text-sm font-bold opacity-80 text-left md:text-right leading-relaxed">
          ul. Droga Jeziorna 4, 86-300 Grudziądz<br />biuro@baza-padel.pl
        </small>
      </div>
    </section>
  );
}
