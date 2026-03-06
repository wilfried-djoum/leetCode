/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let closest = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            const diff = Math.abs(sum - target);
            const bestDiff = Math.abs(closest - target);

            // tie-break: si même distance, on garde la plus petite somme
            if (diff < bestDiff || (diff === bestDiff && sum < closest)) {
                closest = sum;
            }

            if (sum < target) left++;
            else if (sum > target) right--;
            else return sum;
        }
    }

    return closest;
};