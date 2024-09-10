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

export {counterFactory};