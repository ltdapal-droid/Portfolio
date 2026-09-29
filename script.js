let menu = document.querySelector('.fixed-menu')

menu.addEventListener('click', function(event) {
    let click = event.target
    let activebtn = document.querySelector('.active')
    if (click.classList.contains('nav-link')) {
        click.classList.add('active')
        activebtn.classList.remove('active')
        let mobile = document.querySelector(' .mobile-menu') ;
    if (!mobile.classList.contains ('hide') ) {
    mobile.classList.add('hide');
    }
    }
})

let classlink = '.main-link'
window.onscroll=function() {
    let h = document.documentElement.clientHeight
    if (window.scrollY>=h*4) {
        classlink='.contacts-link'
    }
    else if(window.scrollY >= h*3) {
        classlink = '.works-link'
    }
    else if(window.scrollY >= h*2) {
        classlink = '.skills-link' 
    }
    else if(window.scrollY >= h){
        classlink = '.about-link'
    }
    else{
        classlink = '.main-link'
    }


let activebtn = document.querySelector('.active')
let newactivebtn = document.querySelector(classlink)
if (!newactivebtn.classList.contains('.active')) {
    newactivebtn.classList.add('active')
    activebtn.classList.remove('active')
}}

document.querySelector(".mobile-button") .addEventListener("click",function () {
    document.querySelector(".mobile-menu").classList.remove("hide")
    document.querySelector(".mobile-button").classList.add("hide")
});
document.querySelector(".mobile-menu img")
.addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.add("hide")
    document.querySelector(".mobile-button").classList.remove("hide")
})