'use strict';

var confirmed = confirm('Are you ready to rock and roll!?');

if (confirmed === true) {
  console.log('The user is ready!');
}
else {
  console.log('The user said they are not ready... but we are going to start anyways');
}
var answer1 = prompt('\(Some of these questions will be yes or no questions, so please answer with a Y or N.\ Unless specified otherwise.)');

if (answer1.toUpperCase() === 'Y') {
  alert('Of course you do! Everyone does!');
}
else {
  alert('Alright I guess that\'s cool');
}

var answer2 = prompt('Do you like Rick and Morty?');

if (answer2.toUpperCase() === 'Y') {
  alert('And that\'s the wayyyyyy the news goes');
}
else {
  alert('Graaassssss taste bad');
}

var answer1 = prompt('Are Black Bears the best bears?');

if (answer1.toUpperCase() === 'Y') {
  alert('FACT: Bears eat beets');
}
else {
  alert('That\'s debatable');
}

var answer1 = prompt('Are those mountains on a cob?');

if (answer1.toUpperCase() === 'Y') {
    alert('Get in the ship sweetie!');
}

else {
  alert('Ok we can stay here');
}

var answer1 = prompt('Do you like RuPaul?');

if (answer1.toUpperCase() === 'Y') {
  alert('Shantay you stay');
}

else {
  alert('Sashay away');
}

var answer1 = prompt('Can you guess another state that I have lived in besides Washington?')

if (answer1 === 'California' || 'Kentucky' || 'Georgia') {
  alert('Wow! Didn\'t think you could guess that one! Good job!');
}

else {
  alert('Better luck next time...');
}
// var answer1 = prompt(user + ' this is a yes or no question, so please answer with a Y or N. Does Adam have a dog?');

// if (answer1.toUpperCase() === 'Y') {
//  alert('Yes! You are correct! Adam does have a dog!');
//} else {
//  alert('Nope... too bad.');
// }
