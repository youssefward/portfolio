/* ==========================================================================
   YOUSSEF WARD — Portfolio Application Engine (v4.2 Frame Line Edition)
   Pure Vanilla JS · Zero Dependencies · Fully Responsive & Bilingual
   Strictly driven by upload/ directory via content.js
   ========================================================================== */

(function () {
  'use strict';

  var C = window.CONTENT;
  if (!C) return;
  if (!Array.isArray(C.projects) && C.projects && Array.isArray(C.projects.value)) {
    C.projects = C.projects.value;
  }

  /* ---------------- Config (Driven strictly by upload/ via content.js) ---------------- */
  var HERO_FRAMES = (C.heroFrames && C.heroFrames.length) ? C.heroFrames : [
    'upload/7awdet/IMG_0652.JPG',
    'upload/choice/_K4A6005.JPG',
    'upload/Cairo kapul/DSC07201.JPG',
    'upload/sahranen/_MG_3623.JPG',
    'upload/kojak/IMG_7396.JPG',
    'upload/food/2H4A2822.JPG'
  ];

  var firstFilmProj = C.projects.find(function (p) { return p.discipline === 'filmmaking' && p.images && p.images.length; }) || C.projects[0];
  var REEL_POSTER = (firstFilmProj && firstFilmProj.images[0]) ? firstFilmProj.images[0].src : 'upload/choice/5K4A5867.JPG';
  var ABOUT_IMAGE = C.cover || 'upload/cover.jpg';
  var PORTRAIT_SRC = C.portrait || 'upload/portrait.jpg';

  var ROW_PATTERN = [[7, 5], [4, 4, 4], [5, 7], [6, 6]];
  var FILL = { 1: [12], 2: [6, 6] };

  /* ---------------- Sound, Cursor & View State ---------------- */
  var viewMode = 'masonry'; // 'masonry' | 'filmstrip'
  var sfxEnabled = true;
  var audioCtx = null;

  var DISCIPLINE_AMBIENT = {
    filmmaking: { rgb: [212, 180, 131], hex: '#D4B483', spec: 'ANAMORPHIC 2.39:1 · 24 FPS · LOW-KEY DRAMA' },
    photography: { rgb: [142, 168, 178], hex: '#8EA8B2', spec: 'MEDIUM FORMAT · HIGH CONTRAST · LIVE SETS' },
    design: { rgb: [217, 107, 67], hex: '#D96B43', spec: 'SWISS EDITORIAL · ARABIC CALLIGRAPHY · KEY ART' }
  };

  function setAmbient(disciplineId) {
    var cfg = DISCIPLINE_AMBIENT[disciplineId] || DISCIPLINE_AMBIENT.filmmaking;
    document.documentElement.style.setProperty('--ambient-r', cfg.rgb[0]);
    document.documentElement.style.setProperty('--ambient-g', cfg.rgb[1]);
    document.documentElement.style.setProperty('--ambient-b', cfg.rgb[2]);
  }

  function playTick(type) {
    if (!sfxEnabled) return;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      var now = audioCtx.currentTime;
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(type === 'shutter' ? 180 : (type === 'pop' ? 520 : 380), now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.035);
      gain.gain.setValueAtTime(0.025, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {}
  }

  /* ---------------- Interface Copy (Bilingual) ---------------- */
  var T = {
    en: {
      skip: 'Skip to content', menu: 'Menu',
      nav: { work: 'Work', films: 'Films & Motion', about: 'About', contact: 'Contact' },
      langBtn: 'عربي', langLabel: 'اقرأ الموقع بالعربية',
      viewWork: 'View work', watchReel: 'Watch showreel',
      nowShowing: 'Now showing', frame: 'Frame', openProject: 'Open project',
      based: 'Based in',
      workTitle: 'Selected Works',
      workNote: function (n) { return n + ' projects across film, photography and design.'; },
      all: 'All', short: { filmmaking: 'Filmmaking', photography: 'Photography', design: 'Graphic Design' },
      projects: function (n) { return n === 1 ? '1 project' : n + ' projects'; },
      frames: function (n) { return n + ' frames'; },
      explore: 'Explore',
      filmsTitle: 'Films & Cinema Motion',
      filmsSub: 'Directed, shot, and crafted for the screen — original film studies and high-end commercials.',
      filmsBadge: 'CINEMA & MOTION SHOWCASE // DIRECTED & SHOT',
      playFilm: 'Play Video',
      watchProject: 'Project Stills & Details',
      reelTitle: 'Showreel & Visual Motion', reelSub: 'Camera movement, dynamic lighting and rhythmic editing',
      play: 'Play showreel',
      aboutTitle: 'About Youssef Ward',
      aboutCap: 'Youssef Ward is a multidisciplinary designer, photographer, and visual artist based in Cairo, Egypt. With a background in Applied Arts and six years of experience in cinema and television productions, he brings a cinematic perspective to design, image-making, and art direction.',
      cv: 'Download CV', pdf: 'Portfolio PDF',
      contactTitle: 'Project Inquiry & Collaboration',
      contactLead: 'Available for cinematography, drama camera departments, and strategic brand identity systems.',
      copy: 'Copy email', copied: 'Email copied',
      allWork: 'All Work',
      spec: { year: 'Year', role: 'Role', client: 'Client', production: 'Production', deliverables: 'Deliverables' },
      approach: { challenge: 'Challenge', decisions: 'Visual Decisions', outcome: 'Outcome' },
      watch: 'Watch Film / Video',
      prev: 'Previous Project', next: 'Next Project',
      close: 'Close', prevImg: 'Previous Image', nextImg: 'Next Image',
      openVimeo: 'Open on Vimeo', vimeoHint: 'Player not loading?',
      viewGrid: 'Masonry Grid', viewFilmstrip: 'Horizontal Filmstrip',
      sfxOn: 'SFX: ON', sfxMute: 'SFX: MUTE',
      avail: 'Available for Projects',
      sendBrief: 'Send Project Brief', briefSent: 'Inquiry received. Thank you!',
      emptyFilter: 'No projects in this category yet.'
    },
    ar: {
      skip: 'انتقل إلى المحتوى', menu: 'القائمة',
      nav: { work: 'الأعمال', films: 'السينما والفيديو', about: 'نبذة', contact: 'تواصل' },
      langBtn: 'English', langLabel: 'Read the site in English',
      viewWork: 'شاهد الأعمال', watchReel: 'شاهد الشوريل',
      nowShowing: 'على الشاشة', frame: 'كادر', openProject: 'افتح المشروع',
      based: 'المقر',
      workTitle: 'أعمال مختارة',
      workNote: function (n) { return n + ' مشروعاً موزعاً بين السينما والفوتوغرافيا والتصميم.'; },
      all: 'الكل', short: { filmmaking: 'صناعة الأفلام', photography: 'فوتوغرافيا', design: 'تصميم جرافيكي' },
      projects: function (n) { return n === 1 ? 'مشروع واحد' : (n === 2 ? 'مشروعان' : n + ' مشاريع'); },
      frames: function (n) { return n + ' كادر'; },
      explore: 'استكشف',
      filmsTitle: 'الأفلام والأعمال السينمائية',
      filmsSub: 'أعمال سينمائية وإعلانية أصلية — من حركة الكاميرا وإدارة الإضاءة إلى الإيقاع البصري.',
      filmsBadge: 'أفلام وسرد سينمائي // إخراج وتصوير بصري',
      playFilm: 'تشغيل الفيديو',
      watchProject: 'لقطات وتفاصيل العمل',
      reelTitle: 'استعراض الحركة والسينما (Showreel)', reelSub: 'حركة الكاميرا وتوزيع الإضاءة والمونتاج الإيقاعي',
      play: 'تشغيل الشوريل',
      aboutTitle: 'عن يوسف ورد',
      aboutCap: 'يوسف ورد مصمم متعدد التخصصات ومصور وفنان بصري، يقيم في القاهرة، مصر. بخلفية أكاديمية في الفنون التطبيقية، وست سنوات من الخبرة في الإنتاجات السينمائية والتليفزيونية، يجمع في أعماله بين الرؤية السينمائية والتصميم وصناعة الصورة والتوجيه الفني.',
      cv: 'تحميل السيرة الذاتية', pdf: 'البورتفوليو PDF',
      contactTitle: 'بدء مشروع وتواصل مباشر',
      contactLead: 'متاح لإدارة وتصوير الأعمال السينمائية والدراما التلفزيونية وبناء الهويات المؤسسية.',
      copy: 'نسخ البريد', copied: 'تم نسخ البريد',
      allWork: 'كل الأعمال',
      spec: { year: 'السنة', role: 'الدور', client: 'العميل', production: 'جهة الإنتاج', deliverables: 'المخرجات' },
      approach: { challenge: 'التحدي', decisions: 'القرارات البصرية', outcome: 'النتيجة' },
      watch: 'مشاهدة العمل (فيديو)',
      prev: 'المشروع السابق', next: 'المشروع التالي',
      close: 'إغلاق', prevImg: 'الصورة السابقة', nextImg: 'الصورة التالية',
      openVimeo: 'افتح على Vimeo', vimeoHint: 'المشغل لا يعمل؟',
      viewGrid: 'شبكة حرة (Grid)', viewFilmstrip: 'شريط سينمائي (Filmstrip)',
      sfxOn: 'الصوت: مفعّل', sfxMute: 'الصوت: صامت',
      avail: 'متاح للمشاريع',
      sendBrief: 'إرسال تفاصيل المشروع', briefSent: 'تم استلام طلبك بنجاح، شكراً لك!',
      emptyFilter: 'لا توجد مشاريع في هذا التصنيف حالياً.'
    }
  };

  /* ---------------- SVG Icons ---------------- */
  var ICON = {
    left: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
    right: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    play: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    grid: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
    filmstrip: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>',
    download: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>'
  };

  var corners =
    '<div class="frame-corners" aria-hidden="true">' +
      '<span class="corner c-tl"></span><span class="corner c-tr"></span>' +
      '<span class="corner c-bl"></span><span class="corner c-br"></span>' +
    '</div>';

  /* ---------------- State ---------------- */
  var lang = (function () {
    var stored = localStorage.getItem('yw_lang') || localStorage.getItem('yw-lang');
    if (stored === 'ar' || stored === 'en') return stored;
    return (navigator.language || '').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en';
  })();

  var filter = { d: 'all', s: 'all' };
  var currentRoute = { type: 'home', id: 'work' };
  var heroIndex = 0;
  var heroTimer = null;
  var currentLb = { images: [], index: 0 };
  var lastFocus = null;

  /* ---------------- Helpers ---------------- */
  function t() { return T[lang]; }
  function L(val) {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[lang] || val.ar || val.en || '';
  }
  function renderBioParagraphs(val) {
    if (!val) return '';
    if (Array.isArray(val)) {
      return val.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
    }
    if (typeof val === 'object') {
      var loc = val[lang] || val.ar || val.en || [];
      if (Array.isArray(loc)) {
        return loc.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
      }
      return '<p>' + esc(loc) + '</p>';
    }
    return '<p>' + esc(val) + '</p>';
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function portrait(img) {
    return img && img.height > img.width;
  }
  function cover(p) {
    return (p && p.images && p.images[0]) ? p.images[0] : { src: '', width: 1920, height: 1080, alt: { en: '', ar: '' } };
  }
  function discipline(id) {
    return C.disciplines.find(function (d) { return d.id === id; });
  }
  function splitName(p) {
    var full = L(p.name);
    var parts = full.split(' — ');
    return { title: parts[0] || full, sub: parts[1] || L(p.subtitle) };
  }
  function vimeoId(url) {
    if (!url) return '';
    var m = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)/);
    return m ? m[3] : '';
  }

  function imgTag(img, opts) {
    if (!img || !img.src) return '';
    opts = opts || {};
    var alt = esc(L(img.alt));
    var loading = opts.eager ? 'eager' : 'lazy';
    return '<img src="' + esc(img.src) + '" alt="' + alt + '" width="' + (img.width || 1920) + '" height="' + (img.height || 1080) + '" loading="' + loading + '">';
  }

  function specRow(dt, ddHtml) {
    if (!ddHtml) return '';
    return '<div class="spec-row"><dt>' + esc(dt) + '</dt><dd>' + ddHtml + '</dd></div>';
  }

  /* ---------------- Ambient Cursor Pill ---------------- */
  function initCursor() {
    var cursor = document.getElementById('viewfinder-cursor');
    if (!cursor) return;
    var label = document.getElementById('cursor-label');

    window.addEventListener('mousemove', function (e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
      document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
    });

    document.addEventListener('mouseover', function (e) {
      var card = e.target.closest('.card, .gallery figure, .hero-frame, .reel-card, .cinema-card, .cinema-frame');
      if (card) {
        cursor.classList.add('is-active');
        if (label) {
          if (card.matches('.reel-card, .cinema-card, .cinema-frame')) label.textContent = 'PLAY';
          else if (card.matches('.hero-frame')) label.textContent = 'EXPLORE';
          else label.textContent = 'VIEW';
        }
      } else {
        cursor.classList.remove('is-active');
      }
    });
  }

  /* ---------------- Preloader ---------------- */
  function initPreloader() {
    var pre = document.getElementById('preloader');
    if (!pre) return;
    if (window.location.search.indexOf('nopreload') !== -1 || window.location.hash.indexOf('nopreload') !== -1) {
      pre.style.display = 'none';
      return;
    }
    var tcEl = document.getElementById('preloader-tc');
    var skipBtn = document.getElementById('skip-preloader');
    var frame = 0;

    var timer = setInterval(function () {
      frame += 3;
      var sec = Math.floor(frame / 24);
      var ff = frame % 24;
      if (tcEl) tcEl.textContent = '00:00:' + (sec < 10 ? '0' : '') + sec + ':' + (ff < 10 ? '0' : '') + ff;
      if (frame >= 36) {
        clearInterval(timer);
        dismiss();
      }
    }, 40);

    function dismiss() {
      clearInterval(timer);
      if (pre.classList.contains('is-open')) return;
      playTick('shutter');
      pre.classList.add('is-open');
      setTimeout(function () {
        pre.classList.add('is-done');
        pre.style.display = 'none';
      }, 700);
    }

    if (skipBtn) skipBtn.onclick = dismiss;
    setTimeout(dismiss, 1200);
  }

  /* ---------------- Shell (Header & Footer) ---------------- */
  function updateMetadata() {
    var title = lang === 'ar'
      ? 'يوسف ورد — مصمم متعدد التخصصات ومخرج فني'
      : 'Youssef Ward — Multidisciplinary Designer & Art Director';
    document.title = title;

    var bioText = (C.shortBio && L(C.shortBio)) || (lang === 'ar' ? 'يوسف ورد مصمم متعدد التخصصات ومصور وفنان بصري، يقيم في القاهرة، مصر. بخلفية أكاديمية في الفنون التطبيقية، وست سنوات من الخبرة في الإنتاجات السينمائية والتليفزيونية، يجمع في أعماله بين الرؤية السينمائية والتصميم وصناعة الصورة والتوجيه الفني.' : 'Youssef Ward is a multidisciplinary designer, photographer, and visual artist based in Cairo, Egypt. With a background in Applied Arts and six years of experience in cinema and television productions, he brings a cinematic perspective to design, image-making, and art direction.');

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', bioText);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', bioText);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
  }

  function renderShell() {
    var tx = t();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    updateMetadata();

    document.getElementById('header').innerHTML =
      '<div class="wrap">' +
        '<a class="brand" href="#work" aria-label="' + esc(L(C.meta.name)) + '">' +
          '<span class="brand-avatar"><img src="' + esc(PORTRAIT_SRC) + '" alt="' + esc(L(C.meta.name)) + '"></span>' +
          '<span class="brand-text">' +
            '<span class="brand-lat" lang="en">YOUSSEF WARD</span>' +
            '<span class="brand-sub">' + esc(L(C.meta.title)) + '</span>' +
          '</span>' +
        '</a>' +
        '<nav class="nav" id="nav" aria-label="Main">' +
          ['work', 'films', 'about', 'contact'].map(function (k) {
            return '<a href="#' + k + '" data-nav="' + k + '">' + tx.nav[k] + '</a>';
          }).join('') +
        '</nav>' +
        '<div class="header-actions">' +
          '<button class="sfx-toggle' + (sfxEnabled ? '' : ' is-muted') + '" type="button" id="sfx-toggle">' +
            '<span class="sfx-dot"></span><span id="sfx-label">' + (sfxEnabled ? tx.sfxOn : tx.sfxMute) + '</span>' +
          '</button>' +
          '<button class="lang-toggle" type="button" id="lang-toggle" aria-label="' + esc(tx.langLabel) + '">' +
            '<span>' + tx.langBtn + '</span>' +
          '</button>' +
          '<a class="avail-pill" href="#contact">' + esc(tx.avail) + '</a>' +
          '<button class="menu-btn" type="button" id="menu-btn" aria-expanded="false" aria-controls="nav" aria-label="' + tx.menu + '"><span>☰</span></button>' +
        '</div>' +
      '</div>';

    document.getElementById('footer').innerHTML =
      '<div class="wrap">' +
        '<div><strong>Youssef Ward</strong> · ' + esc(L(C.meta.location)) + '</div>' +
        '<div>© ' + new Date().getFullYear() + ' ' + esc(L(C.meta.name)) + '. ' + tx.allWork + '.</div>' +
      '</div>';

    // Event listeners
    document.getElementById('lang-toggle').onclick = function () {
      playTick('pop');
      lang = lang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('yw_lang', lang);
      renderShell();
      if (currentRoute.type === 'project') {
        var p = C.projects.find(function (x) { return x.id === currentRoute.id; });
        if (p) renderProject(p);
      } else {
        renderHome();
        var targetEl = document.getElementById(currentRoute.id);
        if (targetEl && currentRoute.id !== 'work' && currentRoute.id !== 'home') {
          targetEl.scrollIntoView();
        }
      }
    };

    var sfxBtn = document.getElementById('sfx-toggle');
    if (sfxBtn) {
      sfxBtn.onclick = function () {
        sfxEnabled = !sfxEnabled;
        if (sfxEnabled) playTick('shutter');
        var lbl = document.getElementById('sfx-label');
        if (lbl) lbl.textContent = sfxEnabled ? tx.sfxOn : tx.sfxMute;
        sfxBtn.classList.toggle('is-muted', !sfxEnabled);
      };
    }

    var menuBtn = document.getElementById('menu-btn');
    var nav = document.getElementById('nav');
    if (menuBtn && nav) {
      menuBtn.onclick = function () {
        var open = nav.classList.toggle('is-open');
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      };
      nav.querySelectorAll('a').forEach(function (a) {
        a.onclick = function () { nav.classList.remove('is-open'); };
      });
    }
  }

  /* ---------------- Interactive Hero Slider ---------------- */
  var heroAutoplayTimer = null;
  var heroResumeTimeout = null;
  var startHero = function () {};

  function stopHero() {
    if (heroAutoplayTimer) { clearInterval(heroAutoplayTimer); heroAutoplayTimer = null; }
    if (heroResumeTimeout) { clearTimeout(heroResumeTimeout); heroResumeTimeout = null; }
  }

  function initHeroSlider() {
    stopHero();
    var frame = document.getElementById('hero-frame');
    var slider = document.getElementById('hero-slider');
    if (!frame || !slider) return;

    var slides = slider.querySelectorAll('.hero-slide');
    var dots = frame.querySelectorAll('.hero-dot');
    var prevBtn = document.getElementById('hero-prev');
    var nextBtn = document.getElementById('hero-next');
    var curCount = frame.querySelector('.hero-cur');
    var totalCount = slides.length;
    if (!totalCount) return;

    function updateActiveState(idx) {
      heroIndex = (idx + totalCount) % totalCount;
      slides.forEach(function (s, i) {
        s.classList.toggle('is-active', i === heroIndex);
      });
      dots.forEach(function (d, i) {
        d.classList.toggle('is-active', i === heroIndex);
      });
      if (curCount) {
        var n = heroIndex + 1;
        curCount.textContent = n < 10 ? '0' + n : String(n);
      }
    }

    function scrollToIndex(idx, smooth) {
      if (idx < 0) idx = totalCount - 1;
      if (idx >= totalCount) idx = 0;
      updateActiveState(idx);
      var targetSlide = slides[idx];
      if (targetSlide) {
        slider.scrollTo({
          left: targetSlide.offsetLeft,
          behavior: smooth ? 'smooth' : 'auto'
        });
      }
    }

    // Scroll listener detects touch swipe, mouse drag, and native snap
    var scrollRaf = null;
    slider.addEventListener('scroll', function () {
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      scrollRaf = requestAnimationFrame(function () {
        var sliderRect = slider.getBoundingClientRect();
        var center = sliderRect.left + sliderRect.width / 2;
        var closestIdx = heroIndex;
        var minDiff = Infinity;
        slides.forEach(function (s, i) {
          var r = s.getBoundingClientRect();
          var sCenter = r.left + r.width / 2;
          var diff = Math.abs(sCenter - center);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = i;
          }
        });
        if (closestIdx !== heroIndex) {
          updateActiveState(closestIdx);
        }
      });
    }, { passive: true });

    // Interaction pause: keeps auto-play from interrupting user interaction
    function pauseForUser() {
      stopHero();
      if (heroResumeTimeout) clearTimeout(heroResumeTimeout);
      heroResumeTimeout = setTimeout(function () {
        startHero();
      }, 7000);
    }

    slider.addEventListener('touchstart', pauseForUser, { passive: true });
    slider.addEventListener('wheel', pauseForUser, { passive: true });

    // Desktop mouse drag support
    var isDown = false, startX = 0, scrollLeftStart = 0;
    slider.addEventListener('mousedown', function (e) {
      isDown = true;
      slider.classList.add('is-dragging');
      startX = e.pageX - slider.offsetLeft;
      scrollLeftStart = slider.scrollLeft;
      pauseForUser();
    });
    window.addEventListener('mouseup', function () {
      if (isDown) {
        isDown = false;
        slider.classList.remove('is-dragging');
      }
    });
    slider.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - slider.offsetLeft;
      var walk = (x - startX) * 1.35;
      slider.scrollLeft = scrollLeftStart - walk;
    });

    // Arrow navigation
    if (prevBtn) {
      prevBtn.onclick = function (e) {
        e.preventDefault();
        pauseForUser();
        playTick('tick');
        var isRtl = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar';
        scrollToIndex(isRtl ? heroIndex + 1 : heroIndex - 1, true);
      };
    }
    if (nextBtn) {
      nextBtn.onclick = function (e) {
        e.preventDefault();
        pauseForUser();
        playTick('tick');
        var isRtl = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar';
        scrollToIndex(isRtl ? heroIndex - 1 : heroIndex + 1, true);
      };
    }

    // Dot indicators
    dots.forEach(function (dot) {
      dot.onclick = function (e) {
        e.preventDefault();
        pauseForUser();
        playTick('tick');
        var target = parseInt(dot.getAttribute('data-goto'), 10);
        if (!isNaN(target)) scrollToIndex(target, true);
      };
    });

    // Keyboard Left/Right support
    frame.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        pauseForUser();
        scrollToIndex(heroIndex - 1, true);
      } else if (e.key === 'ArrowRight') {
        pauseForUser();
        scrollToIndex(heroIndex + 1, true);
      }
    });

    startHero = function () {
      stopHero();
      if (slides.length <= 1) return;
      heroAutoplayTimer = setInterval(function () {
        var f = document.getElementById('hero-frame');
        if (f) {
          var rect = f.getBoundingClientRect();
          // Pause transitions whenever hero has scrolled out of view
          if (rect.bottom <= 60 || rect.top >= window.innerHeight) {
            return;
          }
        }
        var nextIdx = (heroIndex + 1) % totalCount;
        scrollToIndex(nextIdx, true);
      }, 5500);
    };

    startHero();
  }

  /* ---------------- Cinema & Video Showcase ---------------- */
  function renderCinemaCards() {
    var vids = C.filmmakingVideos || [];
    var tx = t();
    return vids.map(function (v) {
      return '<article class="cinema-card">' +
        '<div class="cinema-frame" role="button" tabindex="0" data-play-vid="' + esc(v.video) + '" data-vid-title="' + esc(L(v.title)) + '" data-vid-poster="' + esc(v.poster) + '" aria-label="' + esc(tx.playFilm) + ' — ' + esc(L(v.title)) + '">' +
          '<img src="' + esc(v.poster) + '" alt="' + esc(L(v.title)) + '" loading="lazy">' +
          '<div class="cinema-overlay">' +
            '<div class="cinema-badge-row">' +
              '<span class="cinema-pill">' + esc(L(v.badge)) + '</span>' +
              '<span class="cinema-duration">⏱ ' + esc(v.duration) + '</span>' +
            '</div>' +
            '<button class="cinema-play-btn" type="button" aria-label="' + esc(tx.playFilm) + '">' +
              ICON.play +
              '<span>' + esc(tx.playFilm) + '</span>' +
            '</button>' +
            '<div class="cinema-bottom-tag">1080p HD · CINEMA SOUND</div>' +
          '</div>' +
        '</div>' +
        '<div class="cinema-info">' +
          '<div class="cinema-meta-head">' +
            '<h3 class="cinema-title">' + esc(L(v.title)) + '</h3>' +
            '<span class="cinema-role">' + esc(L(v.role)) + '</span>' +
          '</div>' +
          '<p class="cinema-desc">' + esc(L(v.description)) + '</p>' +
          '<div class="cinema-actions">' +
            '<button class="btn btn-solid cinema-action-play" type="button" data-play-vid="' + esc(v.video) + '" data-vid-title="' + esc(L(v.title)) + '" data-vid-poster="' + esc(v.poster) + '">' +
              ICON.play + ' ' + esc(tx.playFilm) +
            '</button>' +
            '<a class="btn btn-outline cinema-action-view" href="#p-' + esc(v.projectId) + '">' +
              esc(tx.watchProject) + (lang === 'ar' ? ' ←' : ' →') +
            '</a>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  /* ---------------- Render Home ---------------- */
  function renderHome() {
    var tx = t();
    setAmbient(filter.d === 'all' ? 'filmmaking' : filter.d);

    var html =
      '<div class="wrap">' +
        '<!-- Hero Section -->' +
        '<section class="hero" id="home">' +
          '<div class="hero-frame" id="hero-frame" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Featured frames">' +
            '<div class="hero-slider" id="hero-slider">' +
              HERO_FRAMES.map(function (src, i) {
                return '<div class="hero-slide' + (i === 0 ? ' is-active' : '') + '" data-slide-index="' + i + '">' +
                  '<img class="still" src="' + esc(src) + '" alt="Hero frame ' + (i + 1) + '" loading="' + (i < 2 ? 'eager' : 'lazy') + '">' +
                '</div>';
              }).join('') +
            '</div>' +
            '<div class="hero-scrim"></div>' +
            '<button class="hero-arrow hero-arrow--prev" id="hero-prev" type="button" aria-label="Previous slide">' +
              '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>' +
            '</button>' +
            '<button class="hero-arrow hero-arrow--next" id="hero-next" type="button" aria-label="Next slide">' +
              '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>' +
            '</button>' +
            '<div class="hero-meta">' +
              '<div>' +
                '<h1 class="hero-name">' + esc(L(C.meta.name)) + '</h1>' +
                '<p class="hero-title-text">' + esc(L(C.meta.title)) + '</p>' +
              '</div>' +
              '<div class="hero-controls">' +
                '<div class="hero-counter" id="hero-counter" aria-live="polite">' +
                  '<span class="hero-cur">01</span><span class="hero-sep">/</span><span class="hero-total">' + (HERO_FRAMES.length < 10 ? '0' + HERO_FRAMES.length : HERO_FRAMES.length) + '</span>' +
                '</div>' +
                '<div class="hero-dots">' +
                  HERO_FRAMES.map(function (_, i) {
                    return '<button class="hero-dot' + (i === 0 ? ' is-active' : '') + '" type="button" data-goto="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>';
                  }).join('') +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<!-- Approved Homepage Introduction -->' +
          (C.homeIntro ?
            '<div class="hero-intro">' +
              '<div class="hero-intro-lead">' +
                '<h2 class="hero-intro-title">' + esc(L(C.homeIntro.title)) + '</h2>' +
                (C.homeIntro.subtitle ? '<p class="hero-intro-sub">' + esc(L(C.homeIntro.subtitle)) + '</p>' : '') +
                '<div class="hero-intro-actions">' +
                  '<a href="#work" class="btn btn-solid" id="hero-cta-work">' + esc(L(C.homeIntro.ctaWork)) + '</a>' +
                  '<a href="#about" class="btn btn-outline" id="hero-cta-about">' + esc(L(C.homeIntro.ctaAbout)) + '</a>' +
                '</div>' +
              '</div>' +
              '<div class="hero-intro-content">' +
                '<div class="hero-intro-body">' +
                  renderBioParagraphs(L(C.homeIntro.body)) +
                '</div>' +
                (C.homeIntro.signature ?
                  '<div class="hero-intro-signature">' +
                    '<span>' + esc(L(C.homeIntro.signature)) + '</span>' +
                  '</div>' : '') +
              '</div>' +
            '</div>' : '') +

          '<!-- Interactive Discipline Selector in Hero -->' +
          '<div class="hero-discipline-pills">' +
            C.disciplines.map(function (d) {
              var count = C.projects.filter(function (p) { return p.discipline === d.id; }).length;
              return '<button class="hero-pill' + (filter.d === d.id ? ' is-active' : '') + '" type="button" data-hero-d="' + d.id + '">' +
                '<strong>' + esc(L(d.title)) + '</strong>' +
                '<small>' + esc(L(d.subtitle)) + ' (' + count + ')</small>' +
              '</button>';
            }).join('') +
          '</div>' +
        '</section>' +

        '<!-- Works Section -->' +
        '<section class="work-section" id="work" style="padding-top:40px">' +
          '<div class="filters-bar" id="filters-bar"></div>' +
          '<div class="grid" id="grid"></div>' +
        '</section>' +

        '<!-- Filmmaking & Cinema Motion Section -->' +
        '<section class="cinema-section" id="films">' +
          '<div class="section-hdr">' +
            '<div class="cinema-tagline">' + esc(tx.filmsBadge) + '</div>' +
            '<h2>' + esc(tx.filmsTitle) + '</h2>' +
            '<p>' + esc(tx.filmsSub) + '</p>' +
          '</div>' +
          '<div class="cinema-grid">' +
            renderCinemaCards() +
          '</div>' +
        '</section>' +

        '<!-- About Section -->' +
        '<section class="about-section" id="about">' +
          '<div class="about-split">' +
            '<div class="about-image-wrap">' +
              '<figure class="about-image">' +
                '<img src="' + esc(ABOUT_IMAGE) + '" alt="' + esc(L(C.meta.name)) + '" loading="lazy">' +
                (C.shortBio ?
                  '<figcaption class="about-image-caption">' +
                    '<p>' + esc(L(C.shortBio)) + '</p>' +
                  '</figcaption>' : '') +
              '</figure>' +
            '</div>' +
            '<div class="about-text">' +
              '<h2>' + esc(C.about ? L(C.about.title) : tx.aboutTitle) + '</h2>' +
              '<div class="about-bio-body">' +
                (C.about ? renderBioParagraphs(L(C.about.body)) : '<p>' + esc(L(C.bio)) + '</p>') +
              '</div>' +
              (C.about && C.about.closing ?
                '<div class="about-closing-statement">' +
                  '<span>' + esc(L(C.about.closing)) + '</span>' +
                '</div>' : '') +
              '<div class="about-links">' +
                (C.cv ? '<a class="about-link" href="' + esc(C.cv) + '" target="_blank" rel="noopener">📄 ' + tx.cv + '</a>' : '') +
                (C.portfolio ? '<a class="about-link" href="' + esc(C.portfolio) + '" target="_blank" rel="noopener">📁 ' + tx.pdf + '</a>' : '') +
                (C.vimeo ? '<a class="about-link" href="' + esc(C.vimeo) + '" target="_blank" rel="noopener">🎬 Vimeo</a>' : '') +
                (C.instagram ? '<a class="about-link" href="' + esc(C.instagram) + '" target="_blank" rel="noopener">📷 Instagram</a>' : '') +
                (C.linkedin ? '<a class="about-link" href="' + esc(C.linkedin) + '" target="_blank" rel="noopener">💼 LinkedIn</a>' : '') +
              '</div>' +
            '</div>' +
          '</div>' +
        '</section>' +

        '<!-- Contact Section -->' +
        '<section class="contact-section" id="contact">' +
          '<div class="contact-grid">' +
            '<div>' +
              '<h2 style="font-family:var(--f-display);font-size:var(--t-2xl);margin:0 0 12px 0">' + esc(tx.contactTitle) + '</h2>' +
              '<p style="color:var(--paper-2);margin:0 0 24px 0;line-height:1.7">' + esc(tx.contactLead) + '</p>' +
              '<p style="font-family:var(--f-mono);font-size:var(--t-md);color:var(--tungsten);margin:0 0 16px 0">' + esc(C.email) + '</p>' +
              '<p style="font-family:var(--f-mono);font-size:var(--t-sm);color:var(--mute);margin:0 0 24px 0">' + esc(C.phone) + '</p>' +
              '<button class="btn btn-solid" type="button" id="copy-email-btn">' + tx.copy + '</button>' +
            '</div>' +
            '<form class="brief-card" id="brief-form">' +
              '<div class="brief-row">' +
                '<input class="brief-input" type="text" name="name" placeholder="' + (lang === 'ar' ? 'الاسم الكريم' : 'Your Name') + '" required>' +
                '<input class="brief-input" type="email" name="email" placeholder="' + (lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address') + '" required>' +
              '</div>' +
              '<div class="brief-row">' +
                '<input class="brief-input" type="text" name="project" placeholder="' + (lang === 'ar' ? 'نوع المشروع (فيلم / فوتوغرافيا / هوية)' : 'Project Scope') + '">' +
                '<input class="brief-input" type="text" name="timeline" placeholder="' + (lang === 'ar' ? 'الموعد المستهدف' : 'Timeline') + '">' +
              '</div>' +
              '<textarea class="brief-input" name="message" placeholder="' + (lang === 'ar' ? 'نبذة عن المشروع والمتطلبات البصرية...' : 'Tell me about the project...') + '" required></textarea>' +
              '<button class="btn btn-solid" type="submit">' + tx.sendBrief + '</button>' +
            '</form>' +
          '</div>' +
        '</section>' +
      '</div>';

    document.getElementById('main').innerHTML = html;

    renderFilters();
    renderGrid();
    initHeroSlider();

    // Hero CTA click handlers
    var ctaWork = document.getElementById('hero-cta-work');
    if (ctaWork) {
      ctaWork.onclick = function (e) {
        playTick('pop');
        var workEl = document.getElementById('work');
        if (workEl) workEl.scrollIntoView({ behavior: 'smooth' });
      };
    }
    var ctaAbout = document.getElementById('hero-cta-about');
    if (ctaAbout) {
      ctaAbout.onclick = function (e) {
        playTick('pop');
        var aboutEl = document.getElementById('about');
        if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
      };
    }

    // Hero discipline pill click
    document.querySelectorAll('[data-hero-d]').forEach(function (btn) {
      btn.onclick = function () {
        playTick('pop');
        var d = btn.dataset.heroD;
        filter.d = (filter.d === d) ? 'all' : d;
        filter.s = 'all';
        renderFilters();
        renderGrid();
        // Update active hero pills
        document.querySelectorAll('[data-hero-d]').forEach(function (b) {
          b.classList.toggle('is-active', b.dataset.heroD === filter.d);
        });
        // Scroll smoothly to work
        var workEl = document.getElementById('work');
        if (workEl) workEl.scrollIntoView({ behavior: 'smooth' });
      };
    });

    // Cinema video play triggers
    document.querySelectorAll('[data-play-vid]').forEach(function (btn) {
      btn.onclick = function (e) {
        e.stopPropagation();
        playTick('shutter');
        openVideo(btn.dataset.playVid, btn.dataset.vidTitle, btn.dataset.vidPoster);
      };
      btn.onkeydown = function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      };
    });

    // Reel play
    var reelBtn = document.getElementById('reel-play');
    if (reelBtn) {
      reelBtn.onclick = function () {
        playTick('shutter');
        openVideo(C.vimeo, tx.reelTitle);
      };
    }

    // Email copy
    var copyBtn = document.getElementById('copy-email-btn');
    if (copyBtn) {
      copyBtn.onclick = function () {
        playTick('pop');
        navigator.clipboard.writeText(C.email).then(function () {
          showToast(tx.copied);
        });
      };
    }

    // Brief form submit
    var briefForm = document.getElementById('brief-form');
    if (briefForm) {
      briefForm.onsubmit = function (e) {
        e.preventDefault();
        playTick('shutter');
        briefForm.reset();
        showToast(tx.briefSent);
      };
    }
  }

  /* ---------------- Filters ---------------- */
  function renderFilters() {
    var tx = t(), el = document.getElementById('filters-bar');
    if (!el) return;

    var top = [{ id: 'all', label: tx.all, n: C.projects.length }].concat(C.disciplines.map(function (d) {
      return {
        id: d.id,
        label: tx.short[d.id] || L(d.title),
        n: C.projects.filter(function (p) { return p.discipline === d.id; }).length
      };
    }));

    var html =
      '<div class="chips-wrap">' +
        '<div class="chips" role="group" aria-label="Discipline">' +
          top.map(function (c) {
            return '<button class="chip' + (filter.d === c.id ? ' is-active' : '') + '" type="button" data-d="' + c.id + '" aria-pressed="' + (filter.d === c.id) + '">' +
              esc(c.label) + ' <span class="num">' + c.n + '</span>' +
            '</button>';
          }).join('') +
        '</div>';

    var d = discipline(filter.d);
    if (d && d.categories) {
      var subs = d.categories.filter(function (c) {
        return c.id === 'all' || C.projects.some(function (p) { return p.discipline === d.id && p.subdiscipline === c.id; });
      });
      if (subs.length > 1) {
        html +=
          '<div class="chips chips-sub" role="group" aria-label="' + esc(L(d.title)) + '">' +
            subs.map(function (c) {
              var label = c.id === 'all' ? tx.all : L(c.name);
              return '<button class="chip' + (filter.s === c.id ? ' is-active' : '') + '" type="button" data-s="' + c.id + '" aria-pressed="' + (filter.s === c.id) + '">' +
                esc(label) +
              '</button>';
            }).join('') +
          '</div>';
      }
    }

    html += '</div>';

    // View mode switch buttons
    html +=
      '<div class="view-switch" role="group" aria-label="View mode">' +
        '<button class="view-btn' + (viewMode === 'masonry' ? ' is-active' : '') + '" type="button" id="vm-masonry">' + ICON.grid + ' ' + esc(tx.viewGrid) + '</button>' +
        '<button class="view-btn' + (viewMode === 'filmstrip' ? ' is-active' : '') + '" type="button" id="vm-filmstrip">' + ICON.filmstrip + ' ' + esc(tx.viewFilmstrip) + '</button>' +
      '</div>';

    el.innerHTML = html;

    // Filter events
    el.querySelectorAll('[data-d]').forEach(function (b) {
      b.onclick = function () {
        playTick('pop');
        filter.d = b.dataset.d;
        filter.s = 'all';
        setAmbient(filter.d === 'all' ? 'filmmaking' : filter.d);
        renderFilters();
        renderGrid();
      };
    });

    el.querySelectorAll('[data-s]').forEach(function (b) {
      b.onclick = function () {
        playTick('pop');
        filter.s = b.dataset.s;
        renderFilters();
        renderGrid();
      };
    });

    var bMasonry = document.getElementById('vm-masonry');
    var bFilmstrip = document.getElementById('vm-filmstrip');
    if (bMasonry) {
      bMasonry.onclick = function () {
        playTick('pop');
        viewMode = 'masonry';
        renderFilters();
        renderGrid();
      };
    }
    if (bFilmstrip) {
      bFilmstrip.onclick = function () {
        playTick('pop');
        viewMode = 'filmstrip';
        renderFilters();
        renderGrid();
      };
    }
  }

  /* ---------------- Grid Rendering ---------------- */
  function renderGrid() {
    var tx = t(), el = document.getElementById('grid');
    if (!el) return;

    var list = C.projects.filter(function (p) {
      if (filter.d !== 'all' && p.discipline !== filter.d) return false;
      if (filter.s !== 'all' && p.subdiscipline !== filter.s) return false;
      return true;
    });

    if (!list.length) {
      el.className = 'grid';
      el.innerHTML = '<p class="empty" style="grid-column:1/-1;text-align:center;padding:48px 0;color:var(--mute)">' + esc(tx.emptyFilter) + '</p>';
      return;
    }

    if (viewMode === 'filmstrip') {
      el.className = 'grid is-filmstrip';
    } else {
      el.className = 'grid';
    }

    // Assign span patterns for masonry
    var spans = [];
    if (viewMode === 'masonry') {
      var pat = ROW_PATTERN[0];
      var pos = 0;
      var curPat = ROW_PATTERN[0];
      for (var i = 0; i < list.length; i++) {
        var pIdx = Math.floor(i / 2) % ROW_PATTERN.length;
        curPat = ROW_PATTERN[pIdx];
        var span = curPat[i % curPat.length] || 6;
        spans.push(span);
      }
    }

    el.innerHTML = list.map(function (p, i) {
      var n = splitName(p);
      var img = cover(p);
      var spanStyle = (viewMode === 'masonry' && spans[i]) ? 'grid-column: span ' + spans[i] + ';' : '';
      var d = discipline(p.discipline);
      var hasVid = !!p.video;

      return '<article class="card" style="' + spanStyle + '">' +
        '<a href="#p-' + esc(p.id) + '" aria-label="' + esc(n.title) + '" data-proj="' + esc(p.id) + '">' +
          '<div class="card-media">' +
            imgTag(img, { sizes: '(max-width: 820px) 100vw, 50vw' }) +
            (hasVid ? '<span class="card-video-badge">' + ICON.play + ' ' + (lang === 'ar' ? 'فيديو' : 'VIDEO') + '</span>' : '') +
            corners +
          '</div>' +
          '<div class="card-meta">' +
            '<div>' +
              '<h3 class="card-title">' + esc(n.title) + '</h3>' +
              (n.sub ? '<p class="card-sub">' + esc(n.sub) + '</p>' : '') +
            '</div>' +
            '<span style="font-size:11px;font-family:var(--f-mono);color:var(--mute)">' + esc(d ? L(d.title) : '') + '</span>' +
          '</div>' +
        '</a>' +
      '</article>';
    }).join('');

    // Click handler for cards
    el.querySelectorAll('[data-proj]').forEach(function (a) {
      a.onclick = function (e) {
        playTick('shutter');
      };
    });
  }

  /* ---------------- Single Project View (#p-<id>) ---------------- */
  function renderProject(p) {
    stopHero();
    var tx = t(), n = splitName(p), d = discipline(p.discipline), img = cover(p);
    setAmbient(p.discipline);

    // Navigation between projects within discipline or all
    var discProjects = C.projects.filter(function (x) { return x.discipline === p.discipline; });
    if (discProjects.length <= 1) discProjects = C.projects;
    var idx = discProjects.indexOf(p);
    var prev = discProjects[(idx - 1 + discProjects.length) % discProjects.length];
    var next = discProjects[(idx + 1) % discProjects.length];

    var rest = (p.images || []).filter(function (im) { return im.src !== img.src; });
    var vid = p.video;

    var html =
      '<article class="project">' +
        '<div class="wrap">' +
          '<!-- Breadcrumb -->' +
          '<nav class="crumbs" aria-label="Breadcrumb">' +
            '<a href="#work">' + ICON.left + ' ' + esc(tx.allWork) + '</a>' +
            '<span class="sep" aria-hidden="true"></span>' +
            '<a href="#work" data-goto-d="' + esc(p.discipline) + '">' + esc(d ? L(d.title) : '') + '</a>' +
            (p.subdisciplineName ? '<span class="sep" aria-hidden="true"></span><span>' + esc(L(p.subdisciplineName)) + '</span>' : '') +
          '</nav>' +

          '<h1 class="project-title">' + esc(n.title) + '</h1>' +
          (n.sub ? '<p class="project-sub">' + esc(n.sub) + '</p>' : '') +

          '<figure class="project-cover">' +
            '<button type="button" data-lb="0" aria-label="' + esc(L(img.alt)) + '" style="display:block;width:100%">' +
              imgTag(img, { eager: true }) +
            '</button>' +
            corners +
          '</figure>' +

          '<div class="project-body">' +
            '<dl class="spec">' +
              specRow(tx.spec.year, esc(p.year)) +
              specRow(tx.spec.role, esc(L(p.role))) +
              specRow(tx.spec.client, esc(p.client)) +
              (p.agency && p.agency !== p.client ? specRow(tx.spec.production, esc(p.agency)) : '') +
              (p.deliverables && p.deliverables.length ? specRow(tx.spec.deliverables, '<ul>' + p.deliverables.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>') : '') +
            '</dl>' +
            '<div>' +
              '<p class="lead">' + esc(L(p.description)) + '</p>' +
              (vid ? '<div class="btn-row"><button class="btn btn-solid" type="button" id="proj-play-video">' + ICON.play + ' ' + esc(p.videoLabel ? L(p.videoLabel) : tx.watch) + '</button></div>' : '') +
              (p.pdf ? '<div class="btn-row" style="margin-top:16px"><a class="btn btn-solid" href="' + esc(p.pdf) + '" target="_blank" download>' + ICON.download + ' ' + (lang === 'ar' ? 'Ø§Ø³ØªØ¹Ø±Ø§Ø¶ ÙˆØªØ­Ù…ÙŠÙ„ ÙƒØªØ§Ù„ÙˆØ¬ Ø§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„ÙƒØ§Ù…Ù„ (PDF)' : 'Download Full Brand Book (PDF)') + '</a></div>' : '') +
              (p.thinking ? '<div class="approach">' + ['challenge', 'decisions', 'outcome'].map(function (k) {
                return p.thinking[k] ? '<div class="approach-item"><h3>' + esc(tx.approach[k]) + '</h3><p>' + esc(L(p.thinking[k])) + '</p></div>' : '';
              }).join('') + '</div>' : '') +
            '</div>' +
          '</div>' +

          '<!-- Gallery of its own frames ONLY -->' +
          (rest.length ?
            '<div class="gallery">' +
              rest.map(function (im, i) {
                var isWide = !portrait(im) && i % 3 === 0;
                var ratio = im.width && im.height ? (im.width + ' / ' + im.height) : (isWide ? '16 / 9' : '4 / 3');
                return '<figure class="' + (isWide ? 'wide' : '') + '" style="aspect-ratio:' + ratio + '">' +
                  '<button type="button" data-lb="' + (i + 1) + '" aria-label="' + esc(L(im.alt)) + '">' +
                    imgTag(im) +
                  '</button>' +
                  corners +
                '</figure>';
              }).join('') +
            '</div>' : '') +

          '<!-- Prev / Next Project Pager -->' +
          '<nav class="pager" aria-label="Project pager">' +
            (prev ? '<a class="prev" href="#p-' + esc(prev.id) + '">' +
              '<small>' + ICON.left + ' ' + esc(tx.prev) + '</small>' +
              '<strong>' + esc(splitName(prev).title) + '</strong>' +
            '</a>' : '<div></div>') +
            (next ? '<a class="next" href="#p-' + esc(next.id) + '">' +
              '<small>' + esc(tx.next) + ' ' + ICON.right + '</small>' +
              '<strong>' + esc(splitName(next).title) + '</strong>' +
            '</a>' : '<div></div>') +
          '</nav>' +
        '</div>' +
      '</article>';

    document.getElementById('main').innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Breadcrumb discipline click
    var discBreadcrumb = document.querySelector('[data-goto-d]');
    if (discBreadcrumb) {
      discBreadcrumb.onclick = function (e) {
        e.preventDefault();
        filter.d = discBreadcrumb.dataset.gotoD;
        filter.s = 'all';
        location.hash = '#work';
      };
    }

    // Play video
    var playBtn = document.getElementById('proj-play-video');
    if (playBtn && vid) {
      playBtn.onclick = function () {
        playTick('shutter');
        openVideo(vid, splitName(p).title, p.videoPoster);
      };
    }

    // Lightbox triggers
    currentLb.images = p.images || [];
    document.querySelectorAll('[data-lb]').forEach(function (btn) {
      btn.onclick = function () {
        playTick('shutter');
        var idx = parseInt(btn.dataset.lb, 10) || 0;
        openLightbox(currentLb.images, idx);
      };
    });
  }

  /* ---------------- Lightbox ---------------- */
  function openLightbox(images, index) {
    if (!images || !images.length) return;
    var dlg = document.getElementById('lightbox'), tx = t();
    currentLb.images = images;
    currentLb.index = index || 0;
    lastFocus = document.activeElement;

    function renderStage() {
      var cur = currentLb.images[currentLb.index];
      var num = (currentLb.index + 1) + ' / ' + currentLb.images.length;
      dlg.innerHTML =
        '<div class="lb-bar">' +
          '<span>' + num + '</span>' +
          '<button class="icon-btn" type="button" id="lb-close" aria-label="' + esc(tx.close) + '">' + ICON.close + '</button>' +
        '</div>' +
        '<div class="lb-stage">' +
          (currentLb.images.length > 1 ? '<button class="lb-nav lb-prev" type="button" id="lb-prev" aria-label="' + esc(tx.prevImg) + '">' + ICON.left + '</button>' : '') +
          '<img src="' + esc(cur.src) + '" alt="' + esc(L(cur.alt)) + '">' +
          (currentLb.images.length > 1 ? '<button class="lb-nav lb-next" type="button" id="lb-next" aria-label="' + esc(tx.nextImg) + '">' + ICON.right + '</button>' : '') +
        '</div>' +
        '<p class="lb-cap">' + esc(L(cur.alt)) + '</p>';

      var bClose = dlg.querySelector('#lb-close');
      if (bClose) bClose.onclick = function () { dlg.close(); };

      var bPrev = dlg.querySelector('#lb-prev');
      if (bPrev) bPrev.onclick = function () {
        playTick('pop');
        currentLb.index = (currentLb.index - 1 + currentLb.images.length) % currentLb.images.length;
        renderStage();
      };

      var bNext = dlg.querySelector('#lb-next');
      if (bNext) bNext.onclick = function () {
        playTick('pop');
        currentLb.index = (currentLb.index + 1) % currentLb.images.length;
        renderStage();
      };
    }

    renderStage();
    dlg.showModal();

    dlg.onkeydown = function (e) {
      if (e.key === 'ArrowLeft') {
        playTick('pop');
        currentLb.index = (currentLb.index - 1 + currentLb.images.length) % currentLb.images.length;
        renderStage();
      } else if (e.key === 'ArrowRight') {
        playTick('pop');
        currentLb.index = (currentLb.index + 1) % currentLb.images.length;
        renderStage();
      }
    };

    dlg.onclose = function () {
      if (lastFocus) lastFocus.focus();
    };
  }

  /* ---------------- Video Modal ---------------- */
  function openVideo(url, title, poster) {
    if (!url) return;
    var dlg = document.getElementById('video-modal'), tx = t(), id = vimeoId(url);
    lastFocus = document.activeElement;

    var player = id
      ? '<iframe src="https://player.vimeo.com/video/' + id + '?autoplay=1&title=0&byline=0&portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Vimeo"></iframe>'
      : '<video src="' + esc(url) + '" ' + (poster ? 'poster="' + esc(poster) + '" ' : '') + 'controls autoplay playsinline preload="auto"></video>';

    dlg.innerHTML =
      '<div class="lb-bar">' +
        '<span style="font-family:var(--f-mono);font-size:12px;letter-spacing:0.04em;color:var(--paper)">' + esc(title || tx.watch) + '</span>' +
        '<button class="icon-btn" type="button" id="vm-close" aria-label="' + esc(tx.close) + '">' + ICON.close + '</button>' +
      '</div>' +
      '<div class="vm-stage">' +
        '<div class="vm-box">' + player + '</div>' +
      '</div>' +
      (id ? '<p class="vm-foot">' + tx.vimeoHint + ' <a href="' + esc(url) + '" target="_blank" rel="noopener">' + tx.openVimeo + '</a></p>' : '<p class="vm-foot"></p>');

    dlg.querySelector('#vm-close').onclick = function () {
      var v = dlg.querySelector('video');
      if (v) v.pause();
      dlg.close();
    };
    dlg.showModal();

    dlg.onclose = function () {
      var v = dlg.querySelector('video');
      if (v) v.pause();
      dlg.innerHTML = '';
      if (lastFocus) lastFocus.focus();
    };
  }

  /* ---------------- Toast ---------------- */
  function showToast(msg) {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-on');
    setTimeout(function () { toast.classList.remove('is-on'); }, 3200);
  }

  /* ---------------- Routing ---------------- */
  function route() {
    var hash = (location.hash || '#work').replace(/^#/, '');

    if (hash.indexOf('p-') === 0) {
      var projId = hash.slice(2);
      var p = C.projects.find(function (x) { return x.id === projId; });
      if (p) {
        currentRoute = { type: 'project', id: projId };
        renderProject(p);
        updateNavState(null);
        return;
      }
    }

    if (hash === 'reel') hash = 'films';

    currentRoute = { type: 'home', id: hash };
    if (!document.getElementById('home')) {
      renderHome();
    }

    var targetEl = document.getElementById(hash);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
    updateNavState(hash);
  }

  function updateNavState(activeId) {
    if (activeId === 'reel') activeId = 'films';
    document.querySelectorAll('#nav a').forEach(function (a) {
      var k = a.dataset.nav;
      a.classList.toggle('is-active', k === activeId);
    });
  }

  window.addEventListener('hashchange', route);

  /* ---------------- Init ---------------- */
  function init() {
    renderShell();
    initPreloader();
    initCursor();
    route();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
