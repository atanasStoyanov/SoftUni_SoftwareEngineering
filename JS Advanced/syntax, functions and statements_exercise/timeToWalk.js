function solve(stepsNumber, footPrintLength, speed) {

    let distance = stepsNumber * footPrintLength;
    let distanceInKm = distance / 1000;
    let breaks = Math.floor(distance / 500);
    let timeInHrs = distanceInKm / speed;
    let timeInMin = timeInHrs * 60 + breaks;
    let timeInSec = timeInMin * 60;

    let hours = Math.floor(timeInSec / 3600);
    let minutes = Math.floor(timeInSec / 60);
    let seconds = (timeInSec % 60).toFixed(0)

    if (minutes >= 60) {
        minutes -= 60;
        hours ++;
    }
    
    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);

    return `${hours}:${minutes}:${seconds}`;
}

console.log(solve(2564, 0.70, 5.5));
