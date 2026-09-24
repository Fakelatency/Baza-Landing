export default function QuickBook() {
  return (
    <div
      className="fixed z-40 right-4 bottom-4 md:right-8 md:bottom-8 flex items-center gap-4 p-2.5 pl-5 bg-navy-900/90 backdrop-blur-xl border border-navy-300/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-sm font-semibold max-md:left-4 max-md:justify-between"
      aria-label="Szybka rezerwacja"
    >
      <span className="tracking-wide text-navy-100 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        Gotowy do gry?
      </span>
      <a
        href="https://kluby.org/baza-padel-club"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary !py-2.5 !px-5 !rounded-xl text-xs md:text-sm whitespace-nowrap"
      >
        Rezerwuj kort ↗
      </a>
    </div>
  );
}
