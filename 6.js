function isIsogram(str) {
    for (let i = 0; i < str.length; i++){
        let z=[]
        let r = str[i].toLowerCase();

        z.push(r);

        console.log(r);
        console.log(str); 


        let d = str.includes(r);  
        if (z.includes(r)) {
            return false;
        } else {
            i++
        }
    //   return  !str.includes(r) ? true : false;
        console.log(z);
    }
    
}


// console.log(isIsogram("Dermatoglyphics"))   //, true );

// console.log(isIsogram("aba")); 
console.log(isIsogram("isogram"));  //true ); 
    console.log(isIsogram("isIsogram"));   /// false)    





// An isogram is a word that has no repeating letters, consecutive or non - consecutive.
//  Implement a function that determines whether a string that contains only letters is an isogram.
//  Assume the empty string is an isogram.Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)