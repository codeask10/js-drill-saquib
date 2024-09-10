//--------------------->TEST CASES <-----------------------------------------------------

import { counterFactory, limitFunctionCallCount } from "./closures.js";

// const obj = counterFactory(5);
// console.log(obj.increment()) // 6
// console.log(obj.increment()) // 7
// console.log(obj.decrement()) // 6
// console.log(obj.increment()) // 7
// console.log(obj.increment()) // 8

function primeNumber(num) {
    if (num == 0 || num == 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Usage example:
const limitedFunction = limitFunctionCallCount(primeNumber, 3);

console.log(limitedFunction(7)); // Output: true;
console.log(limitedFunction(2)); // Output: true
console.log(limitedFunction(6)); // Output: false
console.log(limitedFunction(5)); // Output: null (limit reached)