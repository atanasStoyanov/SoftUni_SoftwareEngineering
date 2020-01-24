function solve(...params) {

    function addOrIncreaseType(obj, type) {
        obj.hasOwnProperty(type) ? obj[type]++ : obj[type] = 1; 
    }

  Object.entries(params
        .reduce((agr, element) => {
            let type = typeof element;
            console.log( `${type}: ${element}`);

            addOrIncreaseType(agr, type);
            
            return agr;
        }, {}))
        .sort((a, b) => b[1] - a[1])
        .map(([type, count]) => `${type} = ${count}`)
        .forEach(element => console.log(element));

}

solve('cat', 42, function () { console.log('Hello world!'); });

