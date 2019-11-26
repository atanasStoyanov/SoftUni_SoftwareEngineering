function solve(arr) {
    let allTickets = arr[0].split(/[, ]+/g);

    for (const ticket of allTickets) {
        let winningPattern = /(@{6,})|(#{6,})|(\${6,})|(\^{6,})/g;

        if (ticket.length !== 20) {
            console.log('invalid ticket');
        } else {
            let leftHalf = ticket.substr(0, 10);
            let rightHalf = ticket.substr(10, 10);

            let leftHalfMatch = leftHalf.match(winningPattern);
            let rightHalfMatch = rightHalf.match(winningPattern);

            if (leftHalfMatch && rightHalfMatch) {

                if (leftHalfMatch[0].length > 9 && rightHalfMatch[0].length > 9) {
                    console.log(`ticket "${ticket}" - ${leftHalfMatch[0].length}${leftHalfMatch[0][0]} Jackpot!`);
                } else {
                    console.log(`ticket "${ticket}" - ${leftHalfMatch[0].length}${leftHalfMatch[0][0]}`);
                }

            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        }
    }    
}

solve([
    '$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey, validticketnomatch:('
])