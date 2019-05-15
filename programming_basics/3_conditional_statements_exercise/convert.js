function convert(input){
    let number = Number(input[0]);
    let entrance = input[1];
    let exit = input[2];

    if (entrance == "mm"){
        number = number / 1000;
    }else if (entrance == "cm"){
        number = number / 100
    }
    if (exit == "mm"){
        number = number * 1000;
    }else if (exit == "cm"){
        number = number * 100
    }
    console.log(number.toFixed(3))
}

convert(['150', 'm', 'cm'])