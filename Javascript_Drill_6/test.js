//--------------------->TEST CASES <-----------------------------------------------------

import { counterFactory } from "./closures.js";

const obj = counterFactory(5);
console.log(obj.increment()) // 6
console.log(obj.increment()) // 7
console.log(obj.decrement()) // 6
console.log(obj.increment()) // 7
console.log(obj.increment()) // 8