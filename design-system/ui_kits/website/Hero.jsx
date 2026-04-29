// Hero.jsx
function Hero({ onBook }) {
  return (
    <section style={{
      position: 'relative',
      padding: '96px 48px 128px',
      maxWidth: 1280, margin: '0 auto',
      overflow: 'hidden',
    }}>
      {/* Decorative four-bar motif — references the mark */}
      <div aria-hidden style={{
        position: 'absolute', right: -80, top: 60,
        display: 'flex', flexDirection: 'column', gap: 28,
        opacity: 0.5,
      }}>
        {[0.18, 0.32, 0.55, 1].map((a, i) => (
          <div key={i} style={{
            width: 420, height: 36, borderRadius: 999,
            background: `rgba(83, 74, 183, ${a * 0.18})`,
          }} />
        ))}
      </div>
      <div style={{ position: 'relative', maxWidth: 760 }}>
        <div className="t-eyebrow" style={{ marginBottom: 20 }}>Affiliate & partner consulting</div>
        <h1 style={{
          fontSize: 'clamp(48px, 6vw, 72px)',
          fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.02,
          color: 'var(--pd-navy)', margin: '0 0 24px',
        }}>
          The strategy layer<br/>most consultants skip.
        </h1>
        <p style={{
          fontSize: 20, lineHeight: 1.55, color: 'var(--fg-2)',
          maxWidth: 580, margin: '0 0 36px',
        }}>
          We build, audit, and grow affiliate programs for web hosting, WordPress, and SaaS companies — with the analytical rigor most agencies skip past.
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn-primary btn-lg" onClick={onBook}>Book a strategy call</button>
          <button className="btn btn-secondary btn-lg">See our approach →</button>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
