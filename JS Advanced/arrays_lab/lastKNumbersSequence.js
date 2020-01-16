function solve(n, k) {
    let resutlArr = [1];

    for (let i = 1; i < n; i++) {
        let nextElement = resutlArr
            .slice(Math.max(i - k, 0))
            .reduce((a, b) => a + b);
            
        resutlArr.push(nextElement);
    }

    return resutlArr.join(' ');
}

console.log(solve(8 , 2));
