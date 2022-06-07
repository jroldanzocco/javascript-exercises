const palindromes = function (str) {
    const cleanStr = str.toLowerCase().replace(/[!.,\s]/g,"")
    const reverseStr = cleanStr.split("").reverse().join("")
   
    return cleanStr === reverseStr;

};  

// Do not edit below this line
module.exports = palindromes;

