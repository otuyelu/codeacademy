/* if the number is divisible by 3 print "Fizz";if the number is divisible by 5 print "Buzz";
if the number is divisible by 3 AND 5? That's right! "FizzBuzz"!*/
//Introduction to Objects I 3/33

for(var i = 1; i < 21; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
