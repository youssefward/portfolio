/**
 * YOUSSEF WARD — 2026 CONTEMPORARY INTERACTIVE ENGINE
 * Features: Cursor Spotlight · 3D Micro-Tilt · Interactive Category Filters · Dual Modern Themes
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // State Management
  let currentLang = localStorage.getItem('yw_portfolio_lang') || 'en';
  let currentTheme = localStorage.getItem('yw_portfolio_theme') || 'dark';
  let currentFilter = 'all';

  // DOM References
  const htmlRoot = document.documentElement;
  const langToggleBtn = document.getElementById('langToggleBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');
  const spotlight = document.getElementById('cursorSpotlight');
  const projectsGrid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('editorialModal');
  const modalCloseBtn = document.getElementById('modalDismissBtn');
  const modalTarget = document.getElementById('modalCanvasTarget');

  /**
   * Interactive Mouse Spotlight (Ambient Glow Following Cursor)
   */
  if (spotlight && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    });
  }

  /**
   * Theme Engine (Obsidian Dark vs Clean Studio Light)
   */
  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('yw_portfolio_theme', theme);

    if (theme === 'light') {
      htmlRoot.classList.remove('theme-dark');
      htmlRoot.classList.add('theme-light');
      if (themeIcon) themeIcon.textContent = '☀️';
      if (themeLabel) themeLabel.textContent = currentLang === 'ar' ? 'استوديو ناصع' : 'Studio Light';
    } else {
      htmlRoot.classList.remove('theme-light');
      htmlRoot.classList.add('theme-dark');
      if (themeIcon) themeIcon.textContent = '🌙';
      if (themeLabel) themeLabel.textContent = currentLang === 'ar' ? 'سينما ليلية' : 'Obsidian Dark';
    }
  }

  /**
   * Bilingual Engine (Syne / Plus Jakarta Sans & Alexandria / Readex Pro)
   */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('yw_portfolio_lang', lang);

    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const t = data.translations[lang];

    // Language Toggle Label
    if (langToggleBtn) {
      langToggleBtn.innerHTML = `<span>${t.nav.switchLang}</span>`;
    }

    // Static text binding
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const keyPath = el.getAttribute('data-i18n');
      const text = resolveKey(t, keyPath);
      if (text) el.textContent = text;
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const keyPath = el.getAttribute('data-i18n-placeholder');
      const text = resolveKey(t, keyPath);
      if (text) el.setAttribute('placeholder', text);
    });

    // Update Theme Label
    applyTheme(currentTheme);

    // Re-render Dynamic Projects
    renderProjects();
    renderTicker();
  }

  function resolveKey(obj, path) {
    return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), obj);
  }

  /**
   * Render High-Energy Marquee Ticker
   */
  function renderTicker() {
    const tickerTrack = document.getElementById('tickerTrack');
    if (!tickerTrack) return;

    const t = data.translations[currentLang];
    const items = t.hero.tickerItems || [
      'EVERY FRAME IS A CHOICE',
      'CINEMATOGRAPHY // LIGHT. COMPOSITION. PERSPECTIVE.',
      'CAMERA DEPARTMENT CRAFT',
      'APPLIED ARTS FOUNDATION',
      'AVAILABLE WORLDWIDE'
    ];

    const sequence = [...items, ...items];
    tickerTrack.innerHTML = sequence.map(item => `
      <span class="ticker-word font-display">
        ${item}
        <span style="opacity: 0.6;">★</span>
      </span>
    `).join('');
  }

  /**
   * Render Filterable Projects with 2026 Card Architecture
   */
  function renderProjects() {
    if (!projectsGrid) return;
    const t = data.translations[currentLang];

    // Consolidate all project disciplines into a single interactive stream
    const allItems = [
      ...data.cinematographyProjects.map(p => ({ ...p, type: 'cinematography' })),
      ...data.photographyProjects.map(p => ({ ...p, type: 'photography' })),
      ...data.designProjects.map(p => ({ ...p, type: 'design' }))
    ];

    const filtered = currentFilter === 'all' 
      ? allItems 
      : allItems.filter(item => item.type === currentFilter);

    projectsGrid.innerHTML = filtered.map(item => {
      const aspectTag = item.specs || item.aspect || '16:9';
      return `
        <article class="modern-project-card" onclick="openModernModal('${item.type}', '${item.id}')">
          <div class="project-visual-viewport">
            <div class="project-visual-canvas" style="background: radial-gradient(circle at 70% 30%, rgba(255, 87, 34, 0.25) 0%, #0d0f17 80%);"></div>
            
            <div class="floating-overlay-badge">
              <span class="badge-pill-neon">
                <span class="pulse-indicator"></span>
                ${aspectTag}
              </span>
            </div>
          </div>

          <div class="project-info-padding">
            <div class="project-category-row">
              <span>${item.category[currentLang]}</span>
              <span style="color: var(--text-dim);">${item.year}</span>
            </div>

            <h3 class="project-title-modern font-display">${item.title[currentLang]}</h3>
            
            ${item.role ? `
              <div class="project-role-tag">
                <span style="margin-inline-end: 0.4rem;">🎯</span> ${t.labels.verifiedRole}: ${item.role[currentLang]}
              </div>
            ` : ''}

            <p class="project-synopsis-clean">
              ${item.editorialStatement ? item.editorialStatement[currentLang] : (item.synopsis ? item.synopsis[currentLang] : (item.description ? item.description[currentLang] : item.caption[currentLang]))}
            </p>

            <div style="margin-top: 1rem; display: flex; justify-content: flex-end;">
              <span style="font-size: 0.84rem; font-weight: 700; color: var(--accent-primary);">
                ${currentLang === 'ar' ? 'استعراض المشروع ←' : 'View Project →'}
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach 3D Micro-tilt to rendered cards
    attachCardTilt();
  }

  /**
   * 3D Micro-Tilt on Mouse Hover
   */
  function attachCardTilt() {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.querySelectorAll('.modern-project-card, .interactive-card-3d').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /**
   * Category Filter Buttons
   */
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderProjects();
    });
  });

  /**
   * Modal Lightbox
   */
  window.openModernModal = function(type, id) {
    let project = null;
    if (type === 'cinematography') project = data.cinematographyProjects.find(p => p.id === id);
    if (type === 'photography') project = data.photographyProjects.find(p => p.id === id);
    if (type === 'design') project = data.designProjects.find(p => p.id === id);

    if (!project || !modalTarget) return;
    const t = data.translations[currentLang];

    modalTarget.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <span class="hero-tag-badge">${project.category ? project.category[currentLang] : ''} · ${project.year || ''}</span>
        <h2 class="font-display" style="font-size: clamp(2.2rem, 4vw, 3.2rem); color: var(--text-main); margin-top: 0.5rem;">
          ${project.title[currentLang]}
        </h2>
        ${project.role ? `<div style="font-weight: 700; color: var(--accent-primary); margin-top: 0.5rem;">${t.labels.verifiedRole}: ${project.role[currentLang]}</div>` : ''}
      </div>

      <div style="width:100%; aspect-ratio: 16/9; background-color: #0b0d14; border-radius: 16px; margin-bottom: 2rem; position: relative; overflow: hidden; display: flex; align-items: flex-end; padding: 1.5rem;">
        <span class="badge-pill-neon"><span class="pulse-indicator"></span>FRAME VIEWPORT // HIGH FIDELITY</span>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-secondary); margin-bottom: 0.5rem; font-weight: 800;">
          ${t.labels.synopsis}
        </h4>
        <p style="color: var(--text-muted); line-height: 1.8; font-size: 1.05rem;">
          ${project.synopsis ? project.synopsis[currentLang] : (project.description ? project.description[currentLang] : project.caption[currentLang])}
        </p>
      </div>

      ${project.stills ? `
        <h4 style="font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-main); margin-bottom: 1rem; font-weight: 800;">
          Frame Sequence
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
          ${project.stills.map(s => `
            <div style="background: var(--bg-surface-elevated); border-radius: 12px; padding: 1rem; border: 1px solid var(--border-subtle);">
              <div style="aspect-ratio: 16/9; background: #07090e; border-radius: 8px; display:flex; align-items:center; justify-content:center; margin-bottom: 0.75rem;">
                <span class="badge-pill-neon" style="font-size: 0.65rem;">STILL</span>
              </div>
              <p style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">${s.caption[currentLang]}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}
    `;

    if (modal) modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
      closeModal();
    }
  });

  // Switchers Listeners
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      applyLanguage(nextLang);
    });
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // Inquiry Form
  const contactForm = document.getElementById('inquiryForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = currentLang === 'ar' ? 'تم الإرسال بنجاح ⚡' : 'Inquiry Transmitted ⚡';
      submitBtn.style.background = '#10b981';

      setTimeout(() => {
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
      }, 3500);
    });
  }

  // Initialize
  applyLanguage(currentLang);
  applyTheme(currentTheme);
});
