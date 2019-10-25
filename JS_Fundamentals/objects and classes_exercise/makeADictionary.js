function solve(arr) {
    let dictionaryObj = arr
        .map(a => JSON.parse(a))
        .reduce((agr, prop) => {
            let key = Object.keys(prop);
            let value = Object.values(prop);
            agr[key[0]] = value[0];

            return agr
        }, {})

    function sortObjectByKeys(obj) {
        return Object.keys(obj)
            .sort((a, b) => a.localeCompare(b))
            .reduce((agr, key) => {
                agr[key] = obj[key];
                return agr;
            }, {});
    }

    dictionaryObj = sortObjectByKeys(dictionaryObj);     

    let printDictionary = Object.keys(dictionaryObj)
        .map(a => console.log(`Term: ${a} => Definition: ${dictionaryObj[a]}`));    
        
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);