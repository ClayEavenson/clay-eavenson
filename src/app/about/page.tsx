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
            Chased the dream.<br />Lost the plot.<br />Started over.
          </h1>
          <p>Husband. Father. Former professional baseball player with the New York Yankees. Former real estate agent. Former fishing guide. Current entrepreneur — and a reluctant expert in rebuilding after disaster.</p>
          <p>Clay writes with the kind of honesty that admits he was often the common denominator in his own problems, and with the humor needed to survive that realization.</p>
          <p>He's seen the top of the mountain and the bottom of the barrel. His journey through professional sports taught him how to compete, but his journey through the rest of life taught him how to survive.</p>
          <p>When everything falls apart, you can either sit around feeling sorry for yourself, or you can sit down, shut up, and hold on. Clay chose the latter.</p>
        </div>
        <div className="photo-grid" style={{ gridTemplateColumns: "1fr", gap: "var(--rule-w)", border: "var(--rule-w) solid var(--rule)" }}>
          <img src="/clay-portrait.png" alt="Clay Eavenson Portrait" style={{ height: "auto", objectPosition: "center top" }} />
        </div>
      </section>
    </main>
  );
}
