let menu = document.querySelector('.fixed-menu')

menu.addEventListener('click', function(event) {
    let click = event.target
    let activebtn = document.querySelector('.active')
    if (click.classList.contains('nav-link')) {
        click.classList.add('active')
        activebtn.classList.remove('active')
    }
})

let classlink = '.main-link'
window.onscroll=function() {
    let h = document.documentElement.clientHeight
    if (window.scrollY>=h*4) {
        classlink='.contacts-link'
    }
    else if(window.scrolly >= h*3) {
        classlink = '.works-link'
    }
    else if(window.scrolly >= h*2) {
        classlink = '.skills-link' 
    }
    else if(window.scrolly >= h){
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