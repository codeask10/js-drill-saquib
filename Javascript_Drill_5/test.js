import { keys, mapObject, values } from "./objects.js";

let testObject ={ name: "Bruce Wayne", age: 36, location: "Gotham" }; 

console.log(keys(testObject));

console.log(values(testObject));

//map callback function 
function mapCallbackFn(value, key, obj) {
    return value + 5;
}
console.log(mapObject(testObject,mapCallbackFn));

