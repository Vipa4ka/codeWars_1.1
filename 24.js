function myLanguages(results) {
    let d = [];
    let s = [];    
    for (let a in results) {
        if (results[a] >= 60) {
            d.push([a, results[a]])
        }
    }  
    d.sort(function (a, b) {
        return (b[1] - a[1]); 
    });    
    for (let i = 0; i < d.length; i++){
     s.push(d[i][0]);        
    }
    return s    
}

// function myLanguages(results) {
//   for(var i in results){
//     if(results[i]<60){
//       delete results[i];
//     }
//   }
//   return Object.keys(results).sort(function(a,b){return results[b]-results[a]})
// }




    console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))  //, ["Ruby", "Python"])
    // console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}))  //, ["Dutch", "Greek", "Hindi"])
    // console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}))   //, [])






// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []