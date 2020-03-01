function solve(inputObj) {

    return  {
        model: setModel(inputObj),
        engine: setEngine(inputObj),
        carriage: setCarriage(inputObj),
        wheels: setWheels(inputObj)
    }

    function setModel({ model }) {
        return model;
    }

    function setEngine({ power }) {
        const engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
        return engines.find(x => x.power >= power);
    }

    function setCarriage({ carriage, color }) {
        return {
            type: carriage,
            color
        }
    }

    function setWheels({ wheelsize }) {
        return new Array(4).fill(wheelsize % 2 === 0 ? wheelsize - 1 : wheelsize);
    }

}


console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
