class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let seen = new Map();

        for (let i = 0; i < nums.length; i++){
            let value = target - nums[i]

            if (seen.has(value)){
                return [i, seen.get(value)]
            }

            seen.set(nums[i], i)
        }



    }
}
