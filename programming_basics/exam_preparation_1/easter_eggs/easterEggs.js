function easterEggs (input) {
    let eggsNumber = Number(input.shift());
    let redEggs = 0;
    let greenEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let maxEggs = Number.MIN_SAFE_INTEGER;
    let maxEggsColor = '';

    for (let index = 1; index <= eggsNumber; index++) {
        let color = input.shift();

        if (color === 'red') {
            redEggs ++;
        } else if (color === 'green') {
            greenEggs ++; 
        } else if (color === 'orange'){
            orangeEggs ++;
        } else {
            blueEggs ++;
        }

        if (redEggs > maxEggs) {
            maxEggs = redEggs;
            maxEggsColor = 'red';
        }

        if (greenEggs > maxEggs){
            maxEggs = greenEggs;
            maxEggsColor = 'green';
        }

        if (orangeEggs > maxEggs){
            maxEggs = orangeEggs
            maxEggsColor = 'orange';
        }
        
        if (blueEggs > maxEggs){
            maxEggs = blueEggs;
            maxEggsColor = 'blue';
        }
    }

    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxEggsColor}`);
}

easterEggs([4,'blue', 'red', 'blue', 'orange']);