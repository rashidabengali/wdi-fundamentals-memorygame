console.log("Up and running!")

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("user flipped " + cardOne);
// console.log("user flipped" + " " + cardTwo);
// console.log("user flipped" + " " + cardThree);
// console.log("user flipped" + " " + cardFour);

alert ('Hello, Friends!');

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);

var cardThree = cards[1];
cardsInPlay.push(cardThree);
console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);

var cardFour = cards[3];
cardsInPlay.push(cardFour);
console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
 		alert("You found a match!");
	 } else {
 		alert("Sorry, try again.");
	 } 
} else {
 	alert("Choose another card.");
 }