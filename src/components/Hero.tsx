import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[720px] bg-[#151a1f] text-white border-b border-white/10 flex flex-col md:flex-row overflow-hidden">
      {/* Hero Copy */}
      <div className="relative z-10 flex-1 px-6 py-16 md:py-24 md:px-12 flex flex-col justify-center">
        <div className="absolute right-[-50px] top-[68px] w-[145px] h-[145px] border-[20px] border-cyan rounded-full opacity-[0.18] pointer-events-none hidden md:block"></div>
        
        <div className="inline-flex items-center gap-2 text-cyan font-bold text-xs md:text-sm mb-6 tracking-widest uppercase">
          <span className="w-2 h-2 bg-cyan"></span> 
          Grudziądz • Droga Jeziorna 4
        </div>
        
        <h1 className="font-archivo text-5xl md:text-7xl lg:text-[84px] leading-[0.9] tracking-tighter mb-6">
          Twoja baza<br />
          <em className="text-[#087fa8] not-italic">dobrej gry.</em>
        </h1>
        
        <p className="text-[#b9c5cc] text-lg md:text-xl max-w-md mb-10 leading-relaxed text-balance">
          Nowoczesne korty, treningi dla każdego poziomu, turnieje i społeczność, która naprawdę lubi grać razem.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
          <a
            href="https://playmore.pl/klub/baza-padel-club/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime text-navy border-2 border-navy font-bold px-6 py-3 shadow-[4px_4px_0_var(--color-navy)] hover:shadow-[2px_2px_0_var(--color-navy)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
          >
            Zarezerwuj kort <span className="font-normal text-lg">↗</span>
          </a>
          <a href="#partnerzy" className="text-white hover:text-cyan transition-colors font-bold flex items-center gap-2">
            Zostań partnerem <span>→</span>
          </a>
        </div>
        
        <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/10">
          <div className="flex -space-x-3">
            <span className="w-10 h-10 rounded-full bg-cyan text-navy flex items-center justify-center font-bold text-sm border-2 border-[#151a1f] z-30">KB</span>
            <span className="w-10 h-10 rounded-full bg-navy-2 text-white flex items-center justify-center font-bold text-sm border-2 border-[#151a1f] z-20">K</span>
            <span className="w-10 h-10 rounded-full bg-lime text-navy flex items-center justify-center font-bold text-sm border-2 border-[#151a1f] z-10">JB</span>
          </div>
          <p className="text-[#d6e0e5] text-sm leading-tight">
            <strong className="text-white">Trenuj z najlepszymi</strong><br />
            3 trenerów • każdy poziom gry
          </p>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="relative flex-1 bg-navy min-h-[500px] md:min-h-full" aria-label="Gra na nowoczesnym korcie">
        <Image 
          src="/images/baza-gra.jpg" 
          alt="Dynamiczna gra na korcie Baza Padel Club"
          fill
          priority
          className="object-cover object-[56%_center] saturate-[0.9] contrast-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/80"></div>
        
        <div className="absolute left-[7%] bottom-[8%] text-white flex flex-col">
          <strong className="text-lime font-archivo text-[clamp(58px,7vw,104px)] leading-[0.8] tracking-[-5px]">
            GRAJ.
          </strong>
          <span className="mt-4 font-bold tracking-wider">
            Padel Club Grudziądz
          </span>
        </div>
        
        <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-cyan text-navy border-2 border-navy p-3 text-center font-black text-sm shadow-[5px_5px_0_var(--color-lime)] rotate-3">
          5 KORTÓW<br />1 BAZA
        </div>
      </div>
    </section>
  );
}
