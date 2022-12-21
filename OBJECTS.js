const obj ={
    name:"ashvin",
    age :33,
    "key-three":true,
    sayName:function(){
        console.log(this.name)
    }
}
obj.hobby='Hockey'
delete obj.hobby// delete a pair 

console.log(obj)//{ name: 'ashvin', age: 33 }
console.log(obj.name)//ashvin
console.log(obj['age'])//use it as a string
console.log(obj['key-three'])
console.log(obj)
obj.sayName()

//object.keys()  .values()  .entries()

// insert -O(1)
// remove -O(1)
// Access-O(1)
// Search-O(n)
// Object.keys()-O(n)
// Object.values()-O(n)
// Object.entries()-O(n)
