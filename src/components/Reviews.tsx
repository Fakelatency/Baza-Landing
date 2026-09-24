export default function Reviews() {
  return (
    <section className="bg-navy-950 text-white py-20 px-6 md:px-[6vw] grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-[6vw] items-start border-b border-navy-300/15" id="opinie">
      <div>
        <span className="badge badge-gold mb-4">GRACZE O BAZIE</span>
        <div className="flex items-center gap-3.5 my-4">
          <strong className="font-archivo text-5xl md:text-6xl tracking-[-3px] leading-none text-gold-400">5.0</strong>
          <div>
            <div className="text-gold-400 tracking-[3px] text-lg">★★★★★</div>
            <small className="text-navy-300 leading-[1.3] text-xs font-medium block mt-0.5">na podstawie opinii w Google</small>
          </div>
        </div>
        <h2 className="font-archivo text-4xl md:text-[clamp(44px,5.2vw,72px)] leading-[0.92] my-6 tracking-tighter text-white">
          Atmosfera,<br />która wygrywa.
        </h2>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Baza+Padel+Club%2C+Droga+Jeziorna+4%2C+Grudzi%C4%85dz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-gold-400 font-bold border-b border-gold-400/40 pb-1 hover:text-gold-300 transition-colors"
        >
          Zobacz opinie w Google →
        </a>
      </div>

      <div className="grid gap-4">
        <blockquote className="glass-card p-7 md:p-8 m-0">
          <span className="text-gold-400 tracking-[4px] text-xs">★★★★★</span>
          <p className="font-archivo text-xl md:text-2xl leading-[1.25] tracking-tight my-4 text-white">„Atmosfera 1000 :)”</p>
          <footer className="text-navy-300 text-xs font-bold tracking-wider uppercase">Paulina • Google</footer>
        </blockquote>
        
        <blockquote className="glass-card p-7 md:p-8 m-0">
          <span className="text-gold-400 tracking-[4px] text-xs">★★★★★</span>
          <p className="font-archivo text-xl md:text-2xl leading-[1.25] tracking-tight my-4 text-white">„Świetne korty, super atmosfera, wszystko zadbane.”</p>
          <footer className="text-navy-300 text-xs font-bold tracking-wider uppercase">Bartosz • Google</footer>
        </blockquote>
        
        <blockquote className="glass-card p-7 md:p-8 m-0">
          <span className="text-gold-400 tracking-[4px] text-xs">★★★★★</span>
          <p className="font-archivo text-xl md:text-2xl leading-[1.25] tracking-tight my-4 text-white">„No i kawa… jest obłędnie pyszna.”</p>
          <footer className="text-navy-300 text-xs font-bold tracking-wider uppercase">Asia • Google</footer>
        </blockquote>
      </div>
    </section>
  );
}
