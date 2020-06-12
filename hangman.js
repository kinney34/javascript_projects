const categories = [
  ['Reykjavik', 'Prague', 'Beijing', 'Santiago', 'Capetown', 'Philadelphia'],
  ['Batman', 'Aquaman', 'Zatanna', 'Huntress', 'Nightwing'],
  ['Einstein', 'Curie', 'Newton', 'Hawking', 'Copernicus', 'Archimedes']
];

function letterSelect(e) {
  let guess = e.target.innerHTML.toUpperCase();
  console.log(guess);
  let result = '';
  let found = false;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      result += guess + ' ';
      correctGuesses++;
      found = true;
    } else {
      result += blanksDisplay[i*2];
      result += blanksDisplay[i*2 + 1];
    }
  }

  if (found) {
    document.getElementById('blanks').innerHTML = result;
    if (correctGuesses === word.length) {
      document.getElementById('lives').innerHTML = 'You win!';
    } else {
      blanksDisplay = result;
    }
  } else {
    lives--;
    let newDisplay = (lives === 0) ? "You lose!" : `You have ${lives} lives. `;
    document.getElementById('lives').innerHTML = newDisplay;
  }
}

function startGame() {
  lives = 10;
  correctGuesses = 0;
  let category = Math.floor(Math.random() * 3);
  let catDisplay = "Category is: ";
  switch (category) {
    case 0:
      catDisplay += 'cities';
      break;
    case 1:
      catDisplay += 'DC superheroes';
      break;
    case 2:
      catDisplay += 'scientists';
      break;
    default:
      break;
  }
  document.getElementById('category').innerHTML = catDisplay;

  let r = Math.floor(Math.random() * categories[category].length);
  word = categories[category][r].toUpperCase();
  blanksDisplay = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
      blanksDisplay += '  ';
    } else {
      blanksDisplay += '_ ';
    }
  }
  document.getElementById('blanks').innerHTML = blanksDisplay;
  document.getElementById('lives').innerHTML = `You have ${lives} lives.`;
}

let letterButtons = document.getElementById('letters').getElementsByTagName('button');
let x;
for (x of letterButtons) {
  x.addEventListener('click', e => letterSelect(e));
}

document.getElementById('newGame').addEventListener('click', startGame);
