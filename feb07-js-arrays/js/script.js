var students = ['matt', 'david', 'haley', 'marisa', 'micaela', 'osvaldo',
 'rosamaria', 'alfredo', 'rigoberto', 'leonardo', 'gustavo', 'eric', 'kevin',
 'montgomery', 'cobi', 'joshua'];

// function randomStudent(){
//     var numStudents = students.length;
//     var randStudent = Math.ceil(Math.random() * numStudents) - 1;
//     alert(students[randStudent]);
// }
// randomStudent();

var fruitArray = [
    'tomato',
    'apple',
    'pear',
    'peach',
    'monty'
];
// console.log(fruitArray);

// .push adds an item to the end of the array
fruitArray.push('cherry');
// console.log(fruitArray);

// .pop removes from the end of an array
var lastFruit = fruitArray.pop();
// console.log(fruitArray);
// console.log(lastFruit);

// .unshift adds to the front of an array
// fruitArray.unshift('kiwi');
// console.log(fruitArray);

// .shift removes from the front of an array
var firstFruit = fruitArray.shift();
// console.log(fruitArray);
// console.log(firstFruit);

// .indexOf(); - finds the index of an item in an array
var posFruit = fruitArray.indexOf('peach');
// console.log(posFruit);

// .splice removes an item by index number
var splFruit = fruitArray.splice(2, 1); // first num = index, second num = how many removed
// console.log(splFruit);
// console.log(fruitArray);

// .slice copies an array
var copyFruit = fruitArray.slice(0, 3); // first num = index, second num = copies up to but not including
// console.log(fruitArray);
// console.log(copyFruit);


var schoolSub = [
    subject = 'civics'
];
console.log(schoolSub);

schoolSub.unshift('english', 'math');
console.log(schoolSub);

schoolSub.push('economics', 'spanish');
console.log(schoolSub);

var slSub = schoolSub.slice(2, 4);
console.log(slSub);
console.log(schoolSub);

// .sort alphabetizes
schoolSub.sort();
console.log(schoolSub);

// .reverse reverses the array
schoolSub.reverse();
console.log(schoolSub);

var nums = [
    0,
    53,
    103,
    7,
    78,
    10
];
// 0, 7, 10, 53, 78, 103
nums.sort();
console.log(nums);
