//-----------------------------> Test Cases <------------------------------------------
const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code

const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

import {eachCallbackFn,findCallbackFn,mapCallbackFn, reduceCallbackFn } from "./callbackFn.js";
import {each, filter, find, flatten, map, reduce } from "./arrays.js";

each(items,eachCallbackFn);

map(items,mapCallbackFn)

reduce(items,reduceCallbackFn);     //20
reduce(items,reduceCallbackFn,50);  //70

find(items,findCallbackFn);

filter(items,findCallbackFn);

flatten(nestedArray);