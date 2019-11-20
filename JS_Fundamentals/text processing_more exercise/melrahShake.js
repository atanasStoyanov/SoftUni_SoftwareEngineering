function solve(arr) {
    let str = arr[0];
    let pattern = arr[1];

    while (str.indexOf(pattern) > 0 && str.lastIndexOf(pattern) > 0) {

        let firstIndex = str.indexOf(pattern)
        let lastIndex = str.lastIndexOf(pattern) - pattern.length;


        str = str.split('');
        str.splice(firstIndex, pattern.length);
        str.splice(lastIndex, pattern.length);
        str = str.join('');

        console.log('Shaked it.');

        pattern = pattern.split('');
        pattern.splice(Math.floor(pattern.length / 2), 1)
        pattern = pattern.join('')

    }

    console.log('No shake.');

    console.log(str);

}

solve([
    '##mtm!!mm.mm*mtm.#',
    'mtm'
]);