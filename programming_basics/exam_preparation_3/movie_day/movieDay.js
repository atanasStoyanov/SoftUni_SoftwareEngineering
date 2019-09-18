function movieDay (input) {
    let shootingTime = Number(input.shift());
    let scenesNumber = Number(input.shift());
    let sceneTime = Number(input.shift());

    let areaPreparation = shootingTime * 0.15;
    let timeForShootingTheScenes = scenesNumber * sceneTime;
    let neededTime = areaPreparation + timeForShootingTheScenes;
    let diff = Math.abs(shootingTime - neededTime);

    if (shootingTime >= neededTime) {
        console.log(`You managed to finish the movie on time! You have ${diff.toFixed(0)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${diff.toFixed(0)} minutes.`);
    }
}
movieDay([60, 15, 3])