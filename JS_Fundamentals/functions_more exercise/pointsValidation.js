function solve(arr) {

    function checkDistanceToStart(a, b) {
        let distance = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)));

        if (Number.isInteger(distance)) {
            return `{${a}, ${b}} to {0, 0} is valid`;
        } else {
            return `{${a}, ${b}} to {0, 0} is invalid`
        }
    } 

    function checkDistanceBetweenPoints(arrOfPoints) {
        let x = Number(arrOfPoints[0]) - Number(arrOfPoints[2]);
        let y = Number(arrOfPoints[1]) - Number(arrOfPoints[3]);

        let distance = Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2)));

        if (Number.isInteger(distance)) {
            return `{${arrOfPoints[0]}, ${arrOfPoints[1]}} to {${arrOfPoints[2]}, ${arrOfPoints[3]}} is valid`;
        } else {
            return `{${arrOfPoints[0]}, ${arrOfPoints[1]}} to {${arrOfPoints[2]}, ${arrOfPoints[3]}} is invalid`
        }
    }

    for (let i = 0; i < arr.length; i += 2) {
        let x = arr[i];
        let y = arr[i + 1];
        
        console.log(checkDistanceToStart(x, y));
    }
    
    console.log(checkDistanceBetweenPoints(arr));
}

solve([2, 1, 1, 1]);