import Image from "next/image";

export default function ClubShowcase() {
  return (
    <section className="relative min-h-[660px] md:min-h-[730px] overflow-hidden bg-navy-950 border-b border-navy-300/15" aria-label="Baza Padel Club od środka">
      <Image
        src="/images/baza-klub-lounge-bar.jpg"
        alt="Widok na nowoczesny klub i korty Baza Padel Club"
        fill
        className="object-cover object-[center_40%] saturate-[0.95] contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-900/15"></div>
      
      <div className="absolute z-10 left-6 right-6 bottom-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-[6vw] md:right-auto md:max-w-[670px] text-white">
        <span className="badge badge-gold mb-4">PRAWDZIWA BAZA. PRAWDZIWE EMOCJE.</span>
        <h2 className="font-archivo text-4xl md:text-[clamp(48px,5.4vw,80px)] leading-[0.92] my-5 tracking-tighter">
          Przestrzeń stworzona<br />do dobrej gry.
        </h2>
        <p className="max-w-[480px] text-base md:text-lg leading-relaxed mb-8 text-navy-100">
          Profesjonalne korty, przejrzyste rozgrywki i warunki, w których chce się zostać na kolejny set.
        </p>
        <a
          href="https://kluby.org/baza-padel-club"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Sprawdź wolne korty <span className="font-normal text-base">↗</span>
        </a>
      </div>
    </section>
  );
}
