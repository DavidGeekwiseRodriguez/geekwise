var form = document.querySelector('form');
var subBtn = document.querySelector('input[type="submit"]');
var userArr = [];

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
