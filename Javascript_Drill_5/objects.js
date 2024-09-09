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

function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
    if (typeof obj !== 'object' && !Array.isArray(obj)) {
        return "Invalid Object Input";
    }
    let key = keys(obj);
    let value = values(obj);
    let arr = [];
    for (let i = 0; i < key.length; i++) {
        arr.push([key[i], value[i]]);
    }
    return arr;
}

/* STRETCH PROBLEMS */

function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
    if (typeof obj !== 'object' && !Array.isArray(obj) || !obj) {
        return "Invalid Object Input";
    }
    let key = keys(obj);
    let value = values(obj);
    let object = {};
    for (let i = 0; i < key.length; i++) {
        object[value[i]] = key[i];
    }
    return object
}

function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
    if (typeof obj !== 'object' && !Array.isArray(obj) || !obj) {
        return "Invalid Object Input";
    }
    for (const o in defaultProps) {
        if (!obj.hasOwnProperty(o)) {
            obj[o] = defaultProps[o];
        }
    }
    return obj;
}

export { keys, values, mapObject, pairs, invert, defaults };  