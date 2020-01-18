function solve(arr) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    const printDashboard = (arr) => arr
        .map(row => row.join('\t'))
        .join('\n');

    const areEqualElements = (arr) => arr.every(el => el !== false && el === arr[0]);

    const playerSwap = (player) => player === 'X' ? player = 'O' : player = 'X';

    const boardIsNotFull = (arr) => arr.some(row => row.some(field => field === false));

    let output = '';
    let player = 'X'

    for (let i = 0; i < arr.length; i++) {
        let [row, col] = arr[i].split(' ');

        if (dashboard[row][col] === false) {
            dashboard[row][col] = player;
            player = playerSwap(player);
        } else {
            output += 'This place is already taken. Please choose another!\n';
        }

        let haveWinnerByRowOrCol = false;
        let firstDiagonalIsWinner = false;
        let secondDiagonalIsWinner = false;
        let firstDiagonalArr = [];
        let secondDiagonalArr = [];

        for (let row = 0; row < dashboard.length; row++) {
            let isRowWinner = areEqualElements(dashboard[row]);
            let columnArr = dashboard
                .reduce((agr, el) => {
                    agr.push(el[row])
                    return agr;
                }, []);

            let isColumnWinner = areEqualElements(columnArr);

            firstDiagonalArr.push(dashboard[row][row]);
            secondDiagonalArr.push(dashboard[row][dashboard.length - 1 - row]);

            if (isRowWinner === true || isColumnWinner === true) {
                haveWinnerByRowOrCol = true;
                break;
            }
        }

        firstDiagonalIsWinner = areEqualElements(firstDiagonalArr);
        secondDiagonalIsWinner = areEqualElements(secondDiagonalArr);

        if (haveWinnerByRowOrCol || firstDiagonalIsWinner || secondDiagonalIsWinner) {
            output += `Player ${player = playerSwap(player)} wins!\n`;
            output += printDashboard(dashboard);
            break;
        } else if (boardIsNotFull(dashboard) === false) {
            output += 'The game ended! Nobody wins :(\n';
            output += printDashboard(dashboard);
            break;
        }
    }

    return output;
}

console.log(solve([
    "0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"

]));
