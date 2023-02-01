// practics-problem
function totalCost(money,price1,price2, price3){
    const total = price1 + price2 + price3;
    const returnTk = money - total;
    return returnTk;
}

var bottlePrice = 500;
var mousePrice = 460;
var keyBord = 800;
var myTk = 2000;

var returnTk = totalCost(myTk , bottlePrice , mousePrice, keyBord);
console.log(returnTk)
