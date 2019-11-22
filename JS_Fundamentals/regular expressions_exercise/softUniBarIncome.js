function solve(arr) {
    let totalIncome = 0;

    for (const line of arr) {
        let pattern = /%(?<name>[A-Z][a-z]+)%(?:[^\|\$%\.]+)?<(?<product>\w+)>(?:[^\|\$%\.]+)?\|(?<count>\d+)\|(?:[^\|\$%\.\d]+)?(?<price>[\d]+\.?[\d]+)\$/g;
        let matches = pattern.exec(line);

        if (matches) {
            let { name, product, count, price} = matches.groups;
            let value = (+count) * (+price);
            console.log(`${name}: ${product} - ${value.toFixed(2)}`);
            totalIncome += value;
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
    
}
 
solve([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift",
]);
