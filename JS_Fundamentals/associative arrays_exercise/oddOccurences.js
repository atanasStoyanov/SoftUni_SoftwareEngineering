function solve(str) {
    let wordsObj = {};
    let words = str
        .toLowerCase()
        .split(' ')
        .map(a => {
            if (wordsObj.hasOwnProperty(a)) {
                wordsObj[a] += 1;
            } else {
                wordsObj[a] = 1;
            }
        });

    console.log(Object.keys(wordsObj)
        .filter(a => wordsObj[a] % 2 !== 0)
        .join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');