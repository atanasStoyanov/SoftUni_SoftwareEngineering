function solve(arr) {
    let totalSpend = 0;

    console.log('Bought furniture:');

    for (const line of arr) {
        let pattern = />>(?<name>.+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
        let matches = pattern.exec(line);

        if (matches) {
            let { name, price, quantity } = matches.groups;
            console.log(name);
            totalSpend += (+price) * (+quantity)
        }

    }

    console.log(`Total money spend: ${totalSpend.toFixed(2)}`);

}

solve([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);