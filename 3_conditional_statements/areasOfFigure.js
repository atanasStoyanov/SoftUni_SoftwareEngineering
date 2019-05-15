function areasOfFigure(input){
    let figure = input[0];
    let area = null;

    if (figure == 'rectagle'){
        let side1 = Number(input[1]);
        let side2 = Number(input[2]);
        area = side1 * side2;
    }else if (figure == 'circle'){
        let r = Number(input[1]);
        area = Math.PI * r * r
    }else if (figure == 'square'){
        let side = Number(input[1]);
        area = side * side;
    }else{
        let side = Number(input[1]);
        let h = Number(input[2]);
        area = side * h / 2
    }
    console.log(area.toFixed(3))
}

//areasOfFigure(['rectangle', 5, 6])
areasOfFigure(['circle', 5])