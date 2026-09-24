import Image from "next/image";

export default function Business() {
  return (
    <section className="bg-navy-900/60 text-white flex flex-col lg:flex-row border-b border-navy-300/15 relative overflow-hidden" id="partnerzy">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-navy-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex-1 px-6 py-20 md:px-[6vw] flex flex-col justify-center relative z-10">
        <span className="badge badge-gold mb-4 w-fit">GRAJMY W JEDNEJ BAZIE</span>
        <h2 className="font-archivo text-4xl md:text-[clamp(44px,4.8vw,68px)] leading-[0.92] my-5 tracking-tighter text-white">
          Biznes lubi<br />
          <em className="text-orange-500 not-italic">dobry serwis.</em>
        </h2>
        <p className="max-w-xl text-base md:text-lg leading-relaxed mb-8 text-navy-100">
          Szukasz świeżego pomysłu na integrację, benefitu dla zespołu albo widoczności marki? W Bazie łączymy sportowe emocje z relacjami, które pracują długo po ostatnim secie.
        </p>
        
        <ul className="grid sm:grid-cols-2 gap-4 mb-10 font-semibold text-sm md:text-base text-navy-100">
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 flex items-center justify-center bg-orange-500/20 text-orange-400 rounded-full shrink-0 border border-orange-500/30 text-xs font-bold">✓</span> 
            Integracje i turnieje firmowe
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 flex items-center justify-center bg-orange-500/20 text-orange-400 rounded-full shrink-0 border border-orange-500/30 text-xs font-bold">✓</span> 
            Pakiety treningowe dla zespołów
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 flex items-center justify-center bg-orange-500/20 text-orange-400 rounded-full shrink-0 border border-orange-500/30 text-xs font-bold">✓</span> 
            Partnerstwa i ekspozycja marki
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 flex items-center justify-center bg-orange-500/20 text-orange-400 rounded-full shrink-0 border border-orange-500/30 text-xs font-bold">✓</span> 
            Bar, catering i strefa chill
          </li>
        </ul>
        
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
          <a
            href="mailto:biuro@baza-padel.pl?subject=Współpraca%20z%20Baza%20Padel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Porozmawiajmy o współpracy <span className="font-normal text-base">↗</span>
          </a>
          <a
            href="/oferta-baza-padel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Oferta-Wspolpracy-Baza-Padel.pdf"
            className="btn-secondary"
          >
            Pobierz ofertę (PDF) <span className="font-normal text-base">↓</span>
          </a>
        </div>
      </div>

      <div className="flex-1 relative min-h-[460px] lg:min-h-full overflow-hidden m-6 lg:m-12 rounded-2xl glass-card-gold group">
        <Image 
          src="/images/baza-dla-firm.jpg" 
          alt="Spotkanie biznesowe i integracja w Baza Padel Club"
          fill
          className="object-cover object-[center_30%] saturate-[0.95] group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent"></div>
        
        <div className="absolute left-8 bottom-8 text-white z-10">
          <span className="block font-archivo text-[clamp(38px,4.2vw,60px)] leading-[0.85] tracking-tighter mb-4 text-white">
            PADEL<br />FOR<br /><span className="text-orange-500 font-archivo">BUSINESS</span>
          </span>
          <p className="text-lg md:text-xl font-bold leading-tight text-navy-100">
            Wspólny cel. Lepszy zespół.
          </p>
        </div>
      </div>
    </section>
  );
}
