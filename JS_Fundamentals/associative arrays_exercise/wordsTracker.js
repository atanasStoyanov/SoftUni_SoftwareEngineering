function solve(arr) {
    let wordsOccurences = {};
    let wordsToFind = arr
        .shift()
        .split(' ')
        .map(a => wordsOccurences[a] = 0);

    arr.map(a => {
        if (wordsOccurences.hasOwnProperty(a)) {
            wordsOccurences[a] += 1;
        }
    })

    Object.keys(wordsOccurences)
        .sort((a, b) => wordsOccurences[b] - wordsOccurences[a])
        .map(a => console.log(`${a} - ${wordsOccurences[a]}`))

}

solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);