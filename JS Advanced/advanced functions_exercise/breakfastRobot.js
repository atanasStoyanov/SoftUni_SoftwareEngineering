(function () {
    let ingredients = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    };

    let recipes = {
        'apple': { 'carbohydrate': 1, 'flavour': 2 },
        'lemonade': { 'carbohydrate': 10, 'flavour': 20 },
        'burger': { 'carbohydrate': 5, 'flavour': 3, 'fat': 7 },
        'eggs': { 'protein': 5, 'flavour': 1, 'fat': 1, },
        'turkey': { 'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10 }
    }

    function restock(microelement, quantity) {
        ingredients[microelement] += Number(quantity);
        return 'Success';
    }

    function cook(recipe, amount) {
        let currentRecipe = recipes[recipe];
        let requiredIngredients = Object.entries(currentRecipe);

        for (let [product, quantity] of requiredIngredients) {

            if (ingredients[product] < quantity * amount) {
                return `Error: not enough ${product} in stock`;
            }

            for (let [product, quantity] of requiredIngredients) {
                ingredients[product] -= quantity * amount;
            }

            return 'Success';
        }
    }

    function report() {
        return Object.keys(ingredients)
            .map(ingr => `${ingr}=${ingredients[ingr]}`)
            .join(' ');
    }


    return function () {
        let [command, element, quantity] = arguments[0].split(' ');

        let actionsObj = {
            'restock': () => {
                return restock(element, quantity);
            },
            'report': () => {
                return report();
            },
            'prepare': () => {
                return cook(element, +quantity);
            }
        }

        return actionsObj[command]();
    }
});



let manager = solution();
console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));


