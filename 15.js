function numberOfPairs(gloves) {
  let f = 0
 let arr= gloves.reduce((prev, next)=> {     
	    prev[next] = (prev[next] + 1) || 1; 
	    return prev; 
 }, {});  
  for (let key in arr) {
    f+=Math.floor( arr[key]/2)
  }
  return f
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]))
  // console.log(numberOfPairs(['gray','black','purple','purple','gray','black','black']))





// Pair of gloves
// // Winter is coming, you must prepare your ski holidays. 
// The objective of this kata is to determine the number of pair of
//  gloves you can constitute from the gloves you have in your drawer.

// // Given an array describing the color of each glove, return the number
//  of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)