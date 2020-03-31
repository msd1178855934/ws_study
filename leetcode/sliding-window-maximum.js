/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const result = [];
    const q = [];

    for (let i = 0; i < nums.length; i++) {
        while (q.length - 1 >= 0 && nums[i] > q[q.length - 1]) q.pop();
        q.push(nums[i]);
        
        const j = i + 1 - k;
        if (j >= 0) {
            result.push(q[0]);
            if (nums[j] === q[0]) q.shift();
        }
    }
    return result;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(nums, k));