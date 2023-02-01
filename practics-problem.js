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
console.log(returnTk);

// km To miles 
function kmToMiles(km){
    const ml = km * 0.62;
    return ml;
}

var miles = kmToMiles(12);
console.log(miles)

function workSpace(name){
    var sabbir = "Hard working dettermind";
    var ananna = 'lazy person all time usuing phone';
    if(name === "sabbir"){
        return sabbir;
    }
    else if(name === ananna){
        return ananna;
    }
    else{
        return "Didn't find";
    }
}

const personWork = workSpace('sabbir');
console.log(personWork)