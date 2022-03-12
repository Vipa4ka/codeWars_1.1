function deepCount(a) {
    let r = 0;
    a.map(t => {
        if (typeof (t) != 'object') {
            r += 1;
        } else {
            r += 1;
            repit(t)
        }

})
    function repit(s) {
        s.map(e => {
            if (typeof (e) != 'object') {
                r += 1;
            } else {
                r += 1;
                repit(e)
            }
        })
    } 
    return r
    
}


console.log(deepCount([]));  //, 0, "Expected 0")
console.log(deepCount([1, 2, 3]));  //, 3, "Expected 3")
console.log(deepCount(["x", "y", ["z"]]));  //, 4, "Expected 4")
console.log(deepCount([1, 2, [3, 4, [5]]]));  //, 7, "Expected 7")
console.log(deepCount([[[[[[[[[]]]]]]]]]));  //, 8, "Expected 8")






// Array.prototype.length will give you the number of top-level elements in an array.

// Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

// For example:

// deepCount([1, 2, 3]);  
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);  
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);  
// //>>>>> 7