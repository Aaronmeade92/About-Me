'use strict';

var correct = 0;
console.log('Value of correct is' + correct);

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
  correct++
  console.log(correct);
}

  else {
  alert('Alright I guess that\'s cool');
  console.log('Keep trying!');
}

var answer2 = prompt('Do you like Rick and Morty?');

if (answer2.toUpperCase() === 'Y') {
  alert('And that\'s the wayyyyyy the news goes');
  correct++
  console.log(correct);
}
else {
  alert('Graaassssss taste bad');
  console.log('Keep trying!');
}

var answer1 = prompt('Are Black Bears the best bears?');

if (answer1.toUpperCase() === 'Y') {
  alert('FACT: Bears eat beets');
  correct++;
  console.log(correct);
}
else {
  alert('That\'s debatable');
  console.log('Keep trying!');
}

var answer1 = prompt('Are those mountains on a cob?');

if (answer1.toUpperCase() === 'Y') {
    alert('Get in the ship sweetie!');
    correct++;
    console.log(correct);
}

else {
  alert('Ok we can stay here');
  console.log('Keep trying!');
}

var answer1 = prompt('Do you like RuPaul?');

if (answer1.toUpperCase() === 'Y') {
  alert('Shantay you stay');
  correct++;
  console.log(correct);
}

else {
  alert('Sashay away');
}



for (var guesses = 1; guesses <= 5; guesses++) {
  var answer1 = prompt('How many different color Lantern Corps. are there?');
  console.log();
  if (parseInt(answer1) === 8) {
alert('Wow! Good job!');
correct++;
console.log(correct);
break;
  }

  else if (answer1 > 8) {

    alert('Too High!');
  }
  else {
    alert('Too Low!');
  }
}

var answer1 = prompt('Can you guess another state that I have lived in besides Washington?');

if (answer1 === 'California', answer1 === 'Kentucky', answer1 === 'Georgia') {
  alert('Wow! Didn\'t think you could guess that one! Good job!');
}

else {
  alert('Better luck next time...');
}

document.write('<p id="number-of-correct">You got '+ correct + 'out of 7! Good job!</p>');
// var answer1 = prompt(user + ' this is a yes or no question, so please answer with a Y or N. Does Adam have a dog?');

// if (answer1.toUpperCase() === 'Y') {
//  alert('Yes! You are correct! Adam does have a dog!');
//} else {
//  alert('Nope... too bad.');
// }
