/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) {
        return s;
    }
    const result = new Array(numRows).fill('');
    let i = 0;

    let count = 0;
    let dir = false;
    while(i < s.length) {
        result[count] += s[i];
        if((!dir && count === numRows-1) || (dir &&count === 0)) dir = !dir;
        !dir ? count++ : count--;
        i++;
    }

    return result.join('');
};
