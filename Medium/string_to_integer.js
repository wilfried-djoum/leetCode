/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;
    const NEGATIVE_LIMIT = -INT_MIN;

    let index = 0;

    while (index < s.length && s[index] === ' ') {
        index++;
    }

    let sign = 1;
    if (index < s.length && (s[index] === '+' || s[index] === '-')) {
        sign = s[index] === '-' ? -1 : 1;
        index++;
    }

    while (index < s.length && s[index] === '0') {
        index++;
    }

    let value = 0;
    let hasDigit = false;

    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        hasDigit = true;
        const digit = s.charCodeAt(index) - 48;

        if (sign === 1 && value > Math.floor((INT_MAX - digit) / 10)) {
            return INT_MAX;
        }

        if (sign === -1 && value > Math.floor((NEGATIVE_LIMIT - digit) / 10)) {
            return INT_MIN;
        }

        value = value * 10 + digit;
        index++;
    }

    if (!hasDigit) {
        return 0;
    }

    return sign * value;
};
