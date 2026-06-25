/* ====================================================================
   ملف بيانات المشاريع - القلب النابض للموقع
   ====================================================================

   هذا الملف هو المكان الوحيد الذي تحتاج تعديله لإضافة مشروع جديد.
   كل مشروع يحتوي على نسختين: عربي (ar) وإنجليزي (en) لكل حقل نصي.

   كيف تضيف مشروع جديد؟
   ----------------------
   1. اكتب وصف مشروعك بالعربي فقط وأرسله لي (لـ Claude) في المحادثة
   2. سأقوم بترجمته وإعطائك البلوك الكامل (عربي + إنجليزي) جاهزاً
   3. انسخ البلوك ولزقه داخل المصفوفة المناسبة بالأسفل
   4. احفظ الملف... وخلاص! المشروع سيظهر تلقائياً في الصفحتين العربية والإنجليزية.

   ملاحظة: الحقول التي ليست نصاً (الصور، الأدوات، الروابط) لا تحتاج ترجمة،
   فهي نفسها في اللغتين.
   ==================================================================== */


/* ====================================================================
   1) مشاريع التسويق الرقمي (Marketing Projects)
   ====================================================================
   تظهر في صفحة marketing.html (وen/marketing.html)
   عند الضغط عليها تفتح صفحة تفاصيل كاملة (project-detail.html)

   شرح كل حقل:
   - id              → معرّف فريد بالإنجليزي بدون مسافات (نفسه في اللغتين)
   - title           → { ar, en } عنوان المشروع
   - shortDescription→ { ar, en } جملة أو جملتين تظهر في الكارت
   - thumbnail       → مسار صورة الغلاف (نفسه في اللغتين)
   - tools           → قائمة الأدوات (نفسها في اللغتين، أسماء برامج عادة)
   - challenge       → { ar, en } ما هي المشكلة/الهدف؟
   - solution        → { ar, en } ما هو الحل المقدَّم؟
   - results         → { ar: [...], en: [...] } قائمة نتائج بالأرقام إن أمكن
   - gallery         → قائمة صور متعددة (نفسها في اللغتين)
   - externalLink    → رابط خارجي اختياري، أو null
   ==================================================================== */

const marketingProjects = [
    {
        id: "deer-store-launch",
        title: {
            ar: "إطلاق متجر Deer Store",
            en: "Deer Store Launch Campaign"
        },
        shortDescription: {
            ar: "خطة تسويقية متكاملة لإطلاق متجر أزياء نسائية في مدينة السادات",
            en: "A complete marketing strategy for launching a women's fashion store in Sadat City"
        },
        thumbnail: "assets/images/marketing/deer-thumb.jpg",
        tools: ["Meta Ads Manager", "Canva", "Meta Business Suite"],
        challenge: {
            ar: "متجر جديد في سوق محلي مزدحم بالمنافسين، يحتاج لبناء حضور رقمي من الصفر وجذب أول قاعدة عملاء حقيقية.",
            en: "A new store entering a competitive local market, needing to build a digital presence from scratch and attract its first real customer base."
        },
        solution: {
            ar: "تم بناء استراتيجية محتوى متكاملة على فيسبوك وإنستجرام، مع إعداد حملات إعلانية مدفوعة مستهدفة بدقة للجمهور المحلي، بالإضافة إلى تصميم تقويم محتوى شهري.",
            en: "Built a complete content strategy across Facebook and Instagram, set up precisely targeted paid ad campaigns for the local audience, and designed a monthly content calendar."
        },
        results: {
            ar: [
                "زيادة المتابعين بنسبة ملحوظة خلال أول شهر",
                "تحقيق أول مبيعات فعلية من خلال الحملات المدفوعة",
                "بناء هوية بصرية متماسكة عبر كل المنصات"
            ],
            en: [
                "Notable follower growth within the first month",
                "First real sales achieved through paid campaigns",
                "Consistent visual identity built across all platforms"
            ]
        },
        gallery: [
            "assets/images/marketing/deer-gallery-1.jpg",
            "assets/images/marketing/deer-gallery-2.jpg",
            "assets/images/marketing/deer-gallery-3.jpg"
        ],
        externalLink: null
    },

    // ⬇️⬇️ اكتب وصف مشروعك الجديد بالعربي وأرسله للـ Claude ليبني لك بلوك كامل هنا ⬇️⬇️
];


/* ====================================================================
   2) مشاريع الفيديو والموشن جرافيك (Video Projects)
   ====================================================================
   تظهر في صفحة video.html (وen/video.html)
   عند الضغط عليها يفتح الفيديو مباشرة في نافذة منبثقة (Modal) — بدون صفحة تفاصيل

   شرح كل حقل:
   - id              → معرّف فريد بالإنجليزي
   - title           → { ar, en } عنوان الفيديو
   - shortDescription→ { ar, en } وصف مختصر لمحتوى الفيديو
   - thumbnail       → صورة مصغرة (اتركها "" لتُستخدم صورة يوتيوب تلقائياً)
   - youtubeId       → معرّف فيديو يوتيوب فقط (نفسه في اللغتين)
   - tools           → البرامج المستخدمة (نفسها في اللغتين)

   🎬 إزاي تجيب الـ youtubeId من رابط اليوتيوب؟
   ------------------------------------------------
   https://www.youtube.com/watch?v=dQw4w9WgXcQ   →  dQw4w9WgXcQ
   https://youtu.be/dQw4w9WgXcQ                  →  dQw4w9WgXcQ
   ==================================================================== */

const videoProjects =
 [
    {
        id: "video-placeholder-1",
        category: "video",
        niche: {
            ar: "موشن جرافيك",
            en: "Motion Graphics"
        },
        title: {
            ar: "اسم الفيديو هنا",
            en: "Video title here"
        },
        shortDescription: {
            ar: "وصف مختصر للفيديو وما يحتويه",
            en: "Short description of the video and its content"
        },
        thumbnail: "",
        youtubeId: "jNQXAC9IVRw", 
        tools: ["Premiere Pro", "After Effects"]
    },

    {
        id: "PureSoft_E-commerce-16-06-2026", // اسم فريد للفيديو بالإنجليزي
        category: "video",
        niche: { 
            ar: "ريلز تسويقي", // اسم النيتش (سيصنع زر فلترة علوي لوحده)
            en: "Promotional reels" 
        },
        title: { 
            ar: "إعلان متجر إلكتروني", 
            en: "E-commerce Ad" 
        },
        shortDescription: { 
            ar: "إعداد النصوص,انتقالات احترافية,إعداد صوتي احترافي", 
            en: "Editing, SFX design, typography animation" 
        },
        youtubeId: "5o__ybbrqPc", // 🔴 الـ ID الفعلي للفيديو من رابط يوتيوب بعد علامة (=)
        thumbnail: "", // اتركها فارغة تماماً وسيقوم الموقع بسحب غلاف اليوتيوب تلقائياً!
        tools: ["Premiere Pro", "CapCut"] // الأدوات المستخدمة
    },
];



/* ====================================================================
   3) المشاريع الهندسية (Engineering Projects)
   ====================================================================
   تظهر في صفحة engineering.html (وen/engineering.html)
   نفس حقول مشاريع التسويق تماماً، بالإضافة إلى:
   - githubLink → رابط الكود على GitHub (اختياري، أو null)
   ==================================================================== */

const engineeringProjects = [
    {
        id: "pdf-to-epub-converter",
        title: {
            ar: "محول PDF إلى EPUB مع دعم OCR",
            en: "PDF to EPUB Converter with OCR Support"
        },
        shortDescription: {
            ar: "أداة بايثون لتحويل الكتب العربية الممسوحة إلى صيغة EPUB قابلة للقراءة والتعديل",
            en: "A Python tool that converts scanned Arabic books into editable, readable EPUB format"
        },
        thumbnail: "assets/images/engineering/pdf-epub-thumb.jpg",
        tools: ["Python", "EasyOCR", "Tesseract", "CUDA / GPU Acceleration"],
        challenge: {
            ar: "كتب عربية كثيرة متوفرة فقط كملفات PDF ممسوحة (صور)، غير قابلة للبحث أو التعديل أو القراءة المريحة على القارئات الإلكترونية.",
            en: "Many Arabic books exist only as scanned PDF files (images), unsearchable, uneditable, and uncomfortable to read on e-readers."
        },
        solution: {
            ar: "تم بناء أداة بلغة بايثون تستخدم تقنية التعرف الضوئي على الحروف (OCR) مع دعم تسريع المعالجة عبر كرت الشاشة، لتحويل الصور إلى نصوص عربية دقيقة وتجميعها في ملف EPUB منسق.",
            en: "Built a Python tool using Optical Character Recognition (OCR) with GPU-accelerated processing, converting scanned images into accurate Arabic text and compiling it into a formatted EPUB file."
        },
        results: {
            ar: [
                "تحويل كتب كاملة من PDF ممسوح إلى EPUB قابل للبحث في دقائق",
                "دعم Fallback تلقائي بين أكثر من محرك OCR لزيادة الدقة",
                "استخدام شخصي متكرر لتحويل مكتبة كتب عربية"
            ],
            en: [
                "Converts full scanned PDF books into searchable EPUB in minutes",
                "Automatic fallback between multiple OCR engines for higher accuracy",
                "Used repeatedly to convert a personal Arabic book library"
            ]
        },
        gallery: [
            "assets/images/engineering/pdf-epub-gallery-1.jpg"
        ],
        githubLink: null,
        externalLink: null
    },

    // ⬇️⬇️ اكتب وصف مشروعك الجديد بالعربي وأرسله للـ Claude ليبني لك بلوك كامل هنا ⬇️⬇️
];


/* ====================================================================
   4) دوال مساعدة (لا تحتاج لتعديل هذا الجزء أبداً)
   ==================================================================== */

// البحث عن مشروع بالـ ID (تستخدمه صفحة project-detail.html)
function findProjectById(id) {
    const allProjects = [...marketingProjects, ...engineeringProjects];
    return allProjects.find(project => project.id === id) || null;
}

// جلب صورة مصغرة من يوتيوب تلقائياً عند عدم توفر thumbnail مخصص
function getYoutubeThumbnail(youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

// دالة مساعدة لاستخراج النص الصحيح حسب اللغة الحالية
// مثال: getText(project.title, "ar") أو getText(project.title, "en")
// لو النص غير موجود باللغة المطلوبة، يرجع النسخة العربية كـ fallback
function getText(field, lang) {
    if (!field) return "";
    if (typeof field === "string") return field; // حقل غير مترجم (نفسه بكل اللغات)
    return field[lang] || field["ar"] || "";
}
