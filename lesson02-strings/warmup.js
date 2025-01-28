// 1. given a string with three characters, return the second character

const returnSecondChar = (str) => {
    return str[1];
};

console.log(returnSecondChar("cat"))
//expect 'a' to be returned

test('return second character', () => {
    expect(returnSecondChar('cat')).toBe('a');
});

// 2. get the second and third char from a string. the string will always have atleast three characters

returnSecondThirdChar = (str) => {
    return str[1] + str[2];
};

console.log(returnSecondThirdChar('cat'));
console.log(returnSecondThirdChar('robbed'));

// 'cat' => 'at'
// 'robbed' => 'ob'

// 3. Given a word with 5 letters, return the second through 5th letter

returnSecondToFifth = (str) => {
    return str.slice(1);
};

console.log(returnSecondToFifth('Hello'));

// function getSecondThroughFifthLetter (word){
//   return word.slice(1);
// }

// 4. given a string and a number called N, return the second through the Nth character

const returnSecondToNth = (str, n) => {
    return str.slice(1, n);
};

console.log(returnSecondToNth('schoolbus', 5));
console.log(returnSecondToNth('telephone', 6));

// 'schoolbus', 5 => 'choo'
// 'telephone', 6 => 'eleph

// slice is a ?? method: array and also a string method
// splice is a array method

// 5. Given an array of booleans, return an arrray of only false elements

const returnFalseEle = (arr) => {
    let results = [];

    for(let i in arr) {
        if(arr[i] === false){
            results.push(false);
        }
    }
    return results;
};

console.log(returnFalseEle([true, true, false, true , false]));

// [true, true, false, true , false] => [false, false]

// 6. given a string with two words, put ' the ' between the words and return the string

const insertThe = (str) => {
    let arr = str.split(' ');
    arr.splice(1,0,'the');

    return arr.join(' ');
};

console.log(insertThe('to beach'));
console.log(insertThe('for real'));
console.log(insertThe('jim john'));
console.log(insertThe('to house'));

// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'

// 7.  given two numbers, price and discount, return the price after the discount is applied

const applyDiscount = (price, discount) => {
    let priceOff = (discount/100) * price;
    return price - priceOff;
};

console.log(applyDiscount(100, 15));
console.log(applyDiscount(70, 3));

// price is 100 and discount is 15

// 100, 15 => 85

// 70, 3 => 67.9

// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.
