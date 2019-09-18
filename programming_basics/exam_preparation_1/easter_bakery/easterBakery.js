function easterBakery (input) {
    let flourPricePerKg = Number(input[0]);
    let flourAmount = Number(input[1]);
    let sugerAmount = Number(input[2]);
    let packsOfEggs = Number(input[3]);
    let yeast = Number(input[4]);

    let sugerPrice = flourPricePerKg * 0.75;
    let packOfEggsPrice = flourPricePerKg * 1.10;
    let yeastPrice = sugerPrice * 0.20;

    let sum = flourAmount * flourPricePerKg + sugerAmount * sugerPrice + packsOfEggs * packOfEggsPrice + yeast * yeastPrice;

    console.log(sum.toFixed(2));
}

easterBakery([50,10,3.5,6,1])