//-----------------------------> Test Cases <------------------------------------------
const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code

import {eachCallbackFn,mapCallbackFn, reduceCallbackFn } from "./callbackFn.js";
import {each, map, reduce } from "./arrays.js";

each(items,eachCallbackFn);

map(items,mapCallbackFn)

reduce(items,reduceCallbackFn);     //20
reduce(items,reduceCallbackFn,50);  //70