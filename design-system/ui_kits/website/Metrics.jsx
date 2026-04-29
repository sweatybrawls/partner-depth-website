// Metrics.jsx — dark navy band
function Metrics() {
  const stats = [
    { v: '+42%', l: 'Incremental revenue lift', s: 'Mid-market hosting client, 6mo' },
    { v: '$1.2M', l: 'Reactivated partner revenue', s: 'WordPress plugin, lapsed publishers' },
    { v: '14 days', l: 'Time to first audit deliverable', s: 'Standard engagement' },
  ];
  return (
    <section style={{ background: 'var(--pd-navy)', padding: '80px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
          {stats.map(s => (
            <div key={s.l}>
              <div style={{
                fontSize: 64, fontWeight: 700, letterSpacing: '-0.02em',
                color: '#fff', lineHeight: 1, fontVariantNumeric: 'tabular-nums',
                marginBottom: 12,
              }}>{s.v}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--pd-lavender)', marginBottom: 4 }}>{s.l}</div>
              <div style={{ fontSize: 13, color: 'rgba(207, 203, 243, 0.7)' }}>{s.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Metrics = Metrics;
