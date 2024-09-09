function eachCallbackFn(num, i) {
    console.log(`Element ${num} is present at index ${i} in items array`);
}

function mapCallbackFn(num, i, element) {
    element[i] = num * 2;
}

export {eachCallbackFn,mapCallbackFn} ;