const removeFromArray = function () {
    let arr = arguments[0];
    let newArray = []
    if(arguments.length > 2){
        for(let i = 1; i < arguments.length; i++){
            arr.filter(e => e !== arguments[i])
        
        }
}
    
};

// Do not edit below this line
module.exports = removeFromArray;
