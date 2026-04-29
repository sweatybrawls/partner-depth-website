// Footer.jsx
function Footer() {
  const cols = [
    { h: 'Services', items: ['Program audit', 'Channel strategy', 'Recruitment', 'Reporting'] },
    { h: 'Verticals', items: ['Web hosting', 'WordPress plugins', 'SaaS', 'Other'] },
    { h: 'Resources', items: ['Insights', 'Frameworks', 'Newsletter'] },
    { h: 'Company', items: ['About', 'Contact', 'Cambyr (parent)'] },
  ];
  return (
    <footer style={{ background: 'var(--pd-navy)', color: '#fff', padding: '80px 48px 36px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '320px 1fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <img src="../../assets/partnerdepth_vertical.png" alt="PartnerDepth" style={{ height: 110, marginBottom: 20 }}/>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--pd-lavender)', maxWidth: 240, margin: 0 }}>
            Affiliate & partner marketing consulting for web hosting, WordPress, and SaaS.
          </p>
        </div>
        {cols.map(c => (
          <div key={c.h}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--pd-lavender)', marginBottom: 18 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.items.map(i => (
                <li key={i}><a href="#" style={{ color: '#fff', fontSize: 14, textDecoration: 'none', opacity: 0.85 }}>{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1280, margin: '64px auto 0', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-dark)', paddingTop: 24, color: 'var(--pd-lavender)', fontSize: 13 }}>
        <div>© 2026 PartnerDepth. A Cambyr company.</div>
        <div style={{ display: 'flex', gap: 24 }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a></div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
