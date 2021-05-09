
var FULL_DECK = 81;
var CARD_VALS = {
	color: ["red", "green", "purple"],
	shading: ["solid","stripe","open"],
	shape: ["diamond", "squiggle", "oval"],
	number: ["1","2","3"]
};


//function constructor for card
function SetCard(cColor,cShading, cShape, cNumber, cImg) {
  this.color = cColor;  
  this.shading = cShading;
  this.shape = cShape;
  this.number = cNumber;
  this.img = cImg;
  this.id = cColor+cShading+cShape+cNumber;
}

function fillDeck(){
	let deck = [];
	for(let a=0; a<3; a++){
		for(let b=0; b<3; b++){
			for(let c=0; c<3; c++){
				for(let d=0; d<3; d++){
					if(deck.length < FULL_DECK){
						var subShape = "diamond";
						var subShade = "stripe";
						if(CARD_VALS.shape[c]=="oval"){
							subShape = "round";
						} else if(CARD_VALS.shape[c]=="squiggle"){
							subShape = "sq";
						}
						if(CARD_VALS.shading[b]=="solid") {
							subShade = "shaded";
						} else if(CARD_VALS.shading[b]=="open") {
							subShade = "plain";
						}
						var cImg = "images/cards/"+subShape+"-"+CARD_VALS.color[a]+"-"+subShade+CARD_VALS.number[d]+".png";
						var card = new SetCard(CARD_VALS.color[a], CARD_VALS.shading[b], CARD_VALS.shape[c], CARD_VALS.number[d], cImg);
						deck.push(card);
					}
				}
			}
		}
	}
	return deck;
}

function shuffle(deck){
	let n = deck.length;
	while(n>0){
		const rand = Math.floor(Math.random()*deck.length);
		n--;
		const tmp = deck[n];
		deck[n] = deck[rand];
		deck[rand] = tmp;
	}
	return deck;
}

function moveToBoard(deck, n){
	var board = [];
	for(var i=0;i<n;i++){
		var card = deck.pop();
		board.push(card);
	}
	return board;
}
