function footballTournament(input) {
    let name = input.shift();
    let games = Number(input.shift());
    let points = 0;
    let wins = 0;
    let tides = 0;
    let looses = 0;
    let winRate = 0;

    for (let index = 0; index < games; index++) {
        let score = input.shift();

        if (score === 'W') {
            points += 3;
            wins++;
        } else if (score === 'D') {
            points += 1;
            tides++;
        } else {
            looses++;
        }
    }

    winRate = wins / games * 100;

    if (games < 1) {
        console.log(`${name} hasn't played any games during this season.`);
    } else {
        console.log(`${name} has won ${points} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${wins}`);
        console.log(`## D: ${tides}`);
        console.log(`## L: ${looses}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
    }
}
footballTournament(['Barcelona', 7, 'W', 'D', 'L', 'L', 'W', 'W', 'D']);