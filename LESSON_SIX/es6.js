//ES6 create new array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6];

console.log(arr2); // consoles out [1, 2, 3, 4, 5, 6];

// using pointers
const obj1 = { make: "toyota" };
const obj2 = Object.assign({}, obj1, { year: 2012} );
console.log(obj1 === obj2); // false, looking at 2 different addresses
console.log(obj1);
console.log(obj2);

//lodash helps compare 2 different objects

/*
Examples of functions that mutate Objects:
Array.prototype.push
Array.prototype.reverse
Array.prototype.shift
Array.prototype.sort
Array.prototype.splice
someObject[someProp] = newValue

Examples of functions that don’t mutate Objects:
Array.prototype.concat
Array.prototype.filter
Array.prototype.slice
Array.prototype.map
Object.assign({}, { [someProp]: someValue })
*/
