export default function Business() {
  return (
    <section className="bg-navy-900/60 text-white py-20 px-6 md:px-[6vw] border-b border-navy-300/15 relative overflow-hidden" id="partnerzy">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <span className="badge badge-gold mb-4 w-fit">GRAJMY DO JEDNEJ BRAMKI</span>
        <h2 className="font-archivo text-4xl md:text-6xl leading-[0.92] my-5 tracking-tighter text-white">
          Biznes lubi<br />
          <em className="text-gold-400 not-italic">dobry serwis.</em>
        </h2>
        <p className="max-w-2xl text-base md:text-lg leading-relaxed mb-8 text-navy-100">
          Szukasz świeżego pomysłu na integrację, benefitu dla zespołu albo widoczności marki? W Bazie łączymy sportowe emocje z relacjami, które pracują długo po ostatnim secie.
        </p>
        
        <ul className="grid sm:grid-cols-2 gap-4 mb-10 font-semibold text-sm md:text-base text-navy-100 max-w-2xl">
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 flex items-center justify-center bg-gold-500/20 text-gold-400 rounded-full shrink-0 border border-gold-500/30 text-xs font-bold">✓</span> 
            Integracje i turnieje firmowe
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 flex items-center justify-center bg-gold-500/20 text-gold-400 rounded-full shrink-0 border border-gold-500/30 text-xs font-bold">✓</span> 
            Pakiety treningowe dla zespołów
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 flex items-center justify-center bg-gold-500/20 text-gold-400 rounded-full shrink-0 border border-gold-500/30 text-xs font-bold">✓</span> 
            Partnerstwa i ekspozycja marki
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 flex items-center justify-center bg-gold-500/20 text-gold-400 rounded-full shrink-0 border border-gold-500/30 text-xs font-bold">✓</span> 
            Bar, catering i strefa chill
          </li>
        </ul>
        
        <div>
          <a
            href="mailto:biuro@baza-padel.pl?subject=Współpraca%20z%20Baza%20Padel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Porozmawiajmy o współpracy <span className="font-normal text-base">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
