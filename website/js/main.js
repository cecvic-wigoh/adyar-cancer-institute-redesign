'use strict';

/* ── UTILITY ── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── 1. STICKY HEADER ── */
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ── 2. MOBILE NAV ── */
const hamburger       = document.querySelector('.hamburger');
const mobileNav       = document.querySelector('.mobile-nav');
const mobileOverlay   = document.querySelector('.mobile-nav-overlay');
const mobileClose     = document.querySelector('.mobile-nav-close');

function openNav() {
  document.body.classList.add('nav-open');
  hamburger?.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  mobileNav?.querySelector('a,button')?.focus();
}
function closeNav() {
  document.body.classList.remove('nav-open');
  hamburger?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  hamburger?.focus();
}

hamburger?.addEventListener('click', openNav);
mobileOverlay?.addEventListener('click', closeNav);
mobileClose?.addEventListener('click', closeNav);

/* Focus trap + Escape in mobile nav */
mobileNav?.addEventListener('keydown', (e) => {
  if (!document.body.classList.contains('nav-open')) return;
  if (e.key === 'Escape') { closeNav(); return; }
  if (e.key !== 'Tab') return;
  const focusable = [...mobileNav.querySelectorAll('a,button,[tabindex="0"]')];
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* ── 3. SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    closeNav();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
});

/* ── 4. STAT COUNTER ANIMATION ── */
function animateCounter(el, target, duration = 1500) {
  const suffix = el.dataset.suffix || '';
  if (prefersReducedMotion) { el.textContent = target.toLocaleString() + suffix; return; }
  const start = performance.now();
  (function update(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
    el.textContent = Math.round(eased * target).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(update);
  })(performance.now());
}

const statNums = document.querySelectorAll('.stat-number[data-target]');
if (statNums.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseInt(entry.target.dataset.target, 10));
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => obs.observe(el));
}

/* ── 5. DOCTOR SCROLL ARROWS ── */
const doctorTrack = document.querySelector('.doctors-scroll');
document.querySelector('.scroll-arrow.prev')?.addEventListener('click', () => {
  const w = doctorTrack?.querySelector('.doctor-card')?.offsetWidth + 20 || 240;
  doctorTrack?.scrollBy({ left: -w, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
});
document.querySelector('.scroll-arrow.next')?.addEventListener('click', () => {
  const w = doctorTrack?.querySelector('.doctor-card')?.offsetWidth + 20 || 240;
  doctorTrack?.scrollBy({ left: w,  behavior: prefersReducedMotion ? 'auto' : 'smooth' });
});

/* ── 6. TESTIMONIAL LANGUAGE TOGGLE ── */
document.querySelectorAll('.lang-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const lang = tab.dataset.lang;
    document.querySelectorAll('.lang-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.lang === lang);
      t.setAttribute('aria-selected', String(t.dataset.lang === lang));
    });
    document.querySelectorAll('.testimonial-group').forEach(g => {
      g.classList.toggle('active', g.dataset.lang === lang);
    });
  });
});

/* ── 7. FAQ: CATEGORY TABS ── */
document.querySelectorAll('.faq-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const panelId = tab.dataset.panel;
    document.querySelectorAll('.faq-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.panel === panelId);
      t.setAttribute('aria-selected', String(t.dataset.panel === panelId));
    });
    document.querySelectorAll('.faq-panel').forEach(p => {
      const isActive = p.id === panelId;
      p.classList.toggle('active', isActive);
      p.hidden = !isActive;
    });
  });
});

/* ── 7b. FAQ: ACCORDION ── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    // collapse siblings
    btn.closest('.faq-list')?.querySelectorAll('.faq-q').forEach(other => {
      if (other !== btn) {
        other.setAttribute('aria-expanded', 'false');
        const ans = document.getElementById(other.getAttribute('aria-controls'));
        if (ans) ans.style.maxHeight = '0';
      }
    });
    btn.setAttribute('aria-expanded', String(!isOpen));
    const answer = document.getElementById(btn.getAttribute('aria-controls'));
    if (answer) answer.style.maxHeight = isOpen ? '0' : answer.scrollHeight + 'px';
  });
});

/* ── 8. SEARCH OVERLAY ── */
const searchOverlay = document.querySelector('.search-overlay');
const searchBtn     = document.querySelector('.search-btn');
const searchClose   = document.querySelector('.search-close');
const searchInput   = document.querySelector('.search-input');

function openSearch() {
  searchOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => searchInput?.focus(), 100);
}
function closeSearch() {
  searchOverlay?.classList.remove('open');
  document.body.style.overflow = '';
  searchBtn?.focus();
}
searchBtn?.addEventListener('click', openSearch);
searchClose?.addEventListener('click', closeSearch);
searchOverlay?.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
searchOverlay?.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

/* ── 9. CHATBOT FAB ── */
const chatFab   = document.querySelector('.chatbot-fab');
const chatPanel = document.querySelector('.chatbot-panel');
chatFab?.addEventListener('click', () => {
  const open = chatPanel?.classList.toggle('open');
  chatFab.setAttribute('aria-expanded', String(open));
  if (open) chatPanel?.querySelector('button')?.focus();
});
