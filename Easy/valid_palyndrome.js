/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1

    const isAlphaNum = (ch) => /[a-z0-9]/i.test(ch);

    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) left++
        while (left < right && !isAlphaNum(s[right])) right--

        if (s[left].toLocaleLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++
        right--
    }
    return true
};