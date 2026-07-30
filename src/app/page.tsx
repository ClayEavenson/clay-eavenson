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
              <a className="btn btn-primary" href="https://www.amazon.com/" rel="noopener noreferrer" target="_blank">Buy the book<span aria-hidden="true">&#8594;</span></a>
              <a className="btn btn-outline" href="#about">About Clay<span aria-hidden="true">&#8594;</span></a>
            </div>
          </div>
          <div className="hero-art">
            <img src="/cover mock final front.png" alt="Sit Down, Shut Up, Hold On — book cover, standing on a storm-lit shoreline" />
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
            <a className="btn btn-primary btn-wide" href="https://www.amazon.com/" rel="noopener noreferrer" target="_blank">Buy on Amazon<span aria-hidden="true">&#8594;</span></a>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-copy">
            <div className="section-head">
              <span className="eyebrow">About Clay</span>
              <span className="rule" aria-hidden="true"></span>
            </div>
            <h2 className="h2">Chased the dream.<br />Lost the plot.<br />Started over.</h2>
            <p>Husband. Father. Former professional baseball player with the New York Yankees. Former real estate agent. Former fishing guide. Current entrepreneur — and a reluctant expert in rebuilding after disaster.</p>
            <p>Clay writes with the kind of honesty that admits he was often the common denominator in his own problems, and with the humor needed to survive that realization.</p>
            <a className="link-underline" href="#about">Read the full story<span aria-hidden="true">&#8594;</span></a>
          </div>
          <div className="photo-grid">
            <img src="/clay yankees 3.jpg" alt="Clay Eavenson in a Yankees uniform at spring training" />
            <img src="/clay dekalb.jpg" alt="Clay Eavenson on the field after a game" />
            <img src="/paige clay.jpg" alt="Clay and Paige Eavenson" />
            <img src="/paige and clay.jpg" alt="Clay and Paige Eavenson on the water" />
          </div>
        </section>

        <figure className="quote-band">
          <img src="/promo.png" alt="Quote from the book: If you put my life into a movie, people would walk out of the theater saying: that was ridiculous. None of that would ever happen to one person. I understand. There are parts of my life I would not believe either if I had not been standing there when they happened." />
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
                <li><a href="mailto:hello@clayeavenson.com">hello@clayeavenson.com</a></li>
                <li>Facebook &#183; Instagram</li>
              </ul>
            </div>
            <form className="contact-form" method="post" action="#">
              <label className="field">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@email.com" required />
              </label>
              <label className="field field-full">
                <span>Message</span>
                <textarea name="message" rows={5} placeholder="Tell him what's on your mind." required></textarea>
              </label>
              <button className="btn btn-primary field-full" type="submit">Send it<span aria-hidden="true">&#8594;</span></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>&#169; 2026 Clay Eavenson</span>
        <span>Sit Down, Shut Up, Hold On</span>
        <a href="https://www.amazon.com/" rel="noopener noreferrer" target="_blank">Buy the book &#8594;</a>
      </footer>
    </>
  );
}
