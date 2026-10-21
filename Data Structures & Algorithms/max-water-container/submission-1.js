class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length-1
        let ans = 0
        let curr = 0
        while (left < right){
            curr = (right - left) * Math.min(heights[left], heights[right])
            ans = Math.max(ans, curr)
                
            if (heights[left] < heights[right]){
                left++
            } else if (heights[right] < heights[left]){
                right--
            } else{
                left++
                right--
            }
                
        }

        return ans
    }
}
