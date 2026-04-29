// BookCallModal.jsx
const { useState: useStateMC, useEffect: useEffectMC } = React;

function BookCallModal({ open, onClose }) {
  const [submitted, setSubmitted] = useStateMC(false);
  const [form, setForm] = useStateMC({ name: '', email: '', company: '', vertical: 'Web hosting' });

  useEffectMC(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffectMC(() => { if (open) setSubmitted(false); }, [open]);

  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(38, 33, 92, 0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
      backdropFilter: 'blur(4px)',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#fff', borderRadius: 20, padding: 40, width: 480, maxWidth: '90vw',
        boxShadow: 'var(--shadow-lg)',
      }}>
        {submitted ? (
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 12 }}>Thanks</div>
            <h3 className="t-h2" style={{ margin: '0 0 12px' }}>We'll be in touch within one business day.</h3>
            <p className="t-body">Replying from the same email address you used keeps things in one thread.</p>
            <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="t-eyebrow" style={{ marginBottom: 12 }}>Strategy call</div>
            <h3 className="t-h2" style={{ margin: '0 0 8px' }}>Book a 30-minute call.</h3>
            <p className="t-body" style={{ margin: '0 0 24px' }}>Tell us a bit about the program. We'll come back with what's worth talking about.</p>
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Field label="Name" value={form.name} onChange={v => setForm({...form, name: v})} required />
              <Field label="Work email" type="email" value={form.email} onChange={v => setForm({...form, email: v})} required />
              <Field label="Company" value={form.company} onChange={v => setForm({...form, company: v})} required />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--pd-navy)' }}>Vertical</label>
                <select className="input" value={form.vertical} onChange={e => setForm({...form, vertical: e.target.value})}>
                  <option>Web hosting</option><option>WordPress plugin</option><option>SaaS</option><option>Other</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Send</button>
                <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = 'text', required }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--pd-navy)' }}>{label}</label>
      <input className="input" type={type} value={value} required={required} onChange={e => onChange(e.target.value)} />
    </div>
  );
}

window.BookCallModal = BookCallModal;
