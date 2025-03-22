// Example: 
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true 
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false 
function deepEqual(obj1, obj2) {
    if(obj1 === obj2) return true;
    if(typeof obj1 !=='object' || obj1 === null || typeof obj2 !== 'object'||obj2 === null ) return false;

    const k1 = Object.keys(obj1);
    const k2 = Object.keys(obj2);
    
    if(k2.length !== k1.length) return false;

    for (let k of k1){
        if (!k2.includes(k)) return false;
        if(!deepEqual(obj1[k], obj2[k])) return false;
    }

    return true;
}

