const findTheOldest = function(list) {
    let partial;
    let oldestAge = -Infinity
    let index;
    const CURRENT_YEAR = 2022;
    for(let i = 0; i < list.length; i++){
        if(list[i].yearOfDeath === undefined){
            list[i].yearOfDeath = CURRENT_YEAR;
        }
        partial = Object.values(list[i]).filter(n => {
            return typeof(n) ==="number"}).reduce((a, b) => b - a)
                
        if(partial > oldestAge){
            oldestAge = partial
            index = i
        }
    
    }
    return list[index];
};

// Do not edit below this line
module.exports = findTheOldest;
