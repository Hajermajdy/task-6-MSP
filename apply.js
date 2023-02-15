let menu = document.getElementById("icon");
let links = document.getElementById("link");
let text= document.querySelector(".text");
let btn = document.querySelector(".btn button");
let background =document.querySelector("header")

menu.addEventListener('click', function(){
    links.classList.toggle('d-block');
    text.classList.toggle('d-block');
    btn.classList.toggle('d-block');
    background.classList.toggle('background');
})