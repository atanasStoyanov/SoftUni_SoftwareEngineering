class ChristmasDinner {

    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 1) {
            throw new Error('The budget cannot be a negative number');
        } else {
            this._budget = value;
        }
    }

    shopping(productArr) {
        let [type, price] = [...productArr];
        if (Number(price) > this._budget) {
            throw new Error('Not enough money to buy this product');
        } else {
            this.products.push(type);
            this._budget -= Number(price);

            return `You have successfully bought ${type}!`;
        }
    }

    recipes(recipeObj) {
        let productsList = recipeObj.productsList;
        let recipeName = recipeObj.recipeName;

        productsList.map(p => {
            if (this.products.includes(p) === false) {
                throw new Error('We do not have this product');
            }
        });

        this.dishes.push({
            recipeName,
            productsList
        });

        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.dishes.find(d => d.recipeName === dish)) {
            throw new Error('We do not have this dish');
        }

        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = '';

        Object.keys(this.guests)
            .map(name => {
                let dish = this.dishes.find(d => d.recipeName === this.guests[name]);
                let dishProducts = dish.productsList.join(', ');
                
                result += `${name} will eat ${this.guests[name]}, which consists of ${dishProducts}\n`;
            });

        return result.trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());



