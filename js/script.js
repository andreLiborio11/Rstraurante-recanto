var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'img/recanto.jpeg') {
        iconMenu.setAttribute("src","img/recanto.jpeg");
    }else{
        iconMenu.setAttribute("src","img/recanto.jpeg");
    }

   menu.classList.toggle('active');
});