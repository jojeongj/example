// 헤더 메뉴업

window.addEventListener("scroll", function(){
    var navgation = this.document.querySelector("nav");
    navgation.classList.toggle("upup", window.scrollY >0);
    });
    
    
    
    // 슬라이드
    var sickPrimary = {
        autoplay: true,
        autoplaySpeed: 2400,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1800,
        cssEase: 'cubic-bezier(.84, 0, .08, .99)',
        asNavFor: '.text-slider',
        centerMode: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    }
    
    var sickSecondary = {
        autoplay: true,
        autoplaySpeed: 2400,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1800,
        cssEase: 'cubic-bezier(.84, 0, .08, .99)',
        asNavFor: '.image-slider',
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    }
    
    $('.image-slider').slick(sickPrimary);
    $('.text-slider').slick(sickSecondary);
    
    
    
    
    
    // 프로젝트 버튼
    $(document).ready(function() {
        $(".mine").click(function() {
            $(".mine").addClass("fontbold")
            $(".team").removeClass("fontbold")
            $(".total").removeClass("fontbold")
            $(".myProject").removeClass("hidden");
            $(".ourProject").addClass("hidden");
        })
        $(".team").click(function() {
            $(".team").addClass("fontbold")
            $(".mine").removeClass("fontbold")
            $(".total").removeClass("fontbold")
            $(".ourProject").removeClass("hidden");
            $(".myProject").addClass("hidden");
        })
        $(".total").click(function() {
            $(".total").addClass("fontbold")
            $(".team").removeClass("fontbold")
            $(".mine").removeClass("fontbold")
            $(".myProject, .ourProject").removeClass("hidden");
        })
    });
    
    
    
    
    
    // 스크롤시 탑버튼 나타내기
    $(document).ready(function(){       
        $("#topBtn").hide(); // 탑 버튼 숨김
        $(function () {                
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) { // 스크롤 내릴 표시
                $('#topBtn').fadeIn();
            } else {
                $('#topBtn').fadeOut();
            }
        });               
        });
    });
    
    
    