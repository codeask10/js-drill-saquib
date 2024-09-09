//-----------------------------> Test Cases <------------------------------------------
const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

import {eachCallbackFn,mapCallbackFn } from "./callbackFn.js";
import {each, map } from "./arrays.js";

each(items,eachCallbackFn);

map(items,mapCallbackFn)