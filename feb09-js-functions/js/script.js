// IIFE - Immediately Inovked Funciton Expression
// (function(){


  // Function Declaration
  function funcDec(userMessage, userAge){
      // alert('this is from the declaration');
      console.log(userMessage, userAge);
  }
  // PARAMETER & ARGUMENTS
  funcDec('goodbye', 21);
  // funcDec(); - calling ( aka invoking aka running ) the function


  var myNum; // undefined variable
  // Function Expression
  var funcExp = function(){
      myNum = 5;
      // alert('this is from the expression');
      // funcDec();
  }(); // immediately invoke the functino with ()
  // funcExp(); - calling ( aka invoking aka running ) the function


  // hoisting - places all function Declarations and variable names to memory before running ( aka invoking aka calling ) scripts

  // scope - a variable that exists only within the function where it was created

  // return - returns message to the console

  function getFullName(a, b){
      return a + ' ' + b;
  }
  // console.log( getFullName('David', 'Rodriguez') );


  // function getFirstName(){
  //   var firstName = prompt('What is your first name?');
  //   alert('Hello,' + ' ' + firstName + '!');
  //   return
  // }

  var getFirstName = function(){
    var firstName = prompt('What is your first name?');
    var userMsg = 'Hello,' + ' ' + firstName + '!';
    return userMsg;
  }();

  var userMessage


// }());
