function garageCleaning (input){
    let firstBro = Number(input[0]);
    let secondBro = Number(input[1]);
    let thirdBro = Number(input[2]);
    let fishingTime = Number(input[3]);

    let sum = 1 / (1/firstBro + 1/secondBro + 1/thirdBro);
    let timeWithBreak = sum + sum * 0.15;

    console.log(`Cleaning time: ${timeWithBreak.toFixed(2)}`);

    if (timeWithBreak <= fishingTime){
        let diff = Math.floor(fishingTime - timeWithBreak);
        console.log(`Yes, there is a surprise time - time left -> ${diff} hours.`);
    } else {
        let diff = Math.ceil(timeWithBreak - fishingTime)
        console.log(`No, there isn't a surprise - shortage of tiem -> ${diff} hours.`);
    }
}

garageCleaning(['3.2','2.5','1.24','0.5'])