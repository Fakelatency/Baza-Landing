import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white px-6 py-16 flex flex-col items-center text-center border-t border-white/10">
      <Link href="#start" className="flex items-end gap-2 group mb-6">
        <span className="font-archivo text-[32px] leading-[0.8] tracking-[-2px] lowercase">
          baza.
        </span>
        <span className="text-[10px] font-black tracking-[1.2px] text-cyan group-hover:text-lime transition-colors">
          PADEL CLUB
        </span>
      </Link>
      <p className="text-[#aebbc3] text-sm md:text-base mb-8 max-w-sm text-balance">
        Najnowocześniejszy klub padla na Pomorzu.
      </p>
      <Link href="#start" className="text-sm font-bold text-cyan hover:text-white transition-colors uppercase tracking-wider">
        Do góry ↑
      </Link>
    </footer>
  );
}
