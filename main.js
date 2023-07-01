// Write a JavaScript program to add two numbers and display the result.

function add()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne + numTwo;
  document.getElementById("answer").value = sum;
}



