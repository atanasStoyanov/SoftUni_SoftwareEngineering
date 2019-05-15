function vowelsSum(input) {
    let text = input[0];
    let sum = 0;

    for (let index = 0; index < text.length; index++){
        let letter = text[index]

        if(letter == 'a'){
            sum += 1;
        }else if(letter == 'e'){
            sum += 2;
        }else if(letter == 'i'){
            sum += 3;
        }else if(letter == 'o'){
            sum += 4;
        }else if(letter == 'u'){
            sum += 5
        }
    }
    console.log(sum);
}

vowelsSum(['hello'])