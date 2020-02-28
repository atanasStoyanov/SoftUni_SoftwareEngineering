function solve(arr) {
    const template = {
        width: 0,
        height: 0,
        area: function () {
            return this.width * this.height;
        },
        compareTo: function (otherRect) {
            return this.area() - otherRect.area() === 0 ?
                this.width - otherRect.width :
                this.area() - otherRect.area();
        }
    }

    return arr.map(([width, height]) =>
        Object.assign(
            Object.create(template), { width, height }
        )
    )
        .sort((a, b) => b.compareTo(a));
}


console.log(solve([[10, 5], [5, 12]]));
console.log(solve([[10, 5], [3, 20], [5, 12]]));
console.log(solve([[1, 20], [20, 1], [5, 3], [5, 3]]));
