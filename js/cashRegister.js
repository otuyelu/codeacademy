// Building a Cash Register 2/7
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
var Eggs = 0.98;
var Milk = 1.23;
var Magazine = 4.99;
var Chocolate = 0.45;
purchase = [Eggs,Milk,Magazine,Chocolate];
for (item in purchase){
    cashRegister.add(purchase[item]);
}

//Show the total bill
console.log('Your bill is '+cashRegister.total);
