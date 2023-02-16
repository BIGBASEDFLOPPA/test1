let box = document.querySelector('.box');
let leftButton = document.querySelector('#left');
let rightButton = document.querySelector('#right');


leftButton.addEventListener('click', function(event){
    let goLeft = box.offsetLeft;
    box.style.left = goLeft - 50 + "px";
});
rightButton.addEventListener('click', function(event){
    let goRight = box.offsetLeft;
    box.style.left = goRight + 50 + "px";
});
box.addEventListener("click", function() {
    this.classList.toggle("is-dropped");
})



