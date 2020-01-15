function solve(arr) {
    let num = Number(arr.shift());
    let actionsMap = {
        'chop': a => a / 2,
        'dice': a => Math.sqrt(a),
        'spice': a => a += 1,
        'bake': a => a * 3,
        'fillet': a => a * 0.80
    }

    return arr
        .reduce((agr, el) => {
            agr.push(actionsMap[el](num));
            num = actionsMap[el](num);
            return agr;
        }, [])
        .join('\n')

}

console.log(solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']));
