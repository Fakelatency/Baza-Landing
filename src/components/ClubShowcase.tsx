import Image from "next/image";

export default function ClubShowcase() {
  return (
    <section className="relative min-h-[660px] md:min-h-[730px] overflow-hidden bg-navy" aria-label="Baza Padel Club od środka">
      <Image
        src="/images/baza-wnetrze.jpg"
        alt="Widok przez nowoczesne korty Baza Padel Club podczas wydarzenia"
        fill
        className="object-cover object-[56%_center] saturate-[0.82] contrast-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-navy/95 via-navy/55 to-navy/10 md:to-transparent"></div>
      
      <div className="absolute z-10 left-6 right-6 bottom-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-[6vw] md:right-auto md:max-w-[670px] text-white">
        <span className="text-cyan-soft font-bold tracking-widest text-sm uppercase">PRAWDZIWA BAZA. PRAWDZIWE EMOCJE.</span>
        <h2 className="font-archivo text-5xl md:text-[clamp(50px,5.6vw,84px)] leading-[0.9] my-6 tracking-tighter">
          Przestrzeń stworzona<br />do dobrej gry.
        </h2>
        <p className="max-w-[480px] text-lg leading-relaxed mb-8 text-[#d8e7ee]">
          Profesjonalne korty, przejrzyste rozgrywki i warunki, w których chce się zostać na kolejny set.
        </p>
        <a
          href="https://playmore.pl/klub/baza-padel-club/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-lime text-navy border-2 border-navy font-bold px-6 py-3 shadow-[4px_4px_0_var(--color-navy)] hover:shadow-[2px_2px_0_var(--color-navy)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all items-center gap-2"
        >
          Sprawdź wolne korty <span className="font-normal text-lg">↗</span>
        </a>
      </div>
    </section>
  );
}
