// Introduction to Objects I 4/33
var getReview = function (movie) {
   switch(movie){
        case 'Toy Story 2':
           return "Great story. Mean prospector."
           break;
        case 'Finding Nemo':
           return "Cool animation, and funny turtles."
           break;
        case 'The Lion King':
           return "Great songs."
           break; 
        default:
            return "I don't know!";
    };

};
