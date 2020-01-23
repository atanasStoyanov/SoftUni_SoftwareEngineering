function solution(num) {
    return function (addend) {
        return num + addend;
    }
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
