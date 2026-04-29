/**
 * POST /api/book-call
 * Cloudflare Pages Function — handles strategy-call form submissions.
 *
 * Sends an email via Resend (https://resend.com).
 *
 * Required environment variables (set in Cloudflare Pages → Settings → Environment variables):
 *   RESEND_API_KEY     — your Resend API key (server-side only; never expose)
 *   BOOKING_EMAIL_TO   — destination inbox (e.g. mike@partnerdepth.com)
 *   BOOKING_EMAIL_FROM — verified sender on Resend (e.g. "PartnerDepth <hello@partnerdepth.com>")
 *
 * Optional:
 *   ALLOWED_ORIGIN     — restrict CORS (defaults to '*'). Set to "https://partnerdepth.com" in production.
 */

const VERTICALS = ['Web hosting', 'WordPress plugin', 'SaaS', 'Other'];

function json(body, status, extraHeaders) {
  const headers = Object.assign(
    { 'Content-Type': 'application/json' },
    extraHeaders || {}
  );
  return new Response(JSON.stringify(body), { status, headers });
}

function corsHeaders(env) {
  const origin = env.ALLOWED_ORIGIN || '*';
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin'
  };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isEmail(s) {
  return typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function onRequestOptions({ env }) {
  return new Response(null, { status: 204, headers: corsHeaders(env) });
}

export async function onRequestPost({ request, env }) {
  const cors = corsHeaders(env);

  // ---- Parse ----
  let payload;
  try {
    payload = await request.json();
  } catch (_) {
    return json({ error: 'Invalid JSON.' }, 400, cors);
  }

  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim();
  const company = String(payload.company || '').trim();
  const vertical = String(payload.vertical || '').trim();
  const notes = String(payload.notes || '').trim();
  const honeypot = String(payload.company_website || '').trim();

  // ---- Honeypot — bots fill this; humans don't ----
  // Return success to bots so they think it worked, but discard.
  if (honeypot) {
    return json({ ok: true }, 200, cors);
  }

  // ---- Validate ----
  if (!name || name.length < 2 || name.length > 120) {
    return json({ error: 'Please provide a valid name.' }, 400, cors);
  }
  if (!isEmail(email) || email.length > 200) {
    return json({ error: 'Please provide a valid work email.' }, 400, cors);
  }
  if (!company || company.length > 200) {
    return json({ error: 'Please provide your company.' }, 400, cors);
  }
  if (!VERTICALS.includes(vertical)) {
    return json({ error: 'Please select a valid vertical.' }, 400, cors);
  }
  if (notes.length > 4000) {
    return json({ error: 'Notes are too long.' }, 400, cors);
  }

  // ---- Verify env vars ----
  if (!env.RESEND_API_KEY || !env.BOOKING_EMAIL_TO || !env.BOOKING_EMAIL_FROM) {
    // Don't leak which var is missing to the client; log for the operator instead.
    console.error('[book-call] Missing env var(s). Required: RESEND_API_KEY, BOOKING_EMAIL_TO, BOOKING_EMAIL_FROM');
    return json({ error: 'Server misconfigured. Email hello@partnerdepth.com directly.' }, 500, cors);
  }

  // ---- Compose ----
  const subject = `New strategy-call request — ${company} (${vertical})`;

  const textBody = [
    'New strategy-call request from partnerdepth.com',
    '',
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Company:  ${company}`,
    `Vertical: ${vertical}`,
    notes ? `\nNotes:\n${notes}` : ''
  ].join('\n');

  const htmlBody = `
    <div style="font-family: -apple-system, Segoe UI, sans-serif; color:#26215C; max-width:540px;">
      <p style="font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:#534AB7; margin:0 0 8px;">Strategy call</p>
      <h2 style="font-size:20px; margin:0 0 16px;">New request from partnerdepth.com</h2>
      <table style="border-collapse:collapse; font-size:14px;">
        <tr><td style="padding:6px 12px 6px 0; color:#5C5A6E;">Name</td><td style="padding:6px 0; font-weight:500;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0; color:#5C5A6E;">Email</td><td style="padding:6px 0; font-weight:500;"><a href="mailto:${escapeHtml(email)}" style="color:#534AB7;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 12px 6px 0; color:#5C5A6E;">Company</td><td style="padding:6px 0; font-weight:500;">${escapeHtml(company)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0; color:#5C5A6E;">Vertical</td><td style="padding:6px 0; font-weight:500;">${escapeHtml(vertical)}</td></tr>
      </table>
      ${notes ? `<div style="margin-top:20px;"><p style="font-size:12px; color:#5C5A6E; margin:0 0 6px;">Notes</p><p style="margin:0; line-height:1.55; white-space:pre-wrap;">${escapeHtml(notes)}</p></div>` : ''}
    </div>
  `;

  // ---- Send via Resend ----
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: env.BOOKING_EMAIL_FROM,
        to: [env.BOOKING_EMAIL_TO],
        reply_to: email,
        subject: subject,
        text: textBody,
        html: htmlBody
      })
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error('[book-call] Resend error', res.status, errBody);
      return json({ error: 'Could not send. Try again, or email hello@partnerdepth.com.' }, 502, cors);
    }

    return json({ ok: true }, 200, cors);
  } catch (err) {
    console.error('[book-call] Fetch failed', err);
    return json({ error: 'Could not send. Try again, or email hello@partnerdepth.com.' }, 502, cors);
  }
}

// Block other methods explicitly
export async function onRequest({ request, env }) {
  if (request.method === 'OPTIONS') return onRequestOptions({ env });
  if (request.method === 'POST') return onRequestPost({ request, env });
  return json({ error: 'Method not allowed.' }, 405, Object.assign({ Allow: 'POST, OPTIONS' }, corsHeaders(env)));
}
