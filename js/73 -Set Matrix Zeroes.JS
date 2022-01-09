/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.
*/

//APPROACH 1
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (m) {
    const map = { rows: [], col: [] };
    const r = m.length;
    const c = m[0].length;
    for (let i = 0; i < r; i++) {
        const zeroes = [];
        for (let j = 0; j < c; j++) {
            if (m[i][j] === 0) {
                map.rows.push(i);
                map.col.push(j);
            }
        }
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (map.rows.includes(i)) {
                m[i][j] = 0;
            } else if (map.col.includes(j)) {
                m[i][j] = 0
            }
        }
    }



    console.log(map, m);
    return m;
};


// APPROACH 2

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (m) {
    const r = m.length;
    const c = m[0].length;
    let isCol = false;

    for (let i = 0; i < r; i++) {
        if (m[i][0] == 0) {
            isCol = true;
        }
        for (let j = 1; j < c; j++) {
            if (m[i][j] === 0) {
                m[i][0] = 0;
                m[0][j] = 0;
            }
        }
    }

    for (let k = 1; k < r; k++) {
        for (let l = 1; l < c; l++) {
            if (m[k][0] === 0 || m[0][l] === 0) {
                m[k][l] = 0;
            }
        }
    }


    if (m[0][0] == 0) {
        for (let j = 0; j < c; j++) {
            m[0][j] = 0;
        }
    }

    if (isCol) {
        for (let i = 0; i < r; i++) {
            m[i][0] = 0;
        }
    }
};
