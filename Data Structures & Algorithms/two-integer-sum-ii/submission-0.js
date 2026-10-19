class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let seen = new Map();
      
        let curr = 0

        for (let i = 0; i < numbers.length; i++){
            curr = target - numbers[i]
        
        
            if (seen.has(curr)){
                return [seen.get(curr)+1, i+1]
            }
            seen.set(numbers[i], i)
        }
    }
}
