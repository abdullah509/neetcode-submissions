class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let curr = 0
        let ans = 0


        while (right < prices.length){
            
            if (prices[left] < prices[right]){
                curr = prices[right] - prices[left]
                ans = Math.max(ans, curr)
                
            } else {
                left = right
            }
            right++
        }

        return ans
    }
}
