// Building a Cash Register 4/7
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item,quantity) {
        if (typeof(quantity) === "number") {
            this.quantity = quantity;
        }else{
            this.quantity = 1;
        }
        switch (item) {
        case "eggs": this.add(0.98 * this.quantity); break;
        case "milk": this.add(1.23 * this.quantity); break;
        case "magazine": this.add(4.99 * this.quantity); break;
        case "chocolate": this.add(0.45 * this.quantity); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan("eggs", 4);
cashRegister.scan("milk", 4);
cashRegister.scan("magazine", 4);
cashRegister.scan("chocolate", 4);

//Show the total bill
console.log('Your bill is '+cashRegister.total);
