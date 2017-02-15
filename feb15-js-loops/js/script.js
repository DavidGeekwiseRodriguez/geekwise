var myArr = ['orange', 'grape', 'banana'];
var newArr = [];


// .concat();
// .sort();
// .splice();
// .slice();

// .push();
// .pop();
// .shift();
// .unshift();

var btnAdd = document.getElementById('addbtn');
var btnSub = document.getElementById('subbtn');

btnAdd.addEventListener('click', function(){
    // alert('imma hak u')
    promptFunc();
});

btnSub.addEventListener('click', function(){
    // alert('boi i told u HAKED!!1!')

    // var re = /ab+c/;
    // console.log(re);

    // var myRe = /d(b+)d/g;
    // var myArray = myRe.exec('cdbbdbsbz');
    // console.log(myArray);
});

function promptFunc(){
    var promptVar = prompt('gimme ur fav color');
    console.log(promptVar);
    if(promptVar !== null && promptVar.trim() !== ''){ // if user wants to follow the rules
        var promptVarCheck = promptVar.toLowerCase().trim();
        if( !isNaN(parseInt(promptVarCheck)) ){
            promptFunc();
        }else{
            // alert('please stop')
            newArr.push(promptVarCheck);
            console.log(newArr);
        }
    }else{
        alert('lmao bye')
    }

// && === and
// || === or



    /*
    if( !isNaN(parseInt(promptVar)) ){
        alert('you did type a number bozo')
        promptFunc();
    }else if(promptVar === ''){
        alert('you typed a blank')
    }else{
        alert('you typed a string bozo')
    }
    */

    // '4' !== 4


    // null if Esc and Cancel are pressed
    // blank if nothing entered
    // anything entered is a string

    // NaN
    // isNaN() is required to eliminate numbers
}
