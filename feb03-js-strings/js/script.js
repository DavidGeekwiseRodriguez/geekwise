var firstString = "A literal string";
var secondString = new String("A string object");

var concatString = firstString + ", " + secondString;

// console.log( concatString );

// var firstName = "David";
// var midName = "Andrew";
// var lastName = "Rodriguez";

// var concatName = firstName + " ".concat(midName) + " ".concat(lastName);
// OR
// var concatName = firstName + " " + midName + " " + lastName;
// console.log(concatName);

var getIndex = firstString.lastIndexOf('i');
// console.log(getIndex);

var firstName = "David";
var middleName = "Andrew";
var lastName = "Rodriguez";
var birthDay = 1999;
var newAge = (2020 - 1999);

var sentence = "My name is" + " " + firstName + " " + middleName + " " + lastName + ". " + "I was born on" + " " + birthDay + " " + "and in 2020, I will be" + " " + newAge + ".";

var concatSentence = "My name is" + " " .concat(firstName) + " " .concat(middleName) + " " .concat(lastName) + ".";

console.log(sentence);
console.log(concatSentence);
