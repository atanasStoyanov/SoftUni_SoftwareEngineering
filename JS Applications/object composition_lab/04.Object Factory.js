function solve(str) {

    return JSON.parse(str)
        .reduce((agr, obj) => Object.assign(agr, obj), {});
}

console.log(solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`));
console.log(solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`));