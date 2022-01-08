// Given an m x n matrix, return all elements of the matrix in spiral order.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let r = matrix.length, c = matrix[0].length;
    const size = r*c;
    let top=0, left=0, bottom = r-1, right =c-1;
    const result = [];
    while(result.length < size) {

        for(let i = left; i <= right; i ++) {
            result.push(matrix[top][i]);
        }
        top++;

        for(let i = top; i<=bottom; i ++  ) {
            result.push(matrix[i][right]);
        }
        right--;

        for(let i = right; i >=left && result.length < size; i--) {
            result.push(matrix[bottom][i]);
        }
        bottom--;

        for(let i = bottom; i >= top && result.length < size; i--) {
            result.push(matrix[i][left]);
        }
        left++;
    }

    return result;
};
