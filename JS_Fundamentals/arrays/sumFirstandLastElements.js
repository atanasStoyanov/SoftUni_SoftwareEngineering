function sumFirstAndLastElements (input) {
    let firstElement = Number(input.shift());
    let lastElement = Number(input.pop());
    
    console.log(firstElement + lastElement);
}

sumFirstAndLastElements(['10', '17', '22', '33'])