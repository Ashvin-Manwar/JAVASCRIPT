// const arr=[1,2,3,'ashvin']
// arr.push(4)// add end of the array o/p is 1 2 3 ashvin 4
// arr.unshift(0)// add o to start of array o/p is 0 1 2 3 ashvin 4
// arr.pop()// remove end element i e 4 
// arr.shift()//remove start element i.e 0

// for (const item of arr) {// iterate on array
//     console.log(item)
// }

//The concat() Method

// const arr1 = ["Cecilie", "Lone"]
// const arr2 = ["Emil", "Tobias", "Linus"]
// const arr3 = ["Robin"]

// const children = arr1.concat(arr2, arr3)
// console.log(children)// o/p[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin' ]
// const arr4 = [1, 2, [3, 4]];
// const arr5 = [[5, 6], 7, 8];
// const arr7 = arr4.concat(arr5);
// console.log(arr7) // 1, 2, [ 3, 4 ], [ 5, 6 ], 7, 8 ]

// console.log(arr[0])//1
                                                                        // map filter reduce  slice splice

// The join() Method

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// let text = fruits.join(" and ")
// console.log(text)//Banana and Orange and Apple and Mango

// //Filter again check it is not working
// function checkAdult(age) {
//     return age >= 18;
//   }
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);


//MAP
// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// console.log(newArr)


//Multiply all the values in an array with 10:
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr)

//filter
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result)

const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
console.log(numbers)