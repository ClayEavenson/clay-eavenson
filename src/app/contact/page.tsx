import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Clay Eavenson. Book clubs, podcasts, speaking events, or a chapter that hit close to home.",
};

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
              <li><a href="https://www.facebook.com/profile.php?id=61592661539182" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
          <ContactForm rows={8} />
        </div>
      </section>
    </main>
  );
}
