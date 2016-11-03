// Card = function(point,suit){
//   this.point = point;
//   this.suit = suit;
//   this.getImageUrl = function(){
//     var cardType = this.point;
//     if(this.point==11){
//       cardType = "jack";
//     }
//     if(this.point==12){
//       cardType = "queen";
//     }
//     if(this.point==13){
//       cardType = "king";
//     }
//     if(this.point==1){
//       cardType = "ace";
//     }
//     return "images/"+cardType+"_of_"+this.suit+".png";
//   };
// };

function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

Card.prototype.getImageUrl = function() {
  if (this.point >= 2 && this.point <= 10) {
    return "images/" + this.point + "_of_" + this.suit + ".png";
  }
  else {
    if (this.point === 1) {
      return "images/ace_of_" + this.suit + ".png";
    }
    else if (this.point === 11) {
        return "images/jack_of_" + this.suit + ".png";
    }
    else if (this.point === 12) {
        return "images/queen_of_" + this.suit + ".png";
    }
    else if (this.point === 13) {
        return "images/king_of_" + this.suit + ".png";
    }
  }
};

function Hand() {
  this.hand = [];
}

Hand.prototype.addCard = function(card) {
  this.hand.push(card);
};

Hand.prototype.getPoints = function () {
  var points = 0;
  var AceCount = 0;
  var newArr = [];
  var minusAceSum = 0;
  var AceSum = 0;

  for (var i = 0; i < this.hand.length; i++) {
    if (this.hand[i].point >= 2 && this.hand[i].point <= 9) {
      newArr.push(this.hand[i]);
    }
    if (this.hand[i].point >= 10) {
        this.hand[i].point = 10;
        newArr.push(this.hand[i]);
      }
    if (this.hand[i].point === 1) {
      AceCount++;
      newArr.push(this.hand[i]);
    }
    newArr.sort(function(a, b) {
      return b.point - a.point;
    });
  }
  minusAceArray = newArr.slice(0, (newArr.length - AceCount));
  AceArray = newArr.slice((newArr.length - AceCount), newArr.length);

  for (var j = 0; j < minusAceArray.length; j++) {
    minusAceSum += minusAceArray[j].point;
  }
  if (AceCount === 4) {
    AceSum = 14;
  }
  if (minusAceSum < 10 && AceCount === 2) {
    AceSum = 12;
  }
  if (minusAceSum <= 10 && AceArray.length === 1) {
    AceSum = 11;
  }
  if (minusAceSum > 10) {
    for (var k = 0; k < AceArray.length; k++) {
      AceSum += AceArray[k].point;
    }
  }

  points = minusAceSum + AceSum;
  return points;
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max-min) + min);

}

function Deck() {
  this.deck = [];
  this.suits = ['spades', 'hearts', 'clubs', 'diamonds'];
  for (var x = 1; x <= 13; x++) {
    for (var z = 0; z <= 3; z++) {
      this.deck.push(new Card(x, this.suits[z]));
    }
  }
}

Deck.prototype.drawCard = function() {
  var drawn = this.deck.splice(randomNum(0, 51), 1);
  return drawn;
};

var sixOfspades = new Card(6, "spades");
var fiveOfdiamonds = new Card(5, "diamonds");
var oneOfdiamonds = new Card(1, "diamonds");
var twelveOfdiamonds = new Card(12, "diamonds");
var myHand = new Hand();
var myDeck = new Deck();
myHand.addCard(fiveOfdiamonds);
myHand.addCard(sixOfspades);
myHand.addCard(oneOfdiamonds);
myHand.addCard(twelveOfdiamonds);
// console.log(myHand);
// console.log(myHand.hand.length);
// console.log(myHand.getPoints());
// console.log(myDeck);
console.log(myDeck.drawCard());
console.log(myDeck.deck.length);
// console.log(randomNum(0, 10));
