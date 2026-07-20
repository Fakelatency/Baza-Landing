import Image from "next/image";

export default function Gallery() {
  return (
    <section className="bg-[#101419] text-white py-20 px-6 md:px-[6vw] border-b border-white/10" aria-label="Galeria Baza Padel Club">
      <div className="mb-16 md:flex justify-between items-end gap-8">
        <div>
          <span className="text-[#087fa8] font-bold tracking-widest text-sm uppercase">ZOBACZ BAZĘ</span>
          <h2 className="font-archivo text-4xl md:text-6xl leading-[0.9] mt-4 tracking-tighter">
            Sport. Ludzie.<br />Dobra energia.
          </h2>
        </div>
        <p className="text-[#afbdc5] max-w-md mt-6 md:mt-0 text-lg">
          Tak wygląda klub, w którym gra łączy się z wydarzeniami, relacjami i prawdziwą społecznością.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-[18px]">
        <figure className="relative min-h-[340px] md:min-h-[590px] md:col-span-2 overflow-hidden bg-navy group">
          <Image src="/images/baza-lokalizacja.jpg" alt="Baza Padel Club z lotu ptaka" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent md:h-[42%] md:top-auto md:bottom-0"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-extrabold tracking-wide">Grudziądz • Droga Jeziorna 4</figcaption>
        </figure>
        
        <figure className="relative min-h-[440px] md:min-h-[460px] overflow-hidden bg-navy group">
          <Image src="/images/baza-turniej.jpg" alt="Uczestnicy obserwujący przebieg turnieju" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent md:h-[42%] md:top-auto md:bottom-0"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-extrabold tracking-wide">Turnieje i wyniki na żywo</figcaption>
        </figure>

        <figure className="relative min-h-[440px] md:min-h-[460px] overflow-hidden bg-navy group">
          <Image src="/images/baza-padel-club.jpg" alt="Duża piłka z logo Baza Padel Club przed wejściem" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent md:h-[42%] md:top-auto md:bottom-0"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-extrabold tracking-wide">Tu zaczyna się gra</figcaption>
        </figure>

        <figure className="relative min-h-[440px] md:min-h-[590px] md:col-span-2 overflow-hidden bg-navy group">
          <Image src="/images/baza-korty-team.jpg" alt="Zawodnicy Baza Padel Club na podium" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent md:h-[42%] md:top-auto md:bottom-0"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-extrabold tracking-wide">Rywalizacja w dobrym stylu</figcaption>
        </figure>
      </div>
    </section>
  );
}
