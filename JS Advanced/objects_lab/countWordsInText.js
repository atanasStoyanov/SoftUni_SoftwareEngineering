function solve(arr) {

    let pattern = /\w+/g;

    return JSON.stringify(arr[0]
        .match(pattern)
        .reduce((agr, el) => {
            agr.hasOwnProperty(el) ? agr[el] += 1 : agr[el] = 1;
            return agr;
        }, {}));


}

console.log(solve([`Far too slow, you're far too slow.`]));
