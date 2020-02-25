function Spy(obj, method) {
    let originalMethod = obj[method];

    let result = {
        count: 0
    }

    obj[method] = function () {
        result.count++
        return originalMethod.apply(this, arguments);
    }

    return result;
}


let obj = {
    method:()=>"invoked"
}
let spy = Spy(obj,"method");

obj.method();
obj.method();
obj.method();

console.log(spy) // { count: 3 }


let spy1 = Spy(console,"log");

console.log(spy1); // { count: 1 }
console.log(spy1); // { count: 2 }
console.log(spy1); // { count: 3 }
