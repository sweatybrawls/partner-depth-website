/* =========================================================================
   PartnerDepth — site JS
   Vanilla. No build step. No dependencies.
   ========================================================================= */
(function () {
  'use strict';

  // ---------- Year stamp ----------
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---------- Sticky nav scroll state ----------
  var nav = document.getElementById('nav');
  var setNavScrolled = function () {
    if (!nav) return;
    if (window.scrollY > 8) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  setNavScrolled();
  window.addEventListener('scroll', setNavScrolled, { passive: true });

  // ---------- Mobile menu toggle ----------
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var open = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navMenu.addEventListener('click', function (e) {
      var t = e.target;
      if (t && (t.tagName === 'A' || t.closest('a'))) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---------- Modal ----------
  var modal = document.getElementById('bookModal');
  var modalForm = document.getElementById('modalForm');
  var modalSuccess = document.getElementById('modalSuccess');
  var lastFocused = null;

  function openModal() {
    if (!modal) return;
    lastFocused = document.activeElement;
    if (modalForm) modalForm.hidden = false;
    if (modalSuccess) modalSuccess.hidden = true;
    var errEl = document.getElementById('formError');
    if (errEl) { errEl.hidden = true; errEl.textContent = ''; }
    var formEl = document.getElementById('bookForm');
    if (formEl) formEl.reset();
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    var firstInput = modal.querySelector('input, select, textarea, button');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  document.querySelectorAll('[data-open-modal]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && !modal.hidden) closeModal();
  });

  // ---------- Form submit ----------
  var form = document.getElementById('bookForm');
  var submitBtn = document.getElementById('submitBtn');
  var errorEl = document.getElementById('formError');

  function showError(msg) {
    if (!errorEl) return;
    errorEl.textContent = msg;
    errorEl.hidden = false;
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (errorEl) { errorEl.hidden = true; errorEl.textContent = ''; }

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var data = new FormData(form);
      var turnstileToken = (data.get('cf-turnstile-response') || '').toString();

      if (!turnstileToken) {
        showError('Please complete the verification challenge before submitting.');
        return;
      }

      var payload = {
        name: (data.get('name') || '').toString().trim(),
        email: (data.get('email') || '').toString().trim(),
        company: (data.get('company') || '').toString().trim(),
        vertical: (data.get('vertical') || '').toString().trim(),
        notes: (data.get('notes') || '').toString().trim(),
        'cf-turnstile-response': turnstileToken,
        company_website: (data.get('company_website') || '').toString()
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      fetch('/api/book-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          return res.json().then(function (body) { return { ok: res.ok, status: res.status, body: body }; });
        })
        .then(function (r) {
          if (!r.ok) {
            var msg = (r.body && r.body.error) ? r.body.error : 'Something went wrong. Try again, or email hello@partnerdepth.com.';
            showError(msg);
            return;
          }
          if (modalForm) modalForm.hidden = true;
          if (modalSuccess) modalSuccess.hidden = false;
        })
        .catch(function () {
          showError('Network error. Try again, or email hello@partnerdepth.com.');
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send';
          }
          if (window.turnstile && typeof window.turnstile.reset === 'function') {
            try { window.turnstile.reset(); } catch (_) { /* no-op */ }
          }
        });
    });
  }
})();
