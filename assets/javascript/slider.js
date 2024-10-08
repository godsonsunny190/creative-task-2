// BANNER SLIDER SCRIPT
var swiper = new Swiper(".hero_swiper", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-unique",
        prevEl: ".swiper-button-prev-unique",
    },
});

// EVENT SLIDER
var swiper = new Swiper(".event_swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed: 1000,

    navigation: {
        nextEl: ".swiper-button-next-unique",
        prevEl: ".swiper-button-prev-unique",
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },

        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});