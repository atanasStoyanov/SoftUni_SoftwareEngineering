function histogram(input) {
    let n = Number(input.shift());
    let nums1 = 0;
    let nums2 = 0;
    let nums3 = 0;
    let nums4 = 0;
    let nums5 = 0;

    for(let index = 1; index <= n; index++){
        let currentNumber = Number(input.shift());

        if (currentNumber < 200){
            nums1++;
        }else if(currentNumber < 400){
            nums2++;
        }else if(currentNumber < 600){
            nums3++;
        }else if(currentNumber < 800){
            nums4++;
        }else{
            nums5++
        }
    }
    let p1 = nums1 / n * 100;
    let p2 = nums2 / n * 100;
    let p3 = nums3 / n * 100;
    let p4 = nums4 / n * 100;
    let p5 = nums5 / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

histogram([14,53,7,56,180,450,920,12,7,150,250,680,2,600,200])