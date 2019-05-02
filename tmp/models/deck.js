"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
    function Deck(config) {
        _classCallCheck(this, Deck);

        this.cards = config.cards;
    }

    _createClass(Deck, [{
        key: "shuffle",
        value: function shuffle() {
            for (var i = this.cards.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var _ref = [this.cards[j], this.cards[i]];
                this.cards[i] = _ref[0];
                this.cards[j] = _ref[1];
            }
            return this.cards;
        }
    }, {
        key: "draw",
        value: function draw() {
            if (this.cards.length > 0) {
                return this.cards.shift();
            } else {
                return false;
            }
        }
    }, {
        key: "insertAt",
        value: function insertAt(card, position) {
            this.cards.splice(position, 0, card);
            return this.cards;
        }
    }, {
        key: "getCardsCount",
        value: function getCardsCount() {
            return this.cards.length;
        }
    }]);

    return Deck;
}();

exports.default = Deck;