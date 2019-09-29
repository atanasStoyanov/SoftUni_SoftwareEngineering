function solve(radius, height) {
    let hypotenuse = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let area = (Math.PI * radius * hypotenuse) + (Math.PI * Math.pow(radius, 2));
    let volume = Math.PI * Math.pow(radius, 2) * height / 3;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

solve(3.3, 7.8);