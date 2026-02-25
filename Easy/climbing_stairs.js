/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n;
    }

    let oneStepBefore = 2; // ways to reach step 2
    let twoStepsBefore = 1; // ways to reach step 1

    for (let i = 3; i <= n; i++) {
        const current = oneStepBefore + twoStepsBefore;
        twoStepsBefore = oneStepBefore;
        oneStepBefore = current;
    }

    return oneStepBefore;
};
