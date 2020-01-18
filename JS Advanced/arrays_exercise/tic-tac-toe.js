function solve(arr) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let output = '';
    let playerIndex = 0;
    let movesCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        let [row, col] = arr[i].split(' ');
        let player = '';

        if (playerIndex % 2 === 0) {
            player = 'X';
        } else {
            player = 'O'
        }

        if (dashboard[row][col] === false) {
            dashboard[row][col] = player;
            movesCounter++;
        } else {
            output += 'This place is already taken. Please choose another!\n';
            playerIndex--;
        }

        playerIndex++;

        let haveWinner = false;
        let firstDiagonalIsWinner = false;
        let secondDiagonalIsWinner = false;

        if (movesCounter >= 5) {
            let firstDiagonalArr = [];
            let secondDiagonalArr = [];

            for (let row = 0; row < dashboard.length; row++) {
                let isRowWinner = dashboard[row].every(el => el !== false && el === dashboard[row][0]);
                let isColumnWinner = dashboard
                    .reduce((agr, el) => {
                        agr.push(el[row])
                        return agr;
                    }, [])
                    .every((el, i, arr) => el === arr[0]);

                firstDiagonalArr.push(dashboard[row][row]);
                secondDiagonalArr.push(dashboard[row][dashboard.length - 1 - row]);

                if (isRowWinner === true || isColumnWinner === true) {
                    haveWinner = true;
                    break;
                }
            }

            firstDiagonalIsWinner = firstDiagonalArr.every(el => el === firstDiagonalArr[0]);
            secondDiagonalIsWinner = secondDiagonalArr.every(el => el === secondDiagonalArr[0]);
        }

        if (haveWinner || firstDiagonalIsWinner || secondDiagonalIsWinner) {
            output += `Player ${player} wins!\n`;
            output += dashboard
                .map(row => row.join('\t'))
                .join('\n');

            break;
        } else if (movesCounter === 9) {
            output += 'The game ended! Nobody wins :(\n';
            output += dashboard
                .map(row => row.join('\t'))
                .join('\n');

            break;
        }
    }

    return output;
}

console.log(solve([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]));
