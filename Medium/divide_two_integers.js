/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const INT_MIN = -2147483648
    const INT_MAX = 2147483647

    if (divisor === 0) return INT_MAX
    if (dividend === INT_MIN && divisor === -1) return INT_MAX

    const negative = (dividend < 0) !== (divisor < 0)
    let a = Math.abs(dividend)
    let b = Math.abs(divisor)
    let quotient = 0

    while (a >= b) {
        let value = b
        let count = 1

        while (a >= value + value) {
            value += value;
            count += count
        }

        a -= value
        quotient += count
    }

    quotient = negative ? -quotient : quotient

    if (quotient < INT_MIN) return INT_MIN
    if (quotient > INT_MAX) return INT_MAX
    return quotient

};