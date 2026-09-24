import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[720px] bg-navy-950 text-white border-b border-navy-300/15 flex flex-col lg:flex-row overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-navy-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Hero Copy */}
      <div className="relative z-10 flex-1 px-6 py-16 md:py-24 md:px-12 lg:px-16 flex flex-col justify-center">
        {/* Subtle decorative brand watermarks */}
        <div className="absolute right-[-40px] top-[60px] w-[140px] h-[140px] border-[16px] border-navy-400/20 rounded-full pointer-events-none hidden md:block"></div>

        <div className="inline-flex items-center gap-2 mb-6">
          <span className="badge badge-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
            Grudziądz • Droga Jeziorna 4
          </span>
        </div>

        <h1 className="font-archivo text-5xl md:text-7xl lg:text-[82px] leading-[0.92] tracking-tighter mb-6 text-white">
          Twoja baza<br />
          <em className="text-gold-400 not-italic">dobrej gry.</em>
        </h1>

        <p className="text-navy-100/90 text-lg md:text-xl max-w-lg mb-10 leading-relaxed text-balance">
          Nowoczesne korty, treningi dla każdego poziomu, turnieje i społeczność, która naprawdę lubi grać razem.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
          <a
            href="https://kluby.org/baza-padel-club"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Zarezerwuj kort <span className="text-base font-normal">↗</span>
          </a>
          <a
            href="#partnerzy"
            className="btn-secondary"
          >
            Zostań partnerem <span>→</span>
          </a>
        </div>

        <div className="flex items-center gap-4 mt-auto pt-8 border-t border-navy-300/15">
          <div className="flex -space-x-3">
            <span className="w-10 h-10 rounded-full bg-navy-800 text-gold-400 flex items-center justify-center font-bold text-sm border-2 border-navy-700 shadow-md">KB</span>
            <span className="w-10 h-10 rounded-full bg-navy-700 text-navy-100 flex items-center justify-center font-bold text-sm border-2 border-navy-600 shadow-md">K</span>
          </div>
          <p className="text-navy-200 text-sm leading-tight">
            <strong className="text-white block font-semibold">Trenuj z najlepszymi</strong>
            2 certyfikowanych trenerów • każdy poziom gry
          </p>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="relative flex-1 bg-navy-900 min-h-[460px] lg:min-h-full" aria-label="Gra na nowoczesnym korcie">
        <Image
          src="/images/baza-klub-korty-symetria.jpg"
          alt="Profesjonalne korty turniejowe Baza Padel Club"
          fill
          priority
          className="object-cover object-center saturate-[0.95] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-navy-950 via-navy-900/40 to-transparent"></div>

        <div className="absolute left-[7%] bottom-[8%] text-white flex flex-col z-10">
          <strong className="text-gold-400 font-archivo text-[clamp(54px,7vw,100px)] leading-[0.82] tracking-[-4px] drop-shadow-lg">
            GRAJ.
          </strong>
          <span className="mt-3 font-bold tracking-wider text-navy-100 text-sm md:text-base flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            Padel Club Grudziądz
          </span>
        </div>

        {/* Sticker / Badge */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 glass-card-gold !p-3.5 text-center font-black text-xs md:text-sm text-gold-300 rotate-2 shadow-2xl flex items-center gap-2 z-10">
          <Image
            src="/images/baza-signet.png"
            alt="Baza emblem"
            width={28}
            height={28}
            className="w-6 h-6 object-contain"
          />
          <div>
            5 KORTÓW<br />1 BAZA
          </div>
        </div>
      </div>
    </section>
  );
}
