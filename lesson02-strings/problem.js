/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  if(s.length <= 1) return s.length;
  let maxLength = 0;
  let start = 0;
  let uniqueLetters = new Set();

  for(let i in s) {
    while(uniqueLetters.has(s[i])) {
      uniqueLetters.delete(s[start]);
      start++;
    }
    uniqueLetters.add(s[i]);
    maxLength = Math.max(maxLength, uniqueLetters.size);
  }

  return maxLength;
}

module.exports = lengthOfLongestSubstring;
