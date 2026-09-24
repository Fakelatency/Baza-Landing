import Image from "next/image";

export default function Coaches() {
  return (
    <section className="bg-navy-950 text-white py-20 px-6 md:px-[6vw] border-b border-navy-300/15" id="trenerzy">
      <div className="mb-16 md:flex justify-between items-end gap-8">
        <div>
          <span className="text-gold-400 font-bold tracking-widest text-xs uppercase block mb-3">NASZ TEAM</span>
          <h2 className="font-archivo text-4xl md:text-6xl leading-[0.92] tracking-tighter">
            Trenerzy, którzy<br />dodają Ci skrzydeł.
          </h2>
        </div>
        <p className="text-navy-200 max-w-md mt-6 md:mt-0 text-base md:text-lg">
          Bez presji, za to z konkretną wiedzą. Od pierwszego chwytu rakiety po turniejową taktykę.
        </p>
      </div>

      <figure className="relative min-h-[480px] md:min-h-[580px] mb-12 rounded-2xl border border-navy-300/20 overflow-hidden group">
        <Image 
          src="/images/baza-spolecznosc.jpg" 
          alt="Społeczność Baza Padel Club podczas wspólnego wydarzenia"
          fill
          className="object-cover object-[center_44%] saturate-[0.9] group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy-950/95 via-navy-900/60 to-transparent"></div>
        <figcaption className="absolute z-10 left-6 right-6 bottom-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-[5%] md:right-auto md:max-w-[460px]">
          <span className="badge badge-gold mb-3">BAZA TEAM</span>
          <strong className="block my-3 md:my-4 font-archivo text-3xl md:text-[clamp(36px,4vw,56px)] leading-[0.98] tracking-tighter text-white">
            Sportowa energia.<br />Prawdziwa społeczność.
          </strong>
          <p className="text-navy-100 text-base md:text-lg leading-relaxed">
            Trening, rywalizacja i doskonała atmosfera — razem gramy o więcej.
          </p>
        </figcaption>
      </figure>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 max-w-4xl">
        {/* Coach 1 */}
        <article className="glass-card flex flex-col group overflow-hidden">
          <div className="relative h-[320px] md:h-[360px] overflow-hidden bg-navy-900">
            <Image 
              src="/images/trener-krzysztof.jpg" 
              alt="Krzysztof Brończyk — trener Baza Padel" 
              fill 
              className="object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
            <span className="absolute left-6 top-6 badge badge-gold">ENERGIA</span>
          </div>
          <div className="p-7 flex-1 flex flex-col">
            <span className="text-navy-300 text-xs font-bold uppercase tracking-wider mb-2">Trener • technika i dynamika</span>
            <h3 className="font-archivo text-2xl md:text-3xl leading-[0.95] tracking-tight mb-4 text-white">Krzysztof<br />Brończyk</h3>
            <p className="text-navy-200 text-sm leading-relaxed mb-6 flex-1">Pomaga budować pewność na korcie, doskonalić uderzenia i grać odważniej — niezależnie od poziomu.</p>
            <a href="#kontakt" className="inline-block text-gold-400 text-sm font-bold hover:text-gold-300 border-b border-gold-400/40 pb-1 w-fit transition-colors">Umów trening z Krzysztofem →</a>
          </div>
        </article>

        {/* Coach 2 */}
        <article className="glass-card flex flex-col group overflow-hidden">
          <div className="relative h-[320px] md:h-[360px] overflow-hidden bg-navy-900">
            <Image 
              src="/images/trener-klaudia.jpg" 
              alt="Klaudia — trenerka Baza Padel" 
              fill 
              className="object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
            <span className="absolute left-6 top-6 badge badge-blue">FLOW</span>
          </div>
          <div className="p-7 flex-1 flex flex-col">
            <span className="text-navy-300 text-xs font-bold uppercase tracking-wider mb-2">Trenerka • ruch i swoboda</span>
            <h3 className="font-archivo text-2xl md:text-3xl leading-[0.95] tracking-tight mb-4 text-white">Klaudia</h3>
            <p className="text-navy-200 text-sm leading-relaxed mb-6 flex-1">Łączy konkretne wskazówki z dobrą energią. Idealny wybór na pierwsze treningi i dalszy rozwój.</p>
            <a href="#kontakt" className="inline-block text-gold-400 text-sm font-bold hover:text-gold-300 border-b border-gold-400/40 pb-1 w-fit transition-colors">Umów trening z Klaudią →</a>
          </div>
        </article>
      </div>

      <div className="text-center md:text-left">
        <a
          href="#kontakt"
          className="btn-primary"
        >
          Umów trening <span className="font-normal text-base">↗</span>
        </a>
      </div>
    </section>
  );
}
