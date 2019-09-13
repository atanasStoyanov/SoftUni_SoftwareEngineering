function sequence (input) {
    let n = Number(input[0]);

    let initialNumber = 1;
    
    while (initialNumber <= n) {
        console.log(initialNumber);
        initialNumber = initialNumber * 2 + 1;
    }
}

sequence([8])