function sumSeconds(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let sum = first + second + third;

    let minutes = Math.floor(sum / 60);
    let seconds = sum % 60;

    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(['35', '45', '44'])