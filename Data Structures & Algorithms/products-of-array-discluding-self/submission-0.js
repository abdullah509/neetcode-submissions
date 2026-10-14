class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ans = []

        let prefix = 1;

        // Store product of everything to the left
        for (let i = 0; i < nums.length; i++) {
            ans.push(prefix);
            prefix *= nums[i];
        }

        let right = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            ans[i] *= right; //left side prefix * right side prefix
            right *= nums[i]; // update right prefix 
        }

        return ans;
    }
}
