package DSA.RotateArray;

class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        if (n == 0)
            return;

        // Step 1: Normalize k
        k = k % n;

        // Step 2: Perform reversals
        reverse(nums, 0, n - 1); // reverse entire array
        reverse(nums, 0, k - 1); // reverse first k
        reverse(nums, k, n - 1); // reverse remaining n-k
    }

    // Helper method to reverse part of array
    private void reverse(int[] nums, int l, int r) {
        while (l < r) {
            int temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
            r--;
        }
    }
}
