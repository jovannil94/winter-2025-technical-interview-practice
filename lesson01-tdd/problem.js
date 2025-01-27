/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  let cleanString = str.replace(/[^a-z]/gi, '').toLowerCase();
  let reverseString = '';
  
  for(let i = cleanString.length-1; i >= 0; i--) {
    reverseString += cleanString[i];
  }

  return cleanString === reverseString
}

module.exports = isPalindrome;
