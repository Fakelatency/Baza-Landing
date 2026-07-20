import Image from "next/image";

export default function Coaches() {
  return (
    <section className="bg-navy text-white py-20 px-6 md:px-[6vw] border-b border-white/10" id="trenerzy">
      <div className="mb-16 md:flex justify-between items-end gap-8">
        <div>
          <span className="text-[#087fa8] font-bold tracking-widest text-sm uppercase">NASZ TEAM</span>
          <h2 className="font-archivo text-4xl md:text-6xl leading-[0.9] mt-4 tracking-tighter">
            Trenerzy, którzy<br />dodają Ci skrzydeł.
          </h2>
        </div>
        <p className="text-[#bed0dc] max-w-md mt-6 md:mt-0 text-lg">
          Bez presji, za to z konkretną wiedzą. Od pierwszego chwytu rakiety po turniejową taktykę.
        </p>
      </div>

      <figure className="relative min-h-[520px] md:min-h-[600px] mb-8 border border-white/20 overflow-hidden group">
        <Image 
          src="/images/baza-spolecznosc.jpg" 
          alt="Społeczność Baza Padel Club podczas wspólnego wydarzenia"
          fill
          className="object-cover object-[center_44%] saturate-[0.88] group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy/95 via-navy/55 to-transparent"></div>
        <figcaption className="absolute z-10 left-6 right-6 bottom-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-[5%] md:right-auto md:max-w-[460px]">
          <span className="text-cyan text-xs tracking-widest font-black">BAZA TEAM</span>
          <strong className="block my-4 md:my-5 font-archivo text-4xl md:text-[clamp(38px,4vw,60px)] leading-[0.98] tracking-tighter">
            Sportowa energia.<br />Prawdziwa społeczność.
          </strong>
          <p className="text-[#d8e7ee] text-lg leading-relaxed">
            Trening, rywalizacja i dobra atmosfera — razem gramy o więcej.
          </p>
        </figcaption>
      </figure>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
        {/* Coach 1 */}
        <article className="border border-white/20 bg-navy-2 flex flex-col group">
          <div className="relative h-[300px] md:h-[330px] overflow-hidden">
            <Image src="/images/baza-siatka.jpg" alt="Detal kortu" fill className="object-cover saturate-[0.45] contrast-[1.08] opacity-60 group-hover:scale-105 transition-transform duration-500" />
            <span className="absolute left-6 bottom-4 font-archivo text-[92px] leading-[0.8] text-white opacity-95">KB</span>
            <b className="absolute left-6 top-6 bg-lime text-navy px-2 py-1 text-xs tracking-wider uppercase font-bold z-10">ENERGIA</b>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <span className="text-cyan text-sm font-bold uppercase tracking-wider mb-2">Trener • technika i dynamika</span>
            <h3 className="font-archivo text-3xl leading-[0.9] tracking-tight mb-4">Krzysztof<br />Brończyk</h3>
            <p className="text-[#bed0dc] leading-relaxed mb-6 flex-1">Pomaga budować pewność na korcie, poprawiać uderzenia i grać odważniej — niezależnie od poziomu.</p>
            <a href="#kontakt" className="inline-block text-cyan text-sm font-extrabold border-b border-cyan pb-1 hover:text-white hover:border-white w-fit transition-colors">Umów trening z Krzysztofem →</a>
          </div>
        </article>

        {/* Coach 2 */}
        <article className="border border-white/20 bg-navy-2 flex flex-col group">
          <div className="relative h-[300px] md:h-[330px] overflow-hidden">
            <Image src="/images/baza-logo-siatka.jpg" alt="Logo na siatce" fill className="object-cover saturate-[0.45] contrast-[1.08] opacity-60 group-hover:scale-105 transition-transform duration-500" />
            <span className="absolute left-6 bottom-4 font-archivo text-[92px] leading-[0.8] text-white opacity-95">K</span>
            <b className="absolute left-6 top-6 bg-lime text-navy px-2 py-1 text-xs tracking-wider uppercase font-bold z-10">FLOW</b>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <span className="text-cyan text-sm font-bold uppercase tracking-wider mb-2">Trenerka • ruch i swoboda</span>
            <h3 className="font-archivo text-3xl leading-[0.9] tracking-tight mb-4">Klaudia</h3>
            <p className="text-[#bed0dc] leading-relaxed mb-6 flex-1">Łączy konkretne wskazówki z dobrą energią. Idealny wybór na pierwsze treningi i dalszy rozwój.</p>
            <a href="#kontakt" className="inline-block text-cyan text-sm font-extrabold border-b border-cyan pb-1 hover:text-white hover:border-white w-fit transition-colors">Umów trening z Klaudią →</a>
          </div>
        </article>

        {/* Coach 3 */}
        <article className="border border-white/20 bg-navy-2 flex flex-col group">
          <div className="relative h-[300px] md:h-[330px] overflow-hidden">
            <Image src="/images/baza-detal-bw.jpg" alt="Detal kortu" fill className="object-cover saturate-[0.45] contrast-[1.08] opacity-60 group-hover:scale-105 transition-transform duration-500" />
            <span className="absolute left-6 bottom-4 font-archivo text-[92px] leading-[0.8] text-white opacity-95">JB</span>
            <b className="absolute left-6 top-6 bg-lime text-navy px-2 py-1 text-xs tracking-wider uppercase font-bold z-10">TAKTYKA</b>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <span className="text-cyan text-sm font-bold uppercase tracking-wider mb-2">Trener • strategia i ustawienie</span>
            <h3 className="font-archivo text-3xl leading-[0.9] tracking-tight mb-4">Jacek<br />Brończyk</h3>
            <p className="text-[#bed0dc] leading-relaxed mb-6 flex-1">Uczy czytać grę, lepiej ustawiać się na korcie i podejmować skuteczne decyzje pod presją.</p>
            <a href="#kontakt" className="inline-block text-cyan text-sm font-extrabold border-b border-cyan pb-1 hover:text-white hover:border-white w-fit transition-colors">Umów trening z Jackiem →</a>
          </div>
        </article>
      </div>

      <a
        href="#kontakt"
        className="inline-flex bg-lime text-navy border-2 border-navy font-bold px-6 py-3 shadow-[4px_4px_0_var(--color-navy)] hover:shadow-[2px_2px_0_var(--color-navy)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all items-center gap-2"
      >
        Umów trening <span className="font-normal text-lg">↗</span>
      </a>
    </section>
  );
}
