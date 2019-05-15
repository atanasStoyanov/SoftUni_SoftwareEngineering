function evenPowersOf2(input) {
    let power = Number(input[0]);

    for (let index = 0; index <= power; index+=2) {
        console.log(Math.pow(2,index))
        
    }
}
evenPowersOf2([7])