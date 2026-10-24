/**
 * YOUSEF WARD — PORTFOLIO CONTENT ENGINE
 * Multidisciplinary Designer & Art Director
 * Hybrid Direction A + Direction B (Brief v1.1)
 */

window.CONTENT = {
  meta: {
    name: { en: 'Yousef Ward', ar: 'يوسف ورد' },
    title: { en: 'Multidisciplinary Designer & Art Director', ar: 'مصمم متعدد التخصصات ومدير فني' },
    concept: { en: 'One Visual Mind. Multiple Expressions.', ar: 'عقل بصري واحد. تعبيرات متعددة.' },
    location: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
    availability: { en: 'Open to Opportunities & Strategic Collaborations', ar: 'متاح للتعاون الإبداعي والمشاريع الاستراتيجية' }
  },

  mark: 'assets/brand-mark.svg',
  portrait: 'assets/images/portrait/youssef-ward.jpg',
  email: 'contact@youssefward.com',
  phone: '+20 100 000 0000',
  cv: 'assets/youssef-ward-cv.pdf',
  portfolio: 'assets/youssef-ward-portfolio.pdf',
  linkedin: 'https://www.linkedin.com/in/yousef-ward-/',
  instagram: 'https://www.instagram.com/youssefward_/',
  behance: 'https://www.behance.net/youssef_Ward',
  vimeo: 'https://vimeo.com/user193168038?fl=pp&fe=sh',

  bio: {
    en: 'I am a multidisciplinary visual creator and art director with formal academic grounding in cinematography, photography, and graphic design from the Faculty of Applied Arts. Guided by the core conviction: Every Frame Is a Choice. Across cinematic film sets, high-profile broadcast television, editorial fashion campaigns, and comprehensive brand identity systems, my work prioritizes intentional light, architectural structure, spatial tension, and emotional truth.',
    ar: 'مصمم بصري متعدد التخصصات ومدير فني يجمع بين التأصيل الأكاديمي للتصوير السينمائي، الفوتوغرافيا، والتصميم الجرافيكي من كلية الفنون التطبيقية. ينطلق عملي من قناعة راسخة: "كل كادر خيار". عبر مواقع تصوير كبرى الأعمال الدرامية، الإنتاج التلفزيوني، حملات الأزياء التحريرية، ومنظومات الهوية البصرية المتكاملة، أركز على تشكيل الضوء الواعي، البناء المعماري المتماسك، والتوتر المكاني الذي يخدم الحقيقة الشعورية للفكرة.'
  },

  disciplines: [
    {
      id: 'filmmaking',
      number: '01',
      title: { en: 'Filmmaking & Cinema', ar: 'صناعة الأفلام والسينما' },
      subtitle: { en: 'Camera Department · Drama Sets · Visual Studies', ar: 'قسم الكاميرا · كواليس الدراما · تجارب سينمائية' },
      description: {
        en: 'Camera department craftsmanship across prime television dramas and cinematic visual studies. Grounded in intentional camera movement, low-key lighting, and tactical blocking.',
        ar: 'خبرة ميدانية موثقة في قسم الكاميرا لكبرى المسلسلات والإنتاجات الدرامية والتلفزيونية، مع دراسة حركة الكاميرا، توزيع الإضاءة المنخفضة، والتكوين البصري المتقن.'
      },
      categories: [
        { id: 'all', name: { en: 'All Film Work', ar: 'جميع أعمال السينما' } },
        { id: 'drama', name: { en: 'Drama & TV Series', ar: 'الدراما والمسلسلات' } },
        { id: 'broadcast', name: { en: 'Television Shows', ar: 'الإنتاج والبرامج' } },
        { id: 'visual-studies', name: { en: 'Cinematic Studies', ar: 'تجارب بصرية' } }
      ]
    },
    {
      id: 'photography',
      number: '02',
      title: { en: 'Still Photography', ar: 'التصوير الفوتوغرافي' },
      subtitle: { en: 'Fashion · Studio Portraits · Street', ar: 'أزياء وفاشن · استوديو وبورتريه · شوارع وتوثيق' },
      description: {
        en: 'Editorial fashion campaigns, sculpted high-contrast studio portraiture, and quiet atmospheric street observations across Cairo.',
        ar: 'حملات تصوير الأزياء التحريرية، بورتريهات الاستوديو المنحوتة بالضوء والظلال، والتصوير التوثيقي الهادئ لشوارع ومعمار القاهرة.'
      },
      categories: [
        { id: 'all', name: { en: 'All Photography', ar: 'جميع أعمال التصوير' } },
        { id: 'fashion', name: { en: 'Fashion & Editorial', ar: 'أزياء وفاشن' } },
        { id: 'portrait', name: { en: 'Studio & Portraits', ar: 'بورتريه واستوديو' } },
        { id: 'documentary', name: { en: 'Street & Architecture', ar: 'شوارع وتوثيق' } }
      ]
    },
    {
      id: 'design',
      number: '03',
      title: { en: 'Graphic Design & Key Art', ar: 'التصميم الجرافيكي والبوستر' },
      subtitle: { en: 'Brand Identity · Book Architecture · Key Art', ar: 'هويات مؤسسية · معمار الكتب · بوسترات' },
      description: {
        en: 'Rigorous visual identity systems, book cover typography, cultural packaging, and promotional key art grounded in Applied Arts methodology.',
        ar: 'بناء الهويات البصرية الشاملة، هندسة وتيبوغرافي أغلفة الكتب، والتصاميم المطبوعة والمقتنيات الثقافية بمرجعية أكاديمية رصينة.'
      },
      categories: [
        { id: 'all', name: { en: 'All Design', ar: 'جميع أعمال التصميم' } },
        { id: 'identity', name: { en: 'Brand Identity', ar: 'هويات بصرية' } },
        { id: 'editorial', name: { en: 'Book & Editorial', ar: 'أغلفة ومطبوعات' } },
        { id: 'posters', name: { en: 'Key Art & Posters', ar: 'بوسترات ومواد دعائية' } }
      ]
    }
  ],

  projects: [
    /* ════════════════════════════════════════════════════════════
       1. FILMMAKING: DRAMA & TV SERIES
       ════════════════════════════════════════════════════════════ */
    {
      id: 'ekhteyar',
      name: { en: 'El Ekhteyar — On-Set Filmography & Stills', ar: 'مسلسل الاختيار — توثيق ولقطات موقع التصوير' },
      discipline: 'filmmaking',
      subdiscipline: 'drama',
      subdisciplineName: { en: 'Drama & TV Series', ar: 'الدراما والمسلسلات' },
      agency: 'Synergy Productions',
      client: 'Synergy Productions / UMS',
      year: '2020 - 2021',
      featured: true,
      role: { en: 'Camera Department & Production Stills', ar: 'قسم الكاميرا والتوثيق الفوتوغرافي للإنتاج' },
      deliverables: ['Live-Action Camera Support', 'Low-Key Tactical Set Stills', 'Lighting Continuity Documentation'],
      description: {
        en: 'Camera department craftsmanship and on-set production stills for the landmark historical drama series El Ekhteyar. High-action sequence coverage, tactical framing, and atmospheric low-key set lighting.',
        ar: 'عمل ميداني وتوثيق فوتوغرافي وسينمائي لكواليس وإطارات الملحمة الدرامية "الاختيار". التركيز على اللقطات التكتيكية وتوزيع الإضاءة العسكرية المنخفضة وحركة الكاميرا في المشاهد الحية.'
      },
      thinking: {
        challenge: {
          en: 'Capturing dynamic, physically demanding military combat sequences without interfering with principal cinematography, while maintaining visual continuity under harsh dust, night-vision setups, and rapid set changes.',
          ar: 'التقاط إطارات متوازنة ومعبرة وسط مشاهد قتالية حية وتكتيكية بالغة الصعوبة والسرعة، مع الالتزام التام بخطوط حركة الكاميرا الرئيسية وتغيرات الإضاءة الليلية وغبار المعارك دون تعطيل مجرى التصوير.'
        },
        decisions: {
          en: 'Selected high-shutter kinetic framing and prioritized low-angle perspective to emphasize psychological gravity and tactical urgency. Controlled ambient edge highlights to sculpt soldiers against dust-filled atmospheres.',
          ar: 'اعتماد زوايا تصوير منخفضة تعزز هيبة الإطار والشعور بالتوتر الميداني، مع موازنة الإضاءة الخلفية الحادة (Rim Light) لفصل الأجسام بدقة وسط بيئة مشبعة بالغبار والدخان.'
        },
        outcome: {
          en: 'An authoritative collection of production stills and camera coverage that captured both the grand scale of large tactical operations and the intimate vulnerability of individual soldiers.',
          ar: 'توثيق سينمائي وبصري متكامل استطاع الموازنة بين ضخامة العمليات التكتيكية الميدانية وبين عمق الانفعال الإنساني الصادق في أعين الأبطال.'
        }
      },
      images: [
        {
          src: 'assets/images/productions/ekhteyar-1.jpg',
          thumb: 'assets/images/productions/ekhteyar-1-thumb.jpg',
          alt: 'El Ekhteyar — Military Set Still 01',
          width: 1920,
          height: 1280
        },
        {
          src: 'assets/images/productions/ekhteyar-2.jpg',
          thumb: 'assets/images/productions/ekhteyar-2-thumb.jpg',
          alt: 'El Ekhteyar — On Set Tactical Frame 02',
          width: 1920,
          height: 1225
        },
        {
          src: 'assets/images/productions/ekhteyar-3.jpg',
          thumb: 'assets/images/productions/ekhteyar-3-thumb.jpg',
          alt: 'El Ekhteyar — Night Operation Frame 03',
          width: 1920,
          height: 1133
        }
      ]
    },

    {
      id: 'cairo-kabul',
      name: { en: 'Cairo Kabul — Dramatic Set Lighting & Camera', ar: 'مسلسل القاهرة كابول — إضاءة وتكوين درامي' },
      discipline: 'filmmaking',
      subdiscipline: 'drama',
      subdisciplineName: { en: 'Drama & TV Series', ar: 'الدراما والمسلسلات' },
      agency: 'Synergy Drama Productions',
      client: 'Synergy Drama',
      year: '2021',
      featured: true,
      role: { en: 'Camera Assistant & Dramatic Frame Stills', ar: 'مساعد كاميرا وتوثيق الإطارات الدرامية' },
      deliverables: ['Chiaroscuro Studio Stills', 'Close-Up Tension Framing', 'Optics & Lens Calibration'],
      description: {
        en: 'On-set camera department support and dramatic stills capturing intense character confrontation and chiaroscuro studio lighting for the television series Cairo Kabul.',
        ar: 'مشاركة في قسم الكاميرا وتوثيق الإطارات الدرامية لمسلسل "القاهرة كابول". ضبط تباين الظل والنور (Chiaroscuro) والتوتر المكاني المعبر عن الصراع الفكري والنفسي للشخصيات.'
      },
      thinking: {
        challenge: {
          en: 'The script demanded psychological claustrophobia inside intimate interrogation and dialogue spaces, requiring extreme precision in focal falloff and deep, uncompromised shadows.',
          ar: 'تطلب النص خلق حالة من الاحتباس النفسي داخل غرف حوار مغلقة ومواجهات فكرية محتدمة، ما استوجب دقة متناهية في عزل الخلفيات واستخدام مناطق الظل العميقة للتعبير عن الغموض.'
        },
        decisions: {
          en: 'Applied classic chiaroscuro key-to-fill ratios (4:1) with single directional tungsten light sources. Kept camera movement minimal and deliberate to force viewer focus on microscopic facial micro-expressions.',
          ar: 'توظيف نسب إضاءة كلاسيكية حادة تعتمد على مصدر ضوء رئيسي واحد (Single Key Light) مع إهمال إضاءة الملء لخلق ظلال حاسمة، والاعتماد على ثبات الكادر لإجبار المشاهد على قراءة انفعالات الوجوه.'
        },
        outcome: {
          en: 'Evocative, moody stills that translated internal ideological warfare into arresting visual compositions praised for atmospheric restraint.',
          ar: 'إطارات سينمائية ذات طابع معتم ووقور، ترجمت الصراع العقائدي والنفسي للشخصيات إلى لغة ضوئية صامتة شديدة التأثير.'
        }
      },
      images: [
        {
          src: 'assets/images/productions/cairo-kabul-1.jpg',
          thumb: 'assets/images/productions/cairo-kabul-1-thumb.jpg',
          alt: 'Cairo Kabul — Dramatic Confrontation 01',
          width: 1920,
          height: 1280
        },
        {
          src: 'assets/images/productions/cairo-kabul-2.jpg',
          thumb: 'assets/images/productions/cairo-kabul-2-thumb.jpg',
          alt: 'Cairo Kabul — Chiaroscuro Portrait 02',
          width: 1920,
          height: 1280
        },
        {
          src: 'assets/images/productions/cairo-kabul-3.jpg',
          thumb: 'assets/images/productions/cairo-kabul-3-thumb.jpg',
          alt: 'Cairo Kabul — Atmosphere Still 03',
          width: 1920,
          height: 1280
        }
      ]
    },

    /* ════════════════════════════════════════════════════════════
       1. FILMMAKING: TELEVISION BROADCAST
       ════════════════════════════════════════════════════════════ */
    {
      id: 'sahranen',
      name: { en: 'Sahranen TV Production — Celebrity Visuals', ar: 'برنامج سهرانين — تصوير نجوم الإنتاج التلفزيوني' },
      discipline: 'filmmaking',
      subdiscipline: 'broadcast',
      subdisciplineName: { en: 'Television Shows', ar: 'الإنتاج والبرامج' },
      agency: 'ON E / Egyptian Media Group',
      client: 'ON E Broadcast Channel',
      year: '2021 - 2022',
      featured: true,
      role: { en: 'Stage Lighting & Live Broadcast Visual Stills', ar: 'إضاءة مسرح الاستوديو وتوثيق لقطات النجوم' },
      deliverables: ['Multi-Cam Stage Coverage', 'Celebrity Key Lighting', 'Broadcast Atmosphere Stills'],
      description: {
        en: 'Studio lighting and celebrity portrait capture on the live set of Sahranen broadcast show featuring prominent Arab cinema icons.',
        ar: 'تصوير احترافي وإضاءة استوديو متقدمة لنجوم الفن والسينما في بلاطو برنامج "سهرانين" الترفيهي على قناة ON E.'
      },
      thinking: {
        challenge: {
          en: 'Balancing bright multi-camera broadcast lighting with glamorous, filmic portraiture during live musical performances and intimate celebrity interviews.',
          ar: 'الموازنة الدقيقة بين الإضاءة العامة الساطعة المطلوبة للبث التلفزيوني متعدد الكاميرات، وبين إضفاء روح سينمائية جذابة وفخمة على كادرات البورتريه أثناء الفقرات الغنائية والحوارية.'
        },
        decisions: {
          en: 'Positioned dynamic rim hair-lights and soft beauty dishes calibrated specifically for skin tones under high-output studio stage LED arrays.',
          ar: 'توزيع إضاءات جانبية وخلفية دقيقة لفصل الضيوف عن عمق المسرح، وضبط وحدات التنعيم للوصول إلى أنقى تدرجات للبشرة تحت مصابيح الاستوديو الحديثة.'
        },
        outcome: {
          en: 'Polished, television stills that captured spontaneous celebrity emotion with broadcast elegance and cinematic vibrancy.',
          ar: 'سلسلة صور احترافية وثقت اللحظات العفوية والروح الطربية للبرنامج بمظهر بصري جذاب يتطابق مع أعلى معايير الشاشات العربية.'
        }
      },
      images: [
        {
          src: 'assets/images/productions/sahranen-1.jpg',
          thumb: 'assets/images/productions/sahranen-1-thumb.jpg',
          alt: 'Sahranen — Celebrity Live Still 01',
          width: 1920,
          height: 1280
        },
        {
          src: 'assets/images/productions/sahranen-2.jpg',
          thumb: 'assets/images/productions/sahranen-2-thumb.jpg',
          alt: 'Sahranen — Stage Performance 02',
          width: 1920,
          height: 1280
        },
        {
          src: 'assets/images/productions/sahranen-3.jpg',
          thumb: 'assets/images/productions/sahranen-3-thumb.jpg',
          alt: 'Sahranen — Host & Guest Dynamic 03',
          width: 1920,
          height: 1280
        }
      ]
    },

    /* ════════════════════════════════════════════════════════════
       1. FILMMAKING: CINEMATIC STUDIES
       ════════════════════════════════════════════════════════════ */
    {
      id: 'mawlawya',
      name: { en: 'Mawlawya — Sufi Whirling Cinematic Study', ar: 'المولوية — دراسة سينمائية للإيقاع والدوران الصوفي' },
      discipline: 'filmmaking',
      subdiscipline: 'visual-studies',
      subdisciplineName: { en: 'Cinematic Studies', ar: 'تجارب بصرية' },
      agency: 'Independent Visual Exploration',
      client: 'Cultural Heritage Study',
      year: '2024',
      featured: true,
      role: { en: 'Cinematographer & Visual Concept Director', ar: 'مدير تصوير ومخرج الفكرة البصرية' },
      deliverables: ['Continuous Motion Tracking', 'Shutter Angle Kinetic Blur', 'Light Choreography Documentation'],
      description: {
        en: 'Cinematic visual study of spiritual movement, rhythm, and light choreography during the traditional Sufi Mawlawya whirling ceremony.',
        ar: 'دراسة بصرية سينمائية للحركة الروحية وتناغم الضوء مع الدوران الصوفي في طقوس المولوية التراثية، بالتركيز على مسارات الحركة والظل.'
      },
      thinking: {
        challenge: {
          en: 'Translating the transcendence of continuous rotational movement into two-dimensional cinema without reducing the sacred ritual to decorative spectacle.',
          ar: 'ترجمة تجربة الدوران الروحي المتواصل والسمو الصوفي إلى كادر سينمائي ثنائي الأبعاد، دون تسطيح الطقس الروحي أو تحويله لمجرد استعراض حركي.'
        },
        decisions: {
          en: 'Calibrated shutter angles to produce intentional kinetic motion blur while keeping the dervish face in sharp spiritual stillness. Used warm atmospheric amber pools surrounded by deep obsidian darkness.',
          ar: 'ضبط زاوية الغالق (Shutter Angle) لتوليد تموجات حركية ناعمة في ثنايا الرداء أثناء الدوران، مع الحفاظ على هدوء وثبات الملامح، واستخدام بقع إضاءة كهرمانية دافئة وسط محيط حالك السواد.'
        },
        outcome: {
          en: 'A critically recognized cinematic study capturing the intersection of Sufi philosophy, light physics, and spiritual ecstasy.',
          ar: 'دراسة سينمائية وتوثيقية ذات هوية بصرية متميزة، نالت استحسان الأوساط الفنية لقدرتها على التقاط جوهر التجربة الروحية بالضوء المجرد.'
        }
      },
      images: [
        {
          src: 'assets/images/mawlawya/mawlawya-1.jpg',
          thumb: 'assets/images/mawlawya/mawlawya-1-thumb.jpg',
          alt: 'Mawlawya — Spiritual Whirling 01',
          width: 1920,
          height: 1080
        },
        {
          src: 'assets/images/mawlawya/mawlawya-2.jpg',
          thumb: 'assets/images/mawlawya/mawlawya-2-thumb.jpg',
          alt: 'Mawlawya — Motion & Light Study 02',
          width: 1920,
          height: 1080
        },
        {
          src: 'assets/images/mawlawya/mawlawya-3.jpg',
          thumb: 'assets/images/mawlawya/mawlawya-3-thumb.jpg',
          alt: 'Mawlawya — Dervish Silhouette 03',
          width: 1920,
          height: 1080
        }
      ]
    },

    /* ════════════════════════════════════════════════════════════
       2. PHOTOGRAPHY: FASHION & EDITORIAL
       ════════════════════════════════════════════════════════════ */
    {
      id: 'clove',
      name: { en: 'Clove Lookbook I — Tactile Silhouette', ar: 'سلسلة Clove الأولى — الملمس والظل' },
      discipline: 'photography',
      subdiscipline: 'fashion',
      subdisciplineName: { en: 'Fashion & Editorial', ar: 'أزياء وفاشن' },
      agency: 'Clove Fashion Campaign',
      client: 'Clove Apparel',
      year: '2023',
      featured: true,
      role: { en: 'Lead Fashion Photographer & Lighting Director', ar: 'مصور الأزياء الرئيسي ومدير الإضاءة' },
      deliverables: ['Campaign Key Visuals', 'Texture & Fabric Close-ups', 'Editorial Color Grading'],
      description: {
        en: 'Editorial fashion campaign exploring tactile fabric textures, controlled natural highlights, and sculptural model gestures.',
        ar: 'حملة تصوير فاشن تحريرية تركز على ملامس الأقمشة الطبيعية، انعكاسات الضوء المحسوبة، والتكوين الحركي المتوازن للموديل.'
      },
      thinking: {
        challenge: {
          en: 'Highlighting subtle textile textures and organic cloth weaves while keeping the visual identity contemporary, minimal, and stripped of commercial clutter.',
          ar: 'إبراز الملمس الدقيق للأنسجة والقصات المعاصرة دون الوقوع في النمطية التجارية المبتذلة، مع بناء هوية بصرية هادئة تعتمد على البساطة الصريحة.'
        },
        decisions: {
          en: 'Utilized directional soft daylight simulation combined with large negative fill flags on the camera-left side to carve sculptural depth into every garment fold.',
          ar: 'محاكاة الضوء الطبيعي الموجه بزاوية جانبية مع استخدام ألواح امتصاص الضوء (Negative Fill) لتعميق الظلال في ثنايا الملابس وإبراز نقاء الخامات.'
        },
        outcome: {
          en: 'A complete campaign lookbook that drove brand engagement and set a sophisticated editorial standard for the fashion line.',
          ar: 'كتالوج أزياء متكامل اعتمدته العلامة التجارية في حملاتها التسويقية وساهم في ترسيخ انطباع الجودة والأناقة الرفيعة.'
        }
      },
      images: [
        {
          src: 'assets/images/clove/clove-1.jpg',
          thumb: 'assets/images/clove/clove-1-thumb.jpg',
          alt: 'Clove Campaign — Look 01',
          width: 1920,
          height: 1280
        },
        {
          src: 'assets/images/clove/clove-2.jpg',
          thumb: 'assets/images/clove/clove-2-thumb.jpg',
          alt: 'Clove Campaign — Look 02',
          width: 1466,
          height: 1920
        },
        {
          src: 'assets/images/clove/clove-3.jpg',
          thumb: 'assets/images/clove/clove-3-thumb.jpg',
          alt: 'Clove Campaign — Look 03',
          width: 1280,
          height: 1920
        },
        {
          src: 'assets/images/clove/clove-4.jpg',
          thumb: 'assets/images/clove/clove-4-thumb.jpg',
          alt: 'Clove Campaign — Look 04',
          width: 1280,
          height: 1920
        },
        {
          src: 'assets/images/clove/clove-5.jpg',
          thumb: 'assets/images/clove/clove-5-thumb.jpg',
          alt: 'Clove Campaign — Look 05',
          width: 1381,
          height: 1920
        },
        {
          src: 'assets/images/clove/clove-6.jpg',
          thumb: 'assets/images/clove/clove-6-thumb.jpg',
          alt: 'Clove Campaign — Look 06',
          width: 1920,
          height: 1280
        }
      ]
    },

    {
      id: 'clove-editorial-ii',
      name: { en: 'Clove Lookbook II — The Autumn Silhouette', ar: 'سلسلة Clove الثانية — تشكيلة الخريف المعاصرة' },
      discipline: 'photography',
      subdiscipline: 'fashion',
      subdisciplineName: { en: 'Fashion & Editorial', ar: 'أزياء وفاشن' },
      agency: 'Clove Fashion Campaign',
      client: 'Clove Brand Studio',
      year: '2024',
      featured: true,
      role: { en: 'Campaign Photographer & Art Direction', ar: 'مصور الحملة والتوجيه الفني' },
      deliverables: ['Full Collection Editorial', '8-Look Campaign Spread', 'Monochrome & Earth-Tone Grading'],
      description: {
        en: 'The second major editorial chapter for Clove, capturing autumn cuts, structured outerwear, and confident poses against minimalist studio backdrops.',
        ar: 'الفصل التحريري الثاني لسلسلة أزياء كلوف؛ توثيق تفاصيل أزياء الخريف، القصات الهندسية، والحضور الشخصي المتزن أمام خلفيات استوديو نقية.'
      },
      thinking: {
        challenge: {
          en: 'Creating distinct visual progression from the first series while maintaining brand coherence across eight different look stylings in a single production day.',
          ar: 'خلق تطور بصري ملحوظ ومميز عن السلسلة الأولى مع الحفاظ على وحدة الهوية العامة للماركة، وتصوير 8 إطلالات مختلفة في يوم عمل مكثف.'
        },
        decisions: {
          en: 'Adopted an architectural approach to model posture, using vertical line guides in frame and precision bounce fill to ensure true-to-life garment color rendition.',
          ar: 'توجيه حركة الموديل بخطوط معمارية قائمة، واستخدام إضاءات انعكاسية دقيقة للمحافظة على ألوان الأقمشة الحقيقية دون أي تشبع لوني زائف.'
        },
        outcome: {
          en: 'An 8-part editorial series that demonstrated technical camera control and strong storytelling cohesion across multiple wardrobe looks.',
          ar: 'سلسلة تحريرية من 8 إطلالات عكست سيطرة تامة على أدوات الاستوديو، وأظهرت تناغم التوجيه الفني مع طبيعة التشكيلة المعروضة.'
        }
      },
      images: [
        { src: 'assets/images/clove2/clove2-1.jpg', thumb: 'assets/images/clove2/clove2-1-thumb.jpg', alt: 'Clove Lookbook II — 01', width: 1466, height: 1920 },
        { src: 'assets/images/clove2/clove2-2.jpg', thumb: 'assets/images/clove2/clove2-2-thumb.jpg', alt: 'Clove Lookbook II — 02', width: 1170, height: 1920 },
        { src: 'assets/images/clove2/clove2-3.jpg', thumb: 'assets/images/clove2/clove2-3-thumb.jpg', alt: 'Clove Lookbook II — 03', width: 1144, height: 1920 },
        { src: 'assets/images/clove2/clove2-4.jpg', thumb: 'assets/images/clove2/clove2-4-thumb.jpg', alt: 'Clove Lookbook II — 04', width: 1381, height: 1920 },
        { src: 'assets/images/clove2/clove2-5.jpg', thumb: 'assets/images/clove2/clove2-5-thumb.jpg', alt: 'Clove Lookbook II — 05', width: 1381, height: 1920 },
        { src: 'assets/images/clove2/clove2-6.jpg', thumb: 'assets/images/clove2/clove2-6-thumb.jpg', alt: 'Clove Lookbook II — 06', width: 1381, height: 1920 },
        { src: 'assets/images/clove2/clove2-7.jpg', thumb: 'assets/images/clove2/clove2-7-thumb.jpg', alt: 'Clove Lookbook II — 07', width: 1392, height: 1920 },
        { src: 'assets/images/clove2/clove2-8.jpg', thumb: 'assets/images/clove2/clove2-8-thumb.jpg', alt: 'Clove Lookbook II — 08', width: 1920, height: 1298 }
      ]
    },

    {
      id: 'kojak',
      name: { en: 'Kojak Studio — Avant-Garde Haute Couture', ar: 'مهند كوجاك — فوتوغرافيا أزياء معاصرة وطليعية' },
      discipline: 'photography',
      subdiscipline: 'fashion',
      subdisciplineName: { en: 'Fashion & Editorial', ar: 'أزياء وفاشن' },
      agency: 'Kojak Studio',
      client: 'Mohanad Kojak',
      year: '2022',
      featured: true,
      role: { en: 'Editorial Photographer', ar: 'مصور تحريري' },
      deliverables: ['Haute Couture Visuals', 'Sculptural Silhouette Framing', 'High-Contrast Illumination'],
      description: {
        en: 'High-concept fashion photography for celebrated Egyptian designer Mohanad Kojak. Bold chiaroscuro illumination, sculptural silhouette framing, and rich fabric detail.',
        ar: 'تصوير أزياء تحريري متقدم لمجموعات المصمم مهند كوجاك. إضاءة نحتية جريئة عالية التباين، وزوايا غير تقليدية تبرز تفاصيل الخياطة الراقية.'
      },
      thinking: {
        challenge: {
          en: 'Honoring the avant-garde, theatrical aesthetic of Kojak designs without losing the structural tailoring and delicate embroidery details of the clothing.',
          ar: 'التعبير عن الطابع المسرحي والطليعي الجريء لتصاميم كوجاك دون التضحية بالتفاصيل البنائية الدقيقة للتطريز وجودة الحياكة.'
        },
        decisions: {
          en: 'Used narrow-beam snoots and gridded softboxes to direct focused beams on garment focal points while letting adjacent areas fall into deep atmospheric shadow.',
          ar: 'استخدام إضاءات موجهة ومحددة بشبكات تضييق الضوء (Grids) لتركيز النور على أجزاء ثوب معينة وترك بقية الكادر في عتمة درامية مكثفة.'
        },
        outcome: {
          en: 'Striking editorial imagery that reinforced Kojak’s standing as one of the region’s premier avant-garde fashion houses.',
          ar: 'صور أزياء استثنائية رسخت الحضور البصري للدار وأثبتت قدرة الكاميرا على تحويل الثوب إلى منحوتة فنية حية.'
        }
      },
      images: [
        {
          src: 'assets/images/productions/kojak-1.jpg',
          thumb: 'assets/images/productions/kojak-1-thumb.jpg',
          alt: 'Kojak Avant-Garde Fashion 01',
          width: 1280,
          height: 1920
        },
        {
          src: 'assets/images/productions/kojak-2.jpg',
          thumb: 'assets/images/productions/kojak-2-thumb.jpg',
          alt: 'Kojak Avant-Garde Fashion 02',
          width: 1280,
          height: 1920
        },
        {
          src: 'assets/images/productions/kojak-3.jpg',
          thumb: 'assets/images/productions/kojak-3-thumb.jpg',
          alt: 'Kojak Avant-Garde Fashion 03',
          width: 1280,
          height: 1920
        }
      ]
    },

    /* ════════════════════════════════════════════════════════════
       2. PHOTOGRAPHY: STUDIO PORTRAITURE
       ════════════════════════════════════════════════════════════ */
    {
      id: 'alpha-portraits',
      name: { en: 'Light Sculpting — Studio Portraits', ar: 'نحت الضوء — بورتريه الاستوديو والتعبير الإنساني' },
      discipline: 'photography',
      subdiscipline: 'portrait',
      subdisciplineName: { en: 'Studio & Portraits', ar: 'بورتريه واستوديو' },
      agency: 'Studio Lighting Research',
      client: 'Independent Studio Series',
      year: '2023',
      featured: true,
      role: { en: 'Portrait Photographer & Light Carver', ar: 'فوتوغرافر ومصمم إضاءة' },
      deliverables: ['35mm Full-Frame Studies', 'Chiaroscuro Facial Carving', 'High Dynamic Range Monochromes'],
      description: {
        en: 'Direct key lighting and shadow depth study on 35mm full frame sensor, highlighting human gaze and emotional vulnerability.',
        ar: 'دراسة نحت الضوء والظلال العميقة على مستشعر 35mm كامل الإطار لإبراز النظرة والملامح والتعبير الإنساني الصادق.'
      },
      thinking: {
        challenge: {
          en: 'Eliminating all background distraction to produce raw, honest portraits that communicate character and psychological presence purely through light angle.',
          ar: 'تجريد الكادر من أي عناصر مشتتة وخلق بورتريه إنساني صريح يعتمد كلياً على زاوية سقوط الضوء وعمق النظرة لإيصال الحضور الداخلي للموضوع.'
        },
        decisions: {
          en: 'Employed high-contrast Rembrandt lighting with steep vertical angles to accentuate facial bone structure and catchlights in the subject’s eyes.',
          ar: 'تطبيق إضاءة رامبرانت بزوايا سقوط رأسية مدروسة تبرز ملامح الوجه وتمنح العينين لمعاناً حياً يشد انتباه الرائي فوراً.'
        },
        outcome: {
          en: 'Timeless studio portraiture proving that light alone can tell a story as compelling as any complex set design.',
          ar: 'بورتريهات استوديو كلاسيكية ومؤثرة تثبت أن إدارة الضوء بمفردها قادرة على بناء رواية بصرية لا تقل عمقاً عن أضخم الديكورات.'
        }
      },
      images: [
        {
          src: 'assets/images/photography/sony-01.jpg',
          thumb: 'assets/images/photography/sony-01-thumb.jpg',
          alt: 'Studio Portrait — Sculpted Light 01',
          width: 1920,
          height: 1280
        },
        {
          src: 'assets/images/photography/sony-02.jpg',
          thumb: 'assets/images/photography/sony-02-thumb.jpg',
          alt: 'Studio Portrait — Shadow & Gaze 02',
          width: 1920,
          height: 1280
        }
      ]
    },

    {
      id: 'sony-raw-session',
      name: { en: 'Studio Alpha & Behind The Lens — Lighting Stills', ar: 'جلسات استوديو ألفا وكواليس الضوء' },
      discipline: 'photography',
      subdiscipline: 'portrait',
      subdisciplineName: { en: 'Studio & Portraits', ar: 'بورتريه واستوديو' },
      agency: 'Alpha Sensor Study',
      client: 'Studio Session Stills',
      year: '2024',
      featured: false,
      role: { en: 'Lighting Technician & Frame Designer', ar: 'تنسيق إضاءة وتوثيق تجريبي' },
      deliverables: ['Wide Dynamic Range Captures', 'Natural Reflective Fill', 'Production Workflow Documentation'],
      description: {
        en: 'High-resolution sensor studies exploring rapid lighting adjustments, organic gestures, and raw studio atmosphere.',
        ar: 'دراسات بصرية عالية الدقة ترصد سرعة استجابة الضوء والتكوين الحر داخل بيئة الاستوديو وعفوية الحركة أمام الكاميرا.'
      },
      thinking: {
        challenge: {
          en: 'Capturing unscripted, transitional moments between formal takes where natural posture and authentic expression emerge spontaneously.',
          ar: 'اصطياد اللحظات الانتقالية العفوية بين الأخذات الرسمية، حيث يتجلى التعبير الطبيعي والانسيابي الخالي من التكلف.'
        },
        decisions: {
          en: 'Maintained continuous ambient modeling lights to allow fluid model interaction without the intimidating flash of high-voltage strobes.',
          ar: 'الاعتماد على مصادر إضاءة مستمرة ناعمة تسمح بحرية حركية كاملة دون الإرباك الذي تسببه ومضات الفلاشات القوية.'
        },
        outcome: {
          en: 'An authentic behind-the-scenes visual archive celebrating the rhythm, patience, and chemistry of professional studio photography.',
          ar: 'سلسلة لقطات حية وكواليس توثق كيمياء العمل وسحر اللحظات التلقائية وراء العدسة في جلسات التصوير الاحترافية.'
        }
      },
      images: [
        { src: 'assets/images/clove2/dsc-1.jpg', thumb: 'assets/images/clove2/dsc-1-thumb.jpg', alt: 'Studio Raw Session 01', width: 1920, height: 1277 },
        { src: 'assets/images/clove2/dsc-2.jpg', thumb: 'assets/images/clove2/dsc-2-thumb.jpg', alt: 'Studio Raw Session 02', width: 1920, height: 1277 },
        { src: 'assets/images/clove2/dsc-3.jpg', thumb: 'assets/images/clove2/dsc-3-thumb.jpg', alt: 'Studio Raw Session 03', width: 1920, height: 1277 },
        { src: 'assets/images/clove2/dsc-4.jpg', thumb: 'assets/images/clove2/dsc-4-thumb.jpg', alt: 'Studio Raw Session 04', width: 1920, height: 1277 }
      ]
    },

    /* ════════════════════════════════════════════════════════════
       2. PHOTOGRAPHY: STREET & ARCHITECTURE
       ════════════════════════════════════════════════════════════ */
    {
      id: 'cairo-streets',
      name: { en: 'Cairo Transitions — Cityscape & Solitude', ar: 'شوارع القاهرة — انطباعات وعزلة المدينة' },
      discipline: 'photography',
      subdiscipline: 'documentary',
      subdisciplineName: { en: 'Street & Architecture', ar: 'شوارع وتوثيق' },
      agency: 'Personal Documentary Series',
      client: 'Urban Heritage Archive',
      year: '2023 - 2024',
      featured: true,
      role: { en: 'Street Photographer & Urban Observer', ar: 'فوتوغرافر توثيقي ومراقب للمدينة' },
      deliverables: ['Atmospheric Cityscape Studies', 'Twilight Architectural Geometry', 'Social Solitude Observation'],
      description: {
        en: 'Quiet observations of Cairo’s evolving urban geography, lingering twilight shadows, and architectural stillness amid metropolitan density.',
        ar: 'لقطات توثيقية هادئة لعمران وضواحي القاهرة، مراقبة درجات الغسق والظلال وسكون الكادر وسط زخم المدينة الصاخب.'
      },
      thinking: {
        challenge: {
          en: 'Revealing the tranquil, contemplative soul of one of the world’s most kinetic metropolises without clichés or exotic tourist perspectives.',
          ar: 'إبراز الجانب التأملي والساكن لمدينة القاهرة الصاخبة دون السقوط في الصور النمطية أو الكادرات السياحية المبتذلة.'
        },
        decisions: {
          en: 'Shot exclusively during blue hour and early dawn, framing geometric architectural intersections that dwarf human silhouettes to emphasize scale and quietude.',
          ar: 'اختيار أوقات الفجر والغسق الأزرق (Blue Hour)، وتأطير الخطوط الهندسية المعمارية الصارمة بحيث تبدو الشخصيات ككتل هادئة تبرز هيبة المكان وعراقته.'
        },
        outcome: {
          en: 'A poetic visual anthology of Cairo that portrays the historic metropolis through deep structural stillness and contemporary cinematic framing.',
          ar: 'مجموعة فوتوغرافية شاعرية قدمت قراءة مغايرة للعمران القاهري، ممتلئة بالسكينة والجمال الهندسي الموزون.'
        }
      },
      images: [
        {
          src: 'assets/images/photography/cairo-panorama.jpg',
          thumb: 'assets/images/photography/cairo-panorama-thumb.jpg',
          alt: 'Cairo Panorama — Metropolitan Geometry',
          width: 1920,
          height: 1344
        },
        {
          src: 'assets/images/photography/cairo-01.jpg',
          thumb: 'assets/images/photography/cairo-01-thumb.jpg',
          alt: 'Cairo Transitions — Urban Quietude 01',
          width: 1920,
          height: 1344
        },
        {
          src: 'assets/images/photography/cairo-02.jpg',
          thumb: 'assets/images/photography/cairo-02-thumb.jpg',
          alt: 'Cairo Transitions — Architectural Stillness 02',
          width: 1400,
          height: 1000
        },
        {
          src: 'assets/images/photography/cairo-03.jpg',
          thumb: 'assets/images/photography/cairo-03-thumb.jpg',
          alt: 'Cairo Transitions — Street Geometry 03',
          width: 1400,
          height: 1000
        },
        {
          src: 'assets/images/photography/cairo-04.jpg',
          thumb: 'assets/images/photography/cairo-04-thumb.jpg',
          alt: 'Cairo Transitions — Dusk Horizon 04',
          width: 1400,
          height: 1000
        }
      ]
    },

    /* ════════════════════════════════════════════════════════════
       3. GRAPHIC DESIGN: BRAND IDENTITY
       ════════════════════════════════════════════════════════════ */
    {
      id: 'diwan-identity',
      name: { en: 'Diwan — Brand Identity & Cultural Ecosystem', ar: 'دار ديوان — الهوية البصرية والمقتنيات الثقافية' },
      discipline: 'design',
      subdiscipline: 'identity',
      subdisciplineName: { en: 'Brand Identity', ar: 'هويات بصرية' },
      agency: 'Diwan Publishing House',
      client: 'Diwan Cultural Enterprise',
      year: '2023',
      featured: true,
      role: { en: 'Brand Identity Designer & Art Director', ar: 'مصمم الهوية البصرية ومدير فني' },
      deliverables: ['Comprehensive Identity System', 'Cultural Tote Bag & Merchandise', 'Tactile Packaging & Coasters'],
      description: {
        en: 'Comprehensive brand identity system, stationery, and cultural merchandise for Diwan Publishing House, celebrating literary heritage with contemporary minimalism.',
        ar: 'تصميم الهوية البصرية الشاملة، المنظومة الطباعية والمقتنيات الثقافية (الحقيبة القماشية، الكوستر، وبطاقات الهوية) لدار ديوان للنشر.'
      },
      thinking: {
        challenge: {
          en: 'Constructing a brand identity that honors Diwan’s prestigious cultural heritage as a literary icon while positioning it as a fresh, relevant lifestyle brand for a younger generation of readers.',
          ar: 'صياغة هوية بصرية تحتفي بالمكانة الثقافية الرفيعة لدار ديوان كصرح أدبي عريق، وفي الوقت نفسه تمنحها روحاً معاصرة وجاذبة للأجيال الشابة من القراء.'
        },
        decisions: {
          en: 'Engineered an uncluttered typographic grid system and extended the visual identity onto high-utility cultural items (tote bags, natural coasters, bookmarks) using eco-conscious, tactile materials.',
          ar: 'بناء شبكة تيبوغرافية دقيقة تعتمد التوازن بين الخط العربي الحديث واللاتيني، ونقل الهوية من الورق إلى منتجات ومقتنيات ثقافية ذات استخدام يومي مصنوعة من خامات طبيعية راقية.'
        },
        outcome: {
          en: 'A unified cultural ecosystem that seamlessly bridges book publishing, lifestyle goods, and brand prestige.',
          ar: 'منظومة هوية متكاملة وحدت المظهر البصري لدار ديوان وعززت ارتباط القراء بالهوية عبر منتجات ومطبوعات ذات قيمة ملموسة.'
        }
      },
      images: [
        {
          src: 'assets/images/design/diwan-tote-bag.jpg',
          thumb: 'assets/images/design/diwan-tote-bag-thumb.jpg',
          alt: 'Diwan Merchandise — Natural Linen Tote Bag',
          width: 1920,
          height: 1385
        },
        {
          src: 'assets/images/design/diwan-coaster.jpg',
          thumb: 'assets/images/design/diwan-coaster-thumb.jpg',
          alt: 'Diwan Cultural Coaster & Stationery',
          width: 1920,
          height: 1344
        },
        {
          src: 'assets/images/design/diwan-spread-1.jpg',
          thumb: 'assets/images/design/diwan-spread-1-thumb.jpg',
          alt: 'Diwan Brand Architecture Spread',
          width: 1920,
          height: 1385
        }
      ]
    },

    {
      id: 'mawlawya-brand',
      name: { en: 'Mawlawya — Cultural Brand Architecture', ar: 'المولوية — منظومة الهوية البصرية الصوفية' },
      discipline: 'design',
      subdiscipline: 'identity',
      subdisciplineName: { en: 'Brand Identity', ar: 'هويات بصرية' },
      agency: 'Mawlawya Heritage Project',
      client: 'Sufi Arts Association',
      year: '2024',
      featured: false,
      role: { en: 'Identity System Architect', ar: 'معماري منظومة الهوية' },
      deliverables: ['Calligraphic Brand Mark', 'Geometric Layout Grid', 'Cultural Exhibition Applications'],
      description: {
        en: 'Visual identity system inspired by the geometric circularity and transcendental spirit of Sufi Mawlawya traditions.',
        ar: 'تصميم منظومة هوية بصرية مستوحاة من حركة الدوران الدائرية والروحانية الفلسفية لطريقة المولوية التراثية.'
      },
      thinking: {
        challenge: {
          en: 'Modernizing centuries-old Islamic calligraphy motifs into a modern brand mark that scales effortlessly from exhibition banners to tiny digital icons.',
          ar: 'تطوير رموز الحروف والزخارف الصوفية المتوارثة إلى علامة تجارية حديثة تحتفظ بوقارها التراثي وتصلح للاستخدام على الشاشات الرقمية والمطبوعات العملاقة.'
        },
        decisions: {
          en: 'Extracted the pure centrifugal motion curve of the whirling dervish skirt to govern the kerning, curvature, and typographic balance of the identity emblem.',
          ar: 'استلهام المنحنى المركزي لدوران رداء الدرويش ليكون هو المحدد الهندسي لحركة الخطوط والتوازن التيبوغرافي في الشعار.'
        },
        outcome: {
          en: 'An iconic cultural mark celebrating Egyptian and regional heritage through pure geometric elegance.',
          ar: 'هوية بصرية معاصرة جمعت بين الأصالة الروحية والرقي التصميمي، نالت تقديراً واسعاً في الفعاليات التراثية.'
        }
      },
      images: [
        {
          src: 'assets/images/mawlawya/mawlawya-logo.jpg',
          thumb: 'assets/images/mawlawya/mawlawya-logo-thumb.jpg',
          alt: 'Mawlawya Brand Identity Mark',
          width: 1920,
          height: 1920
        },
        {
          src: 'assets/images/mawlawya/mawlawya-1.jpg',
          thumb: 'assets/images/mawlawya/mawlawya-1-thumb.jpg',
          alt: 'Mawlawya Ritual Stills in Context',
          width: 1920,
          height: 1080
        }
      ]
    },

    /* ════════════════════════════════════════════════════════════
       3. GRAPHIC DESIGN: BOOK & EDITORIAL
       ════════════════════════════════════════════════════════════ */
    {
      id: 'diwan-books',
      name: { en: 'Diwan — Book Architecture & Editorial Design', ar: 'دار ديوان — معمار أغلفة الكتب والتيبوغرافي' },
      discipline: 'design',
      subdiscipline: 'editorial',
      subdisciplineName: { en: 'Book & Editorial', ar: 'أغلفة ومطبوعات' },
      agency: 'Diwan Publishing',
      client: 'Diwan Editions',
      year: '2023',
      featured: true,
      role: { en: 'Editorial Book Designer & Typographer', ar: 'مصمم أغلفة الكتب وهندسة الخطوط' },
      deliverables: ['Cover Hierarchy Grid', 'Arabic/Latin Typographic Pairing', 'Physical Bookmark & Dust Jacket'],
      description: {
        en: 'Architectural book cover design systems, typography hierarchy, and bookmark mockups for literary publications.',
        ar: 'معمار أغلفة الكتب، هندسة الخطوط العربية واللاتينية، وفواصل القراءة لمطبوعات دار ديوان الأدبية.'
      },
      thinking: {
        challenge: {
          en: 'Creating a flexible design grid that unifies an entire catalog of diverse literary genres (novels, philosophy, poetry) under one recognizable publishing imprint.',
          ar: 'ابتكار شبكة تصميمية مرنة تستوعب عناوين أدبية وفلسفية متباينة وتوحدها تحت شخصية بصرية واحدة تعرف فوراً على أرفف المكتبات.'
        },
        decisions: {
          en: 'Established a strict 3-tier typographic hierarchy prioritizing author name, title, and publisher mark with generous negative space to let the paper stock breathe.',
          ar: 'تحديد تراتبية بصرية صارمة من ثلاثة مستويات (اسم الكاتب، العنوان، شعار الدار) مع ترك مساحات فراغ رحبة تمنح الغلاف فخامة وهدوءاً لافتاً.'
        },
        outcome: {
          en: 'A distinctive editorial design system that elevated book presentation, winning admiration from both authors and bibliophiles.',
          ar: 'منظومة أغلفة ذات بصمة بصرية لا تخطئها العين، جعلت إصدارات الدار تحفاً فنية يقتنيها القراء ويعتز بها المؤلفون.'
        }
      },
      images: [
        {
          src: 'assets/images/design/diwan-book-1.jpg',
          thumb: 'assets/images/design/diwan-book-1-thumb.jpg',
          alt: 'Diwan Book Architecture — Cover Series 01',
          width: 1920,
          height: 1440
        },
        {
          src: 'assets/images/design/diwan-book-2.jpg',
          thumb: 'assets/images/design/diwan-book-2-thumb.jpg',
          alt: 'Diwan Editorial Spread & Spine 02',
          width: 1920,
          height: 1440
        },
        {
          src: 'assets/images/design/diwan-book-3.jpg',
          thumb: 'assets/images/design/diwan-book-3-thumb.jpg',
          alt: 'Diwan Hardcover Architecture 03',
          width: 1920,
          height: 1440
        },
        {
          src: 'assets/images/design/diwan-book-4.jpg',
          thumb: 'assets/images/design/diwan-book-4-thumb.jpg',
          alt: 'Diwan Cover Layout Variations 04',
          width: 1920,
          height: 1440
        },
        {
          src: 'assets/images/design/diwan-bookmark.jpg',
          thumb: 'assets/images/design/diwan-bookmark-thumb.jpg',
          alt: 'Diwan Custom Cardboard Bookmark Mockup',
          width: 1920,
          height: 1280
        }
      ]
    },

    /* ════════════════════════════════════════════════════════════
       3. GRAPHIC DESIGN: KEY ART & POSTERS
       ════════════════════════════════════════════════════════════ */
    {
      id: 'diwan-keyart',
      name: { en: 'Cultural Key Art & Exhibition Posters', ar: 'البوسترات الثقافية والملتقيات الأدبية' },
      discipline: 'design',
      subdiscipline: 'posters',
      subdisciplineName: { en: 'Key Art & Posters', ar: 'بوسترات ومواد دعائية' },
      agency: 'Cultural Exhibition Projects',
      client: 'Literary Forums & Visual Arts',
      year: '2023 - 2024',
      featured: true,
      role: { en: 'Key Art Designer & Visual Concept Lead', ar: 'مصمم البوسترات والمفهوم البصري' },
      deliverables: ['Large-Format Exhibition Posters', 'Editorial Typography Compositions', 'Promotional Social Assets'],
      description: {
        en: 'Promotional posters and key art prints celebrating literary gatherings, visual heritage, and contemporary typographic dialogue.',
        ar: 'تصميم البوسترات الترويجية والمواد المطبوعة الخاصة بالملتقيات الثقافية والمعارض الفنية، مع معالجات بصرية غير تقليدية.'
      },
      thinking: {
        challenge: {
          en: 'Grabbing attention from a distance on city streets while communicating dense literary and cultural program schedules without visual clutter.',
          ar: 'جذب الانتباه من مسافات بعيدة في الشارع والمعارض، مع عرض معلومات الفعاليات الثقافية بوضوح تام دون إرباك الرائي بالتفاصيل.'
        },
        decisions: {
          en: 'Anchored the compositions with high-contrast architectural imagery and bold scale typographic numbers, balancing brutalist structure with elegant Arabic letterforms.',
          ar: 'الاعتماد على عناصر بصرية معمارية عالية التباين كخلفية حاسمة، وموازنتها بكتل نصية عربية ذات طابع هندسي حديث يفرض حضوره بقوة.'
        },
        outcome: {
          en: 'A memorable series of cultural posters that functioned both as effective event promotion and as collectable graphic art prints.',
          ar: 'سلسلة بوسترات مميزة نجحت في الترويج للملتقيات وتحولت في ذاتها إلى أعمال فنية اقتناها عشاق التصميم والتيبوغرافي.'
        }
      },
      images: [
        {
          src: 'assets/images/design/diwan-poster-1.jpg',
          thumb: 'assets/images/design/diwan-poster-1-thumb.jpg',
          alt: 'Cultural Forum Key Art 01',
          width: 1358,
          height: 1920
        },
        {
          src: 'assets/images/design/diwan-poster-2.jpg',
          thumb: 'assets/images/design/diwan-poster-2-thumb.jpg',
          alt: 'Exhibition Promotional Poster 02',
          width: 1357,
          height: 1920
        },
        {
          src: 'assets/images/design/keyart-editorial.jpg',
          thumb: 'assets/images/design/keyart-editorial-thumb.jpg',
          alt: 'Typographic Key Art Composition 03',
          width: 1357,
          height: 1920
        }
      ]
    }
  ]
};
