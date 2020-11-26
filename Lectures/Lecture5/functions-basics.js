console.log('Lecture 5');

function nameOfFunction () {
    //block scope function
}

//sayHi
//addNumber
//getPeople
//get Products
//listsOfProjects

//regular function
function greetings() {
    console.log('Hello there');
    return 'hi';
}

console.dir(greetings);
greetings();
const greetingCopy = greetings();
console.log(greetingCopy);



function showMessage() {
    const message = 'Hello, I am JavaScript local variable';
    const finalMessage = `Hey ${message}`;
    console.log(finalMessage);
}

// console.log(message);
showMessage();

let outerVariable = 'Jonhn';
function showOuterMessage() {
    const message = `Hello, ${outerVariable}`;
    console.log(message);
    outerVariable = 'Johnyyy Updated';
    const modifyMessage = `Hello, modified ${outerVariable}`;
    console.log(modifyMessage);
}

showOuterMessage;

// function greetings (name) {
//     console.log(`${name} Hello there`)
// }

// greetings('Bojana');
// console.log(name);

// function speak(name, time) {
//     console.log(`${time} - ${name} Hello there`);
// }

// const speaking = speak('James', 3);


// function speak(name = 'Jenifer', time = '345') {
//     console.log(`${time} - ${name} Hello there`);
// }

// const speaking = speak();


const squareOfNumber = function (num) {
    return num ** 2;
};

console.log(squareOfNumber(4));

const calcSquare = squareOfNumber(5);
console.log(calcSquare); // 25