class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = new Map();

        for (const num of nums){
            counts.set(num, (counts.get(num)||0) +1)
        }

        const sorted = [...counts.entries()].sort((a,b) => b[1]-a[1]);

        const result = sorted.slice(0,k).map(entry => entry[0])

        return result
    }
}
