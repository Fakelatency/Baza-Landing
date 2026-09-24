import type { AppProps } from "next/app";
import { Archivo_Black, Inter } from "next/font/google";
import "@/styles/globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo-black",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${archivoBlack.variable} ${inter.variable} font-sans antialiased bg-navy-950 text-[#e8eef4] selection:bg-gold-500 selection:text-navy-950 min-h-screen`}
    >
      <Component {...pageProps} />
    </div>
  );
}
