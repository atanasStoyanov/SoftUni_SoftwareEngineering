function solve(arr) {
    let frogSquad = arr.shift().split(' ');

    function join(name) {
        frogSquad.push(name);
        return frogSquad;
    }

    function jump(name, i) {
        if (i >= 0 && i <= frogSquad.length) {
            frogSquad.splice(i, 0, name);
        }

        return frogSquad;
    }

    function dive(i) {
        if (i >= 0 && i <= frogSquad.length) {
            frogSquad.splice(i, 1);
        }

        return frogSquad;
    }

    let firstOrLast = (count, order) => order === 'First' ? console.log(frogSquad.slice(0, count).join(' ')) : console.log(frogSquad.slice(frogSquad.length - count).join(' '));

    let print = (arr, order) => order === 'Normal' ? console.log(`Frogs: ${arr.join(' ')}`) : console.log(`Frogs: ${arr = arr.reverse().join(' ')}`);

    for (let i = 0; i < arr.length; i++) {
        let [action, ...params] = arr[i].split(' ');

        if (action === 'Join') {
            let frog = params[0];
            join(frog);
        } else if (action === 'Jump') {
            let frog = params[0];
            let index = Number(params[1]);

            jump(frog, index);
        } else if (action === 'Dive') {
            let index = Number(params[0]);
            dive(index);
        } else if (action === 'Print') {
            let order = params[0];
            print(frogSquad, order);
        } else {
            let count = Number(params[0]);
            firstOrLast(count, action);
        }

    }

}

solve([
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
]);