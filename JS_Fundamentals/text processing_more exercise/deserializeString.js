function solve(arr) {
    let output = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let [char, indexes] = arr[i].split(':');
        indexes = indexes.split('/').map(Number);

        for (let j = 0; j < indexes.length; j++) {
            let index = indexes[j];
            output[index] = char;
        }

    }

    console.log(output.join(''));

}

solve([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
]);