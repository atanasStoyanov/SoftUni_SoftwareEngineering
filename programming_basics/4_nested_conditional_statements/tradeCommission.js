function tradeCommissio (input){
    let city = input[0];
    let sum = Number(input[1]);

    let result = null;

    if (city == 'Sofia'){
        if (sum >= 0 && sum <=500){
            result = sum * 0.05
        }else if (sum > 500 && sum <=1000){
            result = sum * 0.07
        }else if (sum > 1000 && sum <= 10000){
            result = sum * 0.08
        }else if(sum > 10000){
            result = sum * 0.12
        }
    }else if(city == 'Varna'){
        if (sum >= 0 && sum <=500){
            result = sum * 0.045
        }else if (sum > 500 && sum <=1000){
            result = sum * 0.075
        }else if (sum > 1000 && sum <= 10000){
            result = sum * 0.1
        }else if(sum > 10000){
            result = sum * 0.13
        }
    }else if(city == 'Plovdiv'){
        if (sum >= 0 && sum <=500){
            result = sum * 0.055
        }else if (sum > 500 && sum <=1000){
            result = sum * 0.08
        }else if (sum > 1000 && sum <= 10000){
            result = sum * 0.12
        }else if(sum > 10000){
            result = sum * 0.145
        }
    }

    if (result){
        console.log(result.toFixed(2))
    }else{
        console.log('error')
    }
}