function pointOnBorder (input){
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5])

    let firstCondition = (x == x1 || x == x2) && (y1 <= y && y <= y2);
    let secondCondition = (y == y1 || y == y2) && (x1 <= x && x <= x2);

    if (firstCondition || secondCondition) {
        console.log('Border')
    } else {
        console.log('Inside / Outside');
    }
}

pointOnBorder(['2', '-3', '12', '3', '2', '3'])