let v = 1.15 + 2.30; console.log(v);



// function duplicateEncode(word) {
//     let rr = [];
//     let result = {};

//     // let f = word.split('').map((e, idx, arr) => {
//     //     console.log(e);
//     //     // return arr.indexOf(e) === idx

//     // })

//     //     console.log(f);



//     for (let i = 0; i < word.length; i++) {
//         let a = word[i];
//         if (result[a] != undefined)
//             ++result[a];
//         else
//             result[a] = 1;
//     }
//     for (let key in result) {
//         if (result[key] > 1) {


//         } else {
//             key = '('
//         }

//     }

//     console.log(result);

// }

// console.log(duplicateEncode("din")); //,"(((");
// console.log(duplicateEncode("recede"));  //,"()()()");
    // console.log(duplicateEncode("Success")); //,")())())","should ignore case");
    // console.log(duplicateEncode("(( @")); //,"))((");






// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!