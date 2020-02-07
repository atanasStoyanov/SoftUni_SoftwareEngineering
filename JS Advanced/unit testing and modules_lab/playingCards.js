function factory(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (faces.includes(value) === false) {
                throw new Error('Error');
            }

            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (suits.hasOwnProperty(value) === false) {
                throw new Error('Error');
            }
            this._suit = suits[value];
        }

        toString() {
            return this._face + this._suit;
        }
    }

    let card = new Card(face, suit);

    return card.toString();
}

console.log(factory('A', 'S'));
