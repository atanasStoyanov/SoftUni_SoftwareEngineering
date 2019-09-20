function solve(startNum, endNum) {
    printLine = '';
    sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        printLine += `${i} `
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

solve(5, 10);