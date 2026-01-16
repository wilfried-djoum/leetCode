/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const isNegative = x < 0;
    let str = Math.abs(x).toString().split('').reverse().join('');
    let result = isNegative ? -parseInt(str) : parseInt(str);
    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
        return 0;
    }
    return result;

};