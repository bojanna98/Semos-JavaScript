// Definiranje na promise - edinecen promise
const promiseToCleanTheRoom = new Promise(function(resolve, reject){

    // cleaning the room

    let isClean = true; // probaj i so false

    if (isClean) {
        resolve({ room:'clean!'});
    } else {
        reject('not clean');
    }

});

// Kako da povikame eden promise 
// then-metoda sekogas doagja od resolve (se slucuva koga e resolve!)
promiseToCleanTheRoom.then(function(fromResolve){
    const convertObjectWithStringifyFromResolve = JSON.stringify(fromResolve);
    console.log(`the room is ${convertObjectWithStringifyFromResolve}`); // Prakjame poraka, mozhe da bide i data, struktura..
}).catch(function(fromReject){
    console.log(`the room is ${fromReject}`);
});
// catch-metoda sekogas doagja od reject


