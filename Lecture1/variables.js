// Declaring a variable
// ESS=var
//ES6+ +=let,const=> var, let, const

// let, var, const

let myName; // variable name, variable type  STRING
let myAge; // variable name , variable type   NUMBER
let isApproved; // variable name  , variable type  Boolean
let gender; //variable name  , variable type  undefined ----Deklalirana , no nema vrednost
let isNull; //variable name , variable type  null

//Initializing a variable

// String mozhe da bide so double notation-"",single notation- ''
myName='John James';
myName='Bon Ton';


//Number
//Whole Numbers (integers)
//Decimal Numbers (floats) 1.25, 0.15, 13.4, 12.44 etc.
myAge= 89;

//Boolean
//true/false values (gi ima edno od tie dve vrednosti)
isApproved= false;
isApproved=true;


//Null--- se koristi dokolku sakame da prebrisheme neshto
//Deklalirana, inicializirana no e prazna vrednost
isNull=null;

//Kako mozhe da ja otpechatime samata vrednost
//Koga e let se zema poslednata vrednost sekogash (primer imame dve iminja se zema poslednoto napishano)
console.log(myName)
console.log(myAge)
console.log(isApproved)
console.log(gender)
console.log(isNull)

//Check type of variables
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isApproved);
console.log(typeof gender);
console.log(typeof isNull);