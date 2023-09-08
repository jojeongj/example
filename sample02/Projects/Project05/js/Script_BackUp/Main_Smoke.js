


// window.scrollTo({top: smoky,behavior:'smooth'})

window.addEventListener('scroll', function(){
    let smoky = document.querySelector('.sec5_main_title').offsetTop;
    let ul = document.querySelector('.sec5_titles');
    smoky = smoky - 500;
    if(window.scrollY > smoky ){
        ul.classList.add('smoke');
    }else if(window.scrollY < smoky){
        ul.classList.remove('smoke');
    } 
    // console.log(smoky);/
    // console.log(`윈도우 : ${window.scrollY}`);
});