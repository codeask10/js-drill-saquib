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

function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
    if (typeof obj !== 'object' && !Array.isArray(obj)) {
        return "Invalid Object Input";
    }
    let arr = [];
    for (const o in obj) {
        arr.push(obj[o]);
    }
    return arr;
}

function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
    if (typeof obj !== 'object' && !Array.isArray(obj)) {
        return "Invalid Object Input";
    }
    let object = {};
    let key = keys(obj);
    let len = key.length;
    for (let i = 0; i < len; i++) {
        object[key[i]] = cb(obj[key[i]], key[i], obj);
    }
    return object

}

export { keys, values, mapObject };  