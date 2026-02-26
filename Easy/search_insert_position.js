/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let position = 0
    let end = nums.length - 1

    while (position <= end) {
        const mid = Math.floor((position + end) / 2)
        if (nums[mid] === target) return mid
        if (nums[mid] < target) position = mid + 1
        else end = mid - 1
    }

    return position

};