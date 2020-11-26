let message = 'Hello';

function sayHello () {
    message = 'Hello there';
    let sayWorld = ' World';
    const concatWords = message.concat(sayWorld);
    console.log(concatWords);
}

sayHello();
// console.log(message + sayWorld);

// let - block scope vrednost ALWAYS

function greeting() {
    let sayWorld = 'World';
    console.log(message);
}

greeting();