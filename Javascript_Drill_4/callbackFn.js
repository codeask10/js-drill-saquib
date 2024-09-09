function eachCallbackFn(num, i) {
    console.log(`Element ${num} is present at index ${i} in items array`);
}

function mapCallbackFn(num, i) {
    return num * 2;
}

function reduceCallbackFn(accumulator, num) {
    return accumulator + num;
}

function findCallbackFn(num) {
    if (num >= 4) {
        return num;
    }
}

function filterCallbackFn(element) {
    if (element % 2 === 0) {
        return element;
    }
}

export { eachCallbackFn, mapCallbackFn, reduceCallbackFn, findCallbackFn ,filterCallbackFn};