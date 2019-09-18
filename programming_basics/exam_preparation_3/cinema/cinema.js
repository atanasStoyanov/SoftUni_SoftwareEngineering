function cinema (input) {
    let capacity = Number(input.shift());
    let takenSeats = 0;
    let income = 0;
    let command = input.shift();

    while (command !== 'Movie time!') {

        if (takenSeats >= capacity) {
            break;
        }
        
        command = Number(command);
        takenSeats += command;
        income += command * 5;
        
        if (command % 3 === 0) {
            income -= 5;
        }
       
        command = input.shift();
    }

    if (command === 'Movie time!') {
        let seatsLeft = capacity - takenSeats;
        console.log(`There are ${seatsLeft} seats left in the cinema.`);
    } else {
        console.log('The cinema is full.');
    }
    console.log(`Cinema income - ${income} lv.`);
}
cinema ([100, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 'Movie time!']);