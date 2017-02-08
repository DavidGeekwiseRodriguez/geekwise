(function(){ //IIFE - Immediately Invoked Function Executable

// var userName = prompt('wut yo name is');
// var numOne = parseInt(prompt('pick a numbah'));
// var numTwo = parseInt(prompt('pick anutha one foo'));

function funcDec(a, b, c){
    alert(a + (b + c));
}

// funcDec(userName, numOne, numTwo);

var objCar = {
    color : 'blue',
    brand : 'ford',
    model : 'truck'
};

function myModel(){
    alert(objCar.model);
}
// parameter 'a' is SCOPED to myModel

// myModel();

// Function Executable
// var funcExe = function(){
//     alert(arguments[0]);
    // arguments create a collection of items
// }('David', 7);


var nameArray = [
    'david',
    'haley',
    'marisa',
    'osvaldo',
    'cobi'
];

var cerealArray = [
    'honey bunches of oats',
    'lucky charms',
    'trix',
    'CRACKLIN OATS',
    'cocoa puffs'
];

cerealArray.sort();
nameArray.sort();
console.log(cerealArray);
console.log(nameArray);

// .ceil rounds up / .floor rounds down
var ranName = nameArray[Math.floor(Math.random() * nameArray.length)];
var ranCereal = cerealArray[Math.floor(Math.random() * cerealArray.length)];

var spyName = function(){
    alert(arguments[0] + ' ' + arguments[1]);
}(ranName, ranCereal);

})();
