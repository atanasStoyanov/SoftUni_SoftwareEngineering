function solve(arr) {
    let destinations = {};

    arr.map(line => {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);

        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = { [town]: cost };
        } else {

            if (destinations[country].hasOwnProperty(town)) {
                destinations[country][town] = Math.min(destinations[country][town], cost);
            } else {
                destinations[country][town] = cost;
            }
        }
    });

    let sortedDestiantions = Object.keys(destinations)
        .sort((a, b) => a.localeCompare(b));

    for (const country of sortedDestiantions) {
        let townsAndPrices = '';

        for (const town in destinations[country]) {
            townsAndPrices += `${town} -> ${destinations[country][town]} `
        }

        console.log(`${country} -> ${townsAndPrices}`);
    }

}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);