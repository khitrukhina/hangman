let words = [
  'pineapple',
  'impulsive',
  'activity',
  'chocolate',
  'supermarket',
  'strawberry',
  'javascript',
];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

let remainingLetters = word.length;
let tryings = 10;

while (remainingLetters > 0 && tryings >= 0) {
  alert(answerArray.join(' '));
  let guess = prompt('Guess the letter');
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Please, enter just one letter');
  } else {
    tryings = tryings - 1;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase() && answerArray[j] === '_') {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}
alert(answerArray.join(' '));
alert(`It was ${word}!`);
