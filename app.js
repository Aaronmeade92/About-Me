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
function question1() {
  
var answer1 = prompt('Do you enjoy beer?\(Some of these questions will be yes or no questions, so please answer with a Y or N.\ Unless specified otherwise.)');



if (answer1.toUpperCase() === 'Y') {
  alert('Of course you do! Everyone does!');
  correct++;
  console.log(correct);
  }

  else {
  alert('Alright I guess that\'s cool');
  console.log('Keep trying!');
  }
}
function question2(){

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
}

function question3(){
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
}

function question4(){

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
}

function question5() {
var answer1 = prompt('Do you like RuPaul?');


if (answer1.toUpperCase() === 'Y') {
  alert('Shantay you stay');
  correct++;
  console.log(correct);
  }

else {
  alert('Sashay away');
  }
}

function question6() {
for (var guesses = 1; guesses <= 7; guesses++) {
  var answer1 = prompt('How many different color Lantern Corps. are there?(Please answer using a number)');
  console.log();


  if (parseInt(answer1) === 8) {
alert('Wow! Good job!');
correct++;
console.log(correct);
  }

  else if (answer1 > 8) {

    alert('Too High!');
  }
  else {
    alert('Too Low!');
    }
  }
}

function question7(){
var answer1 = prompt('Can you guess another state that I have lived in besides Washington?');

for (var i = 0; i <= 2; i++){
  var array = ['California', 'Kentucky', 'Georgia'];
    if (answer1 === array[i]) {
      alert('Wow! Didn\'t think you could guess that one! Good job!');
    }

    else {
      alert('Better luck next time...');
    }
  }
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();

document.write('<p id="number-of-correct">You got ' + correct + ' out of 7! Good job!</p>');
// var answer1 = prompt(user + ' this is a yes or no question, so please answer with a Y or N. Does Adam have a dog?');

// if (answer1.toUpperCase() === 'Y') {
//  alert('Yes! You are correct! Adam does have a dog!');
//} else {
//  alert('Nope... too bad.');
// }
