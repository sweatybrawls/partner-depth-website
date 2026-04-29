// Process.jsx
const STEPS = [
  { n: '01', t: 'Diagnostic', b: 'Two-week audit. We read the data, talk to your team, and document what\'s actually happening in the program.' },
  { n: '02', t: 'Strategy', b: 'A written plan. Commission structure, target partner mix, attribution rules, and the metrics we\'ll move.' },
  { n: '03', t: 'Build', b: 'We execute or hand off. Recruitment, tracking setup, partner enablement — depending on what your team needs.' },
  { n: '04', t: 'Measure', b: 'Monthly scorecards. Real incrementality, not vanity clicks. Adjust based on what the numbers say.' },
];

function Process() {
  return (
    <section id="approach" style={{ padding: '96px 48px', maxWidth: 1280, margin: '0 auto' }}>
      <div className="t-eyebrow" style={{ marginBottom: 16 }}>How we work</div>
      <h2 className="t-h1" style={{ margin: '0 0 56px', maxWidth: 600 }}>Four steps. No surprises.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        {STEPS.map((s, i) => (
          <div key={s.n} style={{ borderTop: '2px solid var(--pd-navy)', paddingTop: 20 }}>
            <div className="t-mono" style={{ color: 'var(--pd-purple)', fontSize: 13, fontWeight: 500, marginBottom: 12, letterSpacing: '0.04em' }}>{s.n}</div>
            <h3 className="t-h4" style={{ margin: '0 0 10px' }}>{s.t}</h3>
            <p className="t-body-sm" style={{ margin: 0 }}>{s.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Process = Process;
