function solve(arr) {
    let side = Number(arr.shift());
    let sheetsCount = Number(arr.shift());
    let singleSheetArea = Number(arr.shift());

    let boxArea = side * side * 6;
    let unusualSheetsCount = Math.floor(sheetsCount / 3);
    sheetsCount -= unusualSheetsCount;

    let coveredArea = sheetsCount * singleSheetArea + unusualSheetsCount * (singleSheetArea * 0.25);

    coveredArea = coveredArea / boxArea * 100
    console.log(`You can cover ${coveredArea.toFixed(2)}% of the box.`);
    
}

solve([
    2.5,
    32,
    4.25,
    ])