function solve(...params) {
    let sum = params.reduce((agr, element) => {
        agr += element.length;
        return agr;
    }, 0);

    let avg = Math.floor(sum / params.length);

    return [sum, avg].join('\n');
}

console.log(solve('chocolate', 'ice cream', 'cake'));
