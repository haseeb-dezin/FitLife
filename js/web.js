// Home section starts

var hamburgerBtn = document.querySelector('.main-nav .hamburger-btn');
var navList = document.querySelector('.main-nav .nav-list');
var navListItems = document.querySelectorAll('.nav-list li a');
hamburgerBtn.addEventListener('click', activeClass);
function activeClass(){
    hamburgerBtn.classList.toggle('active')
    navList.classList.toggle('active')
}
for(let i = 0; i < navListItems.length; i++){
    navListItems[i].addEventListener('click', listItemClicked);
}
function listItemClicked(){
    hamburgerBtn.classList.remove('active');
    navList.classList.remove('active');
}

// Code for navbar
var homeSection = document.querySelector('#home');
window.addEventListener('scroll' , pageScrollFunction);
window.addEventListener('load' , pageScrollFunction);

function pageScrollFunction(){
    if(window.scrollY > 150){
        homeSection.classList.add('active');
    }
    else{
        homeSection.classList.remove('active');
    }
}