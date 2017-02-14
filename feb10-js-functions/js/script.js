var str = "DAviD";
var modStr = str.substr(1, 4);
// var userName = prompt('what yo name foo').trim();
// console.log(userName);


// .toUpperCase - makes everything upper case
// .toLowerCase - makes everything lower case
// .substr() - get characters from starting index upto & including ending index
// .trim() - removes excess spaces before & after
// .length - get total number of characters
// .charAt() - get character at specified index

// function userName(){
//     var userPrompt = prompt('What is your first name?').trim();
//     return userPrompt;
// }
//
// var capName = function(){
//
// }
//
// function alertPrompt(){
//
// }

function getUserName(){
    var user = prompt('wut yo name');
    return user.trim
    // OR
    // return prompt('wut you name').trim();
}

var capUserName = function(){
    var user = getUserName();
    var firstLetter = user.charAt(0).toUpperCase();
    var remainingLetters = user.substr(1, user.length - 1).toLowerCase();
    // OR
    // var moddedName = user.charAt(0).toUpperCase() + user.substr(1).toLowerCase();
    var moddedName = firstLetter + remainingLetters;
    alertUserName(moddedName);
}

function alertUserName(){
    alert(name);
}


var extBtn = document.getElementById('external');
var content = document.getElementById('content');
var delBtn = document.getElementById('deleter');

extBtn.addEventListener('click', function(){
    var userName = prompt('wut yo name');
    content.textContent = userName;
});

delBtn.addEventListener('click', function(){
    content.textContent = "";
});

function changeColor(){
    // var randNum = Math.random();
    // console.log(randNum);
    // var randHue = randNum * 360;
    // console.log(randHue);
    // var roundHue = Math.floor(randHue);
    // console.log(roundHue);
    // var addOne = roundHue + 1;
    // console.log(addOne);
    var rand = Math.floor( Math.random() * 360 ) + 1;
    document.body.style.backgroundColor = 'hsl(' + rand + ', 50%, 50%)';
}
