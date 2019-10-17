function solve(arr) {
    let trainArr = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let [command, passengers] = arr[i].split(' ');

        if (command === 'Add') {
            trainArr.push(Number(passengers));
        } else {

            for (let i = 0; i < trainArr.length; i++) {
                let wagon = trainArr[i];

                if (wagon + Number(command) <= capacity) {
                    trainArr[i] = wagon + Number(command);
                    break;
                }
            }
        }
    }

    console.log(trainArr.join(' '));

}

solve(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
);