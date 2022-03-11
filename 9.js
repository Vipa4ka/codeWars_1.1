function revrot(str, sz) {
    let u = '';    
    let r = [];
    let b = []; 
    if (sz === 0) {
        return ""
    }    
    for (let i = 0; i < str.length; i += sz) {
        u = str.slice(i, i + sz);
        b.push(u)
    }
    b.map(e => {
        if (e.length < sz) {
            return ""
            
        } else {
            let f = 0;
            for (let j = 0; j < e.length; j++) {
                f += e[j] ** 3;
            }        
            if (f % 2 === 0) {
                r.push(e.split("").reverse().join(''));
            } else{
                r.push(e.slice(1) + e[0]);
            }
        }        
    }) 

return r.join("");
}


        console.log(revrot("1234", 0))   // , "")
        console.log(revrot("", 0))   //, "")
console.log(revrot("66443875", 4))   //, "44668753")

console.log(revrot("123456987654", 6))     //--> "234561876549"