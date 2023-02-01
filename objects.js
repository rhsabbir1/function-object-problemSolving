var human = {
    name : "Ariful Islam",
    age : 22,
    friends: ['Sabbir' , 'Ridoy','Shanto','Kawser'],
    gf: true
}

/* console.log(human.name)
console.log(human.age) */
for(let i =0; i < human.friends.length; i++){
    const friend = human.friends[i];
    // console.log(friend)
}
// console.log(human.gf)

// nasted objects
var human = {
    name : "Robin",
    age : 20,
    friends: ['Sabbir' , 'Ridoy','Shanto','Kawser','Rakib', 'Rafi'],
    gf : {
        name :'Vmcw',
        skinnColour: 'White',
        age : 18
    }
}

console.log(human.gf.name);

