function reverseString(str) {
    return str.split("").reverse().join("")
}

console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
    let arr = str.split(" ");

    let result = arr.map(element => {
       return element[0].toUpperCase() + element.slice(1)
    });

    return result.join(" ");
}

console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'

function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;

    for(let i in str) {
        if(vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
