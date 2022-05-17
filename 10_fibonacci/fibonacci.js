const fibonacci = function(n) {
    let number = Number(n);
    if(number < 0){
        return "OOPS"
    }else if(number === 0){
        return 0;
    }else if(number === 1){
        return 1;
    }

    else{
        return fibonacci(number - 1) + fibonacci(number - 2)
    }
};

// Do not edit below this line
module.exports = fibonacci;
