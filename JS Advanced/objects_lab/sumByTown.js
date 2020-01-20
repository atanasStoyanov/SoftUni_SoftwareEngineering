function solve(input) {

    function addValueToProp(obj, el, val) {
        obj.hasOwnProperty(el) ? obj[el] += Number(val) : obj[el] = Number(val);
    }

    return JSON.stringify(
        input.reduce((agr, el, i) => {
           i % 2 === 0 ? addValueToProp(agr, el, input[i + 1]) : agr;

            return agr;
        }, {}))
}

console.log(solve([
    'Sofia',
    '20',
    'Varna',
    '3',
    'sofia',
    '5',
    'varna',
    '4'
]));
