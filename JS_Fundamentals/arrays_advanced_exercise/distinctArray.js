function solve(arr) {
    arr = arr.filter((item, pos) => arr.indexOf(item) == pos);

    console.log(arr.join(' '));

}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);