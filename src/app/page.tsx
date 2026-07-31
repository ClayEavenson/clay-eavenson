import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div>
              <p className="kicker"><span className="diamond" aria-hidden="true"></span>Available now</p>
              <h1 className="hero-title">Sit&nbsp;Down,<br />Shut&nbsp;Up,<br /><em>Hold&nbsp;On</em></h1>
              <div className="hero-underline" aria-hidden="true"></div>
              <p className="hero-sub">Lessons from a life of big dreams, insanely bad circumstances, and starting over.</p>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://www.amazon.com/Sit-Down-Shut-Hold-Circumstances/dp/B0HBYMB5ZH/ref=sr_1_1" rel="noopener noreferrer" target="_blank">Buy the book<span aria-hidden="true">&#8594;</span></a>
              <a className="btn btn-outline" href="/about">About Clay<span aria-hidden="true">&#8594;</span></a>
            </div>
          </div>
          <div className="hero-art">
            <img
              src="/book-cover.webp"
              alt="Sit Down, Shut Up, Hold On — book cover, standing on a storm-lit shoreline"
              width={1122}
              height={1402}
              fetchPriority="high"
              decoding="async"
            />
            <div className="vignette" aria-hidden="true"></div>
          </div>
        </section>

        <section className="poster">
          <p className="poster-lead">Life is unpredictable. Life is painful. Life is hilarious. Life is amazing.</p>
          <p className="poster-tag">So sit down.<br />Shut up.<br />Hold on.</p>
        </section>

        <section className="book" id="the-book">
          <div className="section-head">
            <span className="eyebrow">The Book</span>
            <span className="rule" aria-hidden="true"></span>
            <span className="section-meta">Paperback &amp; Kindle</span>
          </div>

          <p className="book-lede">What do professional baseball, fishing boats, failed businesses, family chaos, medical crises, financial collapse, faith, and starting over have in common? <span className="accent">They are all part of Clay Eavenson&rsquo;s story.</span></p>

          <div className="cell-row">
            <article className="cell">
              <h3 className="cell-label">Honest</h3>
              <p>Not polished stories from a man who always made the right call. Bad decisions, unexpected consequences, broken dreams — written down exactly as they happened.</p>
            </article>
            <article className="cell">
              <h3 className="cell-label">Funny</h3>
              <p>Answered prayers, unanswered prayers, family, friendship, faith, anger and laughter. Some chapters are deeply serious. Others are completely ridiculous. Many are both.</p>
            </article>
            <article className="cell">
              <h3 className="cell-label">Useful</h3>
              <p>Protecting the people you love, knowing when to let go, finding meaning inside hard circumstances, and beginning again without pretending the last chapter didn&rsquo;t happen.</p>
            </article>
          </div>

          <div className="book-close">
            <div>
              <p className="statement">This is not a book about avoiding failure.</p>
              <p className="statement accent">It is about discovering that failure is not always the end of the story.</p>
            </div>
            <a className="btn btn-primary btn-wide" href="https://www.amazon.com/Sit-Down-Shut-Hold-Circumstances/dp/B0HBYMB5ZH/ref=sr_1_1" rel="noopener noreferrer" target="_blank">Buy on Amazon<span aria-hidden="true">&#8594;</span></a>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-copy">
            <div className="section-head">
              <span className="eyebrow">About Clay</span>
              <span className="rule" aria-hidden="true"></span>
            </div>
            <h2 className="h2">Dreamed big.<br />Life hit hard.<br />Built again. (and again, and again...)</h2>
            <p>Husband. Father. Former professional baseball player with the New York Yankees. Former real estate agent. Former fishing guide. Current entrepreneur — and a reluctant expert in rebuilding after disaster.</p>
            <p>Clay writes with the kind of honesty that admits he was often the common denominator in his own problems, and with the humor needed to survive that realization.</p>
            <a className="link-underline" href="/about">Read the full story<span aria-hidden="true">&#8594;</span></a>
          </div>
          <div className="photo-grid">
            <img src="/clay yankees 3.webp" alt="Clay Eavenson in a Yankees uniform at spring training" width={720} height={960} loading="lazy" decoding="async" />
            <img src="/clay dekalb.webp" alt="Clay Eavenson on the field after a game" width={720} height={960} loading="lazy" decoding="async" />
            <img src="/paige clay.webp" alt="Clay and Paige Eavenson" width={1080} height={1628} loading="lazy" decoding="async" />
            <img src="/paige and clay.webp" alt="Clay and Paige Eavenson on the water" width={960} height={960} loading="lazy" decoding="async" />
          </div>
        </section>

        <figure className="quote-band">
          <img src="/promo.webp" alt="Quote from the book: If you put my life into a movie, people would walk out of the theater saying: that was ridiculous. None of that would ever happen to one person. I understand. There are parts of my life I would not believe either if I had not been standing there when they happened." width={1731} height={909} loading="lazy" decoding="async" />
        </figure>

        <section className="contact" id="contact">
          <div className="section-head">
            <span className="eyebrow">Contact</span>
            <span className="rule" aria-hidden="true"></span>
          </div>
          <div className="contact-grid">
            <div>
              <h2 className="h2">Get in<br />touch</h2>
              <p>Book clubs, podcasts, speaking events, or a chapter that hit close to home. Clay reads every message.</p>
              <ul className="contact-list">
                <li><a href="https://www.facebook.com/profile.php?id=61592661539182" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              </ul>
            </div>
            <ContactForm rows={5} />
          </div>
        </section>
      </main>
    </>
  );
}
