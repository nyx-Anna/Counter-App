let count = 0; // initial value

// get element
const countDisplay = document.getElementById("count");

// update UI
function updateDisplay() {
  countDisplay.textContent = count;

  // color change logic
  if (count > 0) {
    countDisplay.style.color = "#4f772d"; // green
  } else if (count < 0) {
    countDisplay.style.color = "#ae2012"; // red
  } else {
    countDisplay.style.color = "#ffd166"; //yellow
  }
}

// increase
function increase() {
  count++;
  updateDisplay();
}

// decrease
function decrease() {
  count--;
  updateDisplay();
}

// reset
function reset() {
  count = 0;
  updateDisplay();
}