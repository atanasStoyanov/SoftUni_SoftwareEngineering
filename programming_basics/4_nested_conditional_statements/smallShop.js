function shop(input){
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let sum = 0;

    if (city == 'Sofia') {

        if (product == 'coffee') {
            sum = 0.50 * quantity;
        } else if (product == 'water') {
            sum = 0.80 * quantity;
        } else if (product == 'beer') {
            sum = 1.20 * quantity;
        } else if (product == 'sweets') {
            sum = 1.45 * quantity;
        } else {
            sum = 1.60 * quantity;
        }

    } else if (city == 'Varna') {

        if (product == 'coffee') {
            sum = 0.45 * quantity;
        } else if (product == 'water') {
            sum = 0.70 * quantity;
        } else if (product == 'beer') {
            sum = 1.10 * quantity;
        } else if (product == 'sweets') {
            sum = 1.35 * quantity;
        } else {
            sum = 1.55 * quantity;
        }

    } else {

        if (product == 'coffee') {
            sum = 0.40 * quantity;
        } else if (product == 'water') {
            sum = 0.70 * quantity;
        } else if (product == 'beer') {
            sum = 1.15 * quantity;
        } else if (product == 'sweets') {
            sum = 1.30 * quantity;
        } else {
            sum = 1.50 * quantity;
        }

    }

    console.log(sum);
}

shop(['penuts','Plovdiv','1'])