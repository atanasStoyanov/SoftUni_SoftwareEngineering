function solve(fruit, weightGr, price) {
    return `I need $${(weightGr/1000 * price).toFixed(2)} to buy ${(weightGr/1000).toFixed(2)} kilograms ${fruit}.`
}

console.log(solve('apple', 1563, 2.35));
