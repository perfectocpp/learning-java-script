// A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1)
console.log(value2)
console.log(value1==value2)