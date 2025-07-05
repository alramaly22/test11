/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER HOME ===============*/
const backgrounds = [
    "assets/img/gallery-img-1.png",
    "assets/img/gallery-img-2.png",
    "assets/img/gallery-img-3.png"
];

let current = 0;

const currentBg = document.querySelector('.home__background');
const nextBg = document.querySelector('.home__background.next');

// تعيين أول صورة
currentBg.style.backgroundImage = `url(${backgrounds[current]})`;

function changeBackground() {
    const nextIndex = (current + 1) % backgrounds.length;

    nextBg.style.backgroundImage = `url(${backgrounds[nextIndex]})`;

    // عمل حركة السلايد
    nextBg.style.transform = 'translateX(0)';
    currentBg.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        // بعد الحركة، نسحب الصورة الجديدة لمكانها
        currentBg.style.backgroundImage = `url(${backgrounds[nextIndex]})`;

        // إعادة الإعدادات للوضع الطبيعي
        currentBg.style.transform = 'translateX(0)';
        nextBg.style.transform = 'translateX(100%)';

        current = nextIndex;
    }, 1000); // نفس مدة transition
}

// تشغيل التغيير كل 5 ثواني
setInterval(changeBackground, 5000);

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') :
        header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__swiper", {
    spaceBetween: 48,
    loop: true,
    slidesPerView: 'auto',
    grabCursor: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
        // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const swiper1 = new Swiper('#swiper1', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    autoplay: {
        delay: 3000, // الوقت بالمللي ثانية (3000 مللي ثانية = 3 ثوانٍ)
        disableOnInteraction: false,
    },
    breakpoints: {
        1150: {
            slidesPerView: 3,
        },
    }
});

const swiper2 = new Swiper('#swiper2', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    autoplay: {
        delay: 3000, // الوقت بالمللي ثانية (3000 مللي ثانية = 3 ثوانٍ)
        disableOnInteraction: false,
        reverseDirection: true, // لتحريك الشريط إلى اليسار
    },
    breakpoints: {
        1150: {
            slidesPerView: 3,
        },
    }
});

/*=============== DARK LIGHT THEME ===============*/
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hidden");
});

/*=============== SCROLL REVEAL ANIMATION ===============*/