'use strict';

var confirmed = confirm('Are you ready to rock and roll!?');

if (confirmed === true) {
  console.log('The user is ready!');
}
else {
  console.log('The user said they are not ready... but we are going to start anyways');
}
var answer1 = prompt('Do you enjoy beer? \(All of these questions will be yes or no questions, so please answer with a Y or N.\)');

if (answer1.toUpperCase() === 'Y') {
  alert('Of course you do! Everyone does!')
}
else {
  alert('Alright I guess that\'s cool')
}

var answer2 = prompt('Do you like Rick and Morty?')

if (answer2.toUpperCase() === 'Y') {
  alert('Of course you do! Everyone does!')
}
else {
  alert('Alright I guess that\'s cool')
}

var answer1 = prompt('Are Black Bears the best bears?')

if (answer1.toUpperCase() === 'Y') {
  alert('FACT: Bears eat beets')
}
else {
  alert('That\'s debatable')
}
// var answer1 = prompt(user + ' this is a yes or no question, so please answer with a Y or N. Does Adam have a dog?');

// if (answer1.toUpperCase() === 'Y') {
//  alert('Yes! You are correct! Adam does have a dog!');
//} else {
//  alert('Nope... too bad.');
// }
