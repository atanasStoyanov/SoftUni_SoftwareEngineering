function solve(arr) {

    return arr
        .reduce((agr, el) => {
            el >= 0 ? agr.push(el) : agr.unshift(el);
            return agr;
        }, [])
        .join('\n');

}

console.log(solve([3, -2, 0, -1]));
