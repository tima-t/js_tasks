
var exponenta = function(num,power){
    var sum = 1;
    function expo(num ,power){
        if(power == 0){
            return sum;
        }
        sum*=num;
        return expo(num,--power);
    } 

    return expo(num,power);
}

console.log(exponenta(3, 5));