import Image from "next/image";

export default function Gallery() {
  return (
    <section className="bg-navy-950 text-white py-20 px-6 md:px-[6vw] border-b border-navy-300/15" aria-label="Galeria Baza Padel Club">
      <div className="mb-16 md:flex justify-between items-end gap-8">
        <div>
          <span className="badge badge-gold mb-4">ZOBACZ BAZĘ</span>
          <h2 className="font-archivo text-4xl md:text-6xl leading-[0.92] tracking-tighter">
            Sport. Ludzie.<br />Dobra energia.
          </h2>
        </div>
        <p className="text-navy-200 max-w-md mt-6 md:mt-0 text-base md:text-lg">
          Tak wygląda klub, w którym gra łączy się z wydarzeniami, relacjami i prawdziwą społecznością.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <figure className="relative min-h-[340px] md:min-h-[560px] md:col-span-2 overflow-hidden rounded-2xl border border-navy-300/20 group">
          <Image src="/images/baza-lokalizacja.jpg" alt="Baza Padel Club z lotu ptaka" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-bold tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            Grudziądz • Droga Jeziorna 4
          </figcaption>
        </figure>
        
        <figure className="relative min-h-[380px] md:min-h-[440px] overflow-hidden rounded-2xl border border-navy-300/20 group">
          <Image src="/images/baza-turniej.jpg" alt="Uczestnicy obserwujący przebieg turnieju" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-bold tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-navy-300"></span>
            Turnieje i wyniki na żywo
          </figcaption>
        </figure>

        <figure className="relative min-h-[380px] md:min-h-[440px] overflow-hidden rounded-2xl border border-navy-300/20 group">
          <Image src="/images/baza-padel-club.jpg" alt="Duża piłka z logo Baza Padel Club przed wejściem" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-bold tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            Tu zaczyna się gra
          </figcaption>
        </figure>

        <figure className="relative min-h-[380px] md:min-h-[560px] md:col-span-2 overflow-hidden rounded-2xl border border-navy-300/20 group">
          <Image src="/images/baza-korty-team.jpg" alt="Zawodnicy Baza Padel Club na podium" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-bold tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            Rywalizacja w dobrym stylu
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
