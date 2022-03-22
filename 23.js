function formatDuration(seconds) {
    
if (seconds === 0) {
        return 'now'
    }
    if (seconds < 60) {
       return seconds===1 ? seconds+' second' : seconds+' seconds' 
    }
    if (seconds < 3600) {
        let min;
        parseInt(seconds / 60) === 1 ? min = "1 minute " : min = parseInt(seconds / 60) + " minutes "
        let sec = seconds % 60;
        if (sec === 0) {
             sec=''
        } else if (sec === 1) {
            sec=sec +' second '
        } else {
            sec=sec+ ' seconds '
        }   

        return min  +  sec
    }
    if (seconds < 86400) { 
        let s = seconds % 60;
        if (s === 0) {
             s=''
        } else if (s === 1) {
            s=s +' second '
        } else {
            s=s+ ' seconds '
        }
        
        let m = parseInt(seconds % 3600 / 60);
        if (m === 0) {
             m=''
        } else if (m === 1) {
            m=', '+m +' minute and '
        } else {
            m=', '+m+ ' minutes and '
        }
        let h = parseInt(seconds / 3600);
      let hh=   h===1 ? h+' hour' : h+' hours'
     return  hh + m +  s
    }
    if (seconds < 31536000) {
          let d = parseInt(seconds / 3600/24);
        let dd = d === 1 ? d + ' day' : d + ' days'
        let hrs = parseInt(seconds % 3600 / 60/24);
        if (hrs === 0) {
             hrs=''
        } else if (hrs === 1) {
            hrs=', '+hrs +' hour'
        } else {
            hrs=', '+hrs+ ' hours'
        }
        let mmm = parseInt(seconds % 3600/60);
        if (mmm === 0) {
             mmm=''
        } else if (mmm === 1) {
            mmm=', '+mmm +' minute '
        } else {
            mmm=', '+mmm+ ' minutes '
        }

        let sss = seconds % 60;
        if (sss === 0) {
             sss=''
        } else if (sss === 1) {
            sss='and '+sss +' second'
        } else {
            sss='and '+sss+ ' seconds'
        }
     return  dd  +hrs+ mmm  +  sss
    } else {
          let y = parseInt(seconds / 86400/365);
        let yy = y === 1 ? '1 year, ' : y + ' years, '
         let ddd = parseInt((seconds/86400%365));
        if (ddd === 0) {
             ddd=''
        } else if (ddd === 1) {
            ddd='1 days, '
        } else {
            ddd=ddd+ ' days, '
        }
        let hhh = parseInt(parseInt(seconds / 3600 % 24)) ;
        if (hhh === 0) {
             hhh=''
        } else if (hhh === 1) {
            hhh=', '+hhh +' hour '
        } else {
            hhh=', '+hhh+ ' hours '
        }
         let mmmm = parseInt(seconds % 3600/60);
        if (mmmm === 0) {
             mmmm=''
        } else if (mmmm === 1) {
            mmmm=', '+mmmm +' minute '
        } else {
            mmmm=', '+mmmm+ ' minutes '
        }
        let ssss = seconds % 60;
        if (ssss === 0) {
             ssss=''
        } else if (ssss === 1) {
            ssss='and '+ssss +' second '
        } else {
            ssss='and '+ssss+ ' seconds '
        }  
        return yy + ddd +hhh + mmmm + ssss        
    } 
}

console.log(formatDuration(1));   //, "1 second");
// console.log(formatDuration(62));  //, "1 minute and 2 seconds");
// console.log(formatDuration(120));  //, "2 minutes");
// console.log(formatDuration(3600));   //, "1 hour");
// console.log(formatDuration(3662));    //, "1 hour, 1 minute and 2 seconds");
// console.log(formatDuration(15731080));    //, "182 days, 1 hour, 44 minutes and 40 seconds");
// console.log(formatDuration(132030240));   //, "4 years, 68 days, 3 hours and 4 minutes");





// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.