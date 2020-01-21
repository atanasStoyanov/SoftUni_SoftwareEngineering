function solve(arr) {

    function createOrUpdateProperty(obj, town, product, price) {
        obj.hasOwnProperty(product) ? obj[product][town] = Number(price) : obj[product] = { [town]: Number(price) };
    }

    let productsObj = arr.reduce((agr, line) => {

        let productInfo = line.split(' | ');

        createOrUpdateProperty(agr, ...productInfo);

        return agr;
    }, {});


    return Object.keys(productsObj)
        .reduce((agr, product) => {
            let townsWithPrices = productsObj[product];
            Object.keys(townsWithPrices)
                .sort((firstTown, nextTown) => townsWithPrices[firstTown] - townsWithPrices[nextTown])
                .slice(0, 1)
                .map(town => agr += `${product} -> ${townsWithPrices[town]} (${town})\n`);
            return agr;
        }, '')

}

console.log(solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]));
