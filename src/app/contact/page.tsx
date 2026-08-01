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
              <li>
                <a href="https://www.facebook.com/profile.php?id=61592661539182" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <ContactForm rows={8} />
        </div>
      </section>
    </main>
  );
}
