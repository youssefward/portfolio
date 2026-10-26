/**
 * YOUSSEF WARD — PORTFOLIO CONTENT ENGINE
 * Multidisciplinary Designer & Art Director — With a Cinematic Eye
 * Structured by 3 Core Disciplines: Filmmaking & Cinema, Still Photography, Graphic Design & Key Art
 */

window.CONTENT = {
  meta: {
    name: { en: 'Youssef Ward', ar: 'يوسف ورد' },
    title: { en: 'Multidisciplinary Designer & Art Director — With a Cinematic Eye', ar: 'مصمم متعدد التخصصات ومدير فني — بعين سينمائية' },
    concept: { en: 'One Visual Mind. Multiple Expressions.', ar: 'عقل بصري واحد. تعبيرات متعددة.' },
    location: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
    availability: { en: 'Open to Opportunities & Strategic Collaborations', ar: 'متاح للتعاون الإبداعي والمشاريع الاستراتيجية' }
  },

  mark: 'assets/brand-mark.svg',
  portrait: 'assets/images/portrait/youssef-ward.jpg',
  email: 'youssef.ward88@gmail.com',
  phone: '+20 1155729978',
  cv: 'assets/youssef-ward-cv.pdf',
  portfolio: 'assets/youssef-ward-portfolio.pdf',
  linkedin: 'https://www.linkedin.com/in/yousef-ward-/',
  instagram: 'https://www.instagram.com/youssefward_/',
  behance: 'https://www.behance.net/youssef_Ward',
  vimeo: 'https://vimeo.com/1239369594?share=copy&fl=sv&fe=ci',

  bio: {
    en: 'I am a multidisciplinary designer and art director with an academic foundation in graphic design from the Faculty of Applied Arts, working with a distinct cinematic perspective. Guided by the principle that every visual decision is an intentional choice, my work spans brand identity systems, editorial typography, creative direction, and visual storytelling. Drawing from hands-on experience across film sets, studio lighting, and photography, I approach design with an acute awareness of composition, light, spatial structure, and visual atmosphere.',
    ar: 'مصمم متعدد التخصصات ومدير فني حاصل على دراسة وتأهيل أكاديمي في التصميم الجرافيكي من كلية الفنون التطبيقية، أعمل برؤية بصرية ذات حس سينمائي. ينطلق عملي من مبدأ أن كل قرار بصري هو خيار واعٍ ومقصود، ويمتد عبر تصميم منظومات الهوية البصرية، التيبوغرافي، الإخراج الفني، والسرد البصري. واستناداً إلى خبرة عملية في مواقع تصوير الأعمال الدرامية وإدارة الضوء والفوتوغرافيا، أتعامل مع التصميم بفهم عميق للتكوين، وتوزيع الضوء، والبناء المعماري للكادر، والأجواء البصرية.'
  },

  disciplines: [
    {
      id: 'filmmaking',
      number: '01',
      title: { en: 'Filmmaking & Cinema', ar: 'صناعة الأفلام والسينما' },
      subtitle: { en: 'Camera Department · Drama Sets · Visual Studies', ar: 'قسم الكاميرا · كواليس الدراما · تجارب سينمائية' },
      description: {
        en: 'Camera department experience and on-set visual documentation across television drama productions and independent cinematic studies, focused on camera movement, low-key lighting, and scene composition.',
        ar: 'مشاركة ميدانية في قسم الكاميرا وتوثيق بصري لكواليس كبرى الأعمال الدرامية والتلفزيونية وتجارب بصرية مستقلة، مع التركيز على حركة الكاميرا، توزيع الإضاءة المنخفضة، وبناء الكادر.'
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
        en: 'Studio and editorial fashion photography, directional light studies in portraiture, and quiet atmospheric street observations across Cairo.',
        ar: 'تصوير الأزياء التحريري والاستوديو، دراسات الضوء الموجه في البورتريه، والتصوير التوثيقي الهادئ لشوارع ومعمار القاهرة.'
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
        en: 'Visual identity systems, book cover typography, cultural packaging items, and promotional key art grounded in an Applied Arts design methodology.',
        ar: 'بناء الهويات البصرية، هندسة وتيبوغرافي أغلفة الكتب، المقتنيات الثقافية، والبوسترات الترويجية بمرجعية أكاديمية من الفنون التطبيقية.'
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
      role: { en: 'Camera Department / On-Set Stills (Role to be confirmed)', ar: 'قسم الكاميرا / توثيق موقع التصوير (قيد التأكيد النهائي للمسمى)' },
      deliverables: ['On-Set Production Stills', 'Lighting Documentation', 'Live-Action Scene Tracking'],
      description: {
        en: 'On-set camera department participation and production stills for the historical drama series El Ekhteyar, documenting action sequences, low-key lighting setups, and field composition.',
        ar: 'مشاركة ميدانية في قسم الكاميرا وتوثيق فوتوغرافي لكواليس وإطارات الملحمة الدرامية "الاختيار"، مع التركيز على اللقطات التكتيكية وتوزيع الإضاءة المنخفضة في مواقع التصوير.'
      },
      thinking: {
        challenge: {
          en: 'Documenting high-intensity combat setups under dust, low-light night setups, and rapid scene transitions while respecting principal camera lines and on-set protocol.',
          ar: 'التقاط إطارات متوازنة وسط مشاهد حية وتكتيكية متطلبة وسريعة، مع مراعاة خطوط حركة الكاميرا الرئيسية وتغيرات الإضاءة الليلية وغبار المعارك دون التأثير على سير التصوير.'
        },
        decisions: {
          en: 'Used low-angle framing to convey visual gravity, balancing directional highlights against background dust to maintain clean silhouette separation.',
          ar: 'اعتماد زوايا تصوير منخفضة لتعزيز هيبة الكادر، مع موازنة الإضاءات الجانبية والخلفية لفصل الأجسام بوضوح وسط بيئة مشبعة بالأتربة والدخان.'
        },
        outcome: {
          en: 'A focused visual archive documenting tactical blocking, atmospheric lighting setups, and character focus across demanding production locations.',
          ar: 'سلسلة صور وتوثيق بصري تركز على حركة وتوزيع الإضاءة المنخفضة، تكوين الكادرات الميدانية، والتقاط اللحظات التعبيرية للشخصيات في بيئات التصوير المتطلبة.'
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
      role: { en: 'Camera Assistant / Set Stills (Role to be confirmed)', ar: 'مساعد كاميرا / توثيق موقع التصوير (قيد التأكيد النهائي للمسمى)' },
      deliverables: ['Dramatic Scene Stills', 'Close-Up Framing', 'Low-Key Lighting Documentation'],
      description: {
        en: 'On-set camera department support and dramatic stills capturing intimate character confrontation and directional shadow falloff for the television series Cairo Kabul.',
        ar: 'مشاركة في قسم الكاميرا وتوثيق الإطارات الدرامية لمسلسل "القاهرة كابول"، مع التركيز على تباين الظل والنور وزوايا اللقطات المقربة في المشاهد الحوارية.'
      },
      thinking: {
        challenge: {
          en: 'Maintaining visual tension within enclosed dialogue rooms and confrontation spaces, requiring careful framing and controlled shadow depth.',
          ar: 'خلق حالة من التوتر البصري داخل غرف حوار مغلقة ومواجهات محتدمة، ما تطلب دقة في تأطير الكادر والتحكم في عمق الظلال خلف الشخصيات.'
        },
        decisions: {
          en: 'Focused on strong directional key lighting and deliberate static framing to direct viewer attention toward subtle facial expressions and eye lines.',
          ar: 'التركيز على مصدر ضوء موجه بزوايا حادة مع تقليل إضاءة الملء لتعميق الظلال، والاعتماد على ثبات الكادر لإبراز التعبيرات الدقيقة للوجوه.'
        },
        outcome: {
          en: 'High-contrast dramatic stills documenting dialogue scenes, directional light falloff, and intimate character framing.',
          ar: 'إطارات فوتوغرافية تركز على تباين الظل والنور، وتوزيع الإضاءة الموجهة، وتوثيق تفاصيل التعبير في المشاهد الحوارية المقربة.'
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
      role: { en: 'Studio Stills & Stage Production Support (Role to be confirmed)', ar: 'تصوير فوتوغرافي للاستوديو ومعاونة إنتاج (قيد التأكيد النهائي للمسمى)' },
      deliverables: ['Stage Performance Coverage', 'Celebrity Key Stills', 'Studio Lighting Documentation'],
      description: {
        en: 'Studio visual documentation and celebrity portrait capture on the set of the Sahranen broadcast show featuring prominent figures from Arab cinema and music.',
        ar: 'توثيق بصري وإضاءة استوديو لنجوم الفن والغناء في بلاطو برنامج "سهرانين" الترفيهي على قناة ON E.'
      },
      thinking: {
        challenge: {
          en: 'Balancing bright multi-camera broadcast lighting with portrait-focused framing during live musical performances and seated interviews.',
          ar: 'الموازنة بين الإضاءة العامة الساطعة المطلوبة للبث التلفزيوني متعدد الكاميرات، وبين التقاط كادرات بورتريه متزنة أثناء الفقرات الغنائية والحوارية.'
        },
        decisions: {
          en: 'Framed subjects using rim lighting and soft directional fill to separate performers cleanly from the luminous stage backdrop.',
          ar: 'استخدام إضاءات جانبية وخلفية لفصل الضيوف عن عمق المسرح، وضبط التكوين لإبراز حضور الفنانين وسط أضواء البلاطو.'
        },
        outcome: {
          en: 'Studio production stills documenting celebrity guests, stage lighting, and musical performances on set.',
          ar: 'توثيق فوتوغرافي لضيوف البرنامج، حركة الإضاءة المسرحية، والعروض الغنائية الحية داخل الاستوديو.'
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
      name: { en: 'Mawlawya — Graduation Film & Visual Study', ar: 'المولوية — فيلم مشروع التخرج والدراسة البصرية' },
      discipline: 'filmmaking',
      subdiscipline: 'visual-studies',
      subdisciplineName: { en: 'Graduation Project', ar: 'مشروع التخرج' },
      agency: 'Faculty of Applied Arts',
      client: 'Graduation Project',
      year: '2024',
      featured: true,
      role: { en: 'Director of Photography & Visual Concept (Graduation Project)', ar: 'تصوير سينمائي وفكرة بصرية (مشروع التخرج)' },
      deliverables: ['Continuous Motion Tracking', 'Kinetic Shutter Blur Study', 'Light Choreography Documentation'],
      video: 'https://vimeo.com/1239369594?share=copy&fl=sv&fe=ci',
      vimeoId: '1239369594',
      description: {
        en: 'Graduation project from the Faculty of Applied Arts: an authored cinematic visual study exploring rotational movement, garment rhythm, and warm directional light during traditional Sufi Mawlawya ceremonies.',
        ar: 'مشروع التخرج من كلية الفنون التطبيقية: دراسة بصرية سينمائية ترصد الحركة الدورانية، وتناغم الضوء مع ثنايا الرداء في طقوس المولوية التراثية، بالتركيز على مسارات الحركة والظل.'
      },
      thinking: {
        challenge: {
          en: 'Translating continuous circular motion into two-dimensional cinema while maintaining visual clarity and respect for the ritual context.',
          ar: 'ترجمة حركة الدوران الصوفي المستمرة إلى كادر سينمائي ثنائي الأبعاد، مع الحفاظ على وضوح التكوين ووقار الطقس الروحي.'
        },
        decisions: {
          en: 'Employed intentional motion blur across rotating garments while holding the subject face in stable framing, using warm amber lighting pools set against dark surroundings.',
          ar: 'توظيف انسيابية حركية ناعمة في ثنايا الرداء أثناء الدوران مع الحفاظ على ثبات ملامح الوجه، واستخدام إضاءة كهرمانية دافئة وسط خلفية داكنة.'
        },
        outcome: {
          en: 'A visual study documenting the kinetic rhythm, costume motion, and warm directional lighting of the whirling ceremony.',
          ar: 'دراسة بصرية توثق إيقاع الحركة الدورانية، وحركة الأقمشة، وتوزيع الإضاءة الدافئة أثناء طقوس الدوران الصوفي.'
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
      name: { en: 'Clove Restaurant — Culinary & Fine Dining', ar: 'مطعم Clove — تصوير الأطعمة وفنون الطهي' },
      discipline: 'photography',
      subdiscipline: 'fashion',
      subdisciplineName: { en: 'Commercial & Culinary', ar: 'تصوير تجاري وأطعمة' },
      agency: 'Clove Restaurant',
      client: 'Clove Restaurant & Lounge',
      year: '2023',
      featured: true,
      role: { en: 'Food & Beverage Photographer', ar: 'تصوير أطعمة ومشروبات' },
      deliverables: ['Gourmet Plating Stills', 'Chef Technique Captures', 'Directional Food Lighting'],
      description: {
        en: 'High-contrast commercial food photography for Clove restaurant, capturing gourmet plating, fresh ingredients, and culinary craftsmanship under directional studio lighting.',
        ar: 'تصوير أطعمة احترافي عالي التباين لمطعم Clove، يوثق فنون تقديم الأطباق الراقية، المكونات الطازجة، وتكنيك الشيف تحت إضاءة استوديو موجهة.'
      },
      thinking: {
        challenge: {
          en: 'Capturing the rich textures, glazes, and steam of gourmet dishes under studio lights while maintaining appetizing color fidelity and sharp focus.',
          ar: 'إبراز الملامس الشهية، لمعان الصلصات، وتناسق ألوان المكونات الطازجة تحت إضاءة الاستوديو مع الحفاظ على حرارة وجودة الطبق التقديمي.'
        },
        decisions: {
          en: 'Used directional low-key key lighting with subtle bounce reflectors to accentuate sauce glazes, sear marks, and the organic textures of plated ingredients.',
          ar: 'توظيف إضاءة جانبية موجهة مع عواكس ناعمة لتعميق الظلال وإبراز تفاصيل الشواء، لمعان الصلصات، وتدرجات الألوان الطبيعية للأطباق.'
        },
        outcome: {
          en: 'A polished culinary photography series documenting gourmet steaks, pastas, and chef table preparations for Clove restaurant menu and promotional campaigns.',
          ar: 'سلسلة فوتوغرافية راقية توثق أطباق اللحوم والباستا ولمسات الشيف التقديمية، مخصصة لقائمة طعام وحملات مطعم Clove الترويجية.'
        }
      },
      images: [
        {
          src: 'assets/images/clove/clove-1.jpg',
          thumb: 'assets/images/clove/clove-1-thumb.jpg',
          alt: 'Clove Culinary — Steak Plating & Microgreens',
          width: 1920,
          height: 1280
        },
        {
          src: 'assets/images/clove/clove-2.jpg',
          thumb: 'assets/images/clove/clove-2-thumb.jpg',
          alt: 'Clove Beverage — Layered Citrus Cocktail',
          width: 1466,
          height: 1920
        },
        {
          src: 'assets/images/clove/clove-3.jpg',
          thumb: 'assets/images/clove/clove-3-thumb.jpg',
          alt: 'Clove Culinary — Chicken Penne Pasta',
          width: 1280,
          height: 1920
        },
        {
          src: 'assets/images/clove/clove-4.jpg',
          thumb: 'assets/images/clove/clove-4-thumb.jpg',
          alt: 'Clove Culinary — Pasta Flatlay & Sauces',
          width: 1280,
          height: 1920
        },
        {
          src: 'assets/images/clove/clove-5.jpg',
          thumb: 'assets/images/clove/clove-5-thumb.jpg',
          alt: 'Clove Beverage — Mint Garnish Cocktail',
          width: 1381,
          height: 1920
        },
        {
          src: 'assets/images/clove/clove-6.jpg',
          thumb: 'assets/images/clove/clove-6-thumb.jpg',
          alt: 'Clove Culinary — Grilled Steak Table Spread',
          width: 1920,
          height: 1280
        }
      ]
    },

    {
      id: 'clove-editorial-ii',
      name: { en: 'Clove Lounge — Craft Beverages & Atmosphere', ar: 'مطعم Clove — تصوير المشروبات المبتكرة وأجواء المكان' },
      discipline: 'photography',
      subdiscipline: 'fashion',
      subdisciplineName: { en: 'Commercial & Culinary', ar: 'تصوير تجاري وأطعمة' },
      agency: 'Clove Restaurant',
      client: 'Clove Restaurant & Lounge',
      year: '2024',
      featured: true,
      role: { en: 'Beverage Photographer & Art Direction', ar: 'تصوير مشروبات وتوجيه فني' },
      deliverables: ['Signature Cocktail Stills', 'Glassware Condensation Textures', 'Bar Atmosphere Lighting'],
      description: {
        en: 'Commercial beverage photography and art direction capturing Clove lounge’s signature layered cocktails, ice clarity, and ambient mood.',
        ar: 'تصوير تجاري للمشروبات وإخراج فني يوثق الكوكتيلات الابتكارية، نقاء الثلج وتكثف القطرات على الزجاج، وأجواء المكان المميزة في Clove.'
      },
      thinking: {
        challenge: {
          en: 'Highlighting liquid clarity, layered color gradients, and glass condensation droplets without reflections washing out the drink tones.',
          ar: 'إبراز طبقات السوائل الملونة وتدرجاتها، قطرات التكثف الباردة، وشفافية الزجاج دون انعكاسات عشوائية تشوش على لون المشروب.'
        },
        decisions: {
          en: 'Backlit the glassware with narrow rim lights to illuminate beverage gradients from within, using fresh citrus wheels and mint garnishes as textural contrast.',
          ar: 'إضاءة الكؤوس من الخلف بحواف ضوئية دقيقة لإبراز ألوان المشروب من الداخل، مع توظيف شرائح الليمون وأوراق النعناع الطازجة كعناصر تباين ملمسية.'
        },
        outcome: {
          en: 'A visual beverage series showcasing signature craft mocktails, ice textures, and atmospheric bar lighting for Clove lounge.',
          ar: 'سلسلة بصرية متكاملة تبرز تشكيلة المشروبات والعصائر الابتكارية، ملامس الثلج، والأجواء الضوئية المميزة لمطعم وبار Clove.'
        }
      },
      images: [
        { src: 'assets/images/clove2/clove2-1.jpg', thumb: 'assets/images/clove2/clove2-1-thumb.jpg', alt: 'Clove Signature Cocktail 01', width: 1466, height: 1920 },
        { src: 'assets/images/clove2/clove2-2.jpg', thumb: 'assets/images/clove2/clove2-2-thumb.jpg', alt: 'Clove Signature Cocktail 02', width: 1170, height: 1920 },
        { src: 'assets/images/clove2/clove2-3.jpg', thumb: 'assets/images/clove2/clove2-3-thumb.jpg', alt: 'Clove Signature Cocktail 03', width: 1144, height: 1920 },
        { src: 'assets/images/clove2/clove2-4.jpg', thumb: 'assets/images/clove2/clove2-4-thumb.jpg', alt: 'Clove Signature Cocktail 04', width: 1381, height: 1920 },
        { src: 'assets/images/clove2/clove2-5.jpg', thumb: 'assets/images/clove2/clove2-5-thumb.jpg', alt: 'Clove Signature Cocktail 05', width: 1381, height: 1920 },
        { src: 'assets/images/clove2/clove2-6.jpg', thumb: 'assets/images/clove2/clove2-6-thumb.jpg', alt: 'Clove Signature Cocktail 06', width: 1381, height: 1920 },
        { src: 'assets/images/clove2/clove2-7.jpg', thumb: 'assets/images/clove2/clove2-7-thumb.jpg', alt: 'Clove Signature Cocktail 07', width: 1392, height: 1920 },
        { src: 'assets/images/clove2/clove2-8.jpg', thumb: 'assets/images/clove2/clove2-8-thumb.jpg', alt: 'Clove Signature Cocktail 08', width: 1920, height: 1298 }
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
      role: { en: 'Fashion Photographer', ar: 'مصور أزياء تحريري' },
      deliverables: ['Couture Editorial Stills', 'High-Contrast Silhouette Framing', 'Garment Detail Documentation'],
      description: {
        en: 'Fashion photography for Egyptian designer Mohanad Kojak, featuring directional illumination, sculptural silhouette framing, and tailored garment details.',
        ar: 'تصوير أزياء لمجموعات المصمم مهند كوجاك، بإضاءة موجهة عالية التباين، وزوايا تبرز تفاصيل الخياطة الراقية والأقمشة المنسوجة.'
      },
      thinking: {
        challenge: {
          en: 'Documenting the theatrical and expressive aesthetic of Kojak designs while preserving structural tailoring and embroidery textures.',
          ar: 'التعبير عن الطابع التعبيري البارز لتصاميم كوجاك دون التضحية بالتفاصيل البنائية الدقيقة للتطريز وجودة الحياكة.'
        },
        decisions: {
          en: 'Focused directional light beams onto specific garment textures while letting background areas drop into shadow to emphasize sculptural cuts.',
          ar: 'تركيز مسارات الضوء الموجه على تفاصيل وخامات الأقمشة مع إبقاء الخلفية في عتمة محسوبة لإبراز المنحنيات الهندسية للثوب.'
        },
        outcome: {
          en: 'High-contrast editorial stills highlighting the sculptural silhouettes, embroidery details, and tailored textures of Kojak couture.',
          ar: 'لقطات تحريرية عالية التباين تبرز التفاصيل الهندسية للأزياء، دقة التطريز، وملامس الخياطة الراقية لتصاميم مهند كوجاك.'
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
      agency: 'Personal Studio Study',
      client: 'Independent Studio Series',
      year: '2023',
      featured: true,
      role: { en: 'Portrait Photographer (Personal Study)', ar: 'مصور بورتريه (دراسة شخصية)' },
      deliverables: ['Monochrome Portrait Stills', 'Directional Key Studies', 'Facial Geometry Framing'],
      description: {
        en: 'A personal studio portrait series exploring directional key lighting, deep shadow falloff, and subtle facial expression.',
        ar: 'دراسة بورتريه استوديو شخصية تركز على زوايا سقوط الضوء والظلال لإبراز الملامح والتعبير الإنساني.'
      },
      thinking: {
        challenge: {
          en: 'Creating compelling human portraits with minimal background elements, relying entirely on lighting angles to define facial planes.',
          ar: 'خلق بورتريه إنساني صريح بأقل عناصر ممكنة في الخلفية، والاعتماد الكلي على زاوية الضوء لتحديد ملامح الوجه.'
        },
        decisions: {
          en: 'Explored directional single-source lighting and shadow angles to accentuate facial planes and portrait expression.',
          ar: 'دراسة زوايا سقوط الضوء الأحادي والظلال لإبراز ملامح الوجه والتعبير الإنساني في البورتريه.'
        },
        outcome: {
          en: 'A personal studio portrait series focused on directional key lighting, facial planes, and monochrome contrast.',
          ar: 'سلسلة بورتريهات استوديو شخصية تركز على زاوية سقوط الضوء الموجه، تشريح الوجه، وتدرجات التباين الأحادي.'
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
      agency: 'Behind the Scenes Study',
      client: 'Studio Session Stills',
      year: '2024',
      featured: false,
      role: { en: 'Photographer (BTS & Studio Stills)', ar: 'فوتوغرافر (كواليس وتوثيق استوديو)' },
      deliverables: ['Studio Setup Documentation', 'Natural Reflected Fill Stills', 'Informal Pose Captures'],
      description: {
        en: 'Studio visual studies documenting lighting adjustments, unscripted model gestures, and the behind-the-scenes working process.',
        ar: 'دراسات بصرية داخل الاستوديو ترصد تعديلات الإضاءة، عفوية الحركة بين الأخذات، وحركة العمل خلف الكواليس.'
      },
      thinking: {
        challenge: {
          en: 'Documenting natural posture and informal expression between formal takes without interrupting the studio workflow.',
          ar: 'اصطياد اللحظات الانتقالية العفوية بين الأخذات الرسمية، حيث يتجلى التعبير الطبيعي دون مقاطعة سير العمل في الاستوديو.'
        },
        decisions: {
          en: 'Worked with ambient continuous lighting to permit fluid movement and spontaneous interaction in the studio space.',
          ar: 'الاعتماد على مصادر إضاءة مستمرة ناعمة تسمح بحرية حركية كاملة والتقاط اللحظات التلقائية.'
        },
        outcome: {
          en: 'A behind-the-scenes visual record documenting studio setup adjustments, lighting tests, and informal shooting moments.',
          ar: 'توثيق بصري لكواليس الاستوديو يوضح ضبط تجهيزات الإضاءة، التجارب الضوئية، وحركة العمل خلف الكواليس.'
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
      client: 'Independent Documentary Archive',
      year: '2023 - 2024',
      featured: true,
      role: { en: 'Documentary Photographer (Personal Series)', ar: 'مصور وثائقي (سلسلة شخصية)' },
      deliverables: ['Cityscape Architectural Stills', 'Dawn & Twilight Studies', 'Urban Geometry Framing'],
      description: {
        en: 'Personal documentary observations of Cairo’s evolving urban geography, dawn light transitions, and architectural forms amid metropolitan density.',
        ar: 'لقطات توثيقية شخصية لعمران وضواحي القاهرة، ومراقبة درجات ضوء الغسق والظلال وسكون الكادر وسط زخم المدينة.'
      },
      thinking: {
        challenge: {
          en: 'Observing the quieter moments and geometric lines of Cairo without relying on visual clichés or standard tourist angles.',
          ar: 'إبراز الجانب الساكن والخطوط الهندسية لمدينة القاهرة دون اللجوء إلى الصور النمطية أو الزوايا المألوفة.'
        },
        decisions: {
          en: 'Documented during blue hour and dawn, framing prominent structural intersections where architectural scale contrasts with small human silhouettes.',
          ar: 'التصوير خلال ساعات الفجر والغسق، وتأطير الخطوط الهندسية المعمارية بحيث تظهر الشخصيات كعناصر تؤكد مقياس وهيبة المكان.'
        },
        outcome: {
          en: 'A personal documentary series observing Cairo’s architectural forms, street geometry, and twilight light transitions.',
          ar: 'سلسلة توثيقية شخصية ترصد التكوينات المعمارية وهندسة شوارع القاهرة خلال تدرجات ضوء الغسق والفجر.'
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
      role: { en: 'Brand Identity Designer & Art Director', ar: 'مصمم هوية بصرية وتوجيه فني' },
      deliverables: ['Visual Identity Guidelines', 'Linen Tote Bag & Packaging', 'Stationery & Coaster Items'],
      description: {
        en: 'Brand identity system, stationery, and cultural merchandise for Diwan Publishing House, combining literary heritage with contemporary layout principles.',
        ar: 'تصميم الهوية البصرية الشاملة، المنظومة الطباعية والمقتنيات الثقافية (الحقيبة القماشية، الكوستر، وبطاقات الهوية) لدار ديوان للنشر.'
      },
      thinking: {
        challenge: {
          en: 'Creating a unified brand system that respects Diwan’s literary heritage while functioning effectively across modern lifestyle goods and stationery.',
          ar: 'صياغة هوية بصرية تحتفي بالمكانة الأدبية لدار ديوان، وفي الوقت نفسه تصلح للتطبيق العملي على المنتجات والمقتنيات الثقافية المعاصرة.'
        },
        decisions: {
          en: 'Designed a clean typographic grid balancing Arabic and Latin letterforms, applying the identity across tactile, natural materials including linen and uncoated paper.',
          ar: 'بناء شبكة تيبوغرافية متوازنة بين الحرفين العربي واللاتيني، وتطبيق عناصر الهوية على خامات طبيعية ملموسة مثل الكتان والورق غير المصقول.'
        },
        outcome: {
          en: 'A cohesive brand identity system applied across cultural merchandise, packaging items, coasters, and linen tote bags for Diwan.',
          ar: 'منظومة هوية بصرية متكاملة مطبقة عبر المنتجات الثقافية، أدوات التغليف، الكوسترات، والحقائب القماشية لدار ديوان.'
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
      agency: 'Faculty of Applied Arts',
      client: 'Graduation Project',
      year: '2024',
      featured: false,
      role: { en: 'Brand Identity Designer & Art Director (Graduation Project)', ar: 'تصميم الهوية البصرية والتوجيه الفني (مشروع التخرج)' },
      deliverables: ['Circular Brand Mark', 'Geometric Grid Layout', 'Exhibition Application Guidelines'],
      description: {
        en: 'Graduation project identity system derived from the geometry and meditative rotational movement of traditional Sufi Mawlawya whirling ceremonies.',
        ar: 'منظومة هوية بصرية لمشروع التخرج مستوحاة من الهندسة الدائرية وحركة الدوران التأملية لطقوس الطريقة المولوية التراثية.'
      },
      thinking: {
        challenge: {
          en: 'Translating classical calligraphic and geometric motifs into a functional brand mark that remains legible across both digital screens and large-scale exhibition displays.',
          ar: 'تطوير الرموز الحرفية والهندسية المتوارثة إلى علامة تجارية حديثة تحتفظ بوقارها وتظل واضحة المعالم على الشاشات الرقمية والمطبوعات الكبيرة.'
        },
        decisions: {
          en: 'Derived the emblem circular curve from the centrifugal motion of the whirling skirt, establishing geometric proportion and balanced typographic spacing.',
          ar: 'استلهام المنحنى الدائري للشعار من حركة دوران رداء الدرويش ليكون هو المحدد الهندسي لحركة الخطوط وتوازن المسافات التيبوغرافية.'
        },
        outcome: {
          en: 'A circular typographic brand mark and identity layout system derived from Sufi whirling motion geometry.',
          ar: 'شعار تيبوغرافي دائري وشبكة تصميمية للهوية مستلهمة من حركة الدوران الهندسي للطريقة المولوية.'
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
      role: { en: 'Book Cover & Editorial Designer', ar: 'مصمم أغلفة وتيبوغرافي' },
      deliverables: ['Cover Grid Architecture', 'Typographic Hierarchy Specs', 'Physical Bookmark Design'],
      description: {
        en: 'Editorial book cover design systems, typography hierarchy rules, and bookmark layouts for literary publications.',
        ar: 'معمار وتصميم أغلفة الكتب، قواعد التراتبية التيبوغرافية، وتصاميم فواصل القراءة للإصدارات الأدبية.'
      },
      thinking: {
        challenge: {
          en: 'Establishing a flexible cover grid that can adapt to different literary titles and genres while maintaining a recognizable visual family for the publishing house.',
          ar: 'ابتكار شبكة تصميمية مرنة لأغلفة الكتب تستوعب عناوين وأجناساً أدبية متعددة مع الحفاظ على هوية بصرية مألوفة لإصدارات الدار.'
        },
        decisions: {
          en: 'Built a three-tier typographic layout prioritizing author name, title, and publisher mark, using deliberate white space to give prominence to typography.',
          ar: 'بناء تراتبية بصرية من ثلاثة مستويات تراعي أولوية اسم المؤلف والعنوان وشعار الدار، مع استخدام الفراغ المدروس لإبراز التيبوغرافي.'
        },
        outcome: {
          en: 'A structured editorial cover design system establishing a clear visual hierarchy for book titles, author credits, and bookmark designs.',
          ar: 'منظومة تصميمية لأغلفة الكتب تحدد تراتبية بصرية واضحة لعناوين الإصدارات، أسماء المؤلفين، وتصاميم فواصل القراءة.'
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
      role: { en: 'Poster & Key Art Designer', ar: 'مصمم بوسترات ومواد إعلانية' },
      deliverables: ['Large-Format Exhibition Posters', 'Typographic Layout Compositions', 'Promotional Print Layouts'],
      description: {
        en: 'Promotional posters and key art designs created for literary gatherings, cultural forums, and typographic exhibitions.',
        ar: 'تصميم البوسترات الترويجية والمواد المطبوعة الخاصة بالملتقيات الثقافية، المعارض الفنية، وتجارب التيبوغرافي المعاصر.'
      },
      thinking: {
        challenge: {
          en: 'Designing exhibition posters that catch attention at a distance while organizing event program details legibly.',
          ar: 'تصميم بوسترات معارض تلفت الانتباه من مسافة بعيدة مع تنظيم تفاصيل وبرامج الفعاليات بصورة واضحة ومقروءة.'
        },
        decisions: {
          en: 'Anchored layouts with high-contrast architectural imagery and structural typographic numbers, paired with clean contemporary Arabic letterforms.',
          ar: 'الاعتماد على عناصر بصرية معمارية عالية التباين وأرقام تيبوغرافية بارزة، وموازنتها بخطوط عربية حديثة واضحة وموزونة.'
        },
        outcome: {
          en: 'A set of exhibition posters and promotional graphic layouts balancing bold typography, architectural imagery, and event information.',
          ar: 'مجموعة بوسترات معارض ومواد ترويجية توازن بين التيبوغرافي البارز، الصور المعمارية، وتفاصيل الفعاليات الثقافية.'
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
