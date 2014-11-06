// Choose Your Own Adventure 2! 4/6
var user = prompt("Who do you think you are?").toUpperCase();
switch(user){
    case 'CODER':
        console.log("Well then, get those codes lined up");
    break;
    case 'GAMER':
        console.log("So you are here to beat the record");
    break;
    case 'TESTER':
        console.log("If find it is broken, log your observation");
    break;
    default:
        console.log("Why are you here?");
}
