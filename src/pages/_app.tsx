import type { AppProps } from "next/app";
import { Archivo_Black, DM_Sans } from "next/font/google";
import "@/styles/globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo-black",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${archivoBlack.variable} ${dmSans.variable} font-sans antialiased selection:bg-lime selection:text-navy`}>
      <Component {...pageProps} />
    </div>
  );
}
