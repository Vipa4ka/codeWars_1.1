function disemvowel(str) {
    let h=[]
    const arr = ["a", "e", "i", "o", "u"];
    for (let t of arr) {
        // console.log(t);
        // for (let p of str) {
        //     console.log(p);
        //     console.log(str);
        //     if (str.includes(t)!=true) {
        //        h.push()  
        // }
        
        let results = [str].filter(function (item, index, array) {
            // return item[index] != t;
            console.log(item[index] != t);
            
            
  // если true - элемент добавляется к результату, и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});

            // console.log(str.includes(t));
            
            
            // if (p != t) {
            //     h.push(p) 
            // }
            
            
            // p!==t && h.push(p)   
        // }
        return h;
    }


    //  for (let i = 0; i < arr.length; i++) {
    //     if (!str.includes(arr[i])) {
    //         return arr[i]
    //     }
    // }

  return h;
}



// function absentVowel(x) {
//     const arr = ["a", "e", "i", "o", "u"];
//     for (let i = 0; i < arr.length; i++) {
//         if (!x.includes(arr[i])) {
//             return i
//         }
//     }
// }


console.log(disemvowel("This website is for losers LOL!"));   // "Ths wbst s fr lsrs LL!")
    
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))   //, "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    
// console.log(disemvowel("What are you, a communist?"))    //, "Wht r y,  cmmnst?")
