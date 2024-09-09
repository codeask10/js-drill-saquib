function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys

    if (typeof obj !== 'object' && !Array.isArray(obj) || !obj) {
        return "Invalid Object Input";
    }
    let arr = [];
    for (const o in obj) {
        arr.push(o);
    }
    return arr;

}

export {keys};  