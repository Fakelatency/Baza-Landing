export default function Promos() {
  return (
    <section className="bg-[#151a1f] text-white py-20 px-6 md:px-[6vw] border-b border-white/10" id="promocje">
      <div className="mb-16 md:flex justify-between items-end gap-8">
        <div>
          <span className="text-[#087fa8] font-bold tracking-widest text-sm uppercase">WYBIERZ SWOJĄ GRĘ</span>
          <h2 className="font-archivo text-4xl md:text-6xl leading-[0.9] mt-4 tracking-tighter">
            Najprostsza droga<br />na kort.
          </h2>
        </div>
        <p className="text-[#aebbc3] max-w-md mt-6 md:mt-0 text-lg">
          Tak jak w najlepszych europejskich klubach: wybierasz sposób gry, rezerwujesz i wchodzisz na kort.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
        <article className="bg-lime text-navy border-2 border-navy p-8 shadow-[7px_7px_0_var(--color-navy)] relative group hover:-translate-y-2 transition-transform duration-300">
          <span className="absolute top-6 right-6 font-archivo text-6xl opacity-10">01</span>
          <div className="inline-block bg-navy text-lime text-xs font-bold px-3 py-1 mb-6 uppercase tracking-wider">PIERWSZY RAZ</div>
          <h3 className="font-archivo text-3xl leading-tight mb-4 tracking-tight">Pierwsza Baza<br /><strong className="text-navy">zacznij dobrze</strong></h3>
          <p className="mb-8 font-medium">Zajęcia wprowadzające, zasady gry i pierwsze odbicia pod opieką trenera.</p>
          <a href="#kontakt" className="font-bold border-b-2 border-navy pb-1 hover:text-[#087fa8] hover:border-[#087fa8] transition-colors">Zapytaj o najbliższy termin →</a>
        </article>

        <article className="bg-navy-2 text-white border-2 border-navy p-8 shadow-[7px_7px_0_var(--color-navy)] relative group hover:-translate-y-2 transition-transform duration-300">
          <span className="absolute top-6 right-6 font-archivo text-6xl opacity-10">02</span>
          <div className="inline-block bg-white text-navy-2 text-xs font-bold px-3 py-1 mb-6 uppercase tracking-wider">GRAM REGULARNIE</div>
          <h3 className="font-archivo text-3xl leading-tight mb-4 tracking-tight">Rezerwacja<br /><strong className="text-cyan">w kilka sekund</strong></h3>
          <p className="mb-8 font-medium text-[#bac8d0]">Wybierz termin online. Z kartą partnerską możesz otrzymać rabat 15 zł za każdą odbijaną kartę.</p>
          <a href="https://playmore.pl/klub/baza-padel-club/" target="_blank" rel="noopener noreferrer" className="font-bold text-cyan border-b-2 border-cyan pb-1 hover:text-white hover:border-white transition-colors">Sprawdź dostępność →</a>
        </article>

        <article className="bg-cyan text-navy border-2 border-navy p-8 shadow-[7px_7px_0_var(--color-navy)] relative group hover:-translate-y-2 transition-transform duration-300">
          <span className="absolute top-6 right-6 font-archivo text-6xl opacity-10">03</span>
          <div className="inline-block bg-navy text-cyan text-xs font-bold px-3 py-1 mb-6 uppercase tracking-wider">FIRMY I GRUPY</div>
          <h3 className="font-archivo text-3xl leading-tight mb-4 tracking-tight">Team building<br /><strong className="text-white">bez nudy</strong></h3>
          <p className="mb-8 font-medium">Korty, prowadzenie, turniej, poczęstunek i strefa chill w jednym miejscu.</p>
          <a href="#partnerzy" className="font-bold border-b-2 border-navy pb-1 hover:text-white hover:border-white transition-colors">Poznaj ofertę →</a>
        </article>
      </div>

      <p className="text-[#aebbc3] text-sm text-center md:text-left">* Akceptowane karty i aktualne zasady rabatów potwierdzimy przy rezerwacji.</p>
    </section>
  );
}
