function solve(arr) {


    function addJuiceToObj(obj, juice, quant) {
        obj.hasOwnProperty(juice) ? obj[juice].quantity += Number(quant) : obj[juice] = { 'quantity': Number(quant), 'bottles': 0 };
    }

    function createBottles(obj, juice) {
        Math.trunc(obj[juice].quantity / 1000) > 0 ? obj[juice].bottles = Math.trunc(obj[juice].quantity / 1000) : obj[juice].bottles = 0;
    }
    let bottledJuice = {};

    arr.reduce((agr, info) => {
        let [fruit, quantity] = info.split(' => ');

        addJuiceToObj(agr, fruit, quantity);

        createBottles(agr, fruit);

        agr[fruit].bottles > 0 ? bottledJuice[fruit] = agr[fruit].bottles : bottledJuice = bottledJuice;

        return agr;

    }, {});

    let output = '';

    Object.keys(bottledJuice)
        .map(juice => output += `${juice} => ${bottledJuice[juice]}\n`);

    return output;

}

console.log(solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
));
