function solve(n, k) {
    const arr = [1];

    for (let i = 0; i < n - 1; i++) {
        let currentElement = arr.slice(Math.max(arr.length - k, 0)).reduce((a, b) => a + b);
        arr.push(currentElement);
    }

    console.log(arr.join(' '));
}

solve(6, 3);