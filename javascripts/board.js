// initial variables

var deck = fillDeck();
shuffle(deck);

var board = [];

var selectedCards = {};

var score = 0;

// card methods

function insertCard(card) {
	//add card to board array
	board.push(card);
	var root = document.getElementById("row1");
	//create and add card to html
	var cardDiv = document.createElement("div");
	cardDiv.setAttribute("class", "card");
	var imageWrap = document.createElement("div");
	imageWrap.setAttribute("class", "img-wrap");
	imageWrap.setAttribute("id", card.id);
	imageWrap.style = "background: url("+card.img+") 0 0 no-repeat; background-size: 100%;";
	var overlay = document.createElement("div");
	overlay.setAttribute("class", "overlay");
	imageWrap.appendChild(overlay);
	cardDiv.appendChild(imageWrap);
	root.appendChild(cardDiv);
	//add onclick effect to card for event triggering
	imageWrap.onclick = imageSelect;
}

function removeCard(card) {
	//remove from board array
	board.splice(board.indexOf(card), 1);
	//remove from selected cards
	delete selectedCards[card.id];
	//remove from html
	var element = document.getElementById(card.id);
	element.parentNode.remove(element);
}

function insertThreeCards(check) {
	if(deck.length < 3) {
		alert("No more cards in deck to add!");
		return;
	}
	if(check && existSet()) {
		alert("There already exists a set on the board!");
		return;
	}
	var new_cards = moveToBoard(deck, 3);
	for(let c of new_cards) {
		insertCard(c);
	}
}

function removeThreeCards(card1, card2, card3) {
	//remove from html
	removeCard(card1);
	removeCard(card2);
	removeCard(card3);
}

function populateBoard(deck) {
	var newBoard = moveToBoard(deck, 12);
	for(let c of newBoard) {
		insertCard(c);
	}
}

function checkSet() {
	var cards = Object.values(selectedCards);
	if(cards.length !== 3) {
		alert("You need to select 3 cards!");
		return;
	}
	works = isSet(cards[0], cards[1], cards[2]);
	if(works) {
		alert("Correct, this is a set!");
		removeThreeCards(cards[0], cards[1], cards[2]);
		score++;
		var scoreboard = document.getElementById("scoreboard");
		scoreboard.innerHTML = "Score: "+score+"pts";
		var gameScore = document.getElementById("score");
		gameScore.innerHTML = score;
		if(deck.length > 0) {
			insertThreeCards(false);
		} else if(deck.length === 0 && !existSet()) {
			alert("Congratulations, you have won!");
			toggle(document.getElementById("pops"));
			toggle(document.getElementById("everything"));
		}
	} else {
		alert("Sorry, this is not a set.");
		score--;
		var scoreboard = document.getElementById("scoreboard");
		scoreboard.innerHTML = "Score: "+score+"pt(s)";
		var gameScore = document.getElementById("score");
		gameScore.innerHTML = score;
		if(score<-3) {
			toggle(document.getElementById("pops"));
			toggle(document.getElementById("everything"));
		}
	}
}

function existSet() {
	for(let card1 of board) {
		for(let card2 of board) {
			for(let card3 of board) {
				if(card1 !== card2 && card2 !== card3 && isSet(card1, card2, card3)) {
					return [card1, card2, card3];
				}
			}

		}
	}
	return false;
}

function makeHint() {
	var cardSet = existSet();
	if(cardSet) {
		alert("There is a set; look harder!\nTry looking at card "+(board.indexOf([cardSet[0], cardSet[1], cardSet[2]][Math.floor(Math.random()*3)])+1)+"...");
		return;
	}
	alert("There may not be a set; try adding three cards.");
}

// card events

function imageSelect() {
	let size = Object.keys(selectedCards).length;
	if(size < 3 && this.className == "img-wrap") {
		this.className += " selected";
		card_prop = board.find(function(card) {
			return card.id == this.attributes.id.value;
		}, this);
		selectedCards[this.attributes.id.value] = card_prop;
	}
	else if(size <= 3) {
		this.className = "img-wrap";
		delete selectedCards[this.attributes.id.value];
	}
}

// widgets

var addThree = document.getElementById("addCards");
addThree.onclick = function() { insertThreeCards(true) };

var selectSet = document.getElementById("evaluate");
selectSet.onclick = function() { checkSet(); animation() };

var hint = document.getElementById("hint");
hint.onclick = function() { makeHint() };

// create board */

populateBoard(deck);
