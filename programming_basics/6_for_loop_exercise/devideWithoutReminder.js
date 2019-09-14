function devideWithoutReminder(input) {
    let n = Number(input.shift());
    let nums1 = 0;
    let nums2 = 0;
    let nums3 = 0;

    for (let index = 1; index <= n; index++) {
        let currentNumber = Number(input.shift());

        if (currentNumber % 2 == 0) {
            nums1++;
        }

        if (currentNumber % 3 == 0) {
            nums2++;
        }
        
        if (currentNumber % 4 == 0) {
            nums3++;
        }
    }
    let p1 = nums1 / n * 100;
    let p2 = nums2 / n * 100;
    let p3 = nums3 / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}

devideWithoutReminder([3,3,6,9])