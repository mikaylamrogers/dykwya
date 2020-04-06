// CALCULATOR //
var halfButton = document.getElementById("half-button");
var inputNumber = document.getElementById("half-input");

halfButton.addEventListener("click", divideNumber);

function divideNumber() {
  alert(inputNumber.value / 2);
  console.log("half of" + " " + inputNumber.value + "is" + inputNumber.value / 2);
}

// FORTUNE //
var fortuneButton = document.getElementById("fortune-input");
var inputAnswer = document.getElementById("fortune-button");
var outputAnswer = document.getElementById("fortune-output");

var answerArray = ["you are blessed", "you are purposed", "you are the head, not the tail", "you are healed", "you are accepted", "you are creative", "you are whole", "you are worth more than gold"];
var randomIndex = answerArray[Math.floor( Math.random() * answerArray.length)];

fortuneButton.addEventListener("click", tellFortune);

function tellFortune() {
}
