function solve(arr) {
    let players = {};
    let cardsType = {
        'S': 4,
        'H': 3,
        'D': 2, 
        'C': 1
    }

    function onlyUniqueCards(card, index, self) {
        return self.indexOf(card) === index;
    }

    function calculateCardValue(str) {
        let splittedCard = str.split('');
        let type = splittedCard.pop();
        let power = splittedCard.join('');

        if (power === 'J') {
            power = 11;
        } else if (power === 'Q') {
            power = 12;
        } else if (power === 'K'){
            power = 13;
        } else if (power === 'A'){
            power = 14;
        } else {
            power = Number(power);
        }

        return power * cardsType[type];
    }

    for (let i = 0; i < arr.length; i++) {
        let [person, cards] = arr[i].split(': ');
        cards = cards.split(', ')
        
        if (players.hasOwnProperty(person)) {
            players[person] = players[person].concat(cards);
        } else {
            players[person] = cards;
        }
    }

    for (const player in players) {
        players[player] = players[player]
            .filter(onlyUniqueCards)
            .map(card => calculateCardValue(card))
            .reduce((a, b) => a + b)

        console.log(`${player}: ${players[player]}`);
        
    }

}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);