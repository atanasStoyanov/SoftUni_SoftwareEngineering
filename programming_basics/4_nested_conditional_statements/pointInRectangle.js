function pointInRectangle(input){
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);

    let isXinside = x1 <= x && x <= x2 
    let isYinside = y1 <= y && y <=y2

    if (isXinside && isYinside) {
        console.log('Inside')
    }else{
        console.log('Outside')
    }
}

pointInRectangle(['2','-3','12','3','8','-1'])