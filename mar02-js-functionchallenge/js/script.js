// DIV
var content = document.getElementById('content');

// H1
var h1 = document.createElement('h1');
content.appendChild(h1).textContent = 'Hello World'; // .appendChild(object to be appended (child))

// PARAGRAPH
var p = document.createElement('p');
content.appendChild(p).textContent = 'doesnt matter';

// ANCHOR
var anc = document.createElement('a');
content.appendChild(anc).textContent = 'this be the anchor arr';
// anc.id = 'test'; .id adds an id
anc.href = 'https://google.com';
anc.className = 'test2'; // .className adds a class
anc.target = '_blank'; // .target opens a link in a new tab

// UL
var ul = document.createElement('ul');
content.appendChild(ul).textContent = 'ul here';
content.insertBefore(ul, anc); // .insertBefore(to be appended, appended item before this object)
var li = document.createElement('li');
ul.appendChild(li).textContent = 'hi';

// ORIGINAL INPUT
var input = document.createElement('input');
content.insertBefore(input, anc);
input.type = 'text';
input.placeholder = 'username'

// FORM
var form = document.createElement('form');
var inputSub = document.createElement('input');
var inputFirst = document.createElement('input');
var inputLast = document.createElement('input');
var inputEmail = document.createElement('input');
var inputPass = document.createElement('input');
var inputNum = document.createElement('input');
// APPENDS
content.appendChild(form);
form.appendChild(input);
form.appendChild(inputFirst);
form.appendChild(inputLast);
form.appendChild(inputEmail);
form.appendChild(inputPass);
form.appendChild(inputNum);
form.appendChild(inputSub)
// ATTRIBUTES
inputSub.type = 'submit';
inputFirst.type = 'text';
inputFirst.placeholder = 'first name';
inputLast.type = 'text';
inputLast.placeholder = 'last name';
inputEmail.type = 'email';
inputEmail.placeholder = 'email';
inputNum.type = 'number';
inputNum.placeholder = 'number';
inputPass.type = 'password';
inputPass.placeholder = 'password';
// FORM INSERT
content.insertBefore(form, anc);

inputSub.addEventListener('click', function(evt){
    evt.preventDefault();
    userFunc();
});

var userArr = [];
function userFunc(){
    ul.innerHTML = '';
    var loopNum = parseInt(inputNum.value);
    for(var i = 1; i < loopNum + 1; i++){
      var li = document.createElement('li');
      ul.appendChild(li).textContent = i;
      li.contentEditable = true;
    }
    // for(var i = 0; i < form.elements.length - 1; i++){
    //     userArr.push(form.elements[i].value);
    //     form.elements[i].value = ''; // Instead of clearing, every input value, clear in the loop
    // }

    // input.value = '';
    // inputFirst.value = '';
    // inputLast.value = '';
    // inputEmail.value = '';
    // inputPass.value = '';

    // console.log(userArr);
    // userArr = [];
}

inputNum.addEventListener('change', function(evt){
    // console.log(evt.target.value);
    if(evt.target.value < 0){
        evt.target.value = 0;
    }else{
        console.log(evt.target.value);
    }
});
