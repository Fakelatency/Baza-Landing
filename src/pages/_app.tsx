import type { AppProps } from "next/app";
import { Stack_Sans_Notch, Montserrat } from "next/font/google";
import "@/styles/globals.css";

const stackSansNotch = Stack_Sans_Notch({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${stackSansNotch.variable} ${montserrat.variable} font-sans antialiased bg-navy-950 text-[#e8eef4] selection:bg-[#ff4900] selection:text-white min-h-screen`}
    >
      <Component {...pageProps} />
    </div>
  );
}
