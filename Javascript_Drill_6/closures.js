function counterFactory(value) {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    const object = {
        increment: function () {
            return value += 1;
        },
        decrement: function () {
            return value -= 1
        }
    }
    return object
}

function limitFunctionCallCount(cb, n) {
    let callCount = 0; // Track how many times the function has been called

    return function (val) { // Return a new function
        if (callCount < n) { // Check if the limit has been reached
            callCount++; // Increment the call count
            return cb(val); // Call the callback function with any arguments
        }
        else {
            return "Null: limit Reached";
        }
    };
}

function cacheFunction(cb) {
    const cache = {};

    return function cachedCb(num) {
        if (num in cache) {
            return `Returning cached result: ${cache[num]}`
        } else {
            const result = cb(num);
            cache[num] = result;
            return `Calculating result: ${result}`;
        }
    };
}

export { counterFactory, limitFunctionCallCount, cacheFunction };