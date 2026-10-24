# دليل إضافة الصور والمشاريع الحقيقية | Content Replacement Guide

أهلاً يا يوسف، هذا الدليل يوضح لك كيف تستبدل العناصر التجريبية (Placeholders) بأعمالك الحقيقية وصورك بسهولة تامة وبدون كتابة أي كود معقد.

---

## 1. مجلدات الصور المقترحة (Asset Structure)

قم بإنشاء وتوزيع ملفاتك داخل مجلد `assets/images/` على النحو التالي:
- `assets/images/portrait/`: ضع هنا صورتك الشخصية (يفضل بصيغة عمودية 4:5 مثل `youssef-portrait.jpg`).
- `assets/images/cinematography/`: لقطات وإطارات أعمالك السينمائية (نسبة 2.39:1 أو 16:9).
- `assets/images/photography/`: صورك الفوتوغرافية (سواء Street أو Portraits أو Architecture).
- `assets/images/design/`: تصاميم البوسترات والهويات البصرية.

---

## 2. كيفية تعديل وتحديث المشاريع (ملف واحد فقط!)

كل محتوى الموقع مفصول في ملف واحد منظم:
📂 `assets/js/data.js`

### لتحديث أي مشروع سينمائي:
ابحث في الملف عن `cinematographyProjects` وقم بتعديل الحقول:
```javascript
{
  id: 'cine-01',
  title: {
    en: 'Real Project English Name',
    ar: 'اسم المشروع الحقيقي بالعربي'
  },
  category: {
    en: 'Narrative Film',
    ar: 'فيلم روائي'
  },
  year: '2024',
  role: {
    en: 'Camera Operator', // دورك الحقيقي المؤكد فقط
    ar: 'مشغل كاميرا'
  },
  specs: 'Arri Alexa Mini LF · Cooke Anamorphic /i',
  thumbnail: 'assets/images/cinematography/project-1-hero.jpg', // مسار صورتك
  synopsis: {
    en: 'Brief explanation of lighting and camera approach...',
    ar: 'شرح موجز لفلسفة الإضاءة وحركة الكاميرا...'
  }
}
```

### لتحديث بياناتك ووسائل التواصل:
في بداية الملف تحت `settings`:
- عدل البريد الإلكتروني `email`.
- رقم الواتساب `whatsapp`.
- روابط حساباتك على Vimeo, Instagram, Behance, IMDb.

---

## 3. تشغيل الموقع محلياً
الموقع مبني بتقنيات الويب القياسية (Pure HTML5 / Modern CSS / Vanilla JS):
- يمكنك فتح ملف `index.html` مباشرة بالنقر المزدوج في أي متصفح (Chrome, Safari, Edge, Firefox).
- لا تحتاج لأي برامج إضافية لتشغيله أو معاينته.
