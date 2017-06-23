
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

function checkForMatch() {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");

  } else {
    alert("Sorry, try again.");
    }
}

 function flipCard (cardId){
  var cardOne = cards[0];
  cardsInPlay.push('cardOne');
  var cardTwo = cards[2];
  cardsInPlay.push('cardTwo');

  if(cardsInPlay.length === 2) {
    checkForMatch();
  }
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log("User flipped " + cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].suit);
}

function createBoard() {
  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id', cards[i]);

  }
}

flipCard(0);
flipCard(2);
