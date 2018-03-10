/* This is a quiz about birds
The results will be based on correct answers.
*/


// question one 
var oneCorrect = 0;
var questionOne = prompt("what number question is this?");
var questionOneAnswer = parseInt(questionOne);
if (questionOneAnswer === 1) {
  var oneCorrect = 1;
} else {
  var oneCorrect = 0;
}

// question two
var twoCorrect = 0;
var questionTwo = prompt("what number question is this?");
var questionTwoAnswer = parseInt(questionTwo);
if (questionTwoAnswer === 2) {
  var twoCorrect = 1;
} else {
  var twoCorrect = 0;
}


// question three
var threeCorrect = 0;
var questionThree = prompt("what number question is this?");
var questionThreeAnswer = parseInt(questionThree);
if (questionThreeAnswer === 3) {
  var threeCorrect = 1;
} else {
  threeCorrect = 0;
}
  


// question four
var fourCorrect = 0;
var questionFour = prompt("what number question is this?");
var questionFourAnswer = parseInt(questionFour);
if (questionFourAnswer === 4) {
  var fourCorrect = 1;
} else { 
  fourCorrect = 0;
}


// question five
var fiveCorrect = 0;
var questionFive = prompt("what number question is this?");
var questionFiveAnswer = parseInt(questionFive);
if (questionFiveAnswer === 5) {
  var fiveCorrect = 1;
} else {
  var fiveCorrect = 0;
}



var totalCorrect = oneCorrect + twoCorrect + threeCorrect + fourCorrect + fiveCorrect;
alert("Your total correct is " + totalCorrect)
  