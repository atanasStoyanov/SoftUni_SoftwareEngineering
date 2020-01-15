function solve(arr) {
    let limitsMap = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }

    let speed = Number(arr[0]);
    let area = arr[1];

    let output = '';
    let speeding = speed - limitsMap[area];

    if (speeding > 0 && speeding <= 20) {
        output = 'speeding';
    } else if (speeding > 0 && speeding <= 40) {
        output = 'excessive speeding';
    } else if (speeding > 0 && speeding > 40){
        output = 'reckless driving';
    }

    return output;
}

console.log(solve([200, 'motorway']));
