import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book",
  description: "What do professional baseball, fishing boats, failed businesses, family chaos, medical crises, financial collapse, faith, and starting over have in common?",
};

export default function TheBook() {
  return (
    <main className="flex-1 w-full pb-24">
      <div className="w-full h-auto border-b-[2px] border-[#2b2a28]">
        <img src="/hero-banner.webp" alt="Sit Down, Shut Up, Hold On" className="w-full object-cover" width={2033} height={774} fetchPriority="high" decoding="async" />
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
          <img src="/clay pitching yankees.webp" alt="Clay pitching for the Yankees" width={540} height={758} loading="lazy" decoding="async" style={{ height: "400px" }} />
          <img src="/clay greensboro 2.webp" alt="Clay in Greensboro" width={720} height={960} loading="lazy" decoding="async" style={{ height: "400px" }} />
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
