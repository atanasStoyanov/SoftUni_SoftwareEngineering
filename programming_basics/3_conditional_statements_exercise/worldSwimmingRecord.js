function swimmingRecord(input){
    let record =  Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let time = distance * timePerMeter;
    let slowing = Math.floor(distance / 15) * 12.5
    let finalTime = time + slowing;
    
    if (record > finalTime){
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(finalTime - record).toFixed(2)} seconds slower.`);
    }
}

swimmingRecord(['55555.67','3017','5.03'])