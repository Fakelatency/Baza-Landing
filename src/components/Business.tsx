import Image from "next/image";

export default function Business() {
  return (
    <section className="bg-cyan text-navy flex flex-col lg:flex-row border-b border-white/10" id="partnerzy">
      <div className="flex-1 px-6 py-20 md:px-[6vw] flex flex-col justify-center">
        <span className="text-[#087fa8] font-bold tracking-widest text-sm uppercase">GRAJMY DO JEDNEJ BRAMKI</span>
        <h2 className="font-archivo text-5xl md:text-[clamp(50px,5vw,72px)] leading-[0.9] my-6 tracking-tighter">
          Biznes lubi<br />
          <em className="text-navy not-italic underline decoration-white/75 decoration-4 underline-offset-4">dobry serwis.</em>
        </h2>
        <p className="max-w-xl text-lg md:text-xl leading-relaxed mb-8">
          Szukasz świeżego pomysłu na integrację, benefitu dla zespołu albo widoczności marki? W Bazie łączymy sportowe emocje z relacjami, które pracują długo po ostatnim secie.
        </p>
        
        <ul className="grid sm:grid-cols-2 gap-4 mb-10 font-bold text-sm md:text-base">
          <li className="flex items-center gap-3"><span className="w-6 h-6 flex items-center justify-center bg-navy text-cyan rounded-full shrink-0">✓</span> Integracje i turnieje firmowe</li>
          <li className="flex items-center gap-3"><span className="w-6 h-6 flex items-center justify-center bg-navy text-cyan rounded-full shrink-0">✓</span> Pakiety treningowe dla zespołów</li>
          <li className="flex items-center gap-3"><span className="w-6 h-6 flex items-center justify-center bg-navy text-cyan rounded-full shrink-0">✓</span> Partnerstwa i ekspozycja marki</li>
          <li className="flex items-center gap-3"><span className="w-6 h-6 flex items-center justify-center bg-navy text-cyan rounded-full shrink-0">✓</span> Bar, catering i strefa chill</li>
        </ul>
        
        <a
          href="mailto:biuro@baza-padel.pl?subject=Współpraca%20z%20Baza%20Padel"
          className="inline-flex bg-navy text-white border-2 border-navy font-bold px-6 py-3 shadow-[4px_4px_0_#fff] hover:shadow-[2px_2px_0_#fff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all items-center gap-2 w-fit"
        >
          Porozmawiajmy o współpracy <span className="font-normal text-lg">↗</span>
        </a>
      </div>

      <div className="flex-1 relative min-h-[500px] lg:min-h-full overflow-hidden bg-navy group m-6 lg:m-12 border-2 border-cyan lg:border-none lg:shadow-[12px_12px_0_rgba(7,28,51,.35)] shadow-[8px_8px_0_rgba(7,28,51,.35)]">
        <Image 
          src="/images/baza-otwarcie-ludzie.jpg" 
          alt="Goście wydarzenia firmowego w Baza Padel Club"
          fill
          className="object-cover saturate-[0.75] group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 to-navy/90"></div>
        
        <div className="absolute left-8 bottom-8 text-white z-10">
          <span className="block font-archivo text-[clamp(42px,4.5vw,66px)] leading-[0.85] tracking-tighter mb-6">
            PADEL<br />FOR<br />BUSINESS
          </span>
          <p className="text-xl md:text-2xl font-bold leading-tight text-cyan">
            Wspólny cel.<br />Lepszy zespół.
          </p>
        </div>
      </div>
    </section>
  );
}
