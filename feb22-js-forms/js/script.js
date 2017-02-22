var inputsPls = document.querySelectorAll('input:not([type="submit"])');
var submitPls = document.querySelector('input[type="submit"]');
var telPls = document.querySelector('input[type="tel"]');
var user = [];

submitPls.addEventListener('click', function(evt){
    evt.preventDefault();

    var formInputs = document.querySelector('form').elements;

    for(var i = 0; i < formInputs.length - 1; i++){
        // user.push(formInputs[i].value)
        // formInputs[i].value = ''
        if(formInputs[i].type === 'radio' && formInputs[i].checked || formInputs[i].type !== 'radio' && formInputs[i].type !== 'checkbox' && formInputs[i].value){
            user.push(formInputs[i].value);
        }
        if(formInputs[i].type === 'checkbox' && formInputs[i].checked){
            user.push(true);
        }
    }

    console.log(user);
    user = [];
    // inputsPls.forEach(function(e, i){
    //     user.push(inputsPls[i].value);
    //     inputsPls[i].value = '';
    // });
    // alert(user);
    // user = [];
});
