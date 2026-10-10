/* Toggle Style Switcher (buttons fixed in aside below language menu) */

const styleSwitcherToggle = document.querySelector('#asideStyleToggler') || document.querySelector('.style-switcher-toggler');
const styleSwitcher = document.querySelector('.style-switcher');

if (styleSwitcherToggle && styleSwitcher) {
    styleSwitcherToggle.addEventListener('click', () => {
        styleSwitcher.classList.toggle('open');
    });
}

window.addEventListener('scroll', () => {
    if(styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
});
// Inner sections scroll instead of window in this layout - close panel there too
document.querySelectorAll('.section').forEach(sec => {
    sec.addEventListener('scroll', () => {
        if (styleSwitcher && styleSwitcher.classList.contains('open')) {
            styleSwitcher.classList.remove('open');
        }
    });
});

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
    // Auto-hide the panel after choosing a theme (mobile & desktop)
    const sw = document.querySelector('.style-switcher');
    if (sw) sw.classList.remove('open');
}

/* Dark/Light Mode (button fixed in aside below language menu) */

const dayNight = document.querySelector('#asideDayNight') || document.querySelector('.day-night');
const dayNightFallback = document.querySelector('.day-night');

function setDayNightIcon() {
    const icons = [];
    const mainIcon = dayNight ? dayNight.querySelector('i') : null;
    if (mainIcon) icons.push(mainIcon);
    const fallbackIcon = dayNightFallback && dayNightFallback !== dayNight ? dayNightFallback.querySelector('i') : null;
    if (fallbackIcon) icons.push(fallbackIcon);
    icons.forEach(icon => {
        if (document.body.classList.contains('dark')) {
            icon.classList.add('fa-sun');
            icon.classList.remove('fa-moon');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

if (dayNight) {
    dayNight.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        setDayNightIcon();
    });
}
if (dayNightFallback && dayNightFallback !== dayNight) {
    dayNightFallback.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        setDayNightIcon();
    });
}

window.addEventListener('load', setDayNightIcon);

/* Language Switcher (EN / AR) */

const translations = {
en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "home.hello": "Hello, my name is",
    "home.name": "Younis Adel",
    "home.description": "I'm a web designer with extensive experience for over 10 years. My experience is to create website designs, graphic designs and much more...",
    "home.open_cv": "Open My CV",
    "home.website": "WebSite",
    "about.title": "About me",
    "about.subtitle_prefix": "I'm Younis Adel and",
    "about.subtitle_highlight": "Web Designer",
    "about.description": "As a web designer, I'm specialized in creating visually appealing websites that not only captivate visitors but also provide seamless navigation and functionality.  I continuously seek inspiration from current design trends and am committed to honing my skills through ongoing learning and experimentation. My ultimate goal is to craft digital experiences that engage users and drive results for my clients",
    "about.birthday": "Birthday",
    "about.age": "Age",
    "about.website": "Website",
    "about.email": "Email",
    "about.degree": "Degree",
    "about.degree_val": "CS",
    "about.phone": "Phone",
    "about.city": "City",
    "about.city_val": "Palestine",
    "about.freelance": "Freelance",
    "about.freelance_val": "Available",
    "about.hire": "Hire me!",
    "about.education": "Education",
    "about.edu1_title": "College of Computer Science",
    "about.edu1_desc": "There I learnt foundational courses and computer sciences fundamentals. In the institution, I chose my specialization in web-development that involves front-end and back-end technologies, user interface designs and content management systems.",
    "about.edu2_title": "College of Volunteer Teaching",
    "about.edu2_desc": "I dedicated myself to volunteer teaching, helping students and beginners learn computer science and web fundamentals. It enhanced my communication, mentoring and problem-solving skills while giving back to the community.",
    "about.experience": "Experience",
    "about.exp1_date": "2020 - Today",
    "about.exp1_title": "Senior Front-end Designer",
    "about.exp1_desc": "I can design complex software systems. My decisions impact scalability, maintainability, and overall system architecture. Also, I mentor less experienced team members, helping them grow and learn.",
    "about.exp2_title": "Junior Front-end Designer",
    "about.exp2_desc": "I learnt to code in an existing codebase, dive into the project and understanding its structure. Also I worked closely with senior software engineers that guided me, answered my questions and helped me grow.",
    "about.exp3_title": "Graphic Designer",
    "about.exp3_desc": "I can create logos, color schemes and typography for a brand's identity. Also I develop graphics for websites, social media and digital ads with applications that enhance user experience.",
    "services.title": "Services",
    "services.s1_title": "Web Design",
    "services.s1_desc": "I offer custom website designs, responsive design to ensure compatibility across devices, and UI/UX design to enhance user experience",
    "services.s2_title": "Graphic Design",
    "services.s2_desc": "I design logos, icons, illustrations, and other visual assets that enhance the website's branding and aesthetic appeal",
    "services.s3_title": "Digital Marketing",
    "services.s3_desc": "I build websites that enhances visual aesthetics, user experience, SEO, responsive design and mainly conversion optimization",
    "services.s4_title": "UI/UX Solutions",
    "services.s4_desc": "I offer custom research and design to increase your customer satisfaction and obtain higher conversion rates",
    "services.s5_title": "Brand Consultancy",
    "services.s5_desc": "I build brands through cultural insights & strategic vision. Custom crafted business solution",
    "services.s6_title": "Photography",
    "services.s6_desc": "I make high-quality photos of any category at a professional level.",
    "portfolio.title": "Portfolio",
    "portfolio.heading": "My Last Projects:",
    "portfolio.visit": "Visit Website",
    "portfolio.web1_title": "Life in Greece",
    "portfolio.web1_desc": "Guide about living in Greece with animations",
    "portfolio.web2_title": "TV Player",
    "portfolio.web2_desc": "Streaming platform, responsive on all devices",
    "portfolio.web3_title": "Islam Time",
    "portfolio.web3_desc": "Prayer times with location-based calculation",
    "portfolio.web4_title": "TFT Company",
    "portfolio.web4_desc": "Delivery services website across Greece",
    "portfolio.web5_title": "Panda",
    "portfolio.web5_desc": "Modern web experience with clean navigation",
    "portfolio.web6_title": "Falcon X",
    "portfolio.web6_desc": "Software solutions for Windows & Android",
    "contact.title": "Contact",
    "contact.question": "Any Question? Contact us!",
    "contact.subtitle": "I'm at your service",
    "contact.call": "Call us on",
    "contact.address": "Address",
    "contact.address_val": "Athens, Greece",
    "contact.email": "Email",
    "contact.website": "Website",
    "contact.follow": "You can follow me or contact me on the following platforms:",
    "theme.colors": "Theme Colors",
    "typing.words": ["Web Designer", "Web Developer", "Graphic Designer", "Software and hardware"]
},
ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من أنا",
    "nav.services": "خدماتي",
    "nav.portfolio": "أعمالي",
    "nav.contact": "اتصل بي",
    "home.hello": "مرحباً، اسمي",
    "home.name": "يونس عادل",
    "home.description": "أنا مصمم ويب بخبرة واسعة تتجاوز 10 سنوات. خبرتي في إنشاء تصاميم المواقع والتصاميم الجرافيكية والكثير غيرها...",
    "home.open_cv": "افتح سيرتي الذاتية",
    "home.website": "الموقع الإلكتروني",
    "about.title": "من أنا",
    "about.subtitle_prefix": "أنا يونس عادل و",
    "about.subtitle_highlight": "مصمم ويب",
    "about.description": "كمصمم ويب، أنا متخصص في إنشاء مواقع جذابة بصرياً لا تأسر الزوار فحسب، بل توفر تنقلاً سلساً ووظائف متكاملة. أستلهم باستمرار من أحدث اتجاهات التصميم وألتزم بتطوير مهاراتي عبر التعلم والتجربة المستمرة. هدفي النهائي هو صناعة تجارب رقمية تجذب المستخدمين وتحقق نتائج لعملائي",
    "about.birthday": "تاريخ الميلاد",
    "about.age": "العمر",
    "about.website": "الموقع",
    "about.email": "البريد الإلكتروني",
    "about.degree": "الشهادة",
    "about.degree_val": "علوم حاسب",
    "about.phone": "الهاتف",
    "about.city": "المدينة",
    "about.city_val": "فلسطين",
    "about.freelance": "العمل الحر",
    "about.freelance_val": "متاح",
    "about.hire": "وظّفني!",
    "about.education": "التعليم",
    "about.edu1_title": "كلية علوم الحاسب",
    "about.edu1_desc": "هناك تعلمت المقررات التأسيسية وأساسيات علوم الحاسب. وفي المؤسسة اخترت تخصصي في تطوير الويب الذي يشمل تقنيات الواجهات الأمامية والخلفية وتصاميم واجهات المستخدم وأنظمة إدارة المحتوى.",
    "about.edu2_title": "كلية التدريس التطوعي",
    "about.edu2_desc": "كرست نفسي للتدريس التطوعي، ومساعدة الطلاب والمبتدئين على تعلم علوم الحاسب وأساسيات الويب. وقد عزز ذلك مهاراتي في التواصل والإرشاد وحل المشكلات مع رد الجميل للمجتمع.",
    "about.experience": "الخبرة",
    "about.exp1_date": "2020 - حتى اليوم",
    "about.exp1_title": "مصمم واجهات أمامية أول",
    "about.exp1_desc": "أستطيع تصميم أنظمة برمجية معقدة. قراراتي تؤثر على قابلية التوسع والصيانة وهيكل النظام العام. كما أقوم بإرشاد أعضاء الفريق الأقل خبرة ومساعدتهم على النمو والتعلم.",
    "about.exp2_title": "مصمم واجهات أمامية مبتدئ",
    "about.exp2_desc": "تعلمت البرمجة ضمن قاعدة كود موجودة، والتعمق في المشروع وفهم هيكله. كما عملت عن قرب مع مهندسي برمجيات كبار وجهوني وأجابوا عن أسئلتي وساعدوني على النمو.",
    "about.exp3_title": "مصمم جرافيك",
    "about.exp3_desc": "أستطيع إنشاء الشعارات وأنظمة الألوان والخطوط للهوية البصرية للعلامة. كما أطور رسوميات للمواقع والتواصل الاجتماعي والإعلانات الرقمية بتطبيقات تعزز تجربة المستخدم.",
    "services.title": "الخدمات",
    "services.s1_title": "تصميم المواقع",
    "services.s1_desc": "أقدم تصاميم مواقع مخصصة، وتصميماً متجاوباً لضمان التوافق مع جميع الأجهزة، وتصميم UI/UX لتعزيز تجربة المستخدم",
    "services.s2_title": "التصميم الجرافيكي",
    "services.s2_desc": "أصمم الشعارات والأيقونات والرسوم التوضيحية والأصول البصرية الأخرى التي تعزز هوية الموقع وجاذبيته",
    "services.s3_title": "التسويق الرقمي",
    "services.s3_desc": "أبني مواقع تعزز الجماليات البصرية وتجربة المستخدم وتحسين محركات البحث والتصميم المتجاوب وتحسين التحويل أساساً",
    "services.s4_title": "حلول UI/UX",
    "services.s4_desc": "أقدم أبحاثاً وتصاميم مخصصة لزيادة رضا عملائك والحصول على معدلات تحويل أعلى",
    "services.s5_title": "استشارات العلامة التجارية",
    "services.s5_desc": "أبني العلامات عبر رؤى ثقافية ورؤية استراتيجية. حلول أعمال مصممة خصيصاً",
    "services.s6_title": "التصوير الفوتوغرافي",
    "services.s6_desc": "ألتقط صوراً عالية الجودة من أي فئة بمستوى احترافي.",
    "portfolio.title": "معرض الأعمال",
    "portfolio.heading": "آخر مشاريعي:",
    "portfolio.visit": "زيارة الموقع",
    "portfolio.web1_title": "الحياة في اليونان",
    "portfolio.web1_desc": "دليل العيش في اليونان مع حركات وأنيميشن",
    "portfolio.web2_title": "مشغل التلفاز",
    "portfolio.web2_desc": "منصة بث متجاوبة مع جميع الأجهزة",
    "portfolio.web3_title": "أوقات الإسلام",
    "portfolio.web3_desc": "مواقيت الصلاة حسب الموقع بدقة",
    "portfolio.web4_title": "شركة TFT",
    "portfolio.web4_desc": "موقع خدمات توصيل في جميع أنحاء اليونان",
    "portfolio.web5_title": "باندا",
    "portfolio.web5_desc": "تجربة ويب عصرية بتنقل سلس",
    "portfolio.web6_title": "فالكون X",
    "portfolio.web6_desc": "حلول برمجية للويندوز والأندرويد",
    "contact.title": "اتصل بي",
    "contact.question": "عندك أي سؤال؟ تواصل معنا!",
    "contact.subtitle": "أنا في خدمتك",
    "contact.call": "اتصل بنا على",
    "contact.address": "العنوان",
    "contact.address_val": "أثينا، اليونان",
    "contact.email": "البريد الإلكتروني",
    "contact.website": "الموقع الإلكتروني",
    "contact.follow": "يمكنك متابعتي أو التواصل معي عبر المنصات التالية:",
    "theme.colors": "ألوان المظهر",
    "typing.words": ["مصمم ويب", "مطور ويب", "مصمم جرافيك", "برمجيات وأجهزة"]
}
};

let currentLang = localStorage.getItem('site-lang') || 'en';
let typed = null;

function initTyped(lang) {
    if (typed) { typed.destroy(); }
    const el = document.querySelector('.typing');
    if (el) { el.textContent = ''; }
    typed = new Typed('.typing', {
        strings: translations[lang]['typing.words'],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('site-lang', lang);

    // Close floating panels first so they don't animate across the screen on dir change
    const sw = document.querySelector('.style-switcher');
    if (sw) sw.classList.remove('open');
    const _dropup = document.getElementById('langDropup');
    if (_dropup) _dropup.classList.remove('open');
    const _toggle = document.getElementById('langToggle');
    if (_toggle) _toggle.setAttribute('aria-expanded', 'false');

    // Disable all transitions/animations during dir flip to avoid unprofessional sliding
    document.documentElement.classList.add('no-anim');

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.title = lang === 'ar' ? 'Anon Design - السيرة الذاتية' : 'Anon Design - CV';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    const langCurrent = document.querySelector('.lang-current');
    if (langCurrent) { langCurrent.textContent = lang === 'ar' ? 'عربي' : 'EN'; }

    // Force reflow then re-enable transitions so the dir flip applies instantly
    void document.body.offsetWidth;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => document.documentElement.classList.remove('no-anim'));
    });
    setTimeout(() => document.documentElement.classList.remove('no-anim'), 100);

    initTyped(lang);
}

/* Dropup toggle (opens upward) */
const langDropup = document.getElementById('langDropup');
const langToggle = document.getElementById('langToggle');

if (langToggle && langDropup) {
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = langDropup.classList.toggle('open');
        langToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
        if (!langDropup.contains(e.target)) {
            langDropup.classList.remove('open');
            langToggle.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            langDropup.classList.remove('open');
            langToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
        if (langDropup) langDropup.classList.remove('open');
        if (langToggle) langToggle.setAttribute('aria-expanded', 'false');
    });
});

window.addEventListener('DOMContentLoaded', () => setLanguage(currentLang));

/* Typing Animation */

/* Changing Aside Active Link */

const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function(){
            removeBackSection();
            for(let j = 0; j < totalNavList; j++) { 
                if(navList[j].querySelector('a').classList.contains('active')) { addBackSection(j);/*allSection[j].classList.add('back-section');*/ }
                navList[j].querySelector('a').classList.remove('active'); }
        this.classList.add('active');
        showSection(this);

        if(window.innerWidth < 1200) { asideSectionTogglerBtn(); }
    })
}

function addBackSection(num) { allSection[num].classList.add('back-section'); }

function removeBackSection(){
    for( let i = 0; i < totalSection; i++){ allSection[i].classList.remove('back-section'); }
}

function showSection(element){
    for( let i = 0; i < totalSection; i++){ allSection[i].classList.remove('active'); }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector('#' + target).classList.add('active');

    triggerSectionAnimations(target);
}

function updateNav(element){
    for(let i = 0; i < totalNavList; i++){
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) { navList[i].querySelector('a').classList.add('active'); }
        
    }
}

document.querySelector('.hire-me').addEventListener('click', function(){
    const sectionIndex = this.getAttribute('data-section-index');
    /*console.log(sectionIndex);*/
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

/* Activating Mobile Menu - overlay drawer with backdrop */

const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');
const asideBackdrop = document.getElementById('asideBackdrop');

navTogglerBtn.addEventListener('click', () => { asideSectionTogglerBtn(); })

function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    document.body.classList.toggle('menu-open', aside.classList.contains('open'));
    for(let i = 0; i < totalSection; i++) { allSection[i].classList.toggle('open'); }
}

function closeMobileMenu(){
    aside.classList.remove('open');
    navTogglerBtn.classList.remove('open');
    document.body.classList.remove('menu-open');
    for(let i = 0; i < totalSection; i++) { allSection[i].classList.remove('open'); }
}

if (asideBackdrop) {
    asideBackdrop.addEventListener('click', closeMobileMenu);
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aside.classList.contains('open')) closeMobileMenu();
});

/* Services Animation */
const serviceItems = document.querySelectorAll('.service .service-item');

function animateServiceItems() {
    serviceItems.forEach((item, index) => {
        item.classList.remove('animate');
        setTimeout(() => {
            item.classList.add('animate');
        }, index * 200);
    });
}

/* Portfolio Animation */
const portfolioItems = document.querySelectorAll('.portfolio .portfolio-item');

function animatePortfolioItems() {
    portfolioItems.forEach((item, index) => {
        item.classList.remove('animate');
        setTimeout(() => {
            item.classList.add('animate');
        }, index * 200);
    });
}

/* About Section Animation */
const aboutContent = document.querySelector('.about .about-content');
const aboutText = document.querySelector('.about .about-text');
const personalInfo = document.querySelector('.about .personal-info');
const skills = document.querySelector('.about .skills');
const education = document.querySelector('.about .education');
const experience = document.querySelector('.about .experience');
const timelineItems = document.querySelectorAll('.about .timeline-item');
const skillItems = document.querySelectorAll('.about .skill-item');
const infoItems = document.querySelectorAll('.about .info-item');

function animateAboutSection() {
    aboutContent.classList.remove('animate');
    aboutText.classList.remove('animate');
    personalInfo.classList.remove('animate');
    skills.classList.remove('animate');
    education.classList.remove('animate');
    experience.classList.remove('animate');
    timelineItems.forEach(item => item.classList.remove('animate'));
    skillItems.forEach(item => item.classList.remove('animate'));
    infoItems.forEach(item => item.classList.remove('animate'));

    // Animate main content
    aboutContent.classList.add('animate');

    // Animate about text
    setTimeout(() => {
        aboutText.classList.add('animate');
    }, 200);

    // Animate personal info
    setTimeout(() => {
        personalInfo.classList.add('animate');
        infoItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 100);
        });
    }, 400);

    // Animate skills
    setTimeout(() => {
        skills.classList.add('animate');
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 100);
        });
    }, 600);

    // Animate education and experience
    setTimeout(() => {
        education.classList.add('animate');
        experience.classList.add('animate');
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 200);
        });
    }, 800);
}

function triggerSectionAnimations(target) {
    if (target === 'about') animateAboutSection();
    if (target === 'services') animateServiceItems();
    if (target === 'portfolio') animatePortfolioItems();
}