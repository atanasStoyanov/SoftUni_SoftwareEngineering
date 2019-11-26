function solve(arr) {
    let linesCount = Number(arr[0]);

    for (let i = 1; i <= linesCount; i++) {
        let message = arr[i];
        let pattern = /^([\$|%])(?<tag>[A-z][a-z]{2,})\1: \[(?<num1>[0-9]+)\]\|\[(?<num2>[0-9]+)\]\|\[(?<num3>[0-9]+)\]\|$/gm;

        let matches = pattern.exec(message);

        if (matches) {
            let { tag, num1, num2, num3 } = matches.groups;
            console.log(`${tag}: ${String.fromCharCode(Number(num1))}${String.fromCharCode(Number(num2))}${String.fromCharCode(Number(num3))}`);

        } else {
            console.log('Valid message not found!');
        }
    }
}

solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]);
