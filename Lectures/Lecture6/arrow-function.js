const sum = function(a, b) {
    return a + b; // expression 
} // kako ova da go napiseme so arrow func 

// => arrow function a kako logicki operator se pisuva >= !!

const sumArrow = (a, b) => {
    return a + b;
}

const sumShorter = (a, b) => a + b;

console.log('Function Expression', sum(2, 3));
console.log('Arrow function', sumArrow(2, 3));
console.log('Short arrow syntax', sumShorter(2, 3));

// const calcArea = function (radius) {
//     const PI = Math.PI;
//     return PI * radius **2;
// }

//arrow function
const calcArea = (radius) => {
    return 3.14 * radius ** 2;
}
console.log('calcArea', calcArea(3));

const area = calcArea(7);
console.log(area);

const double = n => n * 2;
console.log('Double', double(3));

const userList = [
    {
        id: 1,
        firstName: 'Bon',
        lastName: 'Marley',
        age: 20,
        gender: 'male'
    },
    {
        id: 2,
        firstName: 'Jon',
        lastName: 'Harley',
        age: 30,
        gender: 'male'
    },
    {
        id: 3,
        firstName: 'Bonny',
        lastName: 'Depp',
        age: 25,
        gender: 'female'
    }
] // array of objects

const listUsers = (users) => {
    const ids = [];
    for (let i = 0; i  < users.length; i++){
        ids.push(users[i].id);
    }
    return ids;
}

console.log(listUsers(userList));


const addUser = (users) => {
    const newUser = {
        id: 4,
        firstName: 'Donny',
        lastName: 'Lepp',
        age: 55,
        gender: 'male'
    };
    // const mergedData = [...users, newUser];
    // return mergedData; // mozhe i bez 77 i 78 linija i samo so linija 79
    return [...users, newUser];

    // console.log(users.push());
    // const create = users.push();
    // console.log(create);
}
console.log(addUser(userList));
