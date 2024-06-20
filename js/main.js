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
    const inputmobile = document.querySelector("#phonemobile");

    window.intlTelInput(input1, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.12/build/js/utils.js",
        initialCountry: "us"
    });

    window.intlTelInput(input2, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.12/build/js/utils.js",
        initialCountry: "us"
    });
    window.intlTelInput(inputmobile, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.12/build/js/utils.js",
        initialCountry: "us"
    });
});


function cookieAcceptWhatsapp() {
    createCookie('wp-cookie', '1', 5);
}

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

var yesCookie = readCookie('p-cookie');
if (yesCookie == 1) {
    $('.cookie-policy').hide();
}


const firstSession = readCookie('wp-cookie')
$(document).on("click", "#whatsapp-popup", function () {

    $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
    setTimeout(function () {
        $('.loading-animation').hide();
        $('.whatsapp-message-wrapper').css("display", "flex").hide().fadeIn("slow");
    }, 1000)
});
$(document).on("click", ".close_whatsapp", function () {
    $("#whatsapp-chat")
    $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
});
if (firstSession == '1') {
    $('.whatsapp-wrapper').removeClass('show-whatsapp');
    $('.whatsapp-wrapper').addClass('hide-whatsapp');
} else {
    cookieAcceptWhatsapp();
    $('.whatsapp-wrapper').delay(10000).queue(function () {
        $(this).addClass("show-whatsapp");
        $(this).removeClass("hide-whatsapp");
    });
    $('.whatsapp-message-wrapper').delay(13000).queue(function () {
        $(this).addClass("di");
        $(this).removeClass("loading-animation");
    });
    $('.loading-animation').delay(13000).queue(function () {
        $(this).addClass("dinone");
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const formBtn = document.querySelector('.form-btn-mobile');
    const formBtnClose = document.querySelector('.close-btn-form');
    const formContent = document.querySelector('.uzmanina-sor-mobil');

    formBtn.addEventListener('click', function () {
        formContent.style.display = 'block';
        formContent.style.opacity = 1;
    });

    formBtnClose.addEventListener('click', function () {
        formContent.style.display = 'none';
        formContent.style.opacity = 0;
    });
    window.onclick = function (event) {
        if (event.target == formContent) {
            formContent.style.display = "none";
            formContent.style.opacity = 0;
        }
    }
});
Fancybox.bind("[data-fancybox]", {
});