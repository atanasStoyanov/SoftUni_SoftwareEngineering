function solve(arr) {
    
    return arr.reduce((agr, el, i, arr) => {
        if (i % 2 === 0) {
            agr[el] = Number(arr[i + 1]);
        }

        return agr;
    },{});
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
