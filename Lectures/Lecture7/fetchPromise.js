// https://ghibliapi.herokuapp.com/people

const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people');

// console.log(fetchPromise);

fetchPromise.then(response => {
    return response.json();
}).then(people => {
    console.log(people); // se dobiva celata data

    // Array.prototype.map(); or Array.map();
    const names = people.map(person => person.name); // se dobiva samo name od site objekti
    console.log(names);
});


// kako raboti map primer:
const numbers = [1, 2, 3, 4, 5];
const incrementTwo = numbers.map(number => 2 * number);
console.log(incrementTwo);

const greaterThenThree = numbers.filter(number => number > 3);
console.log(greaterThenThree);

console.log(5 > 6 > 7); // false
console.log(5 < 6 < 7); // true

// Vo javascript true = 1, false = 0 !!!