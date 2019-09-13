function skiTrip(input){
    let days = Number(input[0]) - 1;
    let kind = input[1];
    let grade = input[2];
    let sum = null;

    if (kind == 'room for one person') {
        sum = days * 18;
    } else if (kind == 'apartment') {

        if (days < 10) {
            sum = days * 25 * 0.7;
        } else if (days >= 10 && days <= 15) {
            sum = days * 25 * 0.65;
        } else {
            sum = days * 25 * 0.50;
        }

    } else {

        if (days < 10) {
            sum = days * 35 * 0.9;
        } else if (days >= 10 && days <= 15) {
            sum = days * 35 * 0.85;
        } else {
            sum = days * 35 * 0.80;
        }
    }
    
    if (grade == 'positive') {
        sum = sum + sum * 0.25;
    } else {
        sum = sum - sum * 0.10;
    }
    
    console.log(sum.toFixed(2));
}

skiTrip(['14', 'apartment','positive'])