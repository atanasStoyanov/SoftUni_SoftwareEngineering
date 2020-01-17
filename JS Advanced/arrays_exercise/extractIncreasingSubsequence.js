function solve(arr) {

    return arr
        .reduce((agr, el, i) => {
            Number(el) >= agr[agr.length - 1] && i > 0 ? agr.push(el) : agr;

            return agr;
        }, [arr[0]])
        .join('\n');

}

console.log(solve([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]));
