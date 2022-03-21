function unluckyDays(year) {
    let r = 0;
    for (let i = 0; i < 12; i++){
        const date = new Date(year, i, 13); 
        if (date.getDay() === 5) {
            r+=1
        }        
    }    
return r 
}


// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

console.log(unluckyDays(2015))  // == 3
console.log(unluckyDays(1986))  // == 1);

