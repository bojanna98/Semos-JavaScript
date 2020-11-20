// Switch statement - ako ima povekje proverki if-else se koristi switch, a ako ima mnogu mnoogu proverki loop

const sum = 2 + 2;


// if (sum == 3)
// else if (sum == 4)
// else if (sum == 5)

switch (sum) { // input parameter
    case 3: // if sum == 3, then switch starts to execute the code below, until break
        console.log('Too small!'); // mozhe da ima i if uslov i se shto na nas ni odgovara, ne samo console.log
        break; // the end of switch
    case 4: // else if (sum == 4)
        console.log('Exactly!');
        break;
    case 5: // else if (sum == 5)
        console.log('Too large!');
        break;    
    default:
        console.log('I don\'t know such values!');    
}

//Mozhe da grupirame povekje case-ovi

switch (sum) {
    case 3:
    case 5:
        console.log('Wrong');
        break;
    case 4:
        console.log('Right');
        break;
    default:
        console.log('The result is strange.');
}