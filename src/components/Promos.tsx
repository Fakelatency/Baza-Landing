export default function Promos() {
  return (
    <section className="bg-navy-950 text-white py-20 px-6 md:px-[6vw] border-b border-navy-300/15 relative overflow-hidden" id="promocje">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-navy-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="mb-16 md:flex justify-between items-end gap-8 relative z-10">
        <div>
          <span className="text-gold-400 font-bold tracking-widest text-xs uppercase block mb-3">WYBIERZ SWOJĄ GRĘ</span>
          <h2 className="font-archivo text-4xl md:text-6xl leading-[0.92] tracking-tighter">
            Najprostsza droga<br />na kort.
          </h2>
        </div>
        <p className="text-navy-200 max-w-md mt-6 md:mt-0 text-base md:text-lg">
          Tak jak w najlepszych europejskich klubach: wybierasz sposób gry, rezerwujesz i wchodzisz na kort.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 relative z-10">
        {/* Option 1 */}
        <article className="glass-card-gold p-8 relative group flex flex-col justify-between">
          <span className="absolute top-6 right-6 font-archivo text-6xl text-gold-400/10 pointer-events-none select-none">01</span>
          <div>
            <div className="badge badge-gold mb-6">PIERWSZY RAZ</div>
            <h3 className="font-archivo text-2xl md:text-3xl leading-tight mb-4 tracking-tight text-white">
              Pierwsza Baza<br /><strong className="text-gold-400 font-archivo">zacznij dobrze</strong>
            </h3>
            <p className="mb-8 font-normal text-navy-100 text-sm md:text-base leading-relaxed">
              Zajęcia wprowadzające, zasady gry i pierwsze odbicia pod okiem certyfikowanego trenera.
            </p>
          </div>
          <a href="#kontakt" className="font-bold text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center gap-1 text-sm border-b border-gold-400/40 pb-1 w-fit">
            Zapytaj o najbliższy termin →
          </a>
        </article>

        {/* Option 2 */}
        <article className="glass-card p-8 relative group flex flex-col justify-between border-navy-300/30">
          <span className="absolute top-6 right-6 font-archivo text-6xl text-navy-300/10 pointer-events-none select-none">02</span>
          <div>
            <div className="badge badge-blue mb-6">GRAM REGULARNIE</div>
            <h3 className="font-archivo text-2xl md:text-3xl leading-tight mb-4 tracking-tight text-white">
              Rezerwacja<br /><strong className="text-navy-200 font-archivo">w kilka sekund</strong>
            </h3>
            <p className="mb-8 font-normal text-navy-100 text-sm md:text-base leading-relaxed">
              Wybierz dogodny termin online. Z kartą partnerską możesz otrzymać rabat 15 zł za każdą odbijaną kartę.
            </p>
          </div>
          <a href="https://playmore.pl/klub/baza-padel-club/" target="_blank" rel="noopener noreferrer" className="font-bold text-navy-200 hover:text-white transition-colors inline-flex items-center gap-1 text-sm border-b border-navy-300/40 pb-1 w-fit">
            Sprawdź dostępność →
          </a>
        </article>

        {/* Option 3 */}
        <article className="glass-card p-8 relative group flex flex-col justify-between">
          <span className="absolute top-6 right-6 font-archivo text-6xl text-navy-300/10 pointer-events-none select-none">03</span>
          <div>
            <div className="badge badge-gold mb-6">FIRMY I GRUPY</div>
            <h3 className="font-archivo text-2xl md:text-3xl leading-tight mb-4 tracking-tight text-white">
              Team building<br /><strong className="text-gold-400 font-archivo">bez nudy</strong>
            </h3>
            <p className="mb-8 font-normal text-navy-100 text-sm md:text-base leading-relaxed">
              Korty, prowadzenie, emocjonujący turniej, poczęstunek i strefa chill w jednym miejscu.
            </p>
          </div>
          <a href="#partnerzy" className="font-bold text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center gap-1 text-sm border-b border-gold-400/40 pb-1 w-fit">
            Poznaj ofertę →
          </a>
        </article>
      </div>

      <p className="text-navy-300/70 text-xs md:text-sm text-center md:text-left relative z-10">
        * Akceptowane karty i aktualne zasady rabatów potwierdzimy przy rezerwacji.
      </p>
    </section>
  );
}
