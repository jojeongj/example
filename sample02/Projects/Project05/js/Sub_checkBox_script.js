// sec5 체크박스 해제

let $check1 = document.getElementById("check1");
let $check2 = document.getElementById("check2");
let $check3 = document.getElementById("check3");
let $msgButton = document.querySelector(".sec3_input_button");

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
