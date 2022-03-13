function getLengthOfMissingArray(arrayOfArrays) {
    let y = []; 
    if (arrayOfArrays === null) {        
        return 0
    } else if (arrayOfArrays.length === 0) {
         return 0
    }   
    arrayOfArrays.map(e => { 
        if (e === null) {
                y.push(0) 
                
        } else {
           y.push(e.length) 
        }
    })
    let o = y.sort((a, b) => a - b);   
    
    for (let i = 0; i < o.length - 1; i++){
        if (o[i] === 0) {
            return 0
        } else if (o[i + 1] - o[i] != 1) {
            return o[i]+1
        }        
    }       
}


//   console.log(getLengthOfMissingArray( null))   //, 0);
// console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ] ]));  //0
// console.log(getLengthOfMissingArray([[],
// [1],
// [2, 2],
// [4, 0, 0],
// [2, 3, 3, 3, 2],
// [0, 0, 4, 3, 0, 0],
// [4, 3, 3, 0, 0, 2, 3],
// [1, 2, 1, 2, 1, 0, 0, 4],
// [4, 4, 1, 1, 3, 4, 2, 2, 3]]));  //0

    console.log(getLengthOfMissingArray([ [ 1, 2, 2 ], null ] ))  ;
//     console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ))  //, 2);
    // console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ))   //, 2);
// console.log(getLengthOfMissingArray([[0, 1, 3],
// [4, 2, 2, 4],
// [2, 1, 3, 3, 4],
// [0, 4, 1, 2, 0, 1],
// [2, 0, 2, 4, 4, 4, 4, 1, 4],
// [0, 3, 1, 0, 0, 3, 1, 0, 4, 4],
// [1, 4, 0, 0, 1, 0, 3, 3]]));






// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.