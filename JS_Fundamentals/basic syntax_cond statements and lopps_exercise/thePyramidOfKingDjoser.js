function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let pyramidSteps = 0;
    let allSteps = 0;

    for (let index = base; index > 0; index -= 2) {
        allSteps++;
    }

    for (let i = base; i > 0; i -= 2) {
        let stepArea = i * i * increment;
        let stonePerStep = (i - 2) * (i - 2) * increment;
        pyramidSteps++;

        if (allSteps - pyramidSteps === 0) {
            gold += stepArea;
        } else if (pyramidSteps % 5 === 0) {
            lapis += stepArea - stonePerStep;
            stone += stonePerStep;

        } else {
            marble += stepArea - stonePerStep;
            stone += stonePerStep;
        }

    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(allSteps * increment)}`);
}

solve(23, 0.5);