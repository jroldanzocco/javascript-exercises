const fibonacci = n => {
    const number = Number(n);
    if(number < 0){
        return "OOPS"
    }else if(number === 0 || number === 1){
        return number;
    }else{
        return fibonacci(number - 1) + fibonacci(number - 2)
    }
};

// Do not edit below this line
module.exports = fibonacci;
