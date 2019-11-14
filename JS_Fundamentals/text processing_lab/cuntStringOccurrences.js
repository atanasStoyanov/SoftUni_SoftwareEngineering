function solve(text, word) {
    
    console.log(text
        .split(' ')
        .filter(a => a === word)
        .length);
}

solve(
    "This is a word and it also is a sentence",
    "is"
);