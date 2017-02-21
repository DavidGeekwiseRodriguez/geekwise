/*
var button = document.getElementById('button');
var div = document.getElementsByTagName('div');
var classes = document.getElementsByClassName('boi');

var lis = document.querySelectorAll('li:nth-of-type(odd)');
var ul = document.querySelector('ul')

for(var a = 0; a < lis.length; a++){
    lis[a].style.backgroundColor = 'blue';
}

// console.log(div);
// div.addEventListener('mouseover', function(){
//     alert('hovering the div')
// }); // CANNOT .addEventListener TO AN HTML COLLECTION

for(var i = 0; i < div.length; i++){
    div[i].addEventListener('mouseover', function(){
        alert('hovering this shiz')
    });
}

for(var j = 0; j < div.length; j++){
    div[j].addEventListener('click', function(){
        alert('Click (2006)')
    });
}

button.addEventListener('click', function(){
    var userName = prompt('gimme ur name').trim()
    if(userName.length >= 5 ){
        alert('thanks bb')
    }else if(userName === ''){
        alert('pls enter sumtin')
    }else{
        alert('get hACKeD!!1!')
    }

    // TERNARY OPERATOR
    // userName.length >= 5 ? alert('thanks bb') : alert('gethACKeD!!1!');
});
*/

var enterName = document.querySelector('input[type="text"]');
var submitBtn = document.querySelector('input[type="submit"]');

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    var userName = input.value;
    console.log(userName);
})
