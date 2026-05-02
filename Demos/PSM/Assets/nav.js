/* Parts Salvage Marketplace — Shared Nav + Modal */
(function () {
  const sub = window.location.pathname.includes('/pages/');
  const R = sub ? '../' : './';

  function activePage() {
    const p = window.location.pathname;
    if (p.includes('about'))          return 'about';
    if (p.includes('pricing'))        return 'pricing';
    if (p.includes('visionscan'))     return 'features';
    if (p.includes('blueprintvault')) return 'features';
    if (p.includes('salvagehub'))     return 'features';
    if (p.includes('compatengine'))   return 'features';
    return 'home';
  }
  const cur = activePage();

  const LOGO = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="#EAB308" stroke-opacity="0.5"/>
    <circle cx="16" cy="16" r="7" stroke="#EAB308" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="3" fill="#EAB308"/>
    <line x1="16" y1="4" x2="16" y2="9" stroke="#EAB308" stroke-width="2" stroke-linecap="round"/>
    <line x1="16" y1="23" x2="16" y2="28" stroke="#EAB308" stroke-width="2" stroke-linecap="round"/>
    <line x1="4" y1="16" x2="9" y2="16" stroke="#EAB308" stroke-width="2" stroke-linecap="round"/>
    <line x1="23" y1="16" x2="28" y2="16" stroke="#EAB308" stroke-width="2" stroke-linecap="round"/>
    <circle cx="26" cy="6" r="3" fill="#F97316"/>
  </svg>`;

  const html = `
<nav id="pf-nav">
  <a href="${R}index.html" class="pf-logo">
    ${LOGO}
    <span class="pf-logo-text">PSM <span>MARKETPLACE</span></span>
  </a>

  <ul class="pf-links">
    <li class="pf-link-item">
      <a href="${R}index.html" class="pf-link ${cur === 'home' ? 'active' : ''}">Home</a>
    </li>

    <li class="pf-link-item">
      <button class="pf-link ${cur === 'features' ? 'active' : ''}">
        Features
        <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 3l4 4 4-4"/></svg>
      </button>
      <div class="pf-dropdown">
        <a href="${R}pages/visionscan.html" class="pf-dd-link">
          <span class="pf-dd-icon">🔍</span>
          <span><span class="pf-dd-name">Vision Scan</span><span class="pf-dd-sub">AI photo identification</span></span>
        </a>
        <a href="${R}pages/blueprintvault.html" class="pf-dd-link">
          <span class="pf-dd-icon">📐</span>
          <span><span class="pf-dd-name">Blueprint Vault</span><span class="pf-dd-sub">3D-print replacement parts</span></span>
        </a>
        <a href="${R}pages/salvagehub.html" class="pf-dd-link">
          <span class="pf-dd-icon">🔧</span>
          <span><span class="pf-dd-name">Salvage Hub</span><span class="pf-dd-sub">P2P global parts marketplace</span></span>
        </a>
        <a href="${R}pages/compatengine.html" class="pf-dd-link">
          <span class="pf-dd-icon">⚙️</span>
          <span><span class="pf-dd-name">Compat Engine</span><span class="pf-dd-sub">Cross-model compatibility</span></span>
        </a>
      </div>
    </li>

    <li class="pf-link-item">
      <a href="${R}pages/pricing.html" class="pf-link ${cur === 'pricing' ? 'active' : ''}">Pricing</a>
    </li>

    <li class="pf-link-item">
      <a href="${R}pages/about.html" class="pf-link ${cur === 'about' ? 'active' : ''}">About</a>
    </li>

    <li class="pf-link-item">
      <a href="mailto:ijeomannamdi.okeke@gmail.com" class="pf-link">Contact</a>
    </li>
  </ul>

  <div class="pf-nav-right">
    <button class="btn btn-gold" style="padding:9px 20px;font-size:0.8rem;" onclick="PF.openSub()">Subscribe</button>
  </div>

  <button class="pf-hamburger" id="pf-hbg" onclick="PF.toggleMob()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- Mobile drawer -->
<div class="pf-mobile" id="pf-mob">
  <a href="${R}index.html" class="pf-mob-link">🏠 Home</a>
  <span class="pf-mob-section">Features</span>
  <a href="${R}pages/visionscan.html"    class="pf-mob-link">🔍 Vision Scan</a>
  <a href="${R}pages/blueprintvault.html" class="pf-mob-link">📐 Blueprint Vault</a>
  <a href="${R}pages/salvagehub.html"    class="pf-mob-link">🔧 Salvage Hub</a>
  <a href="${R}pages/compatengine.html"  class="pf-mob-link">⚙️ Compat Engine</a>
  <span class="pf-mob-section">Company</span>
  <a href="${R}pages/pricing.html"       class="pf-mob-link">💳 Pricing</a>
  <a href="${R}pages/about.html"         class="pf-mob-link">ℹ️ About</a>
  <a href="mailto:ijeomannamdi.okeke@gmail.com" class="pf-mob-link">✉️ Contact</a>
  <button class="btn btn-gold" style="width:100%;margin-top:14px;padding:13px;" onclick="PF.openSub()">Subscribe Free</button>
</div>

<!-- Subscribe Modal -->
<div class="pf-modal-bg" id="pf-modal" onclick="PF.bgClick(event)">
  <div class="pf-modal">
    <button class="pf-modal-close" onclick="PF.closeSub()">✕</button>
    <div id="pf-modal-form">
      <span class="tag">📡 Newsletter</span>
      <h2 style="font-size:2rem;letter-spacing:-0.03em;color:#fff;margin-bottom:8px;">Join the Repair<br><span class="italic-accent">Revolution</span></h2>
      <p style="font-size:0.875rem;">Blueprint drops, salvage alerts, and repair economy news — free.</p>
      <div class="modal-form">
        <input id="pf-sub-name"  class="field" type="text"  placeholder="Your name" />
        <input id="pf-sub-email" class="field" type="email" placeholder="your@email.com" />
        <button class="btn btn-gold" style="width:100%;padding:13px;" onclick="PF.submit()">Subscribe →</button>
      </div>
      <p class="modal-note">No spam. Unsubscribe anytime.</p>
    </div>
    <div class="modal-success" id="pf-modal-ok">
      <span class="ok-icon">✅</span>
      <h3>You're in!</h3>
      <p>Welcome to Parts Salvage Marketplace. Check your inbox shortly.</p>
    </div>
  </div>
</div>`;

  document.body.insertAdjacentHTML('afterbegin', html);

  /* Scroll reveal */
  document.addEventListener('DOMContentLoaded', () => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
  });

  window.PF = {
    openSub() {
      document.getElementById('pf-modal-form').style.display = 'block';
      document.getElementById('pf-modal-ok').style.display   = 'none';
      document.getElementById('pf-modal').classList.add('open');
    },
    closeSub() { document.getElementById('pf-modal').classList.remove('open'); },
    bgClick(e) { if (e.target === e.currentTarget) this.closeSub(); },
    toggleMob() {
      document.getElementById('pf-mob').classList.toggle('open');
      document.getElementById('pf-hbg').classList.toggle('open');
    },
    submit() {
      const email = document.getElementById('pf-sub-email').value.trim();
      const name  = document.getElementById('pf-sub-name').value.trim() || 'Friend';
      const field = document.getElementById('pf-sub-email');
      if (!email || !email.includes('@')) { field.style.borderColor = '#EF4444'; field.focus(); return; }
      document.getElementById('pf-modal-form').style.display = 'none';
      document.getElementById('pf-modal-ok').style.display   = 'block';
      setTimeout(() => {
        window.location.href = `mailto:ijeomannamdi.okeke@gmail.com?subject=New%20PSM%20Subscriber&body=Name%3A%20${encodeURIComponent(name)}%0D%0AEmail%3A%20${encodeURIComponent(email)}`;
      }, 1500);
    }
  };
})();