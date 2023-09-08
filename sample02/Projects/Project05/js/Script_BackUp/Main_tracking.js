
const trackingImg =  document.querySelector('.BgImg');
const Bg_container = document.querySelector('.Bg_container');
//윈도우 사이즈를 감지하여 선택적으로 코드 실행
window.addEventListener('resize', function(event) {
//윈도우 사이즈가 리사이즈 되었을 때 
let mql = window.matchMedia("screen and (max-width: 768px)"); 

if (mql.matches) { 
    // console.log("화면의 너비가 768px 미만."); 
    
// let browserPoint = (event)=>{
//     console.log(`브라우저 좌표 : (${event.pageX}, ${event.pageY})`);
// }//브라우저 좌표를 구하는 함수

// let offsetPoint = (event) => {
//     console.log(`오프셋 좌표 : (${event.offsetX}, ${event.offsetY})`)
// }//오프셋 좌표를 구하는 함수

function calc (event){
    const trackingImg =  document.querySelector('.BgImg')
    //백그라운드 콘테이너를 변수에 저장합니다.
    let rx = event.clientX-event.offsetX;
    //페이지X - 오프셋 Y 을 이용해 마우스 좌표를 구합니다.
    let ry = event.pageY - event.offsetY;

    // let imgx = (rx - 300) / 60;
    // let imgy = (ry - 200) / 60;

    console.log(`rx : ${rx}, ry:${ry}`);


    // let imgx = (rx - 300) / 40;
    // let imgy = (ry - 200) / 40;
    let imgx = (rx - 150) / 40;
    let imgy = (ry - 150) / 40;
    
    // console.log(` imgx: ${imgx}, imgy:${imgy}`);

    //움직을 만큼의 거리를 구합니다.
    // trackingImg.style.transform= `translate(${imgx}px,${imgy}px)`;
    trackingImg.style.left=`${imgx}px`;
    trackingImg.style.top=`${imgy}px`;
}

function imgReturn(){
    // trackingImg.style.transform= `translate(0px,0px)`;
    trackingImg.style.left='-20px';
    trackingImg.style.top='-20px';

}

window.addEventListener('mousemove', calc);
trackingImg.addEventListener('mouseout', imgReturn);

} 
})



