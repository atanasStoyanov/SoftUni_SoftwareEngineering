function solve(arr) {

    function addProductToCatalogue(obj, prod, price) {
        obj.hasOwnProperty(prod[0]) ? obj[prod[0]][prod] = Number(price) : obj[prod[0]] = { [prod]: price };
        return obj;
    }

    let catalogue = arr.reduce((agr, prodInfo) => {
        let [product, price] = prodInfo.split(' : ');

        addProductToCatalogue(agr, product, price);

        return agr;
    }, {});

    let output = '';

    Object.keys(catalogue)
        .sort((a, b) => a.localeCompare(b))
        .map(letter => {
            output += `${letter}\n`;

            let productsObj = catalogue[letter];

            Object.keys(productsObj)
                .sort((a, b) => a.localeCompare(b))
                .map(product => output += `  ${product}: ${productsObj[product]}\n`);
        })


    return output;
}

console.log(solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]));
