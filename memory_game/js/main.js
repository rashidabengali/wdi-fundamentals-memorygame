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
var cardsInPlayElements = [];

var numberOfTries = 0;
var numberOfSuccessfulTries = 0;

var checkForMatch = function() {
	numberOfTries++;
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		cardsInPlayElements[0].removeEventListener('click',flipCard);
		cardsInPlayElements[1].removeEventListener('click',flipCard);
		numberOfSuccessfulTries++;
		if (numberOfSuccessfulTries === 2) {
			displayScore();
		}
	} else {
		alert("Sorry, try again.");
		cardsInPlayElements[0].setAttribute('src','images/back.png');
		cardsInPlayElements[1].setAttribute('src','images/back.png');
	}
};
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlayElements.push(this);
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
	this.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
		cardsInPlay=[];
		cardsInPlayElements = [];
	}
 };
	//flipCard(0);
	//flipCard(2);

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};
createBoard();

var displayScore = function() {
	var scoreText;
	/*if (numberOfTries === 2) {
		scoreText = "Congratulations! You nailed it.";
		} else if (numberOfTries >=3 && numberOfTries<=4) {
		scoreText = "Congratulations! You won."
	} else if (numberOfTries >=5) { 
		scoreText = "You are too slow. You need a sharper memory."
	}*/
	scoreText = `Congratulations! You scored 2 out of ${numberOfTries} attempts.`;
	document.getElementById('score').innerHTML=scoreText;
};

var resetGame = function () {
	cardsInPlay = [];
	cardsInPlayElements = [];
	//document.getElementById('game-board').innerHTML="";
	//createBoard();
	var gameBoardChildren = document.getElementById('game-board').children;
	for (var i=0; i<gameBoardChildren.length; i++) {
		gameBoardChildren[i].setAttribute('src','images/back.png');
		gameBoardChildren[i].addEventListener('click',flipCard);
	}
	document.getElementById('score').innerHTML="";
	numberOfTries=0;
	numberOfSuccessfulTries=0;
};

document.getElementById('reset').addEventListener('click',resetGame);
/*
var cardThree = cards[1];
cardsInPlay.push(cardThree);
console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);
var cardFour = cards[3];
cardsInPlay.push(cardFour);
console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);
*/

