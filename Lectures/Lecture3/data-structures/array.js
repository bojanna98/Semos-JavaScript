// 2, 3, 5, 7, 11, 55, 101
const numbersText = "2 3 5 7 11"; // los nacin na reprezentacija // string representation

//Array- zapishan dell od listata kojashto ima vrednosti i se odeleni so zapirka
// A list of values between square brackets
                    // 0, 1, 2, 3, 4...(n-1), n = lenght 
const listOfNumbers = [2, 3, 5, 7, 11, 26, 99];
console.log(listOfNumbers); 

const listOfNumbersLength = listOfNumbers.length; // to get the legnth of list
console.log(listOfNumbersLength); // 5

const getThirdNumber = listOfNumbers[2];
console.log(getThirdNumber);

const getPrev =listOfNumbers[listOfNumbersLength - 2];
console.log('Prev',getPrev);

const friends = ['Toni', 'Moni', 'Koki', 'Dule', 'Pero', 'Tosho'];
const getSecondItemFromList = friends[1];
console.log(getSecondItemFromList);

// Dodavanje na nova vrednost vo niza - na krajot od nizata
// push method
const friendRequests = ['Joki', 'Boki', 'Taki'];
friends.push(...friendRequests); // so dodavanje na tri tocki gi pravi vo eden Array(Niza) a ne oddelni (probaj bez tri tocki i ke sfatis)
console.log(friends);

friends.push('None');
console.log(friends);

// pop method does the opposite of push method, removes the last value in the array and returning 
friends.pop();
console.log(friends);

listOfNumbers.pop();
console.log(listOfNumbers);