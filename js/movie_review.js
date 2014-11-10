// search using object match

var movies ={}; 
movies[1] = {name: "Toy Story 2", review: "Great story. Mean prospector."};
movies[2] = {name: "Finding Nemo", review: "Cool animation, and funny turtles."};
movies[3] = {name: "The Lion King", review: "Great songs."};
var getReview = function (movie) {
    found = false;
    for (var picked in movies){
        if(movies[picked].name === movie){
            return movies[picked].review;
            found = true;
        };
    };
    if (!found){
        return "I don't know!";
    }

};
