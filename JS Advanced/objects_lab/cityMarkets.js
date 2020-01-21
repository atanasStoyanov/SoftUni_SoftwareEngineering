function solve(arr) {

    function calculateValue(str) {
        return str
            .split(' : ')
            .reduce((amount, price) => Number(amount) * Number(price))

    }

    function addPropAndValue(obj, prop, el, valueInfo) {
        let value = calculateValue(valueInfo);
        obj.hasOwnProperty(prop) ? obj[prop][el] = value : obj[prop] = { [el]: value };
    }

    let market = arr.reduce((agr, line) => {
        let saleInfo  = line.split(' -> ');

        addPropAndValue(agr, ...saleInfo);
        
        return agr;
    }, {});

    let output = '';

    Object.keys(market)
        .map(town => {
            output += `Town - ${town}\n`;

            Object.keys(market[town])
                .map(product => output += `$$$${product} : ${market[town][product]}\n`);
        })

    return output;
}

console.log(solve([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]));
