export default function Reviews() {
  return (
    <section className="bg-navy text-white py-20 px-6 md:px-[6vw] grid lg:grid-cols-[0.78fr_1.22fr] gap-12 lg:gap-[8vw] items-start border-b border-white/10" id="opinie">
      <div>
        <span className="text-[#087fa8] font-bold tracking-widest text-sm uppercase">GRACZE O BAZIE</span>
        <div className="flex items-center gap-3.5 mt-6 mb-4">
          <strong className="font-archivo text-5xl md:text-[52px] tracking-[-3px] leading-none">5.0</strong>
          <span className="text-lime tracking-[3px] text-lg">★★★★★</span>
          <small className="text-[#a9bfcd] max-w-[110px] leading-[1.3] text-xs">na podstawie opinii Google</small>
        </div>
        <h2 className="font-archivo text-5xl md:text-[clamp(48px,5.5vw,80px)] leading-[0.9] my-6 tracking-tighter">
          Atmosfera,<br />która wygrywa.
        </h2>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Baza+Padel+Club%2C+Droga+Jeziorna+4%2C+Grudzi%C4%85dz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-cyan font-bold border-b border-cyan pb-1 hover:text-white hover:border-white transition-colors"
        >
          Zobacz opinie w Google →
        </a>
      </div>

      <div className="grid gap-3.5">
        <blockquote className="m-0 p-8 bg-navy-2 border border-white/15">
          <span className="text-lime tracking-[4px] text-[13px]">★★★★★</span>
          <p className="font-archivo text-2xl md:text-[clamp(23px,2.4vw,34px)] leading-[1.15] tracking-tight my-5">„Atmosfera 1000 :)”</p>
          <footer className="text-cyan-soft text-xs font-bold tracking-wider uppercase">Paulina • Google</footer>
        </blockquote>
        
        <blockquote className="m-0 p-8 bg-navy-2 border border-white/15">
          <span className="text-lime tracking-[4px] text-[13px]">★★★★★</span>
          <p className="font-archivo text-2xl md:text-[clamp(23px,2.4vw,34px)] leading-[1.15] tracking-tight my-5">„Świetne korty, super atmosfera, wszystko zadbane.”</p>
          <footer className="text-cyan-soft text-xs font-bold tracking-wider uppercase">Bartosz • Google</footer>
        </blockquote>
        
        <blockquote className="m-0 p-8 bg-navy-2 border border-white/15">
          <span className="text-lime tracking-[4px] text-[13px]">★★★★★</span>
          <p className="font-archivo text-2xl md:text-[clamp(23px,2.4vw,34px)] leading-[1.15] tracking-tight my-5">„No i kawa… jest obłędnie pyszna.”</p>
          <footer className="text-cyan-soft text-xs font-bold tracking-wider uppercase">Asia • Google</footer>
        </blockquote>
      </div>
    </section>
  );
}
