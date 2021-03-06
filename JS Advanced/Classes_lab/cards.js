let result = (function () {
    let Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2665',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663'
    }

    let Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (Faces.includes(face) === false) {
                throw new Error('Invalid card face: ' + face);
            }
            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (Object.values(Suits).includes(suit) === false) {
                throw new Error('Inalid card suit: ' + suit);
            }

            this._suit = suit;
        }

        toString() {
            return `${this.face}${this.suit}`;
        }

    }


    return {
        Suits: Suits,
        Card: Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;


let card = new Card('Q', Suits.CLUBS);
card.face = 'A';
card.suit = Suits.CLUBS;

console.log(card);

