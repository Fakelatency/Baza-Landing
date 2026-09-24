import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl" className="scroll-smooth">
      <Head>
        <meta name="description" content="Baza Padel Grudziądz — nowoczesny klub padla, treningi, bar, kawa i strefa chill." />
        <meta name="theme-color" content="#060e1a" />
        <link rel="icon" type="image/png" href="/images/baza-signet.png" />
        <link rel="apple-touch-icon" href="/images/baza-signet.png" />
      </Head>
      <body className="bg-navy-950 text-[#e8eef4]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
