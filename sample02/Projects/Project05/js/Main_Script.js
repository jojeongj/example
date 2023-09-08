// ///////////////////////////////////////////////////////////////////////////
// 유령의 눈을 굴리는 자바스크립트//
window.addEventListener(
  "resize",
  function (event) {
    let eyes = function (selector) {
      // '눈' 을 지정

      let eye = document.querySelector(selector),
        eyePoint = eye.querySelector(".eyePoint"), //동공 선택
        eyeArea = eye.getBoundingClientRect(); //눈 영역 선택

      let spinEyes = function (mouseX, mouseY) {
        //마우스의 X값과 Y값을 구하는 함수
        let RADIANT = Math.atan2(
          mouseY - (eyeArea.y + eyeArea.height * 0.5),
          mouseX - (eyeArea.x + eyeArea.width * 0.5)
        );
        eyePoint.style.transform =
          "rotate(" + //동공의 스타일에 transform을 줘서 회전시킴
          ((180 * RADIANT) / Math.PI - 90) +
          "deg)";
      };
      return { spinEyes: spinEyes };
    };

    function LetsSpinEyes(e) {
      let LEFTEYE = eyes(".eye-1");
      let RIGHTEYE = eyes(".eye-2");
      LEFTEYE.spinEyes(e.pageX, e.pageY);
      RIGHTEYE.spinEyes(e.pageX, e.pageY);
    }

    window.addEventListener("mousemove", function (e) {
      //마우스가 움직일때마다 함수를 실행
      LetsSpinEyes(e);
    });
  },
  true
);

// ///////////////////////////////////////////////////////////////////////////
// 스와이프 슬라이더의 캐러셀 //

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: false,
  keyboard: true,
});

var swiper = new Swiper(".sec6_carousel", {
  mousewheel: false,
  keyboard: true,
  slidesPerView: 7,
  autoplay: {
    //자동슬라이드 (false-비활성화)
    delay: 1000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop: true, // 슬라이드 반복 여부
  loopAdditionalSlides: 1,
  autoHeight: true,
  // spaceBetween: -10,
  breakpoints: {
    //반응형 조건 속성
    0: {
      slidesPerView: 1,
    },
    300: {
      //640 이상일 경우
      slidesPerView: 2, //레이아웃 2열
    },
    640: {
      //640 이상일 경우
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
    },
  },
});

// ///////////////////////////////////////////////////////////////////////////
// Hlight 스크롤시 하이라이트가 쳐지는 호버 //

// function HlightTextWhy() {
//   let hlight = document.querySelector(".sec2_content").offsetTop;
//   let desc = document.querySelector(".sec2_main_text_description");
//   hlight = hlight - 100;
//   if (window.scrollY > hlight) {
//     desc.classList.add("Axtivehlight");
//   } else if (window.scrollY < hlight) {
//     desc.classList.remove("Axtivehlight");
//   }
// }

// window.onload = function () {
//   //실행할 내용
//   HlightTextWhy();
// };

// window.addEventListener("scroll", function () {
//   HlightTextWhy();
// });

// ///////////////////////////////////////////////////////////////////////////
// Smoke 효과 //

function SmokeWithMe() {
  let smoky = document.querySelector(".sec5_main_title").offsetTop;
  let ul = document.querySelector(".sec5_titles");
  smoky = smoky - 1000;
  if (window.scrollY > smoky) {
    ul.classList.add("smoke");
  } else if (window.scrollY < smoky) {
    ul.classList.remove("smoke");
  }
}

// window.onload = function () {
//   //실행할 내용
//   SmokeWithMe();
//   track();
// };

window.addEventListener("scroll", function () {
  SmokeWithMe();
});

// ///////////////////////////////////////////////////////////////////////////
// 배경이 마우스를 따라가는 효과 //

const trackingImg = document.querySelector(".BgImg");
const Bg_container = document.querySelector(".Bg_container");
//윈도우 사이즈를 감지하여 선택적으로 코드 실행
// /window.addEventListener("resize", function (event) {
//윈도우 사이즈가 리사이즈 되었을 때

function track(event) {
  let mql = window.matchMedia("screen and (max-width: 768px)");

  if (mql.matches) {
    // console.log("화면의 너비가 768px 미만.");

    // let browserPoint = (event)=>{
    //     console.log(`브라우저 좌표 : (${event.pageX}, ${event.pageY})`);
    // }//브라우저 좌표를 구하는 함수

    // let offsetPoint = (event) => {
    //     console.log(`오프셋 좌표 : (${event.offsetX}, ${event.offsetY})`)
    // }//오프셋 좌표를 구하는 함수

    function calc(event) {
      const trackingImg = document.querySelector(".BgImg");
      //백그라운드 콘테이너를 변수에 저장합니다.
      let rx = event.clientX - event.offsetX;
      //페이지X - 오프셋 Y 을 이용해 마우스 좌표를 구합니다.
      let ry = event.pageY - event.offsetY;

      // let imgx = (rx - 300) / 60;
      // let imgy = (ry - 200) / 60;

      //   console.log(`rx : ${rx}, ry:${ry}`);

      // let imgx = (rx - 300) / 40;
      // let imgy = (ry - 200) / 40;
      let imgx = (rx - 150) / 40;
      let imgy = (ry - 150) / 40;

      // console.log(` imgx: ${imgx}, imgy:${imgy}`);

      //움직을 만큼의 거리를 구합니다.
      // trackingImg.style.transform= `translate(${imgx}px,${imgy}px)`;
      trackingImg.style.left = `${imgx}px`;
      trackingImg.style.top = `${imgy}px`;
    }

    function imgReturn() {
      // trackingImg.style.transform= `translate(0px,0px)`;
      trackingImg.style.left = "-20px";
      trackingImg.style.top = "-20px";
    }

    window.addEventListener("mousemove", calc);
    trackingImg.addEventListener("mouseout", imgReturn);
  }
}

window.addEventListener("resize", track);
// ///////////////////////////////////////////////////////////////////////////
// 비디오 제어 스크립트 //

// let mql = window.matchMedia("screen and (max-width: 768px)");
// //윈도우 사이즈를 감지하여 선택적으로 코드 실행
// window.addEventListener('resize', function(event) {
// //윈도우 사이즈가 리사이즈 되었을 때
// let video = document.querySelector('.sec4_video');

// if (mql.matches) {
//     // console.log("화면의 너비가 768px 미만.");
//     video.pause();
// } else {
//     // console.log("화면의 너비가 768px 초과");
//     video.play();
// }
// })

// ///////////////////////////////////////////////////////////////////////////
// sec5 체크박스 해제 및 메세지 전송 //

let $check1 = document.getElementById("check1");
let $check2 = document.getElementById("check2");
let $check3 = document.getElementById("check3");
let $msgButton = document.querySelector(".sec5_input_button");

$check1.addEventListener("click", () => {
  if ($check1.checked == true) {
    $check2.checked = true;
    $check3.checked = true;
  } else {
    $check2.checked = false;
    $check3.checked = false;
  }
});

$check2.addEventListener("click", () => {
  if ($check2.checked == false) {
    $check1.checked = false;
  }
  if ($check2.checked == true) {
    if ($check3.checked == true) {
      $check1.checked = true;
    }
  }
});

$check3.addEventListener("click", () => {
  if ($check3.checked == false) {
    $check1.checked = false;
  }
  if ($check3.checked == true) {
    if ($check2.checked == true) {
      $check1.checked = true;
    }
  }
});

// 인라인 이벤트 삭제
$msgButton.addEventListener("click", function () {
  let $name = document.querySelector("#name");
  let $tel = document.querySelector("#tel");
  // 신청하기 누르면 할 액션 적기
  if ($name.value == "" || $tel.value == "") {
    // alert('빈칸을 입력해 주세요');
    openModal03();
  } else {
    if ($check1.checked == false) {
      // alert("필수 항목에 동의해 주세요");
      openModal04();
    } else {
      // alert("알림톡이 정상적으로 접수되었습니다.");
      openModal01();
      btn_sendMessage();
    }
  }
});

// ///////////////////////////////////////////////////////////////////////////
// window.onload = function () {
//   //실행할 내용
//   // SmokeWithMe();
//   track();
// };
