function solve(arr) {
    let numberArr = arr.shift().split(' ').map(Number);
    let end = arr.pop();

    let actions = {
        'Switch': (paramsArr, arr) => {
            let index = Number(paramsArr[0]);
            if (index >= 0 && index < arr.length){
                arr[index] *= -1
            }
        },
        'Change': (paramsArr, arr) => {
            let index = Number(paramsArr[0]);
            let value = Number(paramsArr[1]);
            if (index >= 0 && index < arr.length){
                arr[index] = value;
            }
        },
        'Sum': {
            'Negative': (arr) => {
                arr = arr
                    .filter(a => a < 0)
                    .reduce((a, b) => a + b);

                console.log(arr);
            },
            'Positive': (arr) => {
                arr = arr
                    .filter(a => a >= 0)
                    .reduce((a, b) => a + b);

                console.log(arr);
            },
            'All': (arr) => {
                arr = arr.reduce((a, b) => a + b);

                console.log(arr);

            }
        }
    }
    function trackArr(strCommand) {
        let [action, ...params] = strCommand.split(' ');
        if (action === 'Sum') {
            actions[action][params[0]](numberArr);
        } else {
            actions[action](params, numberArr);
        }
    }

    arr.map(a => trackArr(a));

    console.log(numberArr.filter(a => a >= 0).join(' '));
    
}

solve([
    '1 2 3 4 5 4 3 2 1 0',
    'Switch -4',
    'Change 13 0',
    'Switch 0',
    'Sum All',
    'End'
]);