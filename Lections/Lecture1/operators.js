//Assignment operator
//=
const hasBook = true;


//Arithmetic operators
// + (addition) a + b
// - (subtraction) a - b
// * (multiplication) a * b
// / (division) a / b
// % (remainder) a / b (10%3)=1 /ostatokot
// ** (exponent) 5 ** 2 (returns25, as 5 * 5)

const firstName = "Toni" ;
const lastName = "Parker" ;

const name = firstName + lastName;
console.log(name); //ToniParker- ne e dobro se e spoeno

const blankSpace = ' ';
console.log(blankSpace);

const nameWithSpace = firstName + blankSpace + lastName;
console.log(nameWithSpace);

const nameSpace=firstName + ' '+lastName;
console.log(nameSpace);

const numberA = 25;
const numberB = 15;
const numberC = 20.55;
const numberD = 150;

const sum=numberA + numberB + numberC + numberD;
console.log('Sum of a+b+c+d: ',sum);

const diff= numberA - numberD;
console.log(diff);

const multi = numberB * numberC;
console.log(multi);

const remainder=numberD % numberC;
console.log(remainder);

const exponent = 5**2;
console.log(exponent);

// Comparison operators
// < (less than) left value < right value 8 < 6 (false)
// > (greater than) left value > right value 8 >6 (true)
// <= (less than or equal to) left value is smaller than or equal to the right value
// >= (greater than or equal to) left value is greater to the right value
// == (both values are same), bez razlika a tipot primer 15='15', javaskript go prepoznava kako tocno, no ako
// === (strict equality)(left and right values are identical to one another ) 15===15(true)  15==='15'(false), pr:15===5+3
//'!==' (strict non equality) left and right values are not ||-||-5


const lessThan = numberA < numberB;
console.log(lessThan);

const greaterThan = numberA > numberC;
console.log(greaterThan);

const lessOrEqual = numberA <=numberD;
console.log(lessOrEqual);

const bothEquals = 15 == 15; //sporeduva samo vrednosti na samite dve variabli
console.log(bothEquals);

const strictEquality = 15 === 15; //sporeduva i koj tip na variabla
console.log(strictEquality);

const strictNonEquality = 5 !== 2 + 3;
console.log(strictNonEquality);

const check = numberA !== 25;
console.log(check);

const checkTypeAndValue = numberA !== '25';
console.log(checkTypeAndValue);