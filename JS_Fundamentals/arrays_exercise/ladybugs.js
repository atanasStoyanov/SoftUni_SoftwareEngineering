function solve(arr) {
    let fieldLength = arr.shift();
    let field = new Array(Number(fieldLength));
    let initialIndexes = arr.shift().split(' ').map( a => Number(a));

    for (let i = 0; i < field.length; i++) {

        if (initialIndexes.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let ladybugIndex = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2]);

        if (ladybugIndex < 0 || ladybugIndex > field.length - 1) {
            continue;
        }
        
        if (flyLength === 0) {
            continue;
        }
        if (field[ladybugIndex] === 1) {
            field[ladybugIndex] = 0;
            let newPosition = null;

            if (direction === 'right') {
                newPosition = ladybugIndex + flyLength;

                while (newPosition >= 0 && newPosition < field.length) {

                    if (field[newPosition] === 0) {
                        field[newPosition] = 1;
                        break;
                    } else {
                        newPosition +=flyLength;
                    }
                }
            } else {
                newPosition = ladybugIndex - flyLength;

                while (newPosition >= 0 && newPosition < field.length) {

                    if (field[newPosition] === 0) {
                        field[newPosition] = 1;
                        break;
                    } else {
                        newPosition -=flyLength;
                    }
                }
            }
        }
    }

    console.log(field.join(' '));
}

solve( [ 5, '3',
'3 left 2',
'1 left -2']

);