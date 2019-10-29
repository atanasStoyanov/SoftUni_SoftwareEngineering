function solve(arr) {
    let steps = Number(arr.shift());
    let stepLength = Number(arr.shift());
    let distance = Number(arr.shift());

    let shorterSteps = Math.floor(steps / 5);
    let shorterStepLength = stepLength * 0.70;

    let travelledDistanceInCm = (steps - shorterSteps) * stepLength + shorterSteps * shorterStepLength;
    let travelledDistanceInM = travelledDistanceInCm / 100;

    let percentage = (travelledDistanceInM / distance) * 100;

    console.log(`You travelled ${percentage.toFixed(2)}% of the distance!`);
}

solve([5000, 7.5, 500]);