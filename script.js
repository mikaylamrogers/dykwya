var halfButton = document.getElementById("half-button");
var inputNumber = document.getElementById("half-input");

halfButton.addEventListener("click", divideNumber);

function divideNumber() {
  alert(inputNumber.value / 2);
  console.log("half of" + " " + inputNumber.value + "is" + inputNumber.value / 2);
}
