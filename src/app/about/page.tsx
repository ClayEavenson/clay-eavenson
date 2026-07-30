import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Husband. Father. Former professional baseball player with the New York Yankees. Current entrepreneur—and someone who has had to reinvent himself.",
};

export default function About() {
  return (
    <main className="flex-1 w-full pb-24">
      <div className="w-full h-auto border-b-[2px] border-[#2b2a28]">
        <img src="/hero-banner.png" alt="Sit Down, Shut Up, Hold On" className="w-full object-cover" />
      </div>

      <section className="about" style={{ borderTop: "none", marginTop: 0 }}>
        <div className="about-copy">
          <div className="section-head">
            <span className="eyebrow">About Clay</span>
            <span className="rule" aria-hidden="true"></span>
          </div>
          <h1 className="hero-title" style={{ fontSize: "56px", lineHeight: 0.94, marginBottom: "24px", color: "var(--bone-bright)" }}>
            Dreamed big.<br />Life hit hard.<br />Built again. (and again, and again...)
          </h1>
          <p>Husband. Father. Former professional baseball player with the New York Yankees. Former real estate agent. Former fishing guide. Current entrepreneur—and someone who has had to reinvent himself more than once.</p>
          <p>Clay has experienced the thrill of chasing enormous dreams and the reality of watching carefully built plans fall apart. Professional sports taught him how to compete, but the years that followed taught him how to adapt, rebuild, and keep moving when life changed without warning.</p>
          <p>Each new beginning required him to become someone different without losing sight of who he was. Through career changes, financial setbacks, family crises, and unexpected turns, he learned that starting over is not the same as giving up.</p>
          <p>When everything falls apart, you can sit around feeling sorry for yourself—or you can sit down, shut up, hold on, and find a way forward.</p>
          <p>Clay chose to keep going.</p>
        </div>
        <div className="photo-grid" style={{ gridTemplateColumns: "1fr", gap: "var(--rule-w)", border: "var(--rule-w) solid var(--rule)" }}>
          <img src="/clay-portrait.png" alt="Clay Eavenson Portrait" style={{ height: "auto", objectPosition: "center top" }} />
        </div>
      </section>
    </main>
  );
}
