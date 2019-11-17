function solve(arr) {
    let text = arr[0].split('');
    let lowerOrUpper = arr[1];

    if (lowerOrUpper === 'LOWERCASE') {
        text = text.filter(a => a.match(/[a-z]/));
    } else {
        text = text.filter(a => a.match(/[A-Z]/));
    }
    
    let sum = text.reduce((a, b) => a + b.charCodeAt(), 0)

    console.log(`The total sum is: ${sum}`);

}

solve(['AC/DC',
    'UPPERCASE'

]);