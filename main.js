const box = document.querySelector('.box');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');


leftButton.addEventListener('click', function (event) {
    const goLeft = box.offsetLeft;
    const merge = goLeft - 100;
    if (merge >= 0)
        box.style.left = merge + 'px';
});
rightButton.addEventListener('click', function (event) {
    const goRight = box.offsetLeft;
    const merge = goRight + 100;
    if (window.screen.width >= merge)
        box.style.left = merge + 'px';
});



