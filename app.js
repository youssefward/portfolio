/* ============================================================
   YOUSSEF WARD PORTFOLIO — APPLICATION ENGINE
   Pure Vanilla JS · No Frameworks · No Build Tools
   A+B Hybrid: Kinetic Editorial + Cinematic Art Direction
   ============================================================ */

(function () {
  'use strict';

  /* ── STATE ──────────────────────────────────────────────── */
  const State = {
    lang: 'en',
    theme: 'dark',
    route: { type: 'section', id: 'home' }, // { type: 'section'|'project', id: string }
    lightbox: { items: [], index: 0 },
    scrollY: 0,
  };

  /* ── HELPERS ────────────────────────────────────────────── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const toElement = (target) => {
    if (!target) return null;
    if (target instanceof Element) return target;
    return target.parentElement instanceof Element ? target.parentElement : null;
  };
  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[State.lang] || obj.ar || obj.en || '';
  };
  const esc = (s) => String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

  /* ── CONTENT ALIAS ──────────────────────────────────────── */
  const C = () => window.CONTENT || {};

  /* ── CURSOR ─────────────────────────────────────────────── */
  function initCursor() {
    const cursor = $('#cursor');
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!cursor || window.matchMedia('(pointer: coarse)').matches || prefersReduced) {
      if (cursor) cursor.style.display = 'none';
      return;
    }
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
    document.addEventListener('mouseenter', (e) => {
      const el = toElement(e.target);
      if (el && el.closest('a, button, [role="button"], .project-card, .discipline-tile, .gallery-item, .case-study-gallery-item, .case-study-nav-btn')) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    }, true);
    function loop() {
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;
      cursor.style.transform = `translate(${cx - 20}px, ${cy - 20}px)`;
      requestAnimationFrame(loop);
    }
    loop();
  }

  /* ── LANGUAGE SWITCHER ───────────────────────────────────── */
  function getSavedLang() {
    try {
      return localStorage.getItem('yw-lang') || 'en';
    } catch (e) {
      return 'en';
    }
  }

  function setSavedLang(lang) {
    try {
      localStorage.setItem('yw-lang', lang);
    } catch (e) {}
  }

  function updateModalLabels(lang) {
    const isAr = lang === 'ar';
    const lb = $('#lightbox');
    if (lb) {
      lb.setAttribute('aria-label', isAr ? 'عرض الصورة' : 'Image viewer');
      lb.querySelector('.lightbox-close')?.setAttribute('aria-label', isAr ? 'إغلاق' : 'Close');
      lb.querySelector('.lightbox-prev')?.setAttribute('aria-label', isAr ? 'السابق' : 'Previous');
      lb.querySelector('.lightbox-next')?.setAttribute('aria-label', isAr ? 'التالي' : 'Next');
    }
    const vm = $('#video-modal');
    if (vm) {
      vm.setAttribute('aria-label', isAr ? 'عرض الفيديو' : 'Video player');
      vm.querySelector('.video-modal-close')?.setAttribute('aria-label', isAr ? 'إغلاق' : 'Close');
    }
  }

  function setLang(lang) {
    State.lang = lang;
    setSavedLang(lang);
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('.nav-lang-btn').forEach(btn => { btn.textContent = lang === 'ar' ? 'EN' : 'عربي'; });
    updateModalLabels(lang);
    renderNav();
    renderCurrentRoute();
  }

  /* ── THEME (DARK / LIGHT) ────────────────────────────────── */
  function getSavedTheme() {
    try {
      const saved = localStorage.getItem('yw-theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return 'dark';
    } catch (e) {
      return 'dark';
    }
  }

  function setSavedTheme(theme) {
    try {
      localStorage.setItem('yw-theme', theme);
    } catch (e) {}
  }

  function setTheme(theme) {
    State.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    setSavedTheme(theme);
    $$('.nav-theme-btn').forEach(btn => {
      btn.innerHTML = theme === 'dark' ? sunIcon() : moonIcon();
    });
  }

  function toggleTheme() {
    setTheme(State.theme === 'light' ? 'dark' : 'light');
  }

  const sunIcon = () => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  const moonIcon = () => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  /* ── ROUTER & HASH HANDLING ──────────────────────────────── */
  function parseHash() {
    const raw = (window.location.hash || '').replace(/^#\/?/, '').trim();
    if (!raw) return { type: 'section', id: 'home' };

    if (raw.startsWith('project/')) {
      const pid = raw.replace('project/', '').trim();
      return { type: 'project', id: pid };
    }

    const validSections = ['home', 'filmmaking', 'photography', 'design', 'about', 'contact'];
    if (validSections.includes(raw)) {
      return { type: 'section', id: raw };
    }

    return { type: 'section', id: 'home' };
  }

  function navigateTo(target, pushHash = true) {
    if (typeof target === 'string') {
      if (target.startsWith('project/')) {
        State.route = { type: 'project', id: target.replace('project/', '') };
      } else {
        State.route = { type: 'section', id: target };
      }
    } else if (target && target.type) {
      State.route = target;
    }

    if (pushHash) {
      const hashStr = State.route.type === 'project' ? `#/project/${State.route.id}` : `#/${State.route.id === 'home' ? '' : State.route.id}`;
      if (window.location.hash !== hashStr) {
        window.location.hash = hashStr;
      }
    }

    updateNavActive();
    renderCurrentRoute();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleHashChange() {
    const parsed = parseHash();
    if (parsed.type !== State.route.type || parsed.id !== State.route.id) {
      State.route = parsed;
      updateNavActive();
      renderCurrentRoute();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /* ── NAVIGATION BAR ─────────────────────────────────────── */
  function renderNav() {
    const header = $('#header');
    if (!header) return;
    const isAr = State.lang === 'ar';

    const navItems = [
      { id: 'filmmaking',  en: 'Film',        ar: 'سينما' },
      { id: 'photography', en: 'Photography',  ar: 'تصوير' },
      { id: 'design',      en: 'Design',       ar: 'تصميم' },
      { id: 'about',       en: 'About',        ar: 'عني'   },
      { id: 'contact',     en: 'Contact',      ar: 'تواصل' },
    ];

    const currentActive = State.route.type === 'section' ? State.route.id : getParentDiscipline(State.route.id);

    const linksHtml = navItems.map(item =>
      `<button class="nav-link${currentActive === item.id ? ' active' : ''}" data-section="${esc(item.id)}">${isAr ? item.ar : item.en}</button>`
    ).join('');

    header.innerHTML = `
      <div class="nav-backdrop"></div>
      <nav class="nav" role="navigation" aria-label="${isAr ? 'القائمة الرئيسية' : 'Main navigation'}">
        <button class="nav-logo" data-section="home">
          YOUSSEF<span>.</span>WARD
        </button>

        <div class="nav-links" id="nav-links" role="list">
          ${linksHtml}
        </div>

        <div class="nav-actions">
          <button class="nav-lang-btn" id="lang-btn" aria-label="${isAr ? 'Switch to English' : 'التبديل للعربية'}">
            ${isAr ? 'EN' : 'عربي'}
          </button>
          <button class="nav-theme-btn" id="theme-btn" aria-label="${isAr ? 'تبديل الوضع الليلي' : 'Toggle theme'}">
            ${State.theme === 'dark' ? sunIcon() : moonIcon()}
          </button>
          <button class="nav-menu-btn" id="menu-btn" aria-label="${isAr ? 'فتح القائمة' : 'Open menu'}" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    `;

    $$('.nav-link', header).forEach(btn => {
      btn.addEventListener('click', () => {
        navigateTo(btn.dataset.section);
        closeMobileMenu();
      });
    });

    $('.nav-logo', header).addEventListener('click', () => {
      navigateTo('home');
      closeMobileMenu();
    });

    $('#lang-btn', header).addEventListener('click', () => setLang(State.lang === 'ar' ? 'en' : 'ar'));
    $('#theme-btn', header).addEventListener('click', toggleTheme);

    const menuBtn = $('#menu-btn', header);
    const navLinks = $('#nav-links', header);
    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        menuBtn.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        menuBtn.setAttribute('aria-label', open ? (isAr ? 'إغلاق القائمة' : 'Close menu') : (isAr ? 'فتح القائمة' : 'Open menu'));
      });
    }
  }

  function getParentDiscipline(projectId) {
    const project = (C().projects || []).find(p => p.id === projectId);
    return project ? project.discipline : '';
  }

  function closeMobileMenu() {
    const navLinks = $('#nav-links');
    const menuBtn = $('#menu-btn');
    const isAr = State.lang === 'ar';
    if (navLinks) navLinks.classList.remove('open');
    if (menuBtn) {
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', isAr ? 'فتح القائمة' : 'Open menu');
    }
  }

  // Close mobile menu on Escape key or click outside
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });

  document.addEventListener('click', (e) => {
    const navLinks = $('#nav-links');
    const menuBtn = $('#menu-btn');
    if (navLinks && navLinks.classList.contains('open')) {
      const el = toElement(e.target);
      if (el && !navLinks.contains(el) && !menuBtn?.contains(el)) {
        closeMobileMenu();
      }
    }
  });

  function updateNavActive() {
    const currentActive = State.route.type === 'section' ? State.route.id : getParentDiscipline(State.route.id);
    $$('.nav-link').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.section === currentActive);
    });
  }

  function initScroll() {
    const header = $('#header');
    window.addEventListener('scroll', () => {
      State.scrollY = window.scrollY;
      if (header) header.classList.toggle('scrolled', State.scrollY > 20);
    }, { passive: true });
  }

  /* ── INTERSECTION OBSERVER (REVEALS) ─────────────────────── */
  let revealObserver;
  function initReveal() {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  }

  function observeReveals(container = document) {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      $$('.reveal, .clip-reveal', container).forEach(node => {
        node.classList.add('in-view');
      });
      return;
    }
    if (!revealObserver) return;
    $$('.reveal, .clip-reveal', container).forEach(node => {
      revealObserver.observe(node);
    });
  }

  /* ── ROUTE RENDERER ─────────────────────────────────────── */
  function renderCurrentRoute() {
    const main = $('#main');
    if (!main) return;

    if (State.route.type === 'project') {
      renderCaseStudy(main, State.route.id);
      return;
    }

    switch (State.route.id) {
      case 'home':        renderHome(main); break;
      case 'filmmaking':  renderDiscipline(main, 'filmmaking'); break;
      case 'photography': renderDiscipline(main, 'photography'); break;
      case 'design':      renderDiscipline(main, 'design'); break;
      case 'about':       renderAbout(main); break;
      case 'contact':     renderContact(main); break;
      default:            renderHome(main);
    }
  }

  /* ── HOME ───────────────────────────────────────────────── */
  function renderHome(main) {
    const isAr = State.lang === 'ar';
    const content = C();
    const disciplines = content.disciplines || [];

    main.innerHTML = `
      <!-- HERO SECTION -->
      <section class="hero" id="hero" aria-label="${isAr ? 'المقدمة' : 'Introduction'}">
        <div class="hero-media-wrapper">
          <img
            class="hero-cover"
            src="${esc(content.heroImage || 'assets/images/productions/ekhteyar-1.jpg')}"
            alt="${esc(t(content.heroImageAlt) || (isAr ? 'لقطة سينمائية — الاختيار' : 'Cinematography Still — El Ekhteyar'))}"
            loading="eager"
            fetchpriority="high"
          >
          <div class="hero-overlay" aria-hidden="true"></div>
          <div class="hero-frame-badge" aria-hidden="true">
            <span class="hero-badge-dot"></span>
            <span>${esc(t(content.heroFrameBadge) || (isAr ? 'كادر سينمائي · الاختيار' : 'CINEMATOGRAPHY STILL · EL EKHTEYAR'))}</span>
          </div>
        </div>

        <div class="hero-inner">
          <div class="hero-content">
            <p class="hero-index" aria-hidden="true">
              ${isAr ? '— مصور سينمائي وجرافيك ديزاينر' : '— CINEMATOGRAPHER & GRAPHIC DESIGNER'}
            </p>
            <h1 class="hero-name">
              <span>${isAr ? 'يوسف' : 'YOUSSEF'}</span>
              <span>${isAr ? 'ورد' : 'WARD'}</span>
            </h1>
            <p class="hero-role">
              <span>${esc(t(content.heroRole) || (isAr ? 'مصور سينمائي وجرافيك ديزاينر' : 'Cinematographer & Graphic Designer'))}</span>
            </p>
            <p class="hero-tagline">
              <span>${esc(t(content.heroTagline) || (isAr ? 'عقل بصري واحد يجمع بين الكادر السينمائي ومنظومات التصميم الجرافيكي.' : 'One visual mind bridging cinematic camera craft and graphic design systems.'))}</span>
            </p>
            <div class="hero-cta">
              <button class="btn btn-primary" data-nav="filmmaking">
                ${isAr ? 'استكشف الأعمال' : 'Explore Selected Work'}
              </button>
              <button class="btn btn-secondary hero-film-btn" id="hero-film-btn" data-video="https://player.vimeo.com/video/1239369594?autoplay=1&color=bc171b&title=0&byline=0&portrait=0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <span>${isAr ? 'شاهد فيلم التخرج (المولوية)' : 'Watch Graduation Film — Mawlawya'}</span>
              </button>
              <button class="btn btn-ghost" data-nav="about">
                ${isAr ? 'السيرة الذاتية' : 'Biography & CV'}
              </button>
            </div>
          </div>

          <aside class="hero-craft-card" aria-label="${isAr ? 'توثيق حرفة الكاميرا' : 'Camera Craft Documentation'}">
            <div class="hero-craft-media">
              <img
                src="${esc(content.heroCraftImage || 'assets/images/productions/ekhteyar-3.jpg')}"
                alt="${esc(t(content.heroCraftAlt) || (isAr ? 'رافعة الكاميرا وقت الغسق' : 'Camera Crane & Rigging at Twilight'))}"
                loading="eager"
              >
              <div class="hero-craft-overlay" aria-hidden="true"></div>
            </div>
            <div class="hero-craft-info">
              <span class="hero-craft-tag">${esc(t(content.heroCraftBadge) || (isAr ? 'موقع التصوير · حرفة الكاميرا' : 'ON SET · CAMERA CRAFT'))}</span>
              <span class="hero-craft-desc">${esc(t(content.heroCraftTitle) || (isAr ? 'مسلسل الاختيار · كواليس ورافعة الكاميرا' : 'El Ekhteyar · Crane & Twilight Rigging'))}</span>
            </div>
          </aside>
        </div>

        <div class="hero-scroll" aria-hidden="true">
          <div class="hero-scroll-line"></div>
          <span class="hero-scroll-label">${isAr ? 'مرر' : 'SCROLL'}</span>
        </div>
      </section>

      <!-- DISCIPLINES STRIP -->
      <section class="disciplines-strip" aria-label="${isAr ? 'التخصصات الأساسية' : 'Core Disciplines'}">
        <div class="container">
          <div class="eyebrow reveal">
            <span class="eyebrow-line"></span>
            ${isAr ? 'المحاور البصرية الثلاثة' : 'THREE CORE DISCIPLINES'}
          </div>
          <div class="disciplines-grid reveal reveal-delay-1" style="margin-top:clamp(28px,4vw,44px);">
            ${disciplines.map((d, i) => `
              <div class="discipline-tile" role="button" tabindex="0" data-nav="${esc(d.id)}" aria-label="${esc(t(d.title))}">
                <p class="tile-number">0${i + 1} —</p>
                <h2 class="tile-title">${esc(t(d.title))}</h2>
                <p class="tile-desc">${esc(t(d.description))}</p>
                <p class="tile-cta">
                  ${isAr ? 'استكشف التخصص' : 'View Projects'}
                  <span class="tile-cta-arrow"></span>
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FEATURED WORK PREVIEW -->
      ${renderFeaturedPreview(isAr)}

      <!-- CONTACT CTA -->
      <section class="contact-section" aria-label="${isAr ? 'تواصل' : 'Contact'}">
        <div class="container" style="position:relative;z-index:1;">
          <div class="eyebrow reveal" style="color:rgba(245,244,238,0.4);justify-content:center;">
            <span class="eyebrow-line"></span>
            ${isAr ? 'ابدأ محادثة' : "LET'S COLLABORATE"}
          </div>
          <h2 class="section-title reveal" style="color:var(--cream);text-align:center;margin:16px 0;">
            ${isAr ? 'هل لديك مشروع أو رؤية تريد تجسيدها؟' : 'Have a project or vision to bring to life?'}
          </h2>
          <a href="mailto:${esc(content.email)}" class="contact-email reveal">
            ${esc(content.email)}
          </a>
          <p class="contact-sub reveal">${isAr ? 'القاهرة، مصر · متاح للمشاريع المحلية والدولية' : 'Cairo, Egypt · Available for local and international projects'}</p>
          <div class="contact-socials reveal reveal-delay-1">
            <a href="${esc(content.behance)}" target="_blank" rel="noopener" class="contact-social">Behance</a>
            <a href="${esc(content.linkedin)}" target="_blank" rel="noopener" class="contact-social">LinkedIn</a>
            <a href="${esc(content.instagram)}" target="_blank" rel="noopener" class="contact-social">Instagram</a>
            <a href="${esc(content.vimeo)}" target="_blank" rel="noopener" class="contact-social">Vimeo</a>
          </div>
        </div>
      </section>
    `;

    // Hero loaded animation
    requestAnimationFrame(() => {
      const hero = $('#hero');
      if (hero) {
        const img = hero.querySelector('.hero-cover');
        if (img && img.complete) hero.classList.add('loaded');
        else if (img) img.addEventListener('load', () => hero.classList.add('loaded'), { once: true });
      }
    });

    attachNavClicks(main);
    attachProjectCardEvents(main);
    observeReveals(main);
    renderFooter();
  }

  function renderFeaturedPreview(isAr) {
    const disciplines = C().disciplines || [];
    const allProjects = C().projects || [];
    const featured = disciplines.map(d => allProjects.find(p => p.discipline === d.id && p.featured)).filter(Boolean);
    if (!featured.length) return '';

    const cards = featured.map((p, i) => {
      const img = p.images?.[0];
      if (!img) return '';
      const tags = (p.deliverables || []).slice(0, 3);
      return `
        <div class="project-card reveal reveal-delay-${i + 1}" data-project="${esc(p.id)}" role="button" tabindex="0">
          <div class="project-card-media">
            <img class="project-card-img" src="${esc(img.thumb || img.src)}" alt="${esc(t(p.name))}" loading="lazy" width="${img.width}" height="${img.height}">
            <div class="project-card-overlay" aria-hidden="true"></div>
            ${p.video ? `
              <div class="project-card-video-pill" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <span>${isAr ? 'فيديو' : 'FILM'}</span>
              </div>
            ` : ''}
            <div class="project-card-hover-info" aria-hidden="true">
              <p class="project-card-hover-title">${esc(t(p.name))}</p>
              <p class="project-card-hover-meta">${esc(p.agency || '')} &nbsp;·&nbsp; ${esc(p.year || '')}</p>
            </div>
          </div>
          <div class="project-card-info">
            <p class="project-card-eyebrow">
              <span>${esc(t(p.subdisciplineName || p.subdiscipline || ''))}</span>
              <span>${esc(p.year || '')}</span>
            </p>
            <h3 class="project-card-title">${esc(t(p.name))}</h3>
            <p class="project-card-desc">${esc(t(p.description))}</p>
            ${tags.length ? `
              <div class="project-card-tags">
                ${tags.map(tag => `<span class="project-card-tag">${esc(tag)}</span>`).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    return `
      <section class="section" aria-label="${isAr ? 'أبرز الأعمال والمشاريع' : 'Selected Highlights'}">
        <div class="container">
          <div class="eyebrow reveal"><span class="eyebrow-line"></span>${isAr ? 'مشاريع مختارة' : 'SELECTED HIGHLIGHTS'}</div>
          <div class="project-grid" style="margin-top:clamp(32px,5vw,56px);">
            ${cards}
          </div>
        </div>
      </section>
    `;
  }

  /* ── DISCIPLINE SECTION ─────────────────────────────────── */
  function renderDiscipline(main, disciplineId) {
    const isAr = State.lang === 'ar';
    const content = C();
    const disc = (content.disciplines || []).find(d => d.id === disciplineId);
    if (!disc) { navigateTo('home'); return; }

    const allProjects = content.projects || [];
    const projects = allProjects.filter(p => p.discipline === disciplineId);
    const cats = disc.categories || [];

    const isCinematic = disciplineId === 'filmmaking';
    const sectionClass = `discipline-section discipline-section--${disciplineId}`;

    main.innerHTML = `
      <div style="height:var(--nav-h);"></div>
      <section class="${sectionClass}" id="disc-${esc(disciplineId)}">
        <div class="container">
          <div class="discipline-header">
            <div class="discipline-header-start reveal">
              <p class="discipline-number">${esc(disc.number)} —</p>
              <h1 class="discipline-title">${esc(t(disc.title))}</h1>
              <p class="discipline-desc">${esc(t(disc.description))}</p>
            </div>
            ${cats.length > 1 ? `
              <div class="discipline-filter reveal reveal-delay-1" role="group" aria-label="${isAr ? 'تصفية الفئات' : 'Category filter'}">
                ${cats.map(cat => `
                  <button class="filter-btn${cat.id === 'all' ? ' active' : ''}" data-cat="${esc(cat.id)}">
                    ${esc(t(cat.name))}
                  </button>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <div class="project-grid" id="project-grid-${esc(disciplineId)}">
            ${renderProjectCards(projects, isAr, isCinematic)}
          </div>
        </div>
      </section>

      ${renderDisciplineGallery(disciplineId, isAr)}
    `;

    // Filter functionality
    $$('.filter-btn', main).forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.filter-btn', main).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        const filtered = cat === 'all' ? projects : projects.filter(p => p.subdiscipline === cat);
        const grid = $(`#project-grid-${disciplineId}`, main);
        if (grid) grid.innerHTML = renderProjectCards(filtered, isAr, isCinematic);
        attachProjectCardEvents(main);
        observeReveals(main);
      });
    });

    attachProjectCardEvents(main);
    observeReveals(main);
    renderFooter();
  }

  function renderProjectCards(projects, isAr, dark = false) {
    if (!projects.length) {
      return `<p style="grid-column:1/-1;color:var(--muted);padding:40px 0;">${isAr ? 'لا توجد أعمال في هذه الفئة حالياً.' : 'No projects found in this category.'}</p>`;
    }

    return projects.map((p, i) => {
      const img = p.images?.[0];
      const titleColor = dark ? 'color:var(--cream)' : '';
      const tags = (p.deliverables || []).slice(0, 3);
      return `
        <div class="project-card reveal reveal-delay-${(i % 3) + 1}" data-project="${esc(p.id)}" role="button" tabindex="0">
          <div class="project-card-media">
            ${img ? `<img class="project-card-img" src="${esc(img.thumb || img.src)}" alt="${esc(t(p.name))}" loading="lazy" width="${img.width}" height="${img.height}">` : '<div style="width:100%;height:100%;background:var(--surface-alt);"></div>'}
            <div class="project-card-overlay" aria-hidden="true"></div>
            ${p.video ? `
              <div class="project-card-video-pill" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <span>${isAr ? 'فيديو' : 'FILM'}</span>
              </div>
            ` : ''}
            <div class="project-card-hover-info" aria-hidden="true">
              <p class="project-card-hover-title">${esc(t(p.name))}</p>
              <p class="project-card-hover-meta">${esc(p.agency || '')}${p.year ? ' · ' + esc(p.year) : ''}</p>
            </div>
          </div>
          <div class="project-card-info">
            <p class="project-card-eyebrow">
              <span>${esc(t(p.subdisciplineName || p.subdiscipline || ''))}</span>
              <span>${esc(p.year || '')}</span>
            </p>
            <h3 class="project-card-title" style="${titleColor}">${esc(t(p.name))}</h3>
            <p class="project-card-desc">${esc(t(p.description))}</p>
            ${tags.length ? `
              <div class="project-card-tags">
                ${tags.map(tag => `<span class="project-card-tag">${esc(tag)}</span>`).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  function renderDisciplineGallery(disciplineId, isAr) {
    // If photography, render Clove 2 lookbook strip
    if (disciplineId === 'photography') {
      const clove2Images = [
        { src: 'assets/images/clove2/clove2-1.jpg', thumb: 'assets/images/clove2/clove2-1-thumb.jpg', caption: isAr ? 'كلوف — مشروب مبتكر 01' : 'Clove Signature Cocktail 01' },
        { src: 'assets/images/clove2/clove2-2.jpg', thumb: 'assets/images/clove2/clove2-2-thumb.jpg', caption: isAr ? 'كلوف — مشروب مبتكر 02' : 'Clove Signature Cocktail 02' },
        { src: 'assets/images/clove2/clove2-3.jpg', thumb: 'assets/images/clove2/clove2-3-thumb.jpg', caption: isAr ? 'كلوف — مشروب مبتكر 03' : 'Clove Signature Cocktail 03' },
        { src: 'assets/images/clove2/clove2-4.jpg', thumb: 'assets/images/clove2/clove2-4-thumb.jpg', caption: isAr ? 'كلوف — مشروب مبتكر 04' : 'Clove Signature Cocktail 04' },
        { src: 'assets/images/clove2/clove2-5.jpg', thumb: 'assets/images/clove2/clove2-5-thumb.jpg', caption: isAr ? 'كلوف — مشروب مبتكر 05' : 'Clove Signature Cocktail 05' },
        { src: 'assets/images/clove2/clove2-6.jpg', thumb: 'assets/images/clove2/clove2-6-thumb.jpg', caption: isAr ? 'كلوف — مشروب مبتكر 06' : 'Clove Signature Cocktail 06' },
        { src: 'assets/images/clove2/clove2-7.jpg', thumb: 'assets/images/clove2/clove2-7-thumb.jpg', caption: isAr ? 'كلوف — مشروب مبتكر 07' : 'Clove Signature Cocktail 07' },
        { src: 'assets/images/clove2/clove2-8.jpg', thumb: 'assets/images/clove2/clove2-8-thumb.jpg', caption: isAr ? 'كلوف — مشروب مبتكر 08' : 'Clove Signature Cocktail 08' },
      ];

      return `
        <section class="section" style="border-top:1px solid var(--line);">
          <div class="container">
            <div class="eyebrow reveal"><span class="eyebrow-line"></span>${isAr ? 'شريط فوتوغرافي وتجاري — Clove II' : 'CULINARY & BEVERAGE STRIP — CLOVE II'}</div>
            <div class="gallery-strip" style="margin-top:clamp(24px,4vw,44px);">
              ${clove2Images.map((item, i) => `
                <div class="gallery-item${i < 7 ? ' portrait' : ' wide'} reveal reveal-delay-${(i % 4) + 1}"
                     data-lightbox-src="${esc(item.src)}"
                     data-lightbox-caption="${esc(item.caption)}"
                     data-lightbox-group="clove2-strip"
                     role="button" tabindex="0">
                  <img src="${esc(item.thumb)}" alt="${esc(item.caption)}" loading="lazy">
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    }
    return '';
  }

  /* ── CASE STUDY VIEW (DETAILED PROJECT PAGE) ─────────────── */
  function renderCaseStudy(main, projectId) {
    const isAr = State.lang === 'ar';
    const allProjects = C().projects || [];
    const projectIndex = allProjects.findIndex(p => p.id === projectId);
    const project = allProjects[projectIndex];

    if (!project) {
      navigateTo('home');
      return;
    }

    const prevProject = projectIndex > 0 ? allProjects[projectIndex - 1] : allProjects[allProjects.length - 1];
    const nextProject = projectIndex < allProjects.length - 1 ? allProjects[projectIndex + 1] : allProjects[0];

    const heroImg = project.images?.[0];
    const images = project.images || [];
    const thinking = project.thinking || {};
    const deliverables = project.deliverables || [];

    const disciplineNames = {
      'filmmaking':  { en: 'Filmmaking & Cinema', ar: 'صناعة الأفلام والسينما' },
      'photography': { en: 'Still Photography',    ar: 'التصوير الفوتوغرافي' },
      'design':      { en: 'Graphic Design',       ar: 'التصميم الجرافيكي' }
    };
    const parentName = disciplineNames[project.discipline] || { en: 'Work', ar: 'الأعمال' };

    main.innerHTML = `
      <div style="height:var(--nav-h);"></div>
      <article class="case-study" id="case-study-${esc(project.id)}">
        <div class="container">

          <!-- BACK NAVIGATION -->
          <div class="case-study-back-wrap reveal">
            <button class="case-study-back" data-nav="${esc(project.discipline)}">
              <span class="case-study-back-arrow">←</span>
              <span>${isAr ? `العودة إلى ${t(parentName)}` : `Back to ${t(parentName)}`}</span>
            </button>
          </div>

          <!-- CINEMATIC HERO -->
          ${heroImg ? `
            <div class="case-study-hero reveal">
              <img src="${esc(heroImg.src)}" alt="${esc(t(project.name))}" loading="eager" width="${heroImg.width}" height="${heroImg.height}">
              <div class="hero-brackets" aria-hidden="true"></div>
            </div>
          ` : ''}

          <!-- HEADER & LEAD -->
          <header class="case-study-header">
            <div class="case-study-eyebrow reveal">
              <span class="eyebrow-line"></span>
              <span>${esc(t(project.subdisciplineName || project.subdiscipline))} &nbsp;·&nbsp; ${esc(project.year || '')}</span>
            </div>
            <h1 class="case-study-title reveal reveal-delay-1">${esc(t(project.name))}</h1>
            <p class="case-study-lead reveal reveal-delay-2">${esc(t(project.description))}</p>

            <!-- METADATA GRID -->
            <div class="case-study-meta-grid reveal reveal-delay-3">
              <div class="case-study-meta-col">
                <p class="case-study-meta-col-label">${isAr ? 'العميل / الجهة' : 'Client / Agency'}</p>
                <p class="case-study-meta-col-value">${esc(project.client || project.agency || '—')}</p>
              </div>
              <div class="case-study-meta-col">
                <p class="case-study-meta-col-label">${isAr ? 'الدور والمسؤولية' : 'Role & Scope'}</p>
                <p class="case-study-meta-col-value">${esc(t(project.role) || '—')}</p>
              </div>
              <div class="case-study-meta-col">
                <p class="case-study-meta-col-label">${isAr ? 'السنة' : 'Year'}</p>
                <p class="case-study-meta-col-value">${esc(project.year || '—')}</p>
              </div>
              <div class="case-study-meta-col">
                <p class="case-study-meta-col-label">${isAr ? 'التخصص' : 'Discipline'}</p>
                <p class="case-study-meta-col-value">${esc(t(parentName))}</p>
              </div>
            </div>

            ${deliverables.length ? `
              <div class="case-study-tags reveal reveal-delay-4">
                ${deliverables.map(tag => `<span class="case-study-tag">${esc(tag)}</span>`).join('')}
              </div>
            ` : ''}

            ${project.video ? `
              <div class="case-study-video-cta reveal reveal-delay-4" style="margin: 24px 0 8px;">
                <button class="btn btn-secondary hero-film-btn case-study-play-btn" data-video="${esc(project.video)}">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  <span>${project.videoLabel ? (isAr ? project.videoLabel.ar : project.videoLabel.en) : (isAr ? 'مشاهدة الفيديو' : 'Watch Video')}</span>
                </button>
              </div>
            ` : ''}
          </header>

          <!-- THE THINKING BEHIND THE WORK -->
          ${(thinking.challenge || thinking.decisions || thinking.outcome) ? `
            <section class="thinking-section" aria-label="${isAr ? 'فلسفة الكادر والقرار البصري' : 'The Thinking Behind the Work'}">
              <div class="eyebrow reveal">
                <span class="eyebrow-line"></span>
                ${isAr ? 'فلسفة الكادر والقرار البصري' : 'THE THINKING BEHIND THE WORK'}
              </div>
              <div class="thinking-grid">
                ${thinking.challenge ? `
                  <div class="thinking-card reveal reveal-delay-1">
                    <p class="thinking-card-number">01 —</p>
                    <h3 class="thinking-card-title">${isAr ? 'التحدي الإبداعي' : 'The Creative Challenge'}</h3>
                    <p class="thinking-card-body">${esc(t(thinking.challenge))}</p>
                  </div>
                ` : ''}
                ${thinking.decisions ? `
                  <div class="thinking-card reveal reveal-delay-2">
                    <p class="thinking-card-number">02 —</p>
                    <h3 class="thinking-card-title">${isAr ? 'القرارات البصرية والتنفيذية' : 'Key Visual Decisions'}</h3>
                    <p class="thinking-card-body">${esc(t(thinking.decisions))}</p>
                  </div>
                ` : ''}
                ${thinking.outcome ? `
                  <div class="thinking-card reveal reveal-delay-3">
                    <p class="thinking-card-number">03 —</p>
                    <h3 class="thinking-card-title">${isAr ? 'النتيجة والأثر' : 'Outcome & Impact'}</h3>
                    <p class="thinking-card-body">${esc(t(thinking.outcome))}</p>
                  </div>
                ` : ''}
              </div>
            </section>
          ` : ''}

          <!-- VISUAL STILLS & GALLERY -->
          ${images.length > 0 ? `
            <section class="case-study-gallery-section" aria-label="${isAr ? 'معرض المشاهد واللقطات' : 'Visual Gallery'}">
              <div class="eyebrow reveal">
                <span class="eyebrow-line"></span>
                ${isAr ? 'معرض المشاهد واللقطات' : 'VISUAL STILLS & ARTIFACTS'}
              </div>
              <div class="case-study-gallery-grid">
                ${images.map((img, i) => `
                  <div class="case-study-gallery-item reveal reveal-delay-${(i % 3) + 1}"
                       data-lightbox-src="${esc(img.src)}"
                       data-lightbox-caption="${esc(img.alt || t(project.name))}"
                       data-lightbox-group="project-${esc(project.id)}"
                       role="button" tabindex="0">
                    <img src="${esc(img.src)}" alt="${esc(img.alt || t(project.name))}" loading="lazy">
                    <div class="item-hover-hint" aria-hidden="true">${isAr ? 'عرض بالحجم الكامل ✦' : 'Expand Frame ✦'}</div>
                  </div>
                `).join('')}
              </div>
            </section>
          ` : ''}

          <!-- PROJECT NAVIGATION FOOTER -->
          <nav class="case-study-nav reveal" aria-label="${isAr ? 'التنقل بين المشاريع' : 'Project Navigation'}">
            <button class="case-study-nav-btn prev" data-nav="project/${esc(prevProject.id)}">
              <span class="case-study-nav-dir">
                <span>←</span>
                <span>${isAr ? 'المشروع السابق' : 'Previous Project'}</span>
              </span>
              <span class="case-study-nav-title">${esc(t(prevProject.name))}</span>
            </button>
            <button class="case-study-nav-btn next" data-nav="project/${esc(nextProject.id)}">
              <span class="case-study-nav-dir">
                <span>${isAr ? 'المشروع التالي' : 'Next Project'}</span>
                <span>→</span>
              </span>
              <span class="case-study-nav-title">${esc(t(nextProject.name))}</span>
            </button>
          </nav>

        </div>
      </article>
    `;

    attachNavClicks(main);
    observeReveals(main);
    renderFooter();
  }

  /* ── ABOUT SECTION ──────────────────────────────────────── */
  function renderAbout(main) {
    const isAr = State.lang === 'ar';
    const content = C();

    main.innerHTML = `
      <div style="height:var(--nav-h);"></div>
      <section class="about-section">
        <div class="container">
          <div class="eyebrow reveal"><span class="eyebrow-line"></span>${isAr ? 'عن يوسف ورد' : 'BIOGRAPHY & PROFILE'}</div>
          <div class="about-grid" style="margin-top:clamp(40px,6vw,72px);">
            <div class="about-portrait-wrap reveal">
              <img
                class="about-portrait"
                src="${esc(content.portrait)}"
                alt="${isAr ? 'يوسف ورد' : 'Youssef Ward'}"
                loading="lazy"
              >
            </div>
            <div class="about-content">
              <h1 class="section-title reveal" style="margin-bottom:8px;">
                ${isAr ? 'يوسف ورد' : 'Youssef Ward'}
              </h1>
              <p class="eyebrow reveal" style="color:var(--red);margin-bottom:20px;">
                ${isAr ? 'مصور سينمائي وجرافيك ديزاينر' : 'Cinematographer & Graphic Designer'}
              </p>
              <p class="about-bio reveal reveal-delay-1">${esc(t(content.bio))}</p>

              <div class="about-meta reveal reveal-delay-2">
                <div class="about-meta-item">
                  <p class="about-meta-item-label">${isAr ? 'المقر' : 'Location'}</p>
                  <p class="about-meta-item-value">${isAr ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
                </div>
                <div class="about-meta-item">
                  <p class="about-meta-item-label">${isAr ? 'التعليم الأكاديمي' : 'Education'}</p>
                  <p class="about-meta-item-value">${isAr ? 'كلية الفنون التطبيقية' : 'Faculty of Applied Arts'}</p>
                </div>
                <div class="about-meta-item">
                  <p class="about-meta-item-label">${isAr ? 'التخصصات' : 'Focus'}</p>
                  <p class="about-meta-item-value">${isAr ? 'سينما وإضاءة · تصوير فوتوغرافي · هويات وتصميم' : 'Cinematography & Light · Stills · Brand Systems'}</p>
                </div>
                <div class="about-meta-item">
                  <p class="about-meta-item-label">${isAr ? 'الحالة الحالية' : 'Current Status'}</p>
                  <p class="about-meta-item-value" style="color:var(--red);">${isAr ? 'متاح للتعاون ✦' : 'Open to Opportunities ✦'}</p>
                </div>
              </div>

              <div class="about-actions reveal reveal-delay-3">
                <a href="${esc(content.cv)}" download class="btn btn-primary">${isAr ? 'تحميل السيرة الذاتية (CV)' : 'Download Curriculum Vitae'}</a>
                <button class="btn btn-outline" data-nav="contact">${isAr ? 'تواصل معي' : 'Get In Touch'}</button>
              </div>

              <div class="about-socials reveal reveal-delay-4">
                <a href="${esc(content.behance)}" target="_blank" rel="noopener" class="social-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H18.456c.29 2.017 2.023 2.136 3.058 2.136 1.065 0 1.872-.569 2.212-1.107zm-5.3-3.5c-.162-1.226-1.051-1.83-2.203-1.83-1.231 0-2.042.676-2.28 1.83h4.483z"/></svg>
                  Behance
                </a>
                <a href="${esc(content.linkedin)}" target="_blank" rel="noopener" class="social-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
                <a href="${esc(content.instagram)}" target="_blank" rel="noopener" class="social-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                  Instagram
                </a>
                <a href="${esc(content.vimeo)}" target="_blank" rel="noopener" class="social-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.396 7.164c-.093 2.026-1.507 4.799-4.245 8.32C15.322 19.04 12.93 21 10.97 21c-1.214 0-2.24-1.119-3.079-3.359l-1.68-6.173C5.57 9.228 4.927 8.108 4.234 8.108c-.154 0-.693.324-1.616.972L1.5 7.787c1.017-.894 2.018-1.788 3.003-2.682 1.353-1.169 2.369-1.784 3.047-1.845 1.601-.154 2.587.94 2.956 3.28.399 2.523.676 4.094.832 4.709.462 2.102.969 3.151 1.523 3.151.431 0 1.078-.681 1.942-2.045.862-1.364 1.324-2.403 1.385-3.115.123-1.178-.34-1.769-1.386-1.769-.493 0-1.001.115-1.523.34 1.012-3.31 2.945-4.92 5.8-4.83 2.117.061 3.114 1.434 2.917 4.118z"/></svg>
                  Vimeo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    attachNavClicks(main);
    observeReveals(main);
    renderFooter();
  }

  /* ── CONTACT SECTION ────────────────────────────────────── */
  function renderContact(main) {
    const isAr = State.lang === 'ar';
    const content = C();

    main.innerHTML = `
      <div style="height:var(--nav-h);"></div>
      <section class="contact-section" style="min-height:calc(100dvh - var(--nav-h));display:flex;align-items:center;">
        <div class="container" style="position:relative;z-index:1;width:100%;">
          <div class="eyebrow reveal" style="color:rgba(245,244,238,0.4);justify-content:center;">
            <span class="eyebrow-line"></span>
            ${isAr ? 'تواصل معي' : "GET IN TOUCH"}
          </div>
          <h1 class="section-title reveal" style="color:var(--cream);text-align:center;margin:20px 0 12px;">
            ${isAr ? 'هل لديك مشروع أو رؤية تريد تجسيدها؟' : 'Have a creative project or vision?'}
          </h1>
          <p class="reveal" style="text-align:center;color:rgba(245,244,238,0.4);font-size:var(--small);letter-spacing:0.15em;text-transform:uppercase;margin-bottom:32px;">
            ${isAr ? 'القاهرة، مصر · متاح للعمل الميداني والمشاريع الدولية' : 'Cairo, Egypt · Available for field production & global projects'}
          </p>
          <a href="mailto:${esc(content.email)}" class="contact-email reveal">${esc(content.email)}</a>
          <div class="contact-socials reveal reveal-delay-1">
            <a href="${esc(content.behance)}" target="_blank" rel="noopener" class="contact-social">Behance</a>
            <a href="${esc(content.linkedin)}" target="_blank" rel="noopener" class="contact-social">LinkedIn</a>
            <a href="${esc(content.instagram)}" target="_blank" rel="noopener" class="contact-social">Instagram</a>
            <a href="${esc(content.vimeo)}" target="_blank" rel="noopener" class="contact-social">Vimeo</a>
          </div>
        </div>
      </section>
    `;

    observeReveals(main);
    renderFooter();
  }

  /* ── FOOTER ─────────────────────────────────────────────── */
  function renderFooter() {
    const footer = $('#footer');
    if (!footer) return;
    const isAr = State.lang === 'ar';
    const year = new Date().getFullYear();
    footer.innerHTML = `
      <div class="footer-inner">
        <p class="footer-copy">© ${year} Youssef Ward. ${isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
        <p class="footer-mark">YW — ${isAr ? 'عقل بصري واحد · تعبيرات متعددة' : 'ONE VISUAL MIND · MULTIPLE EXPRESSIONS'}</p>
      </div>
    `;
  }

  /* ── EVENT ATTACHERS & DELEGATION ────────────────────────── */
  function initDelegatedEvents() {
    document.addEventListener('click', (e) => {
      const el = toElement(e.target);
      if (!el) return;
      if (el.closest('[data-lightbox-src]') || el.closest('#hero-film-btn') || el.closest('.video-modal-close') || el.closest('.lightbox-close') || el.closest('.lightbox-prev') || el.closest('.lightbox-next')) {
        return;
      }
      const card = el.closest('.project-card[data-project]');
      if (card) {
        navigateTo(`project/${card.dataset.project}`);
        return;
      }
      const navEl = el.closest('[data-nav]');
      if (navEl) {
        e.preventDefault();
        navigateTo(navEl.dataset.nav);
        return;
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const el = toElement(e.target);
        if (!el) return;
        const card = el.closest('.project-card[data-project]');
        if (card && document.activeElement === card) {
          e.preventDefault();
          navigateTo(`project/${card.dataset.project}`);
          return;
        }
        const navEl = el.closest('[data-nav]');
        if (navEl && document.activeElement === navEl) {
          e.preventDefault();
          navigateTo(navEl.dataset.nav);
          return;
        }
      }
    });
  }

  function attachNavClicks(container = document) {
    // Handled globally by initDelegatedEvents to prevent duplicate listeners
  }

  function attachProjectCardEvents(container = document) {
    // Handled globally by initDelegatedEvents to prevent duplicate listeners
  }

  /* ── LIGHTBOX (EXPANDED STILLS) ─────────────────────────── */
  let lastLightboxTrigger = null;

  function openLightbox(items, startIndex = 0) {
    const lb = $('#lightbox');
    if (!lb || !items || !items.length) return;
    lastLightboxTrigger = document.activeElement;
    State.lightbox.items = items;
    State.lightbox.index = startIndex;
    updateLightboxSlide();
    lb.showModal();
    document.body.style.overflow = 'hidden';
    lb.focus();
  }

  function closeLightbox() {
    const lb = $('#lightbox');
    if (!lb) return;
    try { lb.close(); } catch (e) {}
    document.body.style.overflow = '';
    if (lastLightboxTrigger && typeof lastLightboxTrigger.focus === 'function') {
      lastLightboxTrigger.focus();
      lastLightboxTrigger = null;
    }
  }

  function updateLightboxSlide() {
    const lb = $('#lightbox');
    const { items, index } = State.lightbox;
    const item = items[index];
    if (!item || !lb) return;

    const img = lb.querySelector('img');
    const caption = lb.querySelector('figcaption');
    const counter = lb.querySelector('.lightbox-counter');

    if (img) { img.src = item.src; img.alt = item.caption || ''; }
    if (caption) caption.textContent = item.caption || '';
    if (counter) counter.textContent = `${index + 1} / ${items.length}`;
  }

  function initLightbox() {
    const lb = $('#lightbox');
    if (!lb) return;

    lb.addEventListener('close', () => {
      document.body.style.overflow = '';
      if (lastLightboxTrigger && typeof lastLightboxTrigger.focus === 'function') {
        lastLightboxTrigger.focus();
        lastLightboxTrigger = null;
      }
    });

    lb.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
    lb.querySelector('.lightbox-prev')?.addEventListener('click', () => {
      const { items, index } = State.lightbox;
      State.lightbox.index = (index - 1 + items.length) % items.length;
      updateLightboxSlide();
    });
    lb.querySelector('.lightbox-next')?.addEventListener('click', () => {
      const { items, index } = State.lightbox;
      State.lightbox.index = (index + 1) % items.length;
      updateLightboxSlide();
    });

    lb.addEventListener('click', (e) => {
      if (e.target === lb) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lb.open) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const dir = (State.lang === 'ar' ? (e.key === 'ArrowLeft' ? 1 : -1) : (e.key === 'ArrowRight' ? 1 : -1));
        const { items, index } = State.lightbox;
        State.lightbox.index = (index + dir + items.length) % items.length;
        updateLightboxSlide();
      }
    });

    // Delegated click for lightbox triggers
    document.addEventListener('click', (e) => {
      const el = toElement(e.target);
      const item = el ? el.closest('[data-lightbox-src]') : null;
      if (!item) return;

      const group = item.dataset.lightboxGroup;
      const allItems = group ? $$(`[data-lightbox-group="${group}"]`) : [item];
      const items = allItems.map(el => ({
        src: el.dataset.lightboxSrc,
        caption: el.dataset.lightboxCaption || ''
      }));
      const idx = allItems.indexOf(item);
      openLightbox(items, Math.max(0, idx));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const el = toElement(e.target);
        const item = el ? el.closest('[data-lightbox-src]') : null;
        if (item && document.activeElement === item) {
          e.preventDefault();
          item.click();
        }
      }
    });
  }

  /* ── VIDEO MODAL (VIMEO EMBED & NATIVE HTML5 CINEMA PLAYER) ── */
  let lastVideoTrigger = null;

  function openVideoModal(videoUrl) {
    const modal = $('#video-modal');
    const iframe = $('#video-modal-iframe');
    const player = $('#video-modal-player');
    if (!modal) return;
    lastVideoTrigger = document.activeElement;

    const isDirectVideo = videoUrl.endsWith('.mp4') || videoUrl.endsWith('.webm') || videoUrl.includes('assets/videos/');

    if (isDirectVideo) {
      if (iframe) {
        iframe.src = '';
        iframe.style.display = 'none';
      }
      if (player) {
        player.src = videoUrl;
        player.style.display = 'block';
        player.play().catch(() => {});
      }
    } else {
      if (player) {
        try { player.pause(); } catch (e) {}
        player.src = '';
        player.style.display = 'none';
      }
      if (iframe) {
        let src = videoUrl;
        if (src.includes('vimeo.com/') && !src.includes('player.vimeo.com')) {
          const match = src.match(/vimeo\.com\/(\d+)/);
          if (match) {
            src = `https://player.vimeo.com/video/${match[1]}?autoplay=1&color=bc171b&title=0&byline=0&portrait=0`;
          }
        }
        iframe.src = src;
        iframe.style.display = 'block';
      }
    }

    modal.showModal();
    document.body.style.overflow = 'hidden';
    modal.focus();
  }

  function closeVideoModal() {
    const modal = $('#video-modal');
    const iframe = $('#video-modal-iframe');
    const player = $('#video-modal-player');
    if (!modal) return;
    try { modal.close(); } catch (e) {}
    if (iframe) {
      iframe.src = '';
      iframe.style.display = 'none';
    }
    if (player) {
      try { player.pause(); } catch (e) {}
      player.src = '';
      player.style.display = 'none';
    }
    document.body.style.overflow = '';
    if (lastVideoTrigger && typeof lastVideoTrigger.focus === 'function') {
      lastVideoTrigger.focus();
      lastVideoTrigger = null;
    }
  }

  function initVideoModal() {
    const modal = $('#video-modal');
    if (!modal) return;

    modal.addEventListener('close', () => {
      closeVideoModal();
    });

    $('#video-modal-close')?.addEventListener('click', closeVideoModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeVideoModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.hasAttribute('open')) {
        closeVideoModal();
      }
    });

    document.addEventListener('click', (e) => {
      const el = toElement(e.target);
      const btn = el ? el.closest('[data-video], .hero-film-btn, .case-study-play-btn') : null;
      if (btn) {
        e.preventDefault();
        const url = btn.dataset.video || 'https://player.vimeo.com/video/1239369594?autoplay=1&color=bc171b&title=0&byline=0&portrait=0';
        openVideoModal(url);
      }
    });
  }

  /* ── INITIALIZATION ─────────────────────────────────────── */
  function init() {
    if (!window.CONTENT) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
        return;
      }
      console.warn('Youssef Ward Portfolio: window.CONTENT not yet available, deferring init.');
      window.addEventListener('load', () => {
        if (window.CONTENT && !document.querySelector('#header .nav')) {
          init();
        }
      }, { once: true });
      return;
    }

    // Language (Default English)
    const savedLang = getSavedLang();
    State.lang = savedLang;
    const html = document.documentElement;
    html.lang = savedLang;
    html.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    updateModalLabels(savedLang);

    // Theme
    const savedTheme = getSavedTheme();
    setTheme(savedTheme);

    // Initial Route from Hash
    State.route = parseHash();

    // Setup Systems
    initCursor();
    initScroll();
    initReveal();
    initLightbox();
    initVideoModal();
    initDelegatedEvents();

    // Render Nav
    renderNav();

    // Render Page
    renderCurrentRoute();

    // Listen for back/forward navigation
    window.addEventListener('hashchange', handleHashChange);
  }

  /* ── DOM READY ──────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
