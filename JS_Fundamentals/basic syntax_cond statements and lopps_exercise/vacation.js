function solve(groupSize, groupType, day) {
    let totalPrice = 0;

    if (groupType === 'Students') {
        
        if (day === 'Friday') {
            totalPrice = groupSize * 8.45;
        } else if (day === 'Saturday') {
            totalPrice = groupSize * 9.80;
        } else {
            totalPrice = groupSize * 10.46;
        }

        if (groupSize >= 30) {
            totalPrice *= 0.85;
        }

    } else if (groupType === 'Business') {
        if (groupSize >= 100) {
            groupSize -= 10;
        }

        if (day === 'Friday') {
            totalPrice = groupSize * 10.90;
        } else if (day === 'Saturday') {
            totalPrice = groupSize * 15.60;
        } else {
            totalPrice = groupSize * 16;
        }
        
    } else {

        if (day === 'Friday') {
            totalPrice = groupSize * 15;
        } else if (day === 'Saturday') {
            totalPrice = groupSize * 20;
        } else {
            totalPrice = groupSize * 22.50;
        }

        if (groupSize >= 10 && groupSize <= 20) {
            totalPrice *= 0.95;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(40, 'Regular', 'Saturday');