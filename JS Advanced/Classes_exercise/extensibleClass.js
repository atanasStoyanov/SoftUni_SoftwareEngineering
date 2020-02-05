let Extensible = (function () {

    let counter = 0;

    return class Extensible {

        constructor() {
            this.id = counter;
            counter++;
        }

        extend(template) {

            Object.keys(template)
                .map(key => {
                    if (typeof template[key] === 'function') {
                        Extensible.prototype[key] = template[key];
                    } else {
                        this[key] = template[key];
                    }
                })
        }
    }
}());


let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);

console.log(obj1);

let template = {
    extensionMethod: function () { console.log('hi');
    },
    extensionProperty: 'someString',
    moreProp: 'more'
}

obj1.extend(template);
console.log(obj1);
obj1.extensionMethod()