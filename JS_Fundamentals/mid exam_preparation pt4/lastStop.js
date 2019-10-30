function solve(arr) {
    let paintingCollection = arr.shift().split(' ');

    let change = (paintNum, changeNum, paintArr) => paintArr.indexOf(paintNum) >= 0 ? paintArr[paintArr.indexOf(paintNum)] = changeNum : paintArr = paintArr;
    
    let hide = (paintNum, paintArr) => paintArr.indexOf(paintNum) >= 0 ? paintArr.splice(paintArr.indexOf(paintNum), 1) : paintArr = paintArr;
    
    let switchPaintings = (firstPaint, secondPaint, paintArr) => {
        if (paintArr.indexOf(firstPaint) >= 0 && paintArr.indexOf(secondPaint) >= 0 ) {
            let helper = firstPaint;
            let firstIndex = paintArr.indexOf(firstPaint);
            let secondIndex = paintArr.indexOf(secondPaint)
            paintArr[firstIndex] = secondPaint;
            paintArr[secondIndex] = helper;
        }
        return paintArr;
    }
  
    let insert = (place, paintNum, paintArr) => {
        if (place + 1 >= 0 && place + 1 < paintArr.length) {
            paintArr.splice(place + 1, 0, paintNum)
        }
    }

    let rev = (paintArr) => paintArr = paintArr.reverse();

    for (let i = 0; i < arr.length - 1; i++) {
        let command = arr[i].split(' ');
        let action = command[0];
        
        if (action === 'Change') {
            let paintingNum = command[1];
            let changedNum = command[2]
            change(paintingNum, changedNum, paintingCollection); 
        } else if (action === 'Hide') {
            let paintingNum = command[1];
            hide(paintingNum, paintingCollection);
        } else if (action === 'Switch') {
            let firstPainting = command[1];
            let secondPainting = command[2];
            switchPaintings(firstPainting, secondPainting, paintingCollection);
        } else if (action === 'Insert') {
            let placeIndex = Number(command[1]);
            let paintingNum = command[2];
            insert(placeIndex, paintingNum, paintingCollection);
        } else {
            rev(paintingCollection);
        }
    }

    console.log(paintingCollection.join(' '));
}

solve([
    '115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse', 
    'Change 73 70',
    'Insert 10 85',
    'END'
]);