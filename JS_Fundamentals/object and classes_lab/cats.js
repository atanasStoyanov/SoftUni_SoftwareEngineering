function solve(arr) {

    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
                
            }
        }
    }

    let cats = arr
        .map(a => a.split(' '))
        .map(([name, age]) => new Cat(name, age))
        .map(a => a.meow())  
    
}

solve(['Mellow 2', 'Tom 5']);