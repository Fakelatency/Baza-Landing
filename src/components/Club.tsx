import Image from "next/image";

export default function Club() {
  return (
    <section className="bg-navy-950 text-white py-20 px-6 md:px-[6vw] border-b border-navy-300/15" id="klub">
      <div className="mb-16 max-w-2xl">
        <span className="badge badge-gold mb-4">BAR & STREFA CHILL</span>
        <h2 className="font-archivo text-4xl md:text-6xl leading-[0.92] my-4 tracking-tighter">
          Zostań<br />na dłużej.
        </h2>
        <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-6">
          Bar w Bazie to naturalne przedłużenie gry: dobra kawa, rozmowy po meczu i wygodne miejsce, z którego możesz kibicować znajomym.
        </p>
        <a href="#kontakt" className="inline-block text-gold-400 font-bold border-b border-gold-400/40 pb-1 hover:text-gold-300 transition-colors">
          Wpadnij na kawę →
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <div className="glass-card relative min-h-[420px] overflow-hidden group">
          <Image src="/images/baza-kawa.jpg" alt="Ekspres i firmowe filiżanki" fill className="object-cover saturate-[0.85] group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
            <span className="text-gold-400 text-2xl mb-2 block">☕</span>
            <h3 className="font-archivo text-2xl mb-3 tracking-tight text-white">Bar z dobrą kawą</h3>
            <p className="text-navy-100 text-sm leading-relaxed">Espresso przed treningiem, cappuccino po meczu i coś chłodnego w przerwie. Tu sport spotyka się z czystą przyjemnością.</p>
          </div>
        </div>
        
        <div className="glass-card relative min-h-[420px] overflow-hidden group">
          <Image src="/images/baza-wyniki.jpg" alt="Gracze sprawdzający wyniki" fill className="object-cover saturate-[0.85] group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
            <span className="text-gold-400 text-2xl mb-2 block">◎</span>
            <h3 className="font-archivo text-2xl mb-3 tracking-tight text-white">Turnieje na żywo</h3>
            <p className="text-navy-100 text-sm leading-relaxed mb-3">Czytelne wyniki, sportowe emocje i rozgrywki, które integrują graczy na każdym poziomie.</p>
            <a href="/turnieje" className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors uppercase tracking-wider border-b border-gold-400/40 pb-0.5">
              Przejdź do turniejów →
            </a>
          </div>
        </div>

        <div className="glass-card relative min-h-[420px] overflow-hidden group">
          <Image src="/images/baza-otwarcie.jpg" alt="Uroczyste otwarcie" fill className="object-cover saturate-[0.85] group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
            <span className="text-gold-400 text-2xl mb-2 block">☺</span>
            <h3 className="font-archivo text-2xl mb-3 tracking-tight text-white">Atmosfera, dla której wracasz</h3>
            <p className="text-navy-100 text-sm leading-relaxed">Przychodzisz na padla. Zostajesz dla ludzi, rozmów i poczucia, że jesteś u siebie.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
