var ul = document.createElement('ul');
var p = document.getElementsByTagName('p')[0];
document.body.insertBefore(ul, p);
var ulEl = document.getElementsByTagName('ul')[0];
var li;

var userNum = '';

var numFunc = function(){
    if(!isNaN(parseInt(arguments[0])) && arguments[0] > 0){
        alert('gud jub u nerd')
        userLoop(parseInt(arguments[0]))
    }else{
        alert('r u stupid or what')
        getUserNum();
    }
    console.log(arguments); // arguments gets the elements
}; // invocation

function userLoop(num){
    for(var i = 1; i < num + 1; i++){
        console.log('user loop ' + i);
        todoItemGen(i);
    }
    console.log(num);
}

function todoItemGen(inc){
    li = document.createElement('li');
    ulEl.appendChild(li).textContent = inc;
}

function getUserNum(){
    userNum = prompt('gimme a number u dork');
    numFunc(userNum)
}
getUserNum();
