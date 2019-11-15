function solve(str) {
    let firstHalf = str
        .substr(0, str.length / 2)
        .split('')
        .reverse()
        .join('');

    let secondHalf = str
        .substr((str.length) / 2)
        .split('')
        .reverse()
        .join('');

    console.log(firstHalf);
    console.log(secondHalf);

    
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');