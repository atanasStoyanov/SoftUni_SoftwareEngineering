class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(producstArr) {
        producstArr.map(prodInfo => {

            let [name, quantity, price] = prodInfo.split(' ');

            if (this.budget >= Number(price)) {

                this.productsInStock.hasOwnProperty(name) ?
                    this.productsInStock[name] += Number(quantity) :
                    this.productsInStock[name] = Number(quantity);

                this.budget -= Number(price);
                this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
            }
        });

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        let output = '';

        if (this.menu.hasOwnProperty(meal) === false) {
            this.menu[meal] = { products: neededProducts, price: Number(price) };

            let menuLength = Object.keys(this.menu).length;

            output = `Great idea! Now with the ${meal} we have ${menuLength} meals in the menu, other ideas?`;
        } else {
            output = `The ${meal} is already in our menu, try something different.`
        }

        return output;
    }

    showTheMenu() {
        let output = '';

        if (Object.keys(this.menu).length === 0) {
            output += 'Our menu is not ready yet, please come later...';
        }

        Object.keys(this.menu)
            .map(meal => output += `${meal} - $ ${this.menu[meal].price}\n`);


        return output;
    }

    makeTheOrder(meal) {

        if (this.menu.hasOwnProperty(meal) === false) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let neededProducts = this.menu[meal].products;

        for (const productInfo of neededProducts) {
            let [product, quantity] = productInfo.split(' ');

            if (this.productsInStock.hasOwnProperty(product) === false || this.productsInStock[product] < Number(quantity)) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        this.menu[meal].products
            .map(prodInfo => {
                let [prodName, quantity] = prodInfo.split(' ');

                this.productsInStock[prodName] -= Number(quantity);
            });

        this.budget += this.menu[meal].price;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;

    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen);

