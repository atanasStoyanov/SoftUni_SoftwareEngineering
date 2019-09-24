function christmasSweets(input) {
    let baklavaPricePerKg = Number(input.shift());
    let cupcakesPricePerKg = Number(input.shift());
    let shtolenQuantity = Number(input.shift());
    let candyQuantity = Number(input.shift());
    let bisquitsQuantity = Number(input.shift());

    let shtolenPrice = baklavaPricePerKg * 1.60;
    let candyPrice = cupcakesPricePerKg * 1.80;

    let sum = shtolenQuantity * shtolenPrice + candyQuantity * candyPrice + bisquitsQuantity * 7.50;

    console.log(sum.toFixed(2));
}
christmasSweets([5.55, 3.57, 4.3, 3.6, 7]);