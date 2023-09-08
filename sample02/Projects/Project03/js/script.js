

/*포트폴리오 캐러셀 */ 

    var swiper = new Swiper(".present_cs", {
        effect: "coverflow",
        grabCursor: true,
        centewhiteSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
        rotate: 1, // 이전 다음 사진  회전률
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
        
        },
        loop: true, // 무한루프
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
        // el: ".swiper-pagination", // 버튼 on/off
        clickable: true, // 슬라이드 갯수를 표시하는 곳을 클릭하면 이동
        },
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            breakpoints: { // 반응형 
        300: {
        slidesPerView: 1.000001,
        spaceBetween: 0,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 10,
        },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        //   },
        },
    });

    // 선택한 slide로 이동
        document
        .querySelector('#tab01')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(2, 0);
        });
        document
        .querySelector('#tab02')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(3, 0);
        });
        document
        .querySelector('#tab03')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(4, 0);
        });
        document
        .querySelector('#tab04')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(5, 0);
        });
        document
        .querySelector('#tab05')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(6, 0);
        });
        document
        .querySelector('#tab06')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(7, 0);
        });
        document
        .querySelector('#tab07')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(8, 0);
        });
        document
        .querySelector('#tab08')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(9, 0);
        });
        document
        .querySelector('#tab09')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(10, 0);
        });
        document
        .querySelector('#tab10')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(1, 0);
        });

    
    // toggle select box 
    const selectBoxElements = document.querySelectorAll(".select");
    
    function toggleSelectBox(selectBox) {
    selectBox.classList.toggle("active");
    }
    
    function selectOption(optionElement) {
    const selectBox = optionElement.closest(".select");
    const selectedElement = selectBox.querySelector(".selected-value");
    selectedElement.textContent = optionElement.textContent;
    }
    
    selectBoxElements.forEach(selectBoxElement => {
        selectBoxElement.addEventListener("click", function (e) {
        const targetElement = e.target;
        const isOptionElement = targetElement.classList.contains("option");
    
        if (isOptionElement) {
            selectOption(targetElement);
        }
    
        toggleSelectBox(selectBoxElement);
        });
    });
    
    document.addEventListener("click", function (e) {
        const targetElement = e.target;
        const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");
    
        if (isSelect) {
        return;
        }
    
        const allSelectBoxElements = document.querySelectorAll(".select");
    
        allSelectBoxElements.forEach(boxElement => {
        boxElement.classList.remove("active");
        });
    });

    
