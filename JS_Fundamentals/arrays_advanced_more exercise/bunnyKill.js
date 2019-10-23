function solve(arr) {
    let bombsCoordinates = arr.pop().split(' ');
    let hangar = arr.map(a => a.split(' '));
    let damage = 0;

    for (let i = 0; i < bombsCoordinates.length; i++) {
        let [bombRow, bombColumn] = bombsCoordinates[i].split(',').map(Number);
        let bombDamage = Number(hangar[bombRow][bombColumn]);
        let nextRow = bombRow + 1;
        let previousRow = bombRow - 1;
        let nextColumn = bombColumn + 1;
        let previousColumn = bombColumn - 1; 

        if (bombRow > 0 && bombRow < hangar.length - 1) {
            hangar[previousRow][bombColumn] -= bombDamage;
            hangar[nextRow][bombColumn] -= bombDamage;

            if (bombColumn > 0 && bombColumn < hangar[bombRow.length - 1]) {
                hangar[previousRow][previousColumn] -= bombDamage;
                hangar[bombRow][previousColumn] -= bombDamage;
                hangar[bombRow][nextColumn] -= bombDamage;
                hangar[previousRow][nextColumn] -= bombDamage;
                hangar[nextRow][previousColumn] -= bombDamage;
                hangar[nextRow][nextColumn] -= bombDamage;

            }

        } else if (bombRow === 0) {

            if (bombColumn > 0 && bombColumn < hangar.length - 1) {
                hangar[bombRow][previousColumn] -= bombDamage;
                hangar[bombRow][nextColumn] -= bombDamage;
                hangar[nextRow][bombColumn] -= bombDamage;
                hangar[nextRow][previousColumn] -= bombDamage;
                hangar[nextRow][nextColumn] -= bombDamage;
            } else {
                hangar[bombRow][nextColumn] -= bombDamage;
                hangar[nextRow][bombColumn] -= bombDamage;
                hangar[nextRow][nextColumn] -= bombDamage;
            }
        }


    }

    console.log(hangar);

}

solve(
    ['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']
);