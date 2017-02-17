var btnClick = document.getElementById('clickclack');
var popArr = [];

btnClick.addEventListener('click', populateArray);

function populateArray(){
    popArr.push(prompt('gimme ur fav movie'));
    if(popArr.length >= 3){
        console.log(popArr);
    }if(popArr.length >= 5){
        for(var i = 0; i < popArr.length; i++){
            console.log(popArr[i]);
        }
    }
}

var testBtn = document.getElementById('test');
