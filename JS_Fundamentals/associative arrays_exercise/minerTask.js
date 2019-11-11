function solve(arr) {
    let resources = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let quantity = Number(arr[i + 1]);

        if (resources.hasOwnProperty(resource)) {
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }

    Object.keys(resources)
        .map(res => console.log(`${res} -> ${resources[res]}`))
}

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);