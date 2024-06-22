/*
Copyright amir javanmir
Released on: June 22, 2024
*/
let btn = document.getElementById("open");
let btnClose = document.getElementById("close");
let modalContainer = document.querySelector(".modal_container");
btn.addEventListener("click",function(){
    modalContainer.classList.toggle("show");
})
btnClose.addEventListener("click",function(){
    modalContainer.classList.remove("show");
})