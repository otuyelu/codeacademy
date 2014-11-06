// Choose Your Own Adventure 2! 5/6
// added conditional operators to some of the cases
var user = prompt("Who do you think you are?").toUpperCase();
switch(user){
    case 'CODER':
        var rtfm = prompt("Did you read the application documentations?").toUpperCase();
        var forked = prompt("Have you created a local copy, to work from?").toUpperCase();
        if (rtfm === 'YES' || forked === 'YES'){
            console.log("Do you have anything to add to the code?");
        }else{
            console.log("You need to get familiar with the content and features in the code");
        }
    break;
    case 'GAMER':
        console.log("So you are here to beat the record");
    break;
    case 'TESTER':
        var buggy = prompt("Did you find a bug in this application yet?").toUpperCase();
        var logged = prompt("Have you logged any bug?").toUpperCase();
        if (buggy === 'YES' && logged === 'YES'){
            console.log("I knew you were a skilled Quality Assurance professional");
        }else{
            console.log("If you find it is broken, log your observation");
        }
    break;
    default:
        console.log("Why are you here?");
}
