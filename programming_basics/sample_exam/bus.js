function bus(input) {
    let passengers = Number(input.shift());
    let stations = Number(input.shift());

    for (let index = 1; index <= stations; index++) {
        let passengersOut = Number(input.shift());
        let passengersIn = Number(input.shift());

        passengers -= passengersOut;
        passengers += passengersIn;

        if (index % 2 === 0) {
            passengers -= 2;
        } else {
            passengers += 2;
        }
    }

    console.log(`The final number of passengers is : ${passengers}`);
}

bus([17, 3, 6, 7, 8, 9, 3, 4]);