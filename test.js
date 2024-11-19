"use strict"



// let matn = "HeLLoWoRLd";
// let kichikH = []; 
// let kattaH = [];

// for (let i = 0; i < matn.length; i++) {
//     let suz = matn[i];
//     if (suz === suz.toLowerCase()) {
//         kichikH.push(suz); 
//     } else {
//         kattaH.push(suz); 
//     }
// }

// console.log("Kichik harf: ", kichikH);
// console.log("Katta harf: ", kattaH); 



function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let sortedStr1 = str1.split('').sort().join(''); 
    let sortedStr2 = str2.split('').sort().join(''); 
    if (sortedStr1 === sortedStr2) {
        return true;
    } else {
        return false; 
    }
}

console.log(isAnagram("salom", "aslik")); 
console.log(isAnagram("alma", "mala"));   
