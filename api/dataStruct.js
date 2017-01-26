///////Map

// var keyString = "a string",
//     keyObj = {},
//     keyFunc = function() {};

// // setting the values
// myMap.set(keyString, "value associated with 'a string'");
// myMap.set(keyObj, "value associated with keyObj");
// myMap.set(keyFunc, "value associated with keyFunc");

// myMap.size; // 3

// // getting the values
// myMap.get(keyString); // "value associated with 'a string'"
// myMap.get(keyObj); // "value associated with keyObj"
// myMap.get(keyFunc); // "value associated with keyFunc"

// console.log(myMap.get("a string")); // "value associated with 'a string'"
// // because keyString === 'a string'
// myMap.get({}); // undefined, because keyObj !== {}
// myMap.get(function() {}) // undefined, because keyFunc !== function () {}
// console.log(myMap.get(keyObj))


//////

var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");
var o = { a: 1, b: 2 };
mySet.add(o);

mySet.add({ a: 1, b: 2 }); // o is referencing a different object so this is okay

mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5); // true
mySet.has(Math.sqrt(25)); // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // removes 5 from the set
mySet.has(5); // false, 5 has been removed

mySet.size; // 4, we just removed one value