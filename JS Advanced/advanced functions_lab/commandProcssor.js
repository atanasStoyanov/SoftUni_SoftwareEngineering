function solution() {
    let state = '';

    function append(str) {
        return state += str;
    }

    function removeStart(n) {
        return state = state.slice(n);
    }

    function removeEnd(n) {
        return state = state.slice(0, state.length - n);
    }

    function print() {
        console.log(state);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
