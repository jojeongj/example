// 스와이프 슬라이더의 캐러셀 부분입니다.

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: true

});


var swiper = new Swiper(".sec6_carousel", {
    mousewheel: false,
    keyboard: true,
    slidesPerView: 7,
    autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 1000, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    loop: true,   // 슬라이드 반복 여부
    loopAdditionalSlides: 1,
    autoHeight: true,
    spaceBetween: -20,  
    breakpoints: { //반응형 조건 속성
        0:{
            slidesPerView: 1
        },
        300: { //640 이상일 경우
            slidesPerView: 2, //레이아웃 2열
        },
        640: { //640 이상일 경우
            slidesPerView: 2, //레이아웃 2열
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1600: {
            slidesPerView: 7,

        }
    }
});

