console.log("Up and running!")
/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/
/*
console.log("user flipped " + cardOne);
console.log("user flipped" + " " + cardTwo);
console.log("user flipped" + " " + cardThree);
console.log("user flipped" + " " + cardFour);
*/
alert ('Hello, Friends!');

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
};

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
/*	var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
	var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);*/
	if (cardsInPlay.length === 2) {
	checkForMatch();
	/*if (cardsInPlay[0] === cardsInPlay[1]) {
 		alert("You found a match!");
	 } else {
 		alert("Sorry, try again.");
	 } */
	} else {
 	alert("Choose one more card.");
 	} 
 };
//	flipCard();
	flipCard(0);
	flipCard(2);
/*
var cardThree = cards[1];
cardsInPlay.push(cardThree);
console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);

var cardFour = cards[3];
cardsInPlay.push(cardFour);
console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);
*/

