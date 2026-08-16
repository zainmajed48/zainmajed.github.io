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

const videoProjects = [
       {
        id: "PureSoft_E-commerce-16-06-2026", 
        category: "video",
        niche: { 
            ar: "ريلز تسويقي", 
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
        youtubeId: "5o__ybbrqPc", 
        thumbnail: "", 
        tools: ["Premiere Pro", "CapCut"] 
    },

    {
        id: "Faceless video - PFC Academy",
        category: "video",
        niche: {
            ar: "موشن جرافيك - بدون وجه",
            en: "Motion Graphics - Faceless"
        },
        title: {
            ar: "فيديو بدون وجه - PFC Academy",
            en: "Faceless video - PFC Academy"
        },
        shortDescription: {
            ar: "وصف مختصر للفيديو وما يحتويه",
            en: "Short description of the video and its content"
        },
        thumbnail: "",
        youtubeId: "ooT89iW-jrY", 
        tools: ["Premiere Pro"]
    }, // 💡 أضفنا الفاصلة هنا!

     {
        id: "PSA_bachaloria ad",
        category: "video",
        niche: {
            ar: "ريلز تسويقي",
            en: "Promotional reels"
        },
        title: {
            ar: "فتحت باب مادة البرمجة",
            en: "Programming starts at puresoft"
        },
        shortDescription: {
            ar: "مونتاج + تصوير + on-camera",
            en: "Editing + videography + On-camera"
        },
        thumbnail: "",
        youtubeId: "YHBEVqh7-mI", 
        tools: ["Premiere Pro", "After Effects"]
    }
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

    {
        id: "problem-wall",
        title: {
            ar: "حائط المشاكل",
            en: "The Problem Wall"
        },
        shortDescription: {
            ar: "منصة عصف ذهني جماعي لتجميع المشاكل اليومية المتكررة في البيئة المحيطة والتصويت عليها",
            en: "A collective brainstorming platform for crowdsourcing and voting on recurring everyday problems"
        },
        thumbnail: "assets/images/engineering/problem-wall-thumb.jpg",
        tools: ["Firebase", "JavaScript", "HTML/CSS", "Realtime Database"],
        challenge: {
            ar: "المشاكل المتكررة اللي بنواجهها في حياتنا اليومية (في الشغل، الدراسة، التواصل مع الناس) غالبًا بتفضل متفرقة جوه رأس كل واحد لوحده، من غير أي مكان يجمعها أو يوضح إيه المشاكل الأكتر انتشارًا وإلحاحًا بين الناس.",
            en: "Recurring problems people face daily (at work, in study, in communication) usually stay scattered in each person's head, with no shared space to surface which issues are actually the most common and pressing."
        },
        solution: {
            ar: "تم بناء منصة ويب بسيطة مربوطة بـ backend حي، بتسمح لأي حد يكتب مشكلة بيواجهها مع تصنيفها حسب المجال ومعدل تكرارها، وتظهر على حائط مشترك يقدر أي زائر يقرأه ويصوّت على المشاكل اللي حاسس إنها الأهم، بحيث المشاكل السابقة تفضل موجودة ومتراكمة مع كل مستخدم جديد.",
            en: "Built a lightweight web platform connected to a live backend, letting anyone submit a problem they're facing tagged by category and frequency. Submissions appear on a shared wall that any visitor can read and vote on, with past problems persisting and accumulating across users."
        },
        results: {
            ar: [
                "بيانات مشتركة بين كل زوار الرابط، وكل مشكلة سابقة بتفضل ظاهرة للمستخدمين الجدد",
                "نظام تصنيف وتصويت بسيط بيساعد في تمييز المشاكل الأكتر إلحاحًا",
                "أول تجربة لربط واجهة أمامية بـ backend حقيقي لتخزين بيانات مشتركة real-time"
            ],
            en: [
                "Shared data across all visitors, with every past problem persisting for new users",
                "Simple tagging and voting system to help surface the most pressing issues",
                "First hands-on experience connecting a frontend to a real backend for shared real-time data storage"
            ]
        },
        gallery: [
            "assets/images/engineering/problem-wall-gallery-1.jpg"
        ],
        githubLink: null,
        externalLink: "https://think-together-6c087.web.app/"
    },
    {
        id: "mzare3-ai-mvp",
        title: {
            ar: "مزارع.ai — MVP أولي لمنصة الاستشارات الزراعية",
            en: "mzare3.ai — Initial MVP for an Agricultural Advisory Platform"
        },
        shortDescription: {
            ar: "منصة ذكية بتحلل السوق وتساعد فلاحي شبين الكوم والمنوفية يقرروا يزرعوا إيه وإمتى عشان يتجنبوا خسارة تكدس المحاصيل",
            en: "A smart platform analyzing market data to help farmers in Shibin El-Kom and Monufia decide what and when to plant, avoiding losses from crop oversupply"
        },
        thumbnail: "assets/images/engineering/mzare3-ai-thumb.jpg",
        tools: ["JavaScript", "Google Apps Script", "Gemini API", "HTML/Tailwind CSS", "Vercel"],
        challenge: {
            ar: "الفلاحين في المنطقة بيزرعوا نفس المحصول في نفس الوقت لأنهم بيتبعوا العادة والموسم مش بيانات السوق الفعلية، وده بيسبب تكدس نفس المحصول وانهيار في السعر وقت الحصاد، وخسائر كبيرة رغم مجهود الزراعة نفسه.",
            en: "Farmers in the area tend to plant the same crop at the same time out of habit and seasonal convention rather than actual market data, causing oversupply of a single crop and price collapse at harvest, leading to major losses despite the effort of farming itself."
        },
        solution: {
            ar: "تم بناء MVP أولي لمنصة بتاخد بيانات بسيطة من الفلاح (القرية، المحصول المستهدف، ميعاد الزراعة) وتحلل وضع السوق المتوقع حوالين منطقته، وتديله توصية واضحة بالعربي: يكمل على نفس المحصول ولا يوزع المخاطرة على محصول بديل، مع تفسير لرؤية السوق وراء التوصية.",
            en: "Built an initial MVP that takes simple farmer input (village, target crop, planting month) and analyzes the expected local market situation, returning a clear Arabic-language recommendation on whether to proceed with the crop or diversify to spread risk, along with the market reasoning behind it."
        },
        results: {
            ar: [
                "نموذج تفاعلي شغال بياخد مدخلات حقيقية ويطلع توصية خلال ثواني",
                "واجهة بالكامل بالعربي المصرية موجهة لمزارعي شبين الكوم تحديدًا",
                "أول MVP فعلي لمشروع مزارع.ai قبل تطوير الـ backend الأوسع"
            ],
            en: [
                "Working interactive demo that takes real input and returns a recommendation within seconds",
                "Fully Egyptian-Arabic interface tailored specifically to Shibin El-Kom farmers",
                "First functional MVP of the mzare3.ai project ahead of building out the broader backend"
            ]
        },
        gallery: [
            "assets/images/engineering/mzare3-ai-gallery-1.jpg"
        ],
        githubLink: null,
        externalLink: "https://agri-consult-eight.vercel.app/"
    },
    {
        id: "capcut-to-srt-converter",
        title: {
            ar: "محول CapCut إلى SRT",
            en: "CapCut to SRT Converter"
        },
        shortDescription: {
            ar: "أداة بايثون بواجهة رسومية لتحويل ملفات ترجمة CapCut إلى صيغة SRT قياسية تستخدم في المونتاج",
            en: "A Python GUI tool that converts CapCut subtitle draft files into standard SRT format for use in video editing"
        },
        thumbnail: "assets/images/engineering/capcut-srt-thumb.jpg",
        tools: ["Python", "GUI (Drag & Drop)"],
        challenge: {
            ar: "ملفات الترجمة اللي بيصدرها CapCut بتكون بصيغة JSON خاصة بيه مش مدعومة في برامج المونتاج التانية زي Premiere Pro أو DaVinci Resolve، وده بيصعّب نقل الترجمة الجاهزة بين البرامج المختلفة.",
            en: "Subtitle drafts exported by CapCut come in a proprietary JSON format that isn't supported by other editing software like Premiere Pro or DaVinci Resolve, making it hard to carry finished captions across tools."
        },
        solution: {
            ar: "تم بناء أداة بايثون بواجهة رسومية بسيطة تدعم السحب والإفلات، بتاخد ملف draft_content.json الخاص بـ CapCut وتحوله فورًا لملف SRT قياسي جاهز للاستخدام في أي برنامج مونتاج، وبتشتغل بالكامل offline من غير أي اتصال إنترنت.",
            en: "Built a Python tool with a simple drag-and-drop GUI that takes a CapCut draft_content.json file and instantly converts it into a standard SRT file ready for any editing software, running fully offline with no internet connection required."
        },
        results: {
            ar: [
                "توليد ملف SRT جاهز في أقل من ثانية بمجرد سحب الملف",
                "متوافقة مع أحدث تنسيقات JSON اللي بيصدرها CapCut",
                "استخدام شخصي فعلي في نقل ترجمات من CapCut لمشاريع المونتاج على Premiere Pro"
            ],
            en: [
                "Generates a ready-to-use SRT file in under a second via drag-and-drop",
                "Compatible with the latest CapCut JSON layout and styling formats",
                "Used in practice to carry captions from CapCut into Premiere Pro editing projects"
            ]
        },
        gallery: [],
        githubLink: "https://github.com/zainmajed48/CapCut-to-SRT-Converter",
        externalLink: null
    },
    {
        id: "secret-smart-piggybank",
        title: {
            ar: "Secret — حصالة ذكية بقفل رقمي",
            en: "Secret — Password-Protected Smart Piggy Bank"
        },
        shortDescription: {
            ar: "مشروع التخرج النهائي من Maker Diploma: حصالة ذكية بتتقفل برقم سري وبتنبه عند محاولات الفتح الخاطئة",
            en: "Final graduation project for the Maker Diploma: a smart piggy bank locked with a passcode and an alarm for failed unlock attempts"
        },
        thumbnail: "assets/images/engineering/secret-piggybank-thumb.jpg",
        tools: ["Arduino", "Electronics", "LCD Display", "Keypad", "Alarm System"],
        challenge: {
            ar: "الحصالات التقليدية مالهاش أي حماية حقيقية، وأي حد يقدر يفتحها أو يكسرها بسهولة، وده بيخليها مش مكان آمن فعلاً للاحتفاظ بمقتنيات أو مدخرات شخصية.",
            en: "Traditional piggy banks offer no real protection — anyone can open or break into them easily, making them an unreliable place to actually keep savings or personal valuables."
        },
        solution: {
            ar: "تم تصميم وبناء حصالة إلكترونية بقفل يعتمد على رقم سري بيتكتب من كيباد، مع شاشة LCD بتوضح حالة الحصالة للمستخدم عشان تكون التجربة سهلة وواضحة، بالإضافة لنظام إنذار بيتفعل تلقائيًا عند محاولات فتح خاطئة متكررة.",
            en: "Designed and built an electronic lockbox secured with a passcode entered via keypad, with an LCD screen giving the user clear feedback on the device's state, plus an alarm system that automatically triggers on repeated failed unlock attempts."
        },
        results: {
            ar: [
                "نظام قفل وفتح كامل بكيباد وشاشة LCD يعمل بشكل موثوق",
                "نظام إنذار فعّال ضد محاولات الفتح غير المصرح بها",
                "مشروع التخرج النهائي من برنامج Maker Diploma، بعرض توضيحي فيديو كامل"
            ],
            en: [
                "Complete, reliable keypad-and-LCD lock/unlock system",
                "Working alarm system that responds to unauthorized access attempts",
                "Final capstone project of the Maker Diploma program, with a full video demo"
            ]
        },
        gallery: [],
        githubLink: null,
        externalLink: "https://sites.google.com/san3atech.com/md25s-zaineldeen-faheem/final-project-showcase?authuser=0"
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
