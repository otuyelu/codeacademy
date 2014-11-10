// Introduction to Objects I 33/33

function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function(){
        return 2 * Math.PI * this.radius;
    };
};
