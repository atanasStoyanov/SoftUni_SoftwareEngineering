function lunchBreak (input) {
    let name = input.shift();
    let episodeTime = Number(input.shift());
    let breakTime = Number(input.shift());

    let lunchTime = breakTime * 1 / 8;
    let restTime = breakTime * 1 / 4;
    let freeTime = breakTime - lunchTime - restTime;
    let diff = Math.abs(freeTime - episodeTime);

    if (freeTime >= episodeTime) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff)} more minutes.`);
    }
}
lunchBreak(['Teen Wolf', 48, 60]);