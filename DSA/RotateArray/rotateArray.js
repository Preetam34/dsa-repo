/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * Naive rotation without using built-in array methods
 * Time: O(n * k), Space: O(1)
 */
var rotate0 = function (nums, k) {
    const n = nums.length;
    if (n <= 1) return;

    k = k % n;

    for (let step = 0; step < k; step++) {
        let last = nums[n - 1];
        for (let i = n - 1; i > 0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = last;
    }
};

var rotate1 = function (nums, k) {

    for (let i = 0; i < k; i++) {
        let elementToMove = nums.splice(nums.length - 1, 1)[0];
        nums.unshift(elementToMove);
    }

    console.log("nums ", nums)

};



var rotate2 = function (nums, k) {
    const n = nums.length;
    if (n === 0) return;
    k = k % n;
    const res = new Array(n);
    for (let i = 0; i < n; i++) {
        const newIndex = (i + k) % n;
        res[newIndex] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = res[i];
    }

};


var rotate3 = function (nums, k) {
    const n = nums.length;
    if (n === 0) return;
    k = k % n;
    function reverse(l, r) {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
};

