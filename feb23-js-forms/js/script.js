var form = document.querySelector('form#contactForm');
var subBtn = document.querySelector('form#contactForm input[type="submit"]');
var loginForm = document.querySelector('#loginForm');
var loginBtn = document.querySelector('#loginForm input[type="submit"]');
var custom = document.querySelector('.custom');

var userArr = [];
var loginArr = [];

var username = '';

if(localStorage.getItem('username')){
    username = localStorage.getItem('username');
    alert(username + 'Please enter your password to continue.')
    password();
}else{
    alert('Please log in.')
    login();
}
console.log(username);


subBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    console.log(form.elements);
    for(var i = 0; i < form.elements.length - 1; i++){
      // console.log(form.elements[i].value);
      // if(form.elements[i].type === 'text' || form.elements[i].type === 'email' || form.elements[i].type === 'textarea'){
      //     console.log(form.elements[i].value);
      // }
        if(form.elements[i].type !== 'checkbox'){
            userArr.push(form.elements[i].value);
        }
        if(form.elements[i].type === 'checkbox' && form.elements[i].checked){
            userArr.push(true);
        }
    }
    console.log(userArr);
});

function login(){
    loginBtn.addEventListener('click', function(evt){
        evt.preventDefault();

        for(var i = 0; i < loginForm.elements.length - 1; i++){
            if(loginForm.elements[i].type === 'text'){
                localStorage.setItem('username', loginForm.elements[i].value);
            }else{
                sessionStorage.setItem('password', MD5(loginForm.elements[i].value));
            }
        }
        custom.textContent = 'Hello ' + localStorage.getItem('username') + '.';
        for(var i = 0; i < form.length; i++){
            form.elements[i].disabled = false;
        }
    });
}

function password(){
    loginBtn.addEventListener('click', function(evt){
        evt.preventDefault();

        ifMD5((loginForm.elements[1].value) === sessionStorage.getItem('password')){
            alert('Passwords match. You may continue.')
        }else{
            alert('Your password was wrong. You suck.')
        }
    })
}
/*
    .setItem('key', 'value');
    .getItem('key');
    .removeItem('key');
    .clear();
*/
