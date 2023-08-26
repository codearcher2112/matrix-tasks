function biggestLengthOfSquare(matrix = []) {
    let maxLength = 0;

    const lengthOfMatrix = matrix.length;

    const board = new Array(lengthOfMatrix)
    .fill(0)
    .map(() => new Array(lengthOfMatrix).fill(0));

    for (let rowIdx = 0; rowIdx < lengthOfMatrix; rowIdx++) {
        for (let colIdx = 0; colIdx < lengthOfMatrix; colIdx++) {
            if (matrix[rowIdx][colIdx] === 1) {
                if (rowIdx === 0 || colIdx === 0) {
                    board[rowIdx][colIdx] = 1;
                } else {
                    board[rowIdx][colIdx] =
                    Math.min(
                        board[rowIdx - 1][colIdx],
                        board[rowIdx][colIdx - 1],
                        board[rowIdx - 1][colIdx - 1]
                    ) + 1;
                }

                if (board[rowIdx][colIdx] > maxLength) {
                    maxLength = board[rowIdx][colIdx];
                }
            }
        }
    }

    return maxLength;
}
  
console.log(
    biggestLengthOfSquare([
        [0, 0, 1, 1, 1, 1],
        [1, 0, 0, 1, 1, 1],
        [1, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ])
);