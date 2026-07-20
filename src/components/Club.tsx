import Image from "next/image";

export default function Club() {
  return (
    <section className="bg-[#1b2025] text-white py-20 px-6 md:px-[6vw] border-b border-white/10" id="klub">
      <div className="mb-16 max-w-2xl">
        <span className="text-[#087fa8] font-bold tracking-widest text-sm uppercase">BAR & STREFA CHILL</span>
        <h2 className="font-archivo text-4xl md:text-6xl leading-[0.9] mt-4 mb-6 tracking-tighter">
          Zostań<br />na dłużej.
        </h2>
        <p className="text-[#b8c4cb] text-lg leading-relaxed mb-6">
          Bar w Bazie to naturalne przedłużenie gry: dobra kawa, rozmowy po meczu i wygodne miejsce, z którego możesz kibicować znajomym.
        </p>
        <a href="#kontakt" className="inline-block text-cyan font-bold border-b border-cyan pb-1 hover:text-white hover:border-white transition-colors">
          Wpadnij na kawę →
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="relative min-h-[410px] border-2 border-navy bg-navy shadow-[6px_6px_0_var(--color-navy)] overflow-hidden group">
          <Image src="/images/baza-kawa.jpg" alt="Ekspres i firmowe filiżanki" fill className="object-cover saturate-[0.8] group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <span className="text-lime text-2xl mb-2 block">☕</span>
            <h3 className="font-archivo text-2xl mb-3 tracking-tight">Bar z dobrą kawą</h3>
            <p className="text-[#d8e7ee] text-sm leading-relaxed">Espresso przed treningiem, cappuccino po meczu i coś chłodnego w przerwie. Tu sport spotyka się z przyjemnością.</p>
          </div>
        </div>
        
        <div className="relative min-h-[410px] border-2 border-navy bg-navy shadow-[6px_6px_0_var(--color-navy)] overflow-hidden group">
          <Image src="/images/baza-wyniki.jpg" alt="Gracze sprawdzający wyniki" fill className="object-cover saturate-[0.8] group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <span className="text-lime text-2xl mb-2 block">◎</span>
            <h3 className="font-archivo text-2xl mb-3 tracking-tight">Turnieje na żywo</h3>
            <p className="text-[#d8e7ee] text-sm leading-relaxed">Czytelne wyniki, sportowe emocje i rozgrywki, które integrują graczy na każdym poziomie.</p>
          </div>
        </div>

        <div className="relative min-h-[410px] border-2 border-navy bg-navy shadow-[6px_6px_0_var(--color-navy)] overflow-hidden group">
          <Image src="/images/baza-otwarcie.jpg" alt="Uroczyste otwarcie" fill className="object-cover saturate-[0.8] group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <span className="text-lime text-2xl mb-2 block">☺</span>
            <h3 className="font-archivo text-2xl mb-3 tracking-tight">Atmosfera, dla której się wraca</h3>
            <p className="text-[#d8e7ee] text-sm leading-relaxed">Przychodzisz na padla. Zostajesz dla ludzi, rozmów i poczucia, że jesteś u siebie.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
