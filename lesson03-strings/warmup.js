// 1. Given two strings, return true if the strings are anagrams and false if not. Ignore spaces.
const isAnagram = (str1, str2) => {
    str1 = str1.replace(/[^a-z]/gi, '').split('').sort().join('');
    str2 = str2.replace(/[^a-z]/gi, '').split('').sort().join('');
    return str1 === str2
};

console.log(isAnagram("aba", "baa"));
console.log(isAnagram("hub", "huc"));
console.log(isAnagram("aa bb", "a b a b"));
console.log(isAnagram("ABA", "aba"));
console.log(isAnagram("aabbb", "baabb"));
console.log(isAnagram("a&!#bb", "aaabbbb"));
console.log(isAnagram("a&!#bb", "abb"));

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

// 2. Solve the same problem as above but do not sort the strings. What is the difference in time complexity when we don't sort the strings?

const isAnagramWithoutSort = (str1, str2) => {
    let cleanStr1 = str1.replace(/[^a-z]/gi, '');
    let cleanStr2 = str2.replace(/[^a-z]/gi, '');

    if(cleanStr1.length !== cleanStr2.length) return false;
    let stringMap = {};

    for(let i in cleanStr1) {
        stringMap[cleanStr1[i]] = (stringMap[cleanStr1[i]] || 0) + 1
    }

    for(let i in cleanStr2) {
        if(stringMap[cleanStr2[i]]) {
            stringMap[cleanStr2[i]]--;
        } else {
            return false;
        }
    }

    return true;
};

// console.log(isAnagramWithoutSort("aba", "baa"));
// console.log(isAnagramWithoutSort("hub", "huc"));
// console.log(isAnagramWithoutSort("aa bb", "a b a b"));
// console.log(isAnagramWithoutSort("ABA", "aba"));
// console.log(isAnagramWithoutSort("aabbb", "baabb"));
// console.log(isAnagramWithoutSort("a&!#bb", "aaabbbb"));
// console.log(isAnagramWithoutSort("a&!#bb", "abb"));

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

// 3. Given two strings, how many characters would need to be added or replacedin order to make them anagrams

const makeAnagram = (str1, str2) => {
    let letterMap = {};

    for(let i in str1) {
        letterMap[str1[i]] = (letterMap[str1[i]] || 0) + 1;
    }

    for(let i in str2){
        letterMap[str2[i]] = (letterMap[str2[i]] || 0) - 1;
    }

    let changes = 0;

    for(const count of Object.values(letterMap)) {
        changes += Math.abs(count);
    }
    return changes/2;
}

console.log(makeAnagram("abad", "abcd"));
console.log(makeAnagram("aabb", "baba"));
console.log(makeAnagram("aaaazzzz", "bbbbwwww"));

// "abad", "abcd" => 1
//  "aabb", "baba" => 0
// "aaaazzzz", "bbbbwwww" => 8
