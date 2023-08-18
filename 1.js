// 1
const arr = [
    [1, 2, 3, 4],
    [8, 34, 56, 3, 1],
    [9, 85, 21, 5, 18, 12],
];

function findBiggestSumArrIndex(arr) {
    let maxSum = 0;
    let biggestSumArrIndex = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i].reduce((acc, item) => acc + item, 0);

        if (currentItem > maxSum) {
            maxSum = currentItem;
            biggestSumArrIndex = i;
        }
    }

    return biggestSumArrIndex;
}

console.log(findBiggestSumArrIndex(arr));