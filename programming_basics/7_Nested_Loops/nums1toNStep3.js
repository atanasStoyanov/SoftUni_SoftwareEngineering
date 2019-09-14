function nums1ToN (input) {
    let n = Number(input[0]);

    for (let index = 1; index <= n; index += 3) {
        console.log(index);
    }
}

nums1ToN([15])