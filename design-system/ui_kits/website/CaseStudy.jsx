// CaseStudy.jsx
function CaseStudy() {
  return (
    <section id="case-studies" style={{ padding: '96px 48px', maxWidth: 1100, margin: '0 auto' }}>
      <div className="t-eyebrow" style={{ marginBottom: 24 }}>Case study · Web hosting</div>
      <blockquote style={{
        margin: 0,
        fontSize: 'clamp(28px, 3.5vw, 40px)',
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: '-0.015em',
        color: 'var(--pd-navy)',
        textWrap: 'pretty',
      }}>
        "They cut our active publisher count by a third — and grew incremental revenue 42% in the same quarter. The reporting alone was worth the engagement."
      </blockquote>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 32 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 999, background: 'var(--navy-100)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--pd-navy)', fontWeight: 700, fontSize: 14,
        }}>JM</div>
        <div>
          <div style={{ fontWeight: 600, color: 'var(--pd-navy)', fontSize: 15 }}>Jordan Marsh</div>
          <div style={{ fontSize: 13, color: 'var(--fg-3)' }}>VP Marketing · Mid-market hosting brand</div>
        </div>
      </div>
    </section>
  );
}

window.CaseStudy = CaseStudy;
