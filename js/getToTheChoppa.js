//Introduction to 'While' Loops in 10/11

var getToDaChoppa = function(faraway){
  // Write your do/while loop here!
    do {
        console.log("Keep running we are " + faraway + " yards from the choppa");
        faraway -= 1;
    } while(faraway > 0)
  
};

getToDaChoppa(5);
