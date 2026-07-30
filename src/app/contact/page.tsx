export default function Contact() {
  return (
    <main className="flex-1 w-full min-h-[90vh]">
      <section className="contact" id="contact" style={{ paddingTop: "120px" }}>
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <span className="rule" aria-hidden="true"></span>
        </div>
        <div className="contact-grid">
          <div>
            <h1 className="hero-title" style={{ fontSize: "76px", lineHeight: 0.94, marginBottom: "36px", color: "var(--bone-bright)" }}>
              Get in<br />touch
            </h1>
            <p>Book clubs, podcasts, speaking events, or a chapter that hit close to home. Clay reads every message.</p>
            <ul className="contact-list">
              <li><a href="mailto:hello@clayeavenson.com">hello@clayeavenson.com</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a> &#183; <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
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
              <textarea name="message" rows={8} placeholder="Tell him what's on your mind." required></textarea>
            </label>
            <button className="btn btn-primary field-full" type="submit">Send it<span aria-hidden="true">&#8594;</span></button>
          </form>
        </div>
      </section>
    </main>
  );
}
