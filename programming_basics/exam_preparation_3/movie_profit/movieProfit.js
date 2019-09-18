function movieProfit (input) {
    let name = input.shift();
    let days = Number(input.shift());
    let ticketsNumber = Number(input.shift());
    let ticketPrice = Number(input.shift());
    let percentigeForTheCinema = Number(input.shift());

    let income = ticketPrice * ticketsNumber * days;
    let costForTheCinema = income * percentigeForTheCinema / 100;

    let profit = income - costForTheCinema;

    console.log(`The profit from the movie ${name} is ${profit.toFixed(2)} lv.`);
}
movieProfit(['The Programmer', 20, 500, 7.50, 7])