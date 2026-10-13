class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        let word = ""
        let ans = []
        

        for (let i = 0; i < strs.length; i++){
            word = strs[i].split("").sort().join("")
            
            if (!map.has(word)){
            map.set(word, [])
            }
            
            map.get(word).push(strs[i])
        }

        for (const group of map.values()){
            ans.push(group)
        }

  

        return ans
    }
}
