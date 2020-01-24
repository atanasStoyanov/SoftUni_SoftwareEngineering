let solution = (function solve() {

    function add(vec1, vec2) {
        return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
    }

    function multiply(vec1, scalar) {
        return vec1.map(num => num * scalar);
    }

    function length(vec1) {
        return Math.sqrt(
            vec1
                .map(num => Math.pow(num, 2))
                .reduce((agr, num) => agr + num)
        )
    }

    function dot(vec1, vec2) {
        return vec1[0] * vec2[0] + vec1[1] * vec2[1]
    }

    function cross(vec1, vec2) {
        return vec1[0] * vec2[1] - vec1[1] * vec2[0]
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
}());

console.log(solution.add([1, 1], [1, 0]));
