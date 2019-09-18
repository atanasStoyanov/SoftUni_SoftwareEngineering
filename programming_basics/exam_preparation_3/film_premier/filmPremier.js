function filmPremier (input) {
    let movie = input.shift();
    let pakage = input.shift();
    let ticketsNumber = Number(input.shift());
    let price = 0;

    if (movie === 'John Wick') {

        if (pakage === 'Drink') {
            price = ticketsNumber * 12;
        } else if (pakage === 'Popcorn') {
            price = ticketsNumber * 15;
        } else {
            price = ticketsNumber * 19;
        }

    } else if (movie === 'Star Wars') {

        if (pakage === 'Drink') {
            price = ticketsNumber * 18;
        } else if (pakage === 'Popcorn') {
            price = ticketsNumber * 25;
        } else {
            price = ticketsNumber * 30;
        }

        if (ticketsNumber >= 4) {
            price *= 0.70;
        }

    } else {

        if (pakage === 'Drink') {
            price = ticketsNumber * 9;
        } else if (pakage === 'Popcorn') {
            price = ticketsNumber * 11;
        } else {
            price = ticketsNumber * 14;
        }

        if (ticketsNumber === 2) {
            price *= 0.85;
        }
    }

    console.log(`Your bill is ${price.toFixed(2)} leva.`);
}
filmPremier(['Jumanji', 'Menu', 2]);