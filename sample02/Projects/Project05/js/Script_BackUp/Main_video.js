
let mql = window.matchMedia("screen and (max-width: 768px)"); 
//윈도우 사이즈를 감지하여 선택적으로 코드 실행
window.addEventListener('resize', function(event) {
//윈도우 사이즈가 리사이즈 되었을 때 
let video = document.querySelector('.sec4_video');

if (mql.matches) { 
    // console.log("화면의 너비가 768px 미만."); 
    video.pause();
} else {
    // console.log("화면의 너비가 768px 초과"); 
    video.play();
}
})


