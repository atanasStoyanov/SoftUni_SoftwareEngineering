function solve(num) {
    let loadingBar = [];
    let loaded = num / 10;
    let remaining = 10 - loaded;
    let fillLoadedPart = a => loadingBar.push('%'.repeat(a));
    let fillRest = a => loadingBar.push('.'.repeat(a));

    if (num === 100) {
        fillLoadedPart(loaded);
        console.log('100% Complete!');
        console.log(`[${loadingBar.join('')}]`);
    } else {
        fillLoadedPart(loaded);
        fillRest(remaining);
        console.log(`${num}% [${loadingBar.join('')}]`);
        console.log('Still loading...');
    }

}

solve(30);
