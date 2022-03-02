function explode(s) {
    let f=[]
    for (let i = 0; i < s.length; i++){
        for (let t = 1; t <=s[i]; t++){
            f.push(s[i])
        }        
    }
  return  f.join('');
}


console.log(explode("312"));




// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"