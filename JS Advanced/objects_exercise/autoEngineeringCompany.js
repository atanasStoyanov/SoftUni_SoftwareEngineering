function solve(arr) {
    function addCarToObj(obj, brand, model) {
        obj.hasOwnProperty(brand) ? obj = obj : obj[brand] = { [model]: 0 };
        return obj;
    }

    function addModelToCarObj(obj, brand, model, quant) {
        obj[brand].hasOwnProperty(model) ? obj[brand][model] += Number(quant) : obj[brand][model] = Number(quant);
        return obj;
    }
    let carsObj = arr.reduce((agr, carInfoStr) => {
        let carInfoArr = carInfoStr.split(' | ');

        addCarToObj(agr, ...carInfoArr);
        addModelToCarObj(agr, ...carInfoArr);

        return agr;
    }, {});

    let output = '';

    Object.keys(carsObj)
        .map(brand => {
            output += `${brand}\n`;

            let brandObj = carsObj[brand];

            Object.keys(brandObj)
                .map(model => output += `###${model} -> ${brandObj[model]}\n`);
        })

    return output;
}


console.log(solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]));
