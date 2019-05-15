function areaOfFigures(input){
    let figure = input[0];
    let area = null;

    switch(figure){
        case "square":{
            let sideA = Number(input[1]);
            area = sideA * sideA
        } break;
        case "rectangle":{
            let sideA = Number(input[1]);
            let sideB = Number(input[2]);
            area = sideA * sideB
        } break;
        case "circle":{
            let r = Number(input[1]);
            area = Math.PI * Math.pow(r,2);
        }break;
        case "triangle":{
            let side = Number(input[1]);
            let h = Number(input[2]);
            area = side * h / 2
        }break;
    }
    console.log(area.toFixed(3));
    
}
areaOfFigures(['circle', '6'])