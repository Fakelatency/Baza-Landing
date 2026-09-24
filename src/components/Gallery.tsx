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
          Tak wygląda klub, w którym najwyższa jakość kortów łączy się z designem, relaksem i prawdziwą społecznością.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Main wide photo: Aerial Location */}
        <figure className="relative min-h-[340px] md:min-h-[480px] md:col-span-2 lg:col-span-2 overflow-hidden rounded-2xl border border-navy-300/20 group">
          <Image 
            src="/images/baza-lokalizacja.jpg" 
            alt="Baza Padel Club z lotu ptaka" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-bold tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            Grudziądz • Droga Jeziorna 4
          </figcaption>
        </figure>

        {/* Photo 2: Neon Sign #BazaPadel */}
        <figure className="relative min-h-[320px] md:min-h-[480px] overflow-hidden rounded-2xl border border-navy-300/20 group">
          <Image 
            src="/images/baza-klub-napis.jpg" 
            alt="#BazaPadel podświetlany napis" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-bold tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            #BazaPadel
          </figcaption>
        </figure>

        {/* Photo 3: Symmetric Courts View */}
        <figure className="relative min-h-[340px] md:min-h-[420px] overflow-hidden rounded-2xl border border-navy-300/20 group">
          <Image 
            src="/images/baza-klub-korty-symetria.jpg" 
            alt="Korty Baza Padel Club" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-bold tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            5 turniejowych kortów Mondo
          </figcaption>
        </figure>

        {/* Photo 4: Lounge Bar Area */}
        <figure className="relative min-h-[340px] md:min-h-[420px] overflow-hidden rounded-2xl border border-navy-300/20 group">
          <Image 
            src="/images/baza-klub-lounge-bar.jpg" 
            alt="Strefa lounge i bar Baza Padel" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-bold tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-navy-300"></span>
            Strefa chillout & bar
          </figcaption>
        </figure>

        {/* Photo 5: Padel Net Detail */}
        <figure className="relative min-h-[340px] md:min-h-[420px] overflow-hidden rounded-2xl border border-navy-300/20 group">
          <Image 
            src="/images/baza-klub-siatka.jpg" 
            alt="Detal oficjalnej siatki Baza Padel" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
          <figcaption className="absolute z-10 left-6 bottom-6 text-white font-bold tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            Turniejowy standard i detale
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
