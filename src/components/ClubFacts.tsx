export default function ClubFacts() {
  return (
    <>
      <div 
        className="bg-navy-900/90 text-gold-400 overflow-hidden whitespace-nowrap py-3 font-bold text-xs md:text-sm tracking-widest uppercase border-b border-navy-300/15" 
        aria-hidden="true"
      >
        <div className="inline-block animate-[ticker_25s_linear_infinite]">
          PADEL • KAWA • TRENINGI • CHILL • TURNIEJE • PADEL • KAWA • TRENINGI • CHILL • TURNIEJE • PADEL • KAWA • TRENINGI • CHILL • TURNIEJE •
        </div>
      </div>

      <section className="grid grid-cols-2 lg:grid-cols-4 bg-navy-900/50 backdrop-blur-md border-b border-navy-300/15" aria-label="Najważniejsze informacje o klubie">
        {/* Fact 1 */}
        <div className="min-h-[126px] md:min-h-[145px] p-6 lg:px-[3vw] flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-r border-navy-300/15 border-b lg:border-b-0">
          <strong className="font-archivo text-[32px] md:text-[38px] text-gold-400 tracking-[-2px] leading-none">5</strong>
          <span className="text-[13px] leading-[1.35] font-semibold text-navy-100">
            profesjonalnych<br />kortów
          </span>
        </div>
        
        {/* Fact 2 */}
        <div className="min-h-[126px] md:min-h-[145px] p-6 lg:px-[3vw] flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-b lg:border-r lg:border-b-0 border-navy-300/15">
          <strong className="font-archivo text-[26px] md:text-[32px] text-gold-400 tracking-[-1px] leading-none">MONDO</strong>
          <span className="text-[13px] leading-[1.35] font-semibold text-navy-100">
            turniejowa<br />nawierzchnia
          </span>
        </div>
        
        {/* Fact 3 */}
        <div className="min-h-[126px] md:min-h-[145px] p-6 lg:px-[3vw] flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-r border-navy-300/15">
          <strong className="font-archivo text-[32px] md:text-[38px] text-gold-400 tracking-[-2px] leading-none">3</strong>
          <span className="text-[13px] leading-[1.35] font-semibold text-navy-100">
            trenerów dla<br />każdego poziomu
          </span>
        </div>
        
        {/* Fact 4 */}
        <div className="min-h-[126px] md:min-h-[145px] p-6 lg:px-[3vw] flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <strong className="font-archivo text-[26px] md:text-[32px] text-gold-400 tracking-[-1px] leading-none">BAR</strong>
          <span className="text-[13px] leading-[1.35] font-semibold text-navy-100">
            kawa i prawdziwa<br />strefa chill
          </span>
        </div>
      </section>
    </>
  );
}
