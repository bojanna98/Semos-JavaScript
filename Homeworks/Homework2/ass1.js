const text = 'I am a student in Computer Science and JavaScript academy at Semos Education. I am taking a course for JavaScript currently. My goals are to become a Software Developer after that, so I am working toward it right now'; 

function evenLengthWords(str) {

const words = str.split(' ');
var arr= words.filter((e)=>{return e.length %2===0});
return arr;

}
console.log(evenLengthWords(text));