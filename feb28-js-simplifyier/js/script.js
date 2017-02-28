console.log( firstName() + ' ' + lastName() );

function firstName(){
    return 'David';
};

function lastName(){
    return 'Rodriguez';
};

/*
document.querySelector('button').addEventListener('click', function(){
    // console.log( add(7, 3, 5) );
    console.log( addEx(3, 2, 5, 8, 1, 7, 'blutel', 3, 4, 5) );
});
*/

/*
var addEx = function(){
    console.log(arguments); // can use argumets[num] to get an argument
    var total = 0;

    for(var i = 0; i < arguments.length; i++){
        if(typeof arguments[i] !== 'string'){
            total = arguments[i] + total;
        }
    }
    return total;
};

function add(num1, num2, num3){
    return (num1 + num2) / num3;
};
*/


document.querySelector('input[type="submit"]').addEventListener('click', function(e){
    e.preventDefault();
    getInfo();
});

var form = document.querySelector('form');

function getInfo(){
    console.log( 'Welcome' + getName(form) + 'to your site. Your email is ' + getEmail(form) + '. You signed up for the following subscriptions ' + getChecks(form) );
}

function getName(name){
    var names = '';
    for(var i = 0; i < name.elements.length; i++){
        if(name.elements[i].type === 'text'){
            names += name.elements[i].value + ' ';
        }
    }
    return names;
}

function getEmail(arr){
    var emails = '';
    for(var i = 0; i < arr.elements.length; i++){
        if(arr.elements[i].type === 'email'){
            emails = emails + arr.elements[i].value + ' ';
        }
    }
    return emails;
}

function getChecks(checks){
    var checks = '';
    for(var i = 0; i < checks.elements.length; i++){
        if(checks.elements[i].type === 'checkbox' && checks.elements[i].checked){
            checks += checks.elements[i].value + ' ';
        }
    }
    return checks;
}
