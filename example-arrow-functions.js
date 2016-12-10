var names = ['Alicia', 'Andrea', 'Sarah'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
//
// ///// Arrow functions, can be used in place of anonymous functions. This syntax is great for multiple lines ////////////////////////////// /////
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// //// Instead of using curly brakets, we can write it like this /////////
//
// names.forEach((name) => console.log(name));
//
// ///// example - comment // everything above this to run the example ///////////

// var returnMe = (name) => name + '!';
// console.log(returnMe('Alicia'));

// var person = {
//   name: 'Alicia',
//   greet: function () {
//       names.forEach((name) =>  {
//         console.log(this.name + ' say hi to ' + name);
//       });
//   }
// };
//
// person.greet();

//Challenge area /////////////////////
function add (a, b) {
  return a + b;
}

// add Statement ////////
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4, 7));

// add Expression   ///////
var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));
