//Logical operators 
//Se koristat kako Boolean vrednost, ili e true ili false.

let a = true;
let b = false;

//Logical AND (&&)

let logicalAnd = a && b; //false
//true && true = true
//true && false = false
//false && true = false
//false && false = false

let password=false;
let confirmPassword=true;

let checkPass=password && confirmPassword;
console.log('checkPass', checkPass);


const number1=4;
const number2=2;
const arebothNumbersGtThree=number1 > 3 && number2 > 3; // ako number2 e < 3 togash kje e true

console.log('Check number with logical AND', arebothNumbersGtThree )

//Logigal OR (||)
//true || true = true
//true || false = true
//false || true = true
//false || false = false
const logicalOr=number1 > 3 || number2 > 3;
console.log('Check number with logical OR', logicalOr)

console.log('Check OR', 3 > 2 || -2 > 0 || '2'=== 2 || 'hello'=='hello'); // (||) potrebno e samo edno true za uslovot da e true
console.log('Check AND', 3 > 2 && -2 > 0 && '2'=== 2 && 'hello'=='hello'); // (&&) mora site da se true za da uslovot e true

const checkANDandOR = (3 > 2 && -2 < 0) || ('2'== 2 && 'hello'==='hello'); //true || true => true
console.log(checkANDandOR); //true
const checkLogical = (3 >2 || -2 < 0) && ('2'=== 2 || 'hello'!=='hello');// true && false => false
console.log(checkLogical); //false

//Logical NOT (!)
//Negation
// truth to falsity <=> i obratno
const checkWithNegation = !(number1 > 3 || number2 < -3);
const makeNegation = !checkWithNegation;
console.log('Negation', checkWithNegation);
console.log('Negation 222', makeNegation);

const checkWithNegation1 = (number1 > 3 || number2 < -3);
const makeNegation1 = !checkWithNegation1;
console.log(checkWithNegation1);
console.log(makeNegation1);

const checkWithNegation2 = (number1 > 3 && !(number2 < -3));
const makeNegation2 = !checkWithNegation2;
console.log(checkWithNegation2);
console.log(makeNegation2);

const check1 = (3 > 2);
console.log(!!!check1); // so eden ! e false, so 2 !! e true, so 3 !!! e false i se redi taka..

// Ternary operator result ? true : false
const ternaryCheck = number1 > 3 ? true : false;
console.log('Ternary', ternaryCheck);

const ternary1 = number1 < 3 ? true : false;
console.log('Ternary1', ternary1);

const shortSyntaxTernary1 = !!(4 < 3); //  same as line 66
console.log('Short Syntax Ternary', shortSyntaxTernary1);

const ternaryString = 4 !== 4 ? 'Correct' : 'Wrong'; // vo prviot del se slucuva true, vo vtoriot del e false
console.log('Return String With', ternaryString);
