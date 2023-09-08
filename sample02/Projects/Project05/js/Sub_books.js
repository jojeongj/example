window.addEventListener('scroll', function(){
    let books = document.querySelector('.section_2').offsetTop;
    let ul = document.querySelector('.miniBook');
    books = books - 300;
    if(window.scrollY > books ){
        ul.classList.add('books');
    }else if(window.scrollY < books){
        ul.classList.remove('books');
    } 
});