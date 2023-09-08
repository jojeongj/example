$('.sinn_watches_carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    // asNavFor: '.slider-for',
    // dots: true,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    arrows: false
  });
  $('.lineup_ca').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false
  });
  $('.lineup_ca_tab').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
    ]
  });
 
  // PC버전 시계 캐러셀
  var swiper = new Swiper(".PC_main", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    watchSlidesVisibility: true,
    grabCursor: true,
    watchOverflow: true,
      observer: true,
          observeParents: true,
  
    
  //  pagination: {
   //   el: ".swiper-pagination",
    //  clickable: true,
   // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
  });