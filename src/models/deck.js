export default class Deck {
    constructor (config) {
        this.cards = config.cards;
    }
    
    shuffle () {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        return this.cards;
    }
    
    draw () {
        if(this.cards.length > 0) {
            return this.cards.shift();
        }

        else {
            return false;
        }
    }

    insertAt(card, position) {
        this.cards.splice(position, 0, card);
        return this.cards;
    }

    getCardsCount () {
        return this.cards.length;
    }
}