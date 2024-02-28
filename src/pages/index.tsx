import Head from "next/head";
import Article1 from "./article1";

export default function Home() {
  return (
    <>
      <Head>
        <title>TruthLens</title>
        <meta
          name="description"
          content="Bias checker and fact checker for news articles."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ff8880] to-[#449fff]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Article1 />
        </div>
      </main>
    </>
  );
}
