const calc = function(x, y, type) {
    if (type === 'add'){
        return x + y;
    } else if (type ==="multiply"){
        return x * y;
    }
};

// console.log(calc(2, 3, 'add'));
// console.log(calc(2, 3, 'multiply'));

// const add = (num1, num2) => {
//     return num1 + num2;
// };

// const multiply = function (a, b) {
//     return a * b;
// }

// const calcWithCallback = (x, y, callback) => {
//     return callback(x, y);
// }

// console.log('Sum', calcWithCallback(3, 4, function (x, y){
//     return x + y;
// }));
// console.log('User add func', calcWithCallback(5, 7, add));
// console.log('Multi', calcWithCallback(3, 4, multiply));


// console.log('Hello');

// setTimeout(() => console.log('Tick Hello'), 1000);

// console.log('Hey there');

// setTimeout(() => console.log('Tick with zero seconds'), 0);


// [1, 1, 2]
// [1, 2] .. 2

// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// [0, 1, 2, 3, 4] ... 5

// const removeDuplicates = (numberList) => {
//     const numLength = numberList.length;
//     let lastNumber = NaN;
//     let count = 0;
//     for (let i = 0; i < numLength; i++) {
//         if (numberList[i] !== lastNumber){
//             numberList[count] = numberList[i];
//             console.log(count)
//         }
//     }
//     return count;
// }

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// removeDuplicates(nums);

// const nums2 = [1, 1, 2];
// removeDuplicates(nums2);


// "abacabad"
// First unique

const firstUniqueChar = (string) => {
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        // console.log(char);
        if (string.indexOf(char) == i &&  string.indexOf(char, i + 1) == -1) {
            console.log(char);
        }
    }
}

const string1 = "abacabad";
firstUniqueChar(string1);
const string2 = "abacabaabacaba";
firstUniqueChar(string2);

