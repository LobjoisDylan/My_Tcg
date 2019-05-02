import DeckModel from '../src/models/config'
import Deck from '../src/models/deck'

describe("Deck", function() {
    
    var cards = DeckModel.deck.param;
    
    it("constructor", function() {
        expect(cards).toContain("cards");
    });
    
    it("draw", function() {
        var draw = new Deck(JSON.parse(cards));
        expect(draw.draw()).toEqual({ face: 'card-1' });
    });

    it("shuffle", function() {
        var ancien_deck = JSON.parse(cards);
        var shuffle = new Deck(JSON.parse(cards));
        expect(shuffle.shuffle()).not.toEqual(ancien_deck.cards)
    });

    it("insertAt", function() {
        var ancien_deck = JSON.parse(cards);
        var insertAt = new Deck(JSON.parse(cards));
        expect(insertAt.insertAt({"face": "card-1"}, 5)).not.toEqual(ancien_deck);
    });

    it("getCardsCount", function() {
        var cardsCount = new Deck(JSON.parse(cards));
        expect(cardsCount.getCardsCount()).toEqual(jasmine.any(Number))
    });
});