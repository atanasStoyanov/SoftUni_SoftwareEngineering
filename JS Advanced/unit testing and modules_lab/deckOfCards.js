function printDeckOfCards(cardsArr) {

    function createCard(face, suit) {
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

    let result = [];

    for (const currentCard of cardsArr) {
        let face = '';
        let suit = '';

        if (currentCard.length === 2) {
            face = currentCard.substr(0, 1);
            suit = currentCard.substr(1, 1);
        } else {
            face = currentCard.substr(0, 2);
            suit = currentCard.substr(2, 1);
        }

        try {
            let card = createCard(face, suit);
            result.push(card);
        } catch (error) {
            return `Invalid card: ${currentCard}`;

            //for judge use console.log
            //console.log(`Invalid card: ${currentCard}`);
        }
    }

    return result.join(' ');

    //for judge use console.log
    // console.log(result.join(' '));
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));
