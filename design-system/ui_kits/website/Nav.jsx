// Nav.jsx — sticky top navigation
const { useState, useEffect } = React;

function Nav({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 48px',
      background: scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,1)',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-1)' : '1px solid transparent',
      transition: 'all 200ms var(--ease-out)',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="../../assets/partnerdepth_horizontal.png" alt="PartnerDepth" style={{ height: 32 }} />
      </a>
      <div style={{ display: 'flex', gap: 32 }}>
        {['Services', 'Approach', 'Case studies', 'Insights', 'About'].map(l => (
          <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} style={{
            fontSize: 14, fontWeight: 500, color: 'var(--fg-2)', textDecoration: 'none',
          }}>{l}</a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <button className="btn btn-ghost" style={{ fontSize: 14, padding: '8px 14px' }}>Sign in</button>
        <button className="btn btn-primary" onClick={onBook} style={{ fontSize: 14, padding: '8px 16px' }}>Book a call</button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
