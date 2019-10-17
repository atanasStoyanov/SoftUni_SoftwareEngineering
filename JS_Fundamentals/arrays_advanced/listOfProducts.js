function solve(arr) {
    let list = arr.sort();

    for (let i = 0; i < list.length; i++) {
        console.log(`${i + 1}.${list[i]}`);
    }
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);    