/* =========================================================
   HEART India: shared script
   Edit the SITE block once and every page updates.
   ========================================================= */
const SITE = {
  name: 'HEART',
  address: 'HEART Trust, Nabarangpur, Odisha, India, 764059',
  email: 'info@heartindia.org',
  phone: '+91 70647 15050',
  phoneLink: '+917064715050',
  // Put your real social page links here
  social: {
    facebook: 'https://facebook.com/YOUR_PAGE',
    twitter: 'https://x.com/YOUR_HANDLE',
    pinterest: 'https://pinterest.com/YOUR_PAGE',
    linkedin: 'https://linkedin.com/company/YOUR_PAGE'
  }
};

const ICONS = {
  facebook: '<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  pinterest: '<svg viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452z"/></svg>'
};
const LABELS = { facebook: 'Facebook', twitter: 'Twitter / X', pinterest: 'Pinterest', linkedin: 'LinkedIn' };

const socialHTML = () =>
  '<div class="social">' +
  Object.keys(SITE.social).map(k =>
    `<a href="${SITE.social[k]}" target="_blank" rel="noopener" aria-label="${LABELS[k]}">${ICONS[k]}</a>`
  ).join('') + '</div>';

const PAGES = [
  ['index.html', 'Home'], ['services.html', 'Services'], ['about.html', 'About'],
  ['contact.html', 'Contact'], ['blog.html', 'Blog']
];
const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

// ---------- Header ----------
const headerEl = document.getElementById('site-header');
if (headerEl) {
  headerEl.innerHTML = `
  <div class="topbar"><div class="wrap">
    <span>📍 ${SITE.address}</span>
    <div class="right">
      <span><a href="mailto:${SITE.email}">✉ ${SITE.email}</a> &nbsp; <a href="tel:${SITE.phoneLink}">☎ ${SITE.phone}</a></span>
      ${socialHTML()}
    </div>
  </div></div>
  <header class="header"><div class="wrap nav">
    <a href="index.html" class="logo-link" aria-label="HEART India home"><img class="logo-img" src="images/logo.png" alt="HEART India"></a>
    <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mainMenu"><span class="menu-label">Menu</span></button>
    <nav>
      <ul class="menu" id="mainMenu">
        ${PAGES.map(([f, n]) => `<li><a href="${f}" class="${f === current ? 'active' : ''}">${n}</a></li>`).join('')}
        <li><a href="contact.html" class="btn btn-sm">Get Involved</a></li>
        <li class="menu-contact">
          <a href="mailto:${SITE.email}">✉ ${SITE.email}</a><br>
          <a href="tel:${SITE.phoneLink}">☎ ${SITE.phone}</a>
          ${socialHTML()}
        </li>
      </ul>
    </nav>
  </div></header>`;
}

// ---------- Footer ----------
const footerEl = document.getElementById('site-footer');
if (footerEl) {
  footerEl.innerHTML = `
  <footer class="footer">
    <div class="wrap foot-grid">
      <div>
        <a href="index.html" class="logo-link"><img class="logo-img logo-sm" src="images/logo.png" alt="HEART India"></a>
        <p>HEART is a dedicated non-profit organization transforming the lives of tribal communities in India through sustainable programs and initiatives.</p>
        ${socialHTML()}
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>${PAGES.map(([f, n]) => `<li><a href="${f}">${n}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>Our Programs</h4>
        <ul>
          <li><a href="services.html">Health Programs</a></li>
          <li><a href="services.html">Educational Support</a></li>
          <li><a href="services.html">Agricultural Development</a></li>
          <li><a href="services.html">Research and Advocacy</a></li>
          <li><a href="services.html">Community Empowerment</a></li>
        </ul>
      </div>
      <div>
        <h4>Stay Updated</h4>
        <p>Stay connected and receive updates on our work and how you can get involved.</p>
        <form id="subForm" class="sub-form"><input type="email" placeholder="Your email" required aria-label="Email"><button class="btn btn-sm" type="submit">Subscribe Now</button></form>
        <p id="subStatus" role="status"></p>
      </div>
    </div>
    <div class="wrap copy">© ${new Date().getFullYear()} Heart India</div>
  </footer>`;
}

// ---------- Mobile menu ----------
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
if (menuBtn && menu) {
  const label = menuBtn.querySelector('.menu-label');
  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (label) label.textContent = open ? 'Close' : 'Menu';
  };
  menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('click', (e) => { if (!e.target.closest('.header')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) setMenu(false); });
}

// ---------- Animated counters ----------
const counters = document.querySelectorAll('[data-count]');
const runCounter = (el) => {
  const target = +el.dataset.count, suffix = el.dataset.suffix || '';
  const start = performance.now(), dur = 1600;
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))) + (p === 1 ? suffix : '');
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { runCounter(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.4 });
  counters.forEach(c => io.observe(c));
} else {
  counters.forEach(c => { c.textContent = (+c.dataset.count) + (c.dataset.suffix || ''); });
}

// ---------- Testimonial slider (home page) ----------
const slides = document.querySelectorAll('.slide');
const dotsBox = document.getElementById('dots');
if (slides.length && dotsBox) {
  let cur = 0, timer;
  const show = (i) => {
    cur = i;
    slides.forEach((s, n) => s.classList.toggle('active', n === i));
    dotsBox.querySelectorAll('button').forEach((d, n) => d.classList.toggle('on', n === i));
  };
  const restart = () => { clearInterval(timer); timer = setInterval(() => show((cur + 1) % slides.length), 5000); };
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', 'Show testimonial ' + (i + 1));
    b.addEventListener('click', () => { show(i); restart(); });
    dotsBox.appendChild(b);
  });
  show(0); restart();
}

// ---------- Contact form (contact page) ----------
// Opens the visitor's email app with the message filled in.
// For direct sending, replace with fetch() to Formspree or your own backend.
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
if (form && statusEl) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    statusEl.className = '';
    const d = Object.fromEntries(new FormData(form).entries());
    if (!d.name || !d.email || !d.message) { statusEl.textContent = 'Please fill in every field.'; statusEl.className = 'err'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) { statusEl.textContent = 'Enter a valid email address.'; statusEl.className = 'err'; return; }
    const subject = encodeURIComponent('Website enquiry from ' + d.name);
    const body = encodeURIComponent(d.message + '\n\nFrom: ' + d.name + ' (' + d.email + ')' + (d.phone ? '\nPhone: ' + d.phone : ''));
    window.location.href = 'mailto:' + SITE.email + '?subject=' + subject + '&body=' + body;
    statusEl.textContent = 'Opening your email app… thank you!'; statusEl.className = 'ok';
    form.reset();
  });
}

// ---------- Newsletter (demo) ----------
const sub = document.getElementById('subForm');
if (sub) {
  sub.addEventListener('submit', (e) => {
    e.preventDefault();
    const s = document.getElementById('subStatus');
    s.textContent = 'Thanks for subscribing!'; s.className = 'ok';
    e.target.reset();
  });
}

// ---------- Skill bars (about page + home counters) ----------
const bars = document.querySelectorAll('.bar-fill');
if (bars.length) {
  if ('IntersectionObserver' in window) {
    const bo = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); bo.unobserve(e.target); } });
    }, { threshold: 0.4 });
    bars.forEach(b => bo.observe(b));
  } else {
    bars.forEach(b => b.classList.add('in'));
  }
}

// =========================================================
// Stylish effects: scroll reveal, header shadow, floating buttons
// =========================================================
(function () {
  // Header shadow on scroll
  const hd = document.querySelector('.header');
  if (hd) {
    const onScroll = () => hd.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Scroll reveal with a small stagger
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const sel = '.card,.work,.post,.price-card,.steps li,.member,.stats-grid>div,.about-grid>*,.kf-grid>*,.two>*,.contact-grid>*,.slider,.section h2,.section .sub,.cta-band .wrap';
    const items = Array.from(document.querySelectorAll(sel));
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const sibs = Array.from(el.parentElement.children);
        el.style.transitionDelay = (sibs.indexOf(el) % 4) * 90 + 'ms';
        el.classList.add('in');
        setTimeout(() => { el.style.transitionDelay = ''; }, 1000);
        ro.unobserve(el);
      });
    }, { threshold: 0.12 });
    items.forEach((el) => { el.classList.add('reveal'); ro.observe(el); });
  }

  // Button styles are injected here so the icons never depend on stylish.css
  if (!document.getElementById('fab-style')) {
    const st = document.createElement('style');
    st.id = 'fab-style';
    st.textContent = '.fab{position:fixed;right:20px;z-index:70;display:grid;place-items:center;width:52px;height:52px;border-radius:50%;border:0;cursor:pointer;box-shadow:0 12px 28px rgba(3,19,41,.3);transition:transform .25s,opacity .25s;text-decoration:none}.fab:hover{transform:translateY(-3px) scale(1.05)}.fab svg{width:26px;height:26px;fill:#fff}.fab-wa{bottom:20px;background:#25d366}.fab-top{bottom:84px;background:#031329;color:#fff;font-size:20px;opacity:0;pointer-events:none}.fab-top.show{opacity:1;pointer-events:auto}';
    document.head.appendChild(st);
  }

  // WhatsApp + Back to top
  const wa = document.createElement('a');
  wa.className = 'fab fab-wa';
  wa.href = 'https://wa.me/' + SITE.phoneLink.replace('+', '');
  wa.target = '_blank'; wa.rel = 'noopener'; wa.setAttribute('aria-label', 'Chat on WhatsApp');
  wa.innerHTML = '<svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  document.body.appendChild(wa);

  const top = document.createElement('button');
  top.className = 'fab fab-top'; top.type = 'button'; top.setAttribute('aria-label', 'Back to top'); top.textContent = '↑';
  top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(top);
  window.addEventListener('scroll', () => top.classList.toggle('show', window.scrollY > 500), { passive: true });
})();
