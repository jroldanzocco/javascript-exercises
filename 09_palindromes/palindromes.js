const palindromes = function (str) {
    const reverseStr = str.toLowerCase().replace(/[!.,\s]/g,"").split("").reverse().join("")
   
    return str.replace(/[!.,\s]/g,"").toLowerCase() === reverseStr;

};  

// Do not edit below this line
module.exports = palindromes;

