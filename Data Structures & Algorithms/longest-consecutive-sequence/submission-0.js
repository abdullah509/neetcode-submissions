class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let count = 1
        let ans = 0

        for (const num of nums){
            
            if (!set.has(num-1)){
            
                while(set.has(num+count)){
                    count++
                }
            
            }
            
            ans = Math.max(count, ans)
            count = 1
            
        }
        return ans
    }
}
