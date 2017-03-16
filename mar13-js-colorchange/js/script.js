var jeep = document.querySelector('header'),
    input = document.querySelector('input[type="color"]'),
    inputRot = document.querySelector('input[type="text"]'),
    btn = document.querySelector('input[type="submit"]'),
    nav1stLvl = document.querySelectorAll('nav > ul > li');

nav1stLvl.forEach(function(e, i){
    e.addEventListener('mouseover', function(){
        this.classList.add('hovering');
    });
    e.addEventListener('mouseout', function(){
        this.classList.remove('hovering');
    });
})

btn.addEventListener('click', function(evt){
    evt.preventDefault(); // prevents the submit button from refreshing the page
    var jeepColor = input.value; // jeepColor grabs the color value
    var jeepRot = inputRot.value; // jeepRot grabs the text value
    jeep.style.backgroundColor = jeepColor; // changes the style of the background-color to jeepColor (color value)
    jeep.style.transform = "rotate(" + jeepRot + "deg)"; // adds jeepRot (text value) to the rotate
});
