// Services.jsx
const SERVICES = [
  {
    eyebrow: 'Audit',
    title: 'Program health scorecard',
    body: 'A 12-point diagnostic across recruiting, attribution, commission structure, and partner mix. Delivered in 14 days.',
  },
  {
    eyebrow: 'Strategy',
    title: 'Channel architecture',
    body: 'Commission design, tier structure, attribution model, and tooling stack — built around your CAC, LTV, and margin profile.',
  },
  {
    eyebrow: 'Growth',
    title: 'Recruitment & management',
    body: 'Targeted publisher outreach, activation playbooks, and ongoing optimization. Reporting that means something.',
  },
];

function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg-tint)', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="t-eyebrow" style={{ marginBottom: 16 }}>What we do</div>
        <h2 className="t-h1" style={{ margin: '0 0 56px', maxWidth: 600 }}>
          Three engagements. One goal: a program that performs.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {SERVICES.map(s => (
            <div key={s.title} style={{
              background: '#fff', border: '1px solid var(--border-1)',
              borderRadius: 16, padding: 28,
              transition: 'box-shadow 200ms var(--ease-out)',
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div className="t-eyebrow" style={{ marginBottom: 14 }}>{s.eyebrow}</div>
              <h3 className="t-h3" style={{ margin: '0 0 12px' }}>{s.title}</h3>
              <p className="t-body" style={{ margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Services = Services;
