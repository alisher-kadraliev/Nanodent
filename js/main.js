// nav menu
let menuBtn = document.getElementById('menuBtn')
let subMenu = document.getElementById('subMenu')

function closeMenu() {
    subMenu.classList.remove('open')
    menuBtn.classList.remove('open')
}

menuBtn.addEventListener('mouseenter', () => {
    subMenu.classList.add('open')
    menuBtn.classList.add('open')
})

menuBtn.addEventListener('mouseleave', closeMenu)

subMenu.addEventListener('mouseenter', () => {
    menuBtn.classList.add('open')
    subMenu.classList.add('open')
})
subMenu.addEventListener('mouseleave', closeMenu)

// mobile
let mobileMenuBtn = document.getElementById('mobile-menu-btn')
let mobileMenu = document.getElementById('mobile-menu')

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mb-open')
})
// mobile
let closeBtnNav = document.getElementById('closeBtnNav')
let mbContent = document.getElementById('mbContent')
let openBtnNav = document.getElementById('openBtnNav')
closeBtnNav.addEventListener('click', () => {
    mbContent.classList.remove('show')
})
openBtnNav.addEventListener('click', () => {
    mbContent.classList.add('show')
})
// nav menu end



// sliders
let swiperTreatment = new Swiper('.swiper-treatment', {
    spaceBetween: 20,
    slidesPerView: 3,
    autoplay: {
        delay: 7000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1080: {
            slidesPerView: 3,
        },
        760: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
})

let swiperGallery = new Swiper('.swiper-gallery', {
    spaceBetween: 20,
    slidesPerView: 3,
    autoplay: {
        delay: 7000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1080: {
            slidesPerView: 3,
        },
        760: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
})

let swiperExperts = new Swiper('.swiper-experts', {
    spaceBetween: 30,
    slidesPerView: 3,
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 40,
        modifier: 9,
        slideShadows: false,
    },
    center: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1080: {
            slidesPerView: 3,
        },
        760: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
})


$(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox({
        loop: true, // Enable looping through the gallery
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const input1 = document.querySelector("#phone");
    const input2 = document.querySelector("#phonefooter");

    window.intlTelInput(input1, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.12/build/js/utils.js",
        initialCountry: "us"
    });

    window.intlTelInput(input2, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.12/build/js/utils.js",
        initialCountry: "us"
    });
});
