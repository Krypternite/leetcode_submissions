// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let l = 0, r = 0, max = 0
    let set = new Set()

    while(r < s.length) {
        if (set.has(s.charAt(r))) {
            set.delete(s.charAt(l++)) // Important! explained below
        } else {
            set.add(s.charAt(r++))
            max = Math.max(max, set.size)
        }
    }

    return max
};
