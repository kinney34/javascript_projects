var keys = document.querySelector('.grid-container');
keys.addEventListener('click', e => { handleClick(e)});
var previousNum = 0;
var op;
var prevKey;

function handleClick(e) {
  var display = document.getElementById('display');
  var key = e.target;
  var val = key.innerHTML;
  var currentNum = display.innerHTML;

  //key pressed is a number
  //replace or append to display
  if (!key.dataset.action) {
    if (val === 'C') {
      display.innerHTML = '0';
      previousNum = 0;
    } else if (display.innerHTML === '0' || prevKey === 'op') {
      display.innerHTML = val;
      prevKey = 'num';
    } else {
      display.innerHTML = currentNum + val;
      prevKey = 'num'
    }
  } else {
    if (val === '=') {
      var result;
      switch (op) {
        case '+':
          result = Number(previousNum) + Number(currentNum);
          break;
        case '-':
          result = Number(previousNum) - Number(currentNum);
          break;
        case '*':
          result = Number(previousNum) * Number(currentNum);
          break;
        case '/':
          result = Number(previousNum) / Number(currentNum);
          break;
        default:
          result = currentNum;
      }
      display.innerHTML = result;
      console.log(result);
    } else {
      op = val;
      previousNum = currentNum;
      display.innerHTML = val;
      prevKey = 'op';
    }
  }
}
