// odd even. function declare
function even (number) {
    if (number % 2 == 0) {
        console.log(`${number} is even`)
        return true
    }
    console.log(`${number} is not even`)
    return false
}
// odd even. arrow function 
let odd = (number) => {
    if (number % 2 != 0) {
        console.log(`${number} is odd`)
        return true
    }

    console.log(`${number} is not odd`)
    return false
}

// odd even. function expression
let oddEven = function(number) {
    if (number % 2 != 0) {
        console.log(`${number} is odd`)
    } else {
        console.log(`${number} is even`)
    }
}

// reverse. arrow function
let reverse = number => {
    const numberStr = String(number)
    const reverseString = numberStr.split('').reverse().join('');
    return Number(reverseString)
}

// call functions
console.log(even(4))
console.log(odd(4))
console.log(oddEven(4))
console.log(reverse(34))
