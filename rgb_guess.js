let currentSolution = generateRandomColor();
document.addEventListener("load", updateColor(currentSolution));
document.getElementById("newColors").addEventListener("click", newColors);
document.getElementById("easy").addEventListener("click", e => handleDifficulty(e));
document.getElementById("hard").addEventListener("click", e => handleDifficulty(e));

let buttons = document.getElementById("colors").getElementsByTagName("button");
for (b of buttons) {
  b.addEventListener("click", e => handleGuess(e));
}

function generateRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return [r, g, b];
}

//updates RGB values in header and color of options
//input: RGB values of solution
function updateColor(solution) {
  currentSolution = solution;
  var b = document.getElementById("colors");
  var buttons = b.getElementsByTagName("button");
  var k = Math.floor(Math.random() * buttons.length);
  for (i = 0; i < buttons.length; i++) {
    if (i == k) {
      buttons[i].style.backgroundColor = "rgb(" + solution.join(',')  + ")";
    } else {
      var color = generateRandomColor();
      buttons[i].style.backgroundColor = "rgb(" + color.join(',') + ")";
    }
  }
  const rgb = 'RGB(' + solution.join(', ') + ')';
  document.getElementById("rgb").innerHTML = rgb;
}

function handleGuess(e) {
  if (!checkGuess(e)) {
    e.target.style.visibility = "hidden";
    e.target.setAttribute("disabled", "true");
    document.getElementById("guessResult").innerHTML = "Try again";
  } else {
    let c = document.getElementById("colors");
    let buttons = c.getElementsByTagName("button");
    let current = "rgb(" + currentSolution.join(', ') + ")";
    for (b of buttons) {
      b.style.visibility = "visible";
      b.style.backgroundColor = current;
    }
    document.getElementById("header").style.backgroundColor = current;
    document.getElementById("guessResult").innerHTML = "Correct";
    document.getElementById("newColors").innerHTML = "Play again";
  }
}

function checkGuess(e) {
  let current = "rgb(" + currentSolution.join(', ') + ")";
  if (e.target.style.backgroundColor === current) {
    return true;
  } return false;
}

function newColors() {
  if (document.getElementById("newColors").innerHTML === "Play again") {
    document.getElementById("newColors").innerHTML = "New Colors";
    document.getElementById("guessResult").innerHTML = "";
    document.getElementById("header").style.backgroundColor = "#2C8E99";
    let c = document.getElementById("colors");
    let buttons = c.getElementsByTagName("button");
    for (b of buttons) {
      b.style.visibility = "visible";
      b.disabled = false;
    }
  }
  let x = generateRandomColor();
  updateColor(x);
}

//handle clicks on easy/hard
function handleDifficulty(e) {
  if (!e.target.classList.contains("active")) {
    if (e.target.id === "easy") {
      setDifficultyToEasy();
    } else {
      setDifficultyToHard();
    }
  }
}

function setDifficultyToHard() {
  let colors = document.getElementById("colors");
  for (i = 0; i < 3; i++) {
    let btn = document.createElement("button");
    btn.addEventListener("click", handleGuess);
    colors.appendChild(btn);
  }
  updateColor(currentSolution);
  document.getElementById("easy").classList.remove("active");
  document.getElementById("hard").classList.add("hard");
}

function setDifficultyToEasy() {
  let colors = document.getElementById("colors");
  let buttons = colors.getElementsByTagName("button");
  buttons[5].remove();
  buttons[4].remove();
  buttons[3].remove();
  updateColor(currentSolution);
  document.getElementById("easy").classList.add("active");
  document.getElementById("hard").classList.remove("active");
}
