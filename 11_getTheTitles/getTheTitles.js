const getTheTitles = function(arr) {
    let titleArray = [];
    for(let i = 0; i < arr.length; i++){
        let titulos;
        titulos = arr[i].title;
        titleArray.push(titulos)
    }
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
