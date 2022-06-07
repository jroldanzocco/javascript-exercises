function isLive(option){
    return !option.yearOfDeath
}
const findTheOldest = list => {
    const sorted = list.sort((a,b) =>{
        const CURRENT_YEAR = (new Date()).getFullYear()
        if(isLive(a)){
            a.yearOfDeath = CURRENT_YEAR
        }else if(isLive(b)){
            b.yearOfDeath = CURRENT_YEAR
        }
        const first = a.yearOfDeath - a.yearOfBirth
        const second = b.yearOfDeath - b.yearOfBirth
        return first > second ? -1 : 1
    })
    return (sorted[0])
}


// Do not edit below this line
module.exports = findTheOldest;


