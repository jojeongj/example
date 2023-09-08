
//유령의 눈을 굴리는 자바스크립트//
window.addEventListener('resize', function(event) {  
    
    let eyes = function (selector) { // '눈' 을 지정

    let eye = document.querySelector(selector),
        eyePoint = eye.querySelector('.eyePoint'), //동공 선택
        eyeArea = eye.getBoundingClientRect(); //눈 영역 선택

    let spinEyes = function (mouseX, mouseY) { //마우스의 X값과 Y값을 구하는 함수
        let RADIANT = Math.atan2(
            mouseY - (eyeArea.y + eyeArea.height * 0.5),
            mouseX - (eyeArea.x + eyeArea.width * 0.5)
        );
        eyePoint.style.transform = 'rotate(' + ( //동공의 스타일에 transform을 줘서 회전시킴
            180 * RADIANT / Math.PI - 90
        ) + 'deg)';
    };
    return {spinEyes: spinEyes};
};

let LEFTEYE = eyes('.eye-1');
let RIGHTEYE = eyes('.eye-2');


window.addEventListener('mousemove', function (e) { //마우스가 움직일때마다 함수를 실행
    LEFTEYE.spinEyes(e.pageX, e.pageY);
    RIGHTEYE.spinEyes(e.pageX, e.pageY);
}); }, true);


