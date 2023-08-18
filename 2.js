// 2
const arr = [
    [45, 2, 3, 4, 12],
    [8, 34, 56, 3, 1],
    [9, 85, 21, 5, 18],
];

function findMinimumItems(arr) {
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        const minOfTheRow = Math.min(...arr[i]);
        res.push(minOfTheRow);
    }

    return res;
}

console.log(findMinimumItems(arr));