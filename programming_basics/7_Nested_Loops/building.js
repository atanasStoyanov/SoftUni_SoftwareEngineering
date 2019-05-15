function building(input) {
    let floorsNumber = Number(input[0]);
    let roomsNumber = Number(input[1]);

    for (let floor = floorsNumber; floor >= 1; floor--) {
        let finalRoomNumbers = ''
        for (let room = 0; room < roomsNumber; room++) {
            if (floor == floorsNumber){
                finalRoomNumbers += `L${floor}${room} `
            }else if(floor % 2 == 0){
                finalRoomNumbers += `O${floor}${room} ` 
            }else{
                finalRoomNumbers += `A${floor}${room} `
            }
        }  
        console.log(finalRoomNumbers);
    }
}

building([9,5])
