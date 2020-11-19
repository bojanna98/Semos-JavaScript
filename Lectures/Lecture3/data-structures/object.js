const obj = {
    key: 'value'
}; // site vrednosti vo zagradi se del od type=object

const color = 'red';
const backgroundColor = 'green';

const style = {
    color: 'red',
    backgroundColor: 'green',
    padding: '0px',
    margin: '10px'
};

console.log(style);

//dot
// da pristapime samo do backgroundColor od celiot Object
const backgroundColorFromStyle = style.backgroundColor;
console.log('Background Color',backgroundColorFromStyle);

//drug nacin da pristame sega primer do padding
console.log('Padding',style['padding']);

//tret nacin
//object destruction
const {margin} = style;
console.log('Margin',margin);


const description = {
    touchedTree: "Went to work",
    "touched tree": "Touched a tree"
};
console.log(description.touchedTree);
console.log(description['touchedTree']);

console.log(description["touched tree"]); // pristap do stringovi

const anObject = {
    left: 1,
    right: 2
};

console.log(anObject.left); // 1

//Brisenje na property vo objektot se koristi delete
//delete (cuts off)
delete anObject.left;
console.log(anObject.left); //undefined

//Za da najdes koj property ima eden object
// Object.keys
const newObject = {
    x: 0,
    y: 1,
    z: 2
};
const findProperties = Object.keys(newObject);
console.log(findProperties);

// Object.assign =  kopira properties od eden obj vo drug
const objA = {
    a: 1,
    b: 5,
    d: 7
};

const objB = {
    b:7,
    c:9,
    d: 'hello'
};
// Object.assign(objA, objB);
console.log(objA);

Object.assign(objB,objA);
console.log(objB);

const journal = [
    {
        events: ["work", "touched tree", "pizza", "running", "television", "news"], // array with strings
        public: false,
        views: 521
    }, 
    {
        events: ["work", "footbal", "pizza", "running", "television", "news"], // array with strings
        public: true,
        views: 101
    },
    {
        events: ["week", "holiday", "pizza", "running", "television", "news"], // array with strings
        public: false,
        views: 12
    }
]; //array of objects

console.log(journal);
