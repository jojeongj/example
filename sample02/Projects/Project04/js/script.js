$(document).ready(function(){
      
    // $('button').click(function(){
    //   $(this).next($('#main_menu')).slideToggle('slow');
    // })
    
    $('#main_menu>li:nth-child(3)>ul').slideUp('fast');

    $('#toggle').on('click' , function(e){
        e.preventDefault();
        const nav = $("nav").toggleClass("on");
    $(this).toggleClass('on')
    $("#main_menu").toggleClass('on');

    }) // button 클릭시  button 과 ul#maun_menu 에 toggle 형식으로  class 'on' 이 붙는다.

    // $('#main_menu > li > a').click(function(){
    // $(this).next($('.snd_menu')).slideToggle('fast');
    // })
    // $('.snd_menu > li > a').click(function(e){
    // e.stopPropagation();
    // $(this).next($('.trd_menu')).slideToggle('fast');
    // })

    // 버튼 클릭 시 색 변경
    $('#main_menu > li > a').click(function(){

        if($(this).hasClass('selec')) {
            $(this).removeClass('selec');
            $(this).next($('.snd_menu')).slideUp('fast')

        } else {
            $(this).addClass('selec');
            $(this).next($('.snd_menu')).slideDown('fast')
        }
    });

    $("#main_menu > li > a").blur(function() {
        $(this).removeClass('selec');
        // $(this).next($('.snd_menu')).slideUp('fast');
    })
    });

    //메뉴 클릭시 다른 메뉴 닫히게 
    $('#main_menu > li > a').click(function(){
    $('.snd_menu').not(this).slideUp('fast');
    })



    //    // 헤더 실행문
    //    window.addEventListener("scroll", function(){
    //     const header = this.document.querySelector("#webHeader");
    //     const change_Color = this.document.querySelector("#webHeader");
        
    //     header.classList.toggle("change", window.scrollY > 0);
    //     change_Color.classList.toggle("changecolor", window.scrollY > 0);
    // });

    




    // 드롭다운 실행문
    $(function() {
        const $firstMenu = $('#webGnb > ul'),
                    $header = $('#webHeader');

        $firstMenu.mouseenter(function() {
            $header.animate({height: '470px'}, 100);
        })
        .mouseleave(function() {
            $header.animate({height: '125px'}, 100);
        });
    });



    

    VanillaTilt.init(document.querySelectorAll(".aplication_container"), {
        max: 25,
        speed: 400,
        glare:  true,
        "max-glare": 1,
    });
    

    $(function(){
        $('.bxslider').bxSlider({
            mode: 'horizontal',
        //    auto:true,
        //    autoStart:true,
            speed: 30000,
        //    pause: 0,
        //     autoDelay: 0,
        //     autoDirection: 'next',
         //    autoplaySpeed: 1000,
            responsive: true,
            pager:false,
            loop:true,
            // touchEnabled: true,
            infiniteLoop:true,
            ticker: true,
            // moveSlides: 1,     // 슬라이드 이동시 개수
            slideWidth: 300,   // 슬라이드 너비
            minSlides: 2,      // 최소 노출 개수
            maxSlides: 13,      // 최대 노출 개수
        });
});

$(function(){
    $('.bxslider2').bxSlider({
        mode: 'horizontal',
        auto:true,
        autoStart:true,
        // speed: 30000,
    //    pause: 0,
        autoDelay: 0,
        autoDirection: 'next',
        autoplaySpeed: 10,
        responsive: true,
        pager:false,
        loop:true,
        // touchEnabled: true,
        infiniteLoop:true,
        // ticker: true,
        // moveSlides: 1,     // 슬라이드 이동시 개수
        slideWidth: 'auto',   // 슬라이드 너비
        minSlides: 1,      // 최소 노출 개수
        maxSlides: 1,      // 최대 노출 개수
    });
});

// $(function(){
//     $('#bxslider2').bxSlider({
//         mode:"horizontal",    // 가로 수평으로 슬라이드된다.
//             speed:500,        // 이동 속도를 설정한다.
//             pager:false,    // 현재 위치 페이지 표시 여부를 설정한다.
//             moveSlides:1,    // 슬라이드 이동 시 개수를 설정한다.
//             slideWidth:300,    // 슬라이드 너비를 설정한다.
//             minSlides:1,    // 최소 노출 개수를 설정한다.
//             maxSlides:1,    // 최대 노출 개수를 설정한다.
//             slideMargin:20, // 슬라이드 간의 간격을 설정한다.
//             auto:true,         // 자동으로 흐를지 여부를 설정한다.
//             autoHover:true, // 마우스오버 시 정지할지를 설정한다.
//             controls:false    // 이전 버튼, 다음 버튼 노출 여부를 설정한다.
//         });
// });

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
    // 640: {
    // slidesPerView: 2,
    // spaceBetween: 20,
    // },
    768: {
    slidesPerView: 2,
    spaceBetween: 40,
    },
    1300: {
    slidesPerView: 2,
    spaceBetween: 50,
    },
    },
});


