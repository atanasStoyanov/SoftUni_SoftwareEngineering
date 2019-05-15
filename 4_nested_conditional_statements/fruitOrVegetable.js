function fruitOrVeg(input){
    let product = input[0];

    let isFruit = product == 'banana' || product == 'apple' || product == 'kiwi' || product == 'cherry' || product == 'lemon' || product == 'grapes';
    let isVeg = product == 'tomato' || product == 'cucumber' || product == 'pepper' || product == 'carrot';

    if (isFruit){
        console.log('fruit');
    }else if (isVeg){
        console.log('vegetable');
    }else{
        console.log('unknown')
    }
}

