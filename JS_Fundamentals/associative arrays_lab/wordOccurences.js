function solve(arr) {
    let wordOccurences = new Map();

    arr.map(a => {
        let occurence = 1;
        if (wordOccurences.has(a)) {
           occurence = wordOccurences.get(a) + occurence;
        } 

        wordOccurences.set(a, occurence);
    });

    let sorted = Array.from(wordOccurences.entries())
        .sort((a, b) => b[1] - a[1])
        .map(a => console.log(`${a[0]} -> ${a[1]} times`))

}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);