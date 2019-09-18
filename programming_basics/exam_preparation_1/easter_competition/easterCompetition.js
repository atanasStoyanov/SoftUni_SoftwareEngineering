function easterCompetition (input) {
    let easterBreadNumber = Number(input.shift());
    let bestBakerScore = Number.MIN_SAFE_INTEGER;
    let bestBakerName = '';
    
    for (let i = 1; i <= easterBreadNumber; i++) {
        let bakerName = input.shift();
        let grade = input.shift();
        let score = 0;

        while (grade !== 'Stop') {
            grade = Number(grade)
            score += grade;
            grade = input.shift();
        }

        console.log(`${bakerName} has ${score} points.`);

        if (score > bestBakerScore) {
            console.log(`${bakerName} is the new number 1!`);
            bestBakerScore = score;
            bestBakerName = bakerName;
        }
    }

    console.log(`${bestBakerName} won competition with ${bestBakerScore} points!`);
}

easterCompetition([2, 'Chef Angelov', 9, 9,9,'Stop','Chef Rowe',10,10,10,10,'Stop']);