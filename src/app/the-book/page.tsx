import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Book",
  description: "What do professional baseball, fishing boats, failed businesses, family chaos, medical crises, financial collapse, faith, and starting over have in common?",
};

export default function TheBook() {
  return (
      <main className="flex-1 w-full pb-24">
        <div className="w-full h-auto border-b-[2px] border-[#2b2a28]">
        <Image src="/hero-banner.png" alt="Sit Down, Shut Up, Hold On" width={2033} height={774} sizes="100vw" className="w-full object-cover" />
      </div>

      <section className="book" id="the-book" style={{ paddingBottom: "78px" }}>
        <div className="section-head">
          <span className="eyebrow">The Book</span>
          <span className="rule" aria-hidden="true"></span>
          <span className="section-meta">Paperback &amp; Kindle</span>
        </div>

        <p className="book-lede">What do professional baseball, fishing boats, failed businesses, family chaos, medical crises, financial collapse, faith, and starting over have in common? <span className="accent">They are all part of Clay Eavenson&rsquo;s story.</span></p>

        <div className="cell-row" style={{ marginBottom: "78px" }}>
          <article className="cell">
            <h3 className="cell-label">Part One: The Dream</h3>
            <p>From a young kid with a strong arm to the mound at Yankee Stadium. The relentless pursuit of perfection, the pressure, and the eventual realization that the game doesn&rsquo;t love you back.</p>
          </article>
          <article className="cell">
            <h3 className="cell-label">Part Two: The Crash</h3>
            <p>When the cheering stops and real life begins. Bad investments, wrong turns, and watching everything you built turn to dust. The harsh reality of losing the plot.</p>
          </article>
          <article className="cell">
            <h3 className="cell-label">Part Three: The Rebuild</h3>
            <p>Finding a new anchor. Family, faith, and the grueling work of starting from scratch. No shortcuts, just showing up every single day.</p>
          </article>
        </div>

        <div className="photo-grid" style={{ marginBottom: "64px" }}>
          <Image src="/clay pitching yankees.jpg" alt="Clay pitching for the Yankees" width={640} height={480} sizes="(max-width: 960px) 100vw, 50vw" style={{ height: "400px" }} />
          <Image src="/clay greensboro 2.jpg" alt="Clay in Greensboro" width={640} height={480} sizes="(max-width: 960px) 100vw, 50vw" style={{ height: "400px" }} />
        </div>

        <div className="book-close">
          <div>
            <p className="statement">This is not a book about avoiding failure.</p>
            <p className="statement accent">It is about discovering that failure is not always the end of the story.</p>
          </div>
          <a className="btn btn-primary btn-wide" href="https://www.amazon.com/Sit-Down-Shut-Hold-Circumstances/dp/B0HBYMB5ZH/ref=sr_1_1" rel="noopener noreferrer" target="_blank">Buy on Amazon<span aria-hidden="true">&#8594;</span></a>
        </div>
      </section>
    </main>
  );
}
