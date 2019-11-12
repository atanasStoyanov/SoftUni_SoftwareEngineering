function solve(arr) {
    let garage = new Map;

    arr.map(token => {
        let [num, info] = token.split(' - ');
        num = Number(num);
        info = info.split(': ').join(' - ');

        if (garage.has(num)) {
            let newCars = garage.get(num);
            newCars.push(info);
            garage.set(num, newCars);
        } else {
            garage.set(num, [info]);
        }

    });

    Array.from(garage.keys())
        .map(garageNum => {
            console.log(`Garage № ${garageNum}`);
            garage.get(garageNum).map(car => console.log(`--- ${car}`));
        })

}

solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);