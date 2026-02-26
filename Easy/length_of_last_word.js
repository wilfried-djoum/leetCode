/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let splited = s.split(' ')

    for (let i = splited.length - 1; i >= 0; i--) {
        if (splited[i] !== '') {
            return splited[i].length
        }
    }
    return 0
};