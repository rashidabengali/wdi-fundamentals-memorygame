console.log("Up and running!")

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
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
		document.getElementById('message').innerHTML="Congratulations! You found a match.";
		document.getElementById('message').style.color = 'green';
		cardsInPlayElements[0].removeEventListener('click',flipCard);
		cardsInPlayElements[1].removeEventListener('click',flipCard);
		numberOfSuccessfulTries++;
		if (numberOfSuccessfulTries === 2) {
			displayScore();
		}
	} else {
		document.getElementById('message').innerHTML="Sorry, try again.";
		document.getElementById('message').style.color = 'red';
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

	this.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
		cardsInPlay=[];
		cardsInPlayElements = [];
	}
};

var insertedCardDataIds = [];

var getRandomNumberBetweenZeroAndThree = function() {
	var randomNumber = Math.floor(Math.random() * 4);
	return randomNumber;
}

var getRandomCardDataId = function() {
	var dataId;

	do {
		dataId = getRandomNumberBetweenZeroAndThree();
	} while (insertedCardDataIds.includes(dataId));

	insertedCardDataIds.push(dataId);
	return dataId;
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		var dataId = getRandomCardDataId();
		cardElement.setAttribute('data-id', dataId);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};
createBoard();

var displayScore = function() {
	var scoreText = `Great job! You scored 2 out of ${numberOfTries} attempts.`;
	document.getElementById('message').innerHTML=scoreText;
	document.getElementById('message').style.color='#00A6B3';
};

var resetGame = function () {
	cardsInPlay = [];
	cardsInPlayElements = [];
	insertedCardDataIds = [];

	var gameBoardChildren = document.getElementById('game-board').children;
	for (var i=0; i<gameBoardChildren.length; i++) {
		gameBoardChildren[i].setAttribute('src','images/back.png');
		var dataId = getRandomCardDataId();
		gameBoardChildren[i].setAttribute('data-id', dataId);
		gameBoardChildren[i].addEventListener('click',flipCard);
	}
	document.getElementById('message').innerHTML="";
	numberOfTries=0;
	numberOfSuccessfulTries=0;
};

document.getElementById('reset').addEventListener('click',resetGame);

