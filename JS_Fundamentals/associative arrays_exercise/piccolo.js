function solve(arr) {

    let parkingLot = arr
        .reduce((agr, command) => {
            let [action, car] = command.split(', ');
            agr[car] = action;
            return agr;
        }, {})

    let carsIn = Object.keys(parkingLot)
        .filter(carNum => parkingLot[carNum] === 'IN');

    if (carsIn.length > 0) {
        carsIn
            .sort()
            .map(a => console.log(a));
    } else {
        console.log('Parking Lot is Empty');
    }

}

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])