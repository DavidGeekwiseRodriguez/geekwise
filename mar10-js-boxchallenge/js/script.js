var winW = document.querySelector('#boxsizer li:nth-child(1) span'),
    winH = document.querySelector('#boxsizer li:nth-child(2) span');

var winWidth = window.innerWidth,
    winHeight = window.innerHeight;

    winW.textContent = winWidth;
    winH.textContent = winHeight;

window.addEventListener('resize', function(){
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;

    winW.textContent = window.innerWidth;
    winH.textContent = window.innerHeight;
});

var inputFontSize = document.querySelector('#boxsizer input:nth-child(3)');
