// // VARIABLES
// var content = document.getElementById('content');
//
// var h1 = document.createElement('h1'),
//     p = document.createElement('p'),
//     text = document.createTextNode('explicitly creating a text node'),
//     a = document.createElement('a');
//
// // APPENDS
// h1.textContent = 'This is some text';
// p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
// a.textContent = 'clicky';
// content.append(h1, p, text, 'here is a text node', a);

var form = document.querySelector('form');

// console.log('Notification' in window);

// if( !('Notification' in window) ){
//     alert('sorry that feature is no available');
// }else{
//     console.log('Notifications are available');
// }

// form.childNodes.forEach(function(e, i){
//     console.log(e);
// })

// for(var i = 0; i < form.children.length; i++){
//     console.log(form.children[i]);
// }

// IN keyword

// console.log('childElementCount' in form);
// if(!'childElementCount' in form){
//     for(var i = 0; i < form.children.length; i++){
//         console.log(form.children[i]);
//     }else{
//         for(var i = 0; i < form.childElementCount; i++){
//             console.log(form.children[i]);
//         }
//     }
// }

console.log(form);

var formArr = [];

formArr.push(form.offsetHeight);
formArr.push(form.offsetLeft);
formArr.push(form.scrollWidth);
formArr.push(form.tabIndex);

console.log(formArr);
