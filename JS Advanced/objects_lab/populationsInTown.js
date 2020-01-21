function solve(arr) {
    let townsObj = arr.reduce((agr, info) => {
        let [town, population] = info.split(' <-> ');

        agr.hasOwnProperty(town) ? agr[town] += Number(population) : agr[town] = Number(population);

        return agr;
    }, {});

    return Object.keys(townsObj)
        .map(town => town = `${town} : ${townsObj[town]}`)
        .join('\n');
}

console.log(solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
));
