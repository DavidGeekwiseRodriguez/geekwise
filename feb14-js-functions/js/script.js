// var a = function(){
//     var userName = prompt("wut yo name").trim();
//     b(userName);
// }();
//
// function b(user){
//     var cased = user.charAt(0).toUpperCase() + user.substr(1).toLowerCase();
//     c(cased);
// }
//
// function c(user){
//     alert(user);
// }

var firstName = document.getElementById('userFirstName');
var allName = document.getElementById('concatName');

firstName.addEventListener('click', function(){
    userName = prompt("wut yo first name")
    // no var keyword makes it global
    console.log(typeof parseInt(userFirstName) );

    if( isNaN(userName) ){
        // isNaN() checks if value is not a number. returns true or false
        console.log('its not a number');
        allName.disabled = false
        firstName.disabled = true
    }else{
        alert('please type your name')
    }
});

var textName = document.getElementById('nameText');
allName.addEventListener('click', function(){
    var userLastName = prompt('wut yo last name')
    // userLastName is SCOPED to this function, not accessible globally
    textName.textContent = userName + " " + userLastName;
    firstName.disabled = false
    allName.disabled = true
});
