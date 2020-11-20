for (let i = 0; i < 5; i++) {
    console.log(i);
}

// i++ === i = i+1 || i+=1

let result;

for (let i=0; i < 3; i++) {
    result = i;
}
console.log(result); // 2

const users = ['Tom', 'Jerry', 'Bouli'];

for (let i=0; i <= users.length - 1; i++) {
    console.log(users[i]);
}

for (let i=0; i < users.length; i++) {
    console.log(users[i]);
}


// for (variable in object) {
    // statement
// }

// for (variable of object) {
    // statement
//}


users.unshift('Mecheto ushko'); // opposite of shift
console.log(users);

users.shift(); // removes first element
console.log(users);

for (let i in users) {
    console.log(i); // 0  1 2 
}

for (let i of users) {
    console.log(i);
}