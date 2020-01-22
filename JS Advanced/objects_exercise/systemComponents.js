function solve(arr) {
    function addSystemToObj(obj, system, component) {
        obj.hasOwnProperty(system) ? obj = obj : obj[system] =  { [component]: [] };
        return obj;
    }

    function addComponentToObj(obj, system, component, subcomponent) {
        obj[system].hasOwnProperty(component) ? obj[system][component].push(subcomponent) : obj[system][component] = [subcomponent];
        return obj;
    }
    let systemObj = arr.reduce((agr, systemInfoStr) => {
        let systemInfoArr = systemInfoStr.split(' | ');

        addSystemToObj(agr, ...systemInfoArr);
        addComponentToObj(agr, ...systemInfoArr);

        return agr;
    }, {});

    let output = '';

    Object.keys(systemObj)
        .sort((firstSystem, nextSystem) => Object.keys(systemObj[nextSystem]).length - Object.keys(systemObj[firstSystem]).length || firstSystem.localeCompare(nextSystem))
        .map(system => {
            output += `${system}\n`;

            let componentsObj = systemObj[system];

            Object.keys(componentsObj)
                .sort((firstComponent, nextComponent) => componentsObj[nextComponent].length - componentsObj[firstComponent].length)
                .map(component => {
                    output += `|||${component}\n`;
                    componentsObj[component].map(subcomp => output += `||||||${subcomp}\n`)
                });
        })

    return output;
}


console.log(solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]));
