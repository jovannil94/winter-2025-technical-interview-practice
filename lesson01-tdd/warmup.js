// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters
const returnAsterisks = (n) => {
    if(n < 3 || n > 100) return "n is not between 3 & 100";
    let result = '';

    while(n > 0) {
        result += '*';
        n--;
    }

    return result;
};

console.log(returnAsterisks(5));
console.log(returnAsterisks(12));
console.log(returnAsterisks(3));

// test("returnAsterisks should return correct number of * for n", () => {
//     const result = returnAsterisks(5);
//     expect(result).toBe("*****");
// });

// 5 => '*****'
// 12 => '************'
// 3 => "***"

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

const returnAsterisksWithSpaces = (n) => {
    if(n < 3 || n > 100) return "n is not between 3 & 100";
    let result = '';
    let ogN = n;

    while(n > 0) {
        if(n === ogN || n === 1) {
            result += '*';
        } else {
            result += ' ';
        };
        n--;
    }

    return result;
};

console.log(returnAsterisksWithSpaces(5));
console.log(returnAsterisksWithSpaces(12));

// 5 => '*   *'
// 12 => '*          *'

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

const returnAsterisksMatrix = (n, m) => {
    let result = '';

    for(let i = 1; i <= m; i++) {
        let line = '';

        if(i === 1) {
            line += '*'.repeat(n) + '\n';
        } else if (i === m) {
            line += '*'.repeat(n);
        } else {
            line += '*';
            line += ' '.repeat(n-2);
            line += '*' + '\n';
        }
        result += line;
    }
    return result;
};

console.log(returnAsterisksMatrix(5, 5));
// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
