// function
// how to declear a function

/* 
function functionName( pramitter){
    statement or function body 
    return
}

coll the function 
functionName()  
*/

function rahim(){
    // console.log("Rahim")
}

rahim()


function sum(num1 , num2){
    var result = num1 + num2;
    return result;
}

var result = sum(10, 20)


function minus(num1 , num2){
    var result = num1 - num2;
    return result;
}

var minusResult = minus(20, 10)

var calculated =sum(result , minusResult);
console.log(calculated)


function saySorry(num , nsme){
    for(let i = 0; i<num; i++){
        console.log(i,'I am sorry', nsme)
    }
}
saySorry(10000 , "Buri")