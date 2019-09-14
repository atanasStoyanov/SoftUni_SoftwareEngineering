function latinLetters() {

    for (let index = 'a'.charCodeAt(); index <= 'z'.charCodeAt(); index++) {
        console.log(String.fromCharCode(index));
    }
}
latinLetters()