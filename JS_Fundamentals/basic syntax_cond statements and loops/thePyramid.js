function thePyramid (width, height) {
    let pyramidSteps = 0;
    let neededStone = 0;
    let neededMarble = 0;
    let neededLapis = 0;
    let neededGold = 0;

    for (let index = width; index > 0; index -= 2) {
        let area = Math.pow(index,2);
        let perimeterPerStep = (index - 1) * 4;
        let stonePerStep = area - perimeterPerStep;
        if (index === 1 || index === 2){
            neededGold += area * height;
            pyramidSteps++;
            break;
        } else {
            neededStone += stonePerStep * height;
        }
        pyramidSteps ++;
        if (pyramidSteps % 5 === 0 && pyramidSteps !== 0){
            neededLapis += perimeterPerStep * height;
        } else{
            neededMarble += perimeterPerStep * height;
        }
        
    }

    let pyramidHeight = pyramidSteps * height;
    
    console.log(`Stone required: ${Math.ceil(neededStone)}`);
    console.log((`Marble required: ${Math.ceil(neededMarble)}`));
    console.log(`Lapis Lazuli required: ${Math.ceil(neededLapis)}`);
    console.log((`Gold required: ${Math.ceil(neededGold)}`));
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}
thePyramid(23, 0.5)