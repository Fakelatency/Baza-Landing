export default function QuickBook() {
  return (
    <div
      className="fixed z-40 right-4 bottom-4 md:right-8 md:bottom-8 flex items-center gap-4 p-2 pl-4 bg-[#20262c] text-white border-2 border-cyan shadow-[6px_6px_0_var(--color-navy)] text-sm font-extrabold max-md:left-4 max-md:justify-between max-md:shadow-[4px_4px_0_var(--color-navy)]"
      aria-label="Szybka rezerwacja"
    >
      <span className="tracking-wide">Gotowy do gry?</span>
      <a
        href="https://playmore.pl/klub/baza-padel-club/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-lime text-navy px-4 py-3 hover:bg-[#b0df16] transition-colors border-2 border-navy whitespace-nowrap shadow-[2px_2px_0_var(--color-navy)] active:translate-x-1 active:translate-y-1 active:shadow-none"
      >
        Rezerwuj kort ↗
      </a>
    </div>
  );
}
