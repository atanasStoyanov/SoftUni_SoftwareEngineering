function solve(pounds) {
    const exchangeRate = 1.31;
    let dollars = pounds * exchangeRate;

    console.log(dollars.toFixed(3));
}

solve(80);