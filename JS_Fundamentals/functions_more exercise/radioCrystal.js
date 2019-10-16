function solve(arr) {
    let target = Number(arr[0]);

    function process(crystalThinckness, action) {
        switch (action) {
            case 'cut':
                crystalThinckness /= 4;
                break;
            case 'lap':
                crystalThinckness *= 0.80;
                break;
            case 'grind':
                crystalThinckness -= 20;
                break;
            case 'etch':
                crystalThinckness -= 2;
                break;
            case 'xRay':
                crystalThinckness += 1;
                return crystalThinckness;
        }

        return transporting(crystalThinckness);
    }

    function transporting(crystalThinckness) {
        return Math.floor(crystalThinckness);
    }

    for (let i = 1; i < arr.length; i++) {
        let currentChunk = Number(arr[i]);
        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        let used = false;

        console.log(`Processing chunk ${currentChunk} microns`);


        while (currentChunk !== target) {

            while (currentChunk / 4 >= target - 1) {
                currentChunk = process(currentChunk, 'cut');
                cutCount++;
            }

            while (currentChunk * 0.80 >= target - 1) {
                currentChunk = process(currentChunk, 'lap');
                lapCount++;
            }

            while (currentChunk - 20 >= target - 1) {
                currentChunk = process(currentChunk, 'grind');
                grindCount++;
            }

            while (currentChunk - 2 >= target - 1) {
                currentChunk = process(currentChunk, 'etch');
                etchCount++;
            }

            if (currentChunk + 1 === target && !used) {
                used = true;
                currentChunk = process(currentChunk, 'xRay');
            }
        }

        if (cutCount) {
            console.log(`Cut x${cutCount}`)
            console.log("Transporting and washing");
        }

        if (lapCount) {
            console.log(`Lap x${lapCount}`)
            console.log("Transporting and washing");
        }

        if (grindCount) {
            console.log(`Grind x${grindCount}`)
            console.log("Transporting and washing");
        }

        if (etchCount) {
            console.log(`Etch x${etchCount}`);
            console.log("Transporting and washing");
        }

        if (used) {
            console.log(`X-ray x1`);
        }

        console.log(`Finished crystal ${target} microns`);
    }
}

solve([1000, 4000, 8100]);