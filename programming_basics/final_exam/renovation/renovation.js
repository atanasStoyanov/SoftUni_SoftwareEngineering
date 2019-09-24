function renovation(input) {
    let height = Number(input.shift());
    let width = Number(input.shift());
    let noPaintingAreaPercentige = Number(input.shift());
    let command = input.shift();
    let paintingArea = Math.ceil(4 * height * width - (4 * height * width * noPaintingAreaPercentige / 100));

    while (command !== 'Tired!') {

        if (paintingArea === 0) {
            break;
        }

        command = Number(command);
        paintingArea -= command;

        command = input.shift();

        if (command > paintingArea) {
            break;
        }
    }

    let diff = command - paintingArea;

    if (command === 'Tired!') {
        console.log(`${paintingArea} quadratic m left.`);
    } else if (command > paintingArea) {
        console.log(`All walls are painted and you have ${diff} l paint left!`);
    } else {
        console.log(`All walls are painted! Great job, Pesho!`);
    }
}
renovation([2, 3, 25, 6, 7, 8]);