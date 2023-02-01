/* 
console.log('Sorry')
console.log('Sorry')
console.log('Sorry')
console.log('Sorry')
console.log('Sorry')
console.log('Sorry')
console.log('Sorry')
console.log('Sorry')
console.log('Sorry')
console.log('Sorry')
console.log('Sorry')
console.log('Sorry') 
*/

for(let i =0; i <= 10; i++){
    console.log("I amr sorry", i)
}

var giveMoney =[ 120, 210, 157,250,223,278];
for(let i=0; i< giveMoney.length; i++){
    var element = giveMoney[i];
    if(element >200){
        continue;
    }
    console.log(element)
} 
