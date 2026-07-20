export default function ClubFacts() {
  return (
    <>
      <div 
        className="bg-navy text-cyan overflow-hidden whitespace-nowrap py-3 font-bold text-sm tracking-wider uppercase border-b border-white/10" 
        aria-hidden="true"
      >
        <div className="inline-block animate-[ticker_20s_linear_infinite]">
          PADEL • KAWA • TRENINGI • CHILL • TURNIEJE • PADEL • KAWA • TRENINGI • CHILL • TURNIEJE • PADEL • KAWA • TRENINGI • CHILL • TURNIEJE •
        </div>
      </div>

      <section className="grid grid-cols-2 lg:grid-cols-4 bg-[#20262c] border-b border-white/10" aria-label="Najważniejsze informacje o klubie">
        {/* Fact 1 */}
        <div className="min-h-[126px] md:min-h-[150px] p-6 lg:px-[3vw] flex flex-col md:flex-row md:align-center gap-2 md:gap-4 border-r border-white/10 border-b lg:border-b-0">
          <strong className="font-archivo text-[28px] md:text-[35px] text-[#087fa8] tracking-[-2px] leading-none">5</strong>
          <span className="text-[13px] leading-[1.35] font-bold text-[#bac8d0]">
            profesjonalnych<br />kortów
          </span>
        </div>
        
        {/* Fact 2 */}
        <div className="min-h-[126px] md:min-h-[150px] p-6 lg:px-[3vw] flex flex-col md:flex-row md:align-center gap-2 md:gap-4 border-b lg:border-r lg:border-b-0 border-white/10">
          <strong className="font-archivo text-[28px] md:text-[35px] text-[#087fa8] tracking-[-2px] leading-none">MONDO</strong>
          <span className="text-[13px] leading-[1.35] font-bold text-[#bac8d0]">
            turniejowa<br />nawierzchnia
          </span>
        </div>
        
        {/* Fact 3 */}
        <div className="min-h-[126px] md:min-h-[150px] p-6 lg:px-[3vw] flex flex-col md:flex-row md:align-center gap-2 md:gap-4 border-r border-white/10">
          <strong className="font-archivo text-[28px] md:text-[35px] text-[#087fa8] tracking-[-2px] leading-none">3</strong>
          <span className="text-[13px] leading-[1.35] font-bold text-[#bac8d0]">
            trenerów dla<br />każdego poziomu
          </span>
        </div>
        
        {/* Fact 4 */}
        <div className="min-h-[126px] md:min-h-[150px] p-6 lg:px-[3vw] flex flex-col md:flex-row md:align-center gap-2 md:gap-4">
          <strong className="font-archivo text-[28px] md:text-[35px] text-[#087fa8] tracking-[-2px] leading-none">BAR</strong>
          <span className="text-[13px] leading-[1.35] font-bold text-[#bac8d0]">
            kawa i prawdziwa<br />strefa chill
          </span>
        </div>
      </section>
    </>
  );
}
