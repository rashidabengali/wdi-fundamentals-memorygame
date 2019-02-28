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

var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};
var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
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
	}
 };
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

