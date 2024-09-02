
var mydiv = document.getElementById('nav')

const navE1=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    if (window.scrollY >= 50) {
        navE1.classList.add('navbar-scrolled');
        mydiv.setAttribute('class','navbar navbar-expand-lg fixed-top bg-blue')
        
    }
    else if(window.screenY < 50){
            navE1.classList.remove('navbar-scrolled');
            mydiv.setAttribute('class','navbar navbar-expand-lg position-sticky bg-blue')
          }
});

$(function () {
    $('.counter').counterUp({
        delay: 100,
        time: 1000
    });
});


