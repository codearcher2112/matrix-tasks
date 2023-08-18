// 4
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
];

function changeMatrix(arr) {
    const resultMatrix = [];

    let numOfRows = arr.length;
    let numOfCols = arr[0].length;

    for (let i = 0; i < numOfCols; i++) {
        let newRow = [];

        for (let j = 0; j < numOfRows; j++) {
            newRow.push(arr[j][i]);
        }

        resultMatrix.push(newRow);
    }

    return resultMatrix;
}

console.log(changeMatrix(arr));