function solve(arr) {
    let neighborhoods = new Map();
    let hoods = arr
        .shift()
        .split(', ')
        .map(a => neighborhoods.set(a, []));

    arr.map(a => {
        let [hoodName, person] = a.split(' - ');

        if (neighborhoods.has(hoodName)) {
            let inhabitants = neighborhoods.get(hoodName);
            inhabitants.push(person);

            neighborhoods.set(hoodName, inhabitants)
        }
    });

    let sorted = Array.from(neighborhoods.entries())
        .sort((a, b) => b[1].length - a[1].length)
        .map(a => {
            console.log(`${a[0]}: ${a[1].length}`);
            console.log(`${a[1].map(item => '--' + item).join('\n')}`);
        })
}

solve([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);