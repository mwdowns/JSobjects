describe('Card', function () {

  it('should instantiate a card with a point and a suit', function() {
    var card = new Card(5, 'diamonds');
    expect(card.point).toEqual(5);
    expect(card.suit).toEqual('diamonds');
  });

  it('image URL works for 2-10', function() {
    var card = new Card(2, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/2_of_diamonds.png');
    card = new Card(3, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/3_of_diamonds.png');
    card = new Card(4, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/4_of_diamonds.png');
    card = new Card(5, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/5_of_diamonds.png');
    card = new Card(6, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/6_of_diamonds.png');
    card = new Card(7, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/7_of_diamonds.png');
    card = new Card(8, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/8_of_diamonds.png');
    card = new Card(9, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/9_of_diamonds.png');
    card = new Card(10, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/10_of_diamonds.png');
  });

  it('image URL works for jack, queen, king and ace', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(12, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/queen_of_diamonds.png');
    card = new Card(13, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/king_of_diamonds.png');
    card = new Card(1, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/ace_of_diamonds.png');
  });

  it('image URL works for different suits', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(11, 'clubs');
    expect(card.getImageUrl()).toEqual('images/jack_of_clubs.png');
    card = new Card(11, 'spades');
    expect(card.getImageUrl()).toEqual('images/jack_of_spades.png');
    card = new Card(11, 'hearts');
    expect(card.getImageUrl()).toEqual('images/jack_of_hearts.png');
  });

});

describe('Hand', function() {
  it('creating new hand object makes an empty hand', function() {
    var myHand = new Hand();
    expect(myHand.hand.length).toEqual(0);
  });
  it('addCard will add a card to the hand', function() {
    var card = new Card(9, "diamonds");
    var myHand = new Hand();
    myHand.addCard(card);
    expect(myHand.hand.length).toEqual(1);
  });
  // it('will get points of the hand', function() {
  //   var myHand = [
  //     { point: 2, suit: 'diamonds' },
  //     { point: 10, suit: 'diamonds' },
  //     { point: 1, suit: 'diamonds' }
  //   ];
  //   expect(myHand.hand.getPoints()).toEqual(13);
  // });
});

describe('Deck', function () {

  it('creates a deck of 52 cards', function() {
    var myDeck = new Deck();
    expect(myDeck.deck.length).toEqual(52);
  });

  it('draws a single card from the deck', function() {
    var myDeck = new Deck();
    myDeck.drawCard();
    expect(myDeck.deck.length).toEqual(51);
  });

});
