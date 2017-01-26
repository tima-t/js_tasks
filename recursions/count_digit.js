// Count of digit in number
// recursive
// 
var count_digits = function(num,digit){
    var count = 0;
    function count_digit(num,digit){
        if(digit  == num%10){
            count++;
        }
        if(parseInt(num/10) == 0){
            return count;
        }

        return count_digit(parseInt(num/10),digit);
    }

    return count_digit(num,digit);
}

console.time('recursive');
console.log(count_digits(233321922292,2));
console.timeEnd('recursive');

