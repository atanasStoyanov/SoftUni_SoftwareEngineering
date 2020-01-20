function solve(arr) {

    const isNotEmptyString = (a) => a !== '';
    const trimString = (a) => a.trim();
    const parseIfNumber = (x) => Number(x) ? Number(Number(x).toFixed(2)) : x;
    const checkIfZero = (x) => Number(x) === 0 ? Number(x) : x;

    function deserializeString(str) {
        return str
            .split('|')
            .filter(isNotEmptyString)
            .map(trimString)
            .map(parseIfNumber)
            .map(checkIfZero);
    }

    let keys = deserializeString(arr[0]);


    return JSON.stringify(arr
        .slice(1)
        .map(deserializeString)
        .map(el => el.reduce((agr, val, i) => {
            agr[keys[i]] = val;
            return agr;
        }, {})));
}

console.log(solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));
