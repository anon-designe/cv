/* Toggle Style Switcher */

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
const styleSwitcher = document.querySelector('.style-switcher');

styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});

window.addEventListener('scroll', () => {
    if(styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
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
}

/* Dark/Light Mode */

const dayNight = document.querySelector('.day-night');

function setDayNightIcon() {
    const icon = dayNight.querySelector('i');
    if (document.body.classList.contains('dark')) {
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

dayNight.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    setDayNightIcon();
});

window.addEventListener('load', setDayNightIcon);

/* Typing Animation */

var typed = new Typed('.typing', { strings: ["Web Designer", "Web Developer", "Graphic Designer", "Software and hardware"], typeSpeed: 100, backSpeed: 80, loop: true })

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

/* Activating Mobile Menu */

const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', () => { asideSectionTogglerBtn(); })

function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for(let i = 0; i < totalSection; i++) { allSection[i].classList.toggle('open'); }
}

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