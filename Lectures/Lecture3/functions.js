function square (x) { // () => set of parameters
    //body, fuction body (statements that will be exucuted when the func is )
    const power = x * x;
    console.log('Power of X',power);
    const powerPow = Math.pow(power, 2);
    console.log('pow of powerPow', powerPow);
    return powerPow;
}; //Edna funkcija moze da ima eden statement, a function body mozhe povekje statements

console.log(square(2)); //16 

const sum = function (x, y, z) {
    return (x + y) * z;
}

console.log('Sum is',sum(2, 3, 2))

// function makeStrings (secondDecimal, secondInteger) {
//     const firstInteger = 4;
//     const firstDecimal = 5.0;

//     const sumOfFirstIntegerAndSecondIntegers = firstInteger + Number(secondInteger);
//     console.log(sumOfFirstIntegerAndSecondIntegers);

//     const sumOfFirstAndSecondDecimals = firstDecimal + parseFloat(SecondDecimal);
//     console.log(sumOfFirstAndSecondDecimals);
//     return sumOfFirstIntegerAndSecondIntegers;
// };
// console.log(makeStrings("5.9", "8"));

const makeNoise = function () {
    console.log('Hello');
};
console.log(makeNoise());

const halve = function (n) {
    return n/2;
};
console.log(halve(17.9852140));

console.log(halve("22")); // "22"==22 result 11
console.log(halve(22)); // 11
