function choreography(input){
    let steps = Number(input[0]);
    let dancers = Number(input[1]);
    let days = Number(input[2]);

    let stpesPerDay = Math.ceil(((steps / days) / steps) * 100);
    let stepsPerDancer = stpesPerDay / dancers;

    if (stpesPerDay <= 13){
        console.log(`Yes, they will succeed in that goal! ${stepsPerDancer.toFixed(2)}%`);
    }else{
        console.log(`No, they will not succeed in that goal! Required ${stepsPerDancer.toFixed(2)}% steps to be learned per day`)
    }
}

choreography(['55555','30','7'])