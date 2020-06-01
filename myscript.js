// JavaScript File
// let statements
let numberOne;
let numberTwo;
let total;
// function that simulates multiplication and alerts the answer
function multiply() {
  // assigning values to the input numbers and the total being added to
  numberOne = document.getElementById("input1").value;
  numberTwo = document.getElementById("input2").value;
  total = 0;
  // making them be treated as numbers and not strings of characters
  numberOne = +numberOne;
  numberTwo = +numberTwo;
  // what happens if the second number input is positive
  if (numberTwo > 0) {
    // loop that runs a number of times equal to the second number
    for(let i = 0; i < numberTwo; i++) {
      // each time the loop is run, the total adds an extra of the first number, simulating multiplication
      total = total + numberOne;
    }
    // ouputs answer
    alert(total);
  }
  // what happens if the second number input is positive
  else if (numberTwo < 0) {
    //
    numberTwo = numberTwo * -1;
    // loop that runs a number of times equal to the second number
    for(let i = 0; i < numberTwo; i++) {
      // each time the loop is run, the total adds an extra of the first number, simulating multiplication
      total = total + numberOne;
    }
    // switches number back to a negative or positive
    total = total * -1;
    // ouputs answer
    alert(total);
  }
  // only other number that the second input could be is 0 and anything times zero is zero
  else {
    // alerts 0
    alert(0);
  }
}
// event listener activated by the submit button that triggers the 'multiplication' function
document.getElementById("btn").addEventListener("click", multiply);