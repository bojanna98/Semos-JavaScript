// PRV PRIMER
const cleanRoom = () => {
    return new Promise((resolve, reject) => {
        resolve('cleaned the room');
    });
};

const removeGarbage = (message) => {
    return new Promise((resolve, reject) => {
        resolve(`${message} remove garbage`);
    });
};

const winVideoGame = (message) => {
    return new Promise ((resolve, reject) => {
        resolve(`${message} won Video Game`);
    });
};

cleanRoom().then((resultFromCleanRoomResolve) => {
    return removeGarbage(resultFromCleanRoomResolve);
}).then((resultFromRemoveGarbage) => {
    return winVideoGame(resultFromRemoveGarbage);
}).then((resultFromWinVideoGame) => {
    console.log(`Finished ${resultFromWinVideoGame}`);
});


 // VTOR PRIMER
 const thawChicken = minutes => {
    console.log('Chicken is being thawed...');

    return new Promise((resolve,reject) => {
        let isSomethingWrong = true;

        setTimeout(() => {
            if(!isSomethingWrong){
                resolve('Thewed chicked');
            }else {
                reject(new Error('Something went wrong!'));
            }
        }, minutes * 1000); // 3 * 1000 = 3000s
    });
 }
// PRV NACIN NA POVIKUVANJE NA thawChicken
 thawChicken(10 /* minutes */).then(
     chicken => console.log(`What we have after waiting? - ${chicken}`),
     error => console.log(`Error message ${error}`)
 );

// VTOR NACIN NA POVIKUVANJE NA thawChicken 
//callback
 const onFulfilled = (message) => {
     console.log(`What we have after waiting? - ${message}`);
 }

 const onRejected = (error) => {
     console.log(`Error message ${error.message}`);
 }
 thawChicken(8).then(onFulfilled).catch(onRejected);
