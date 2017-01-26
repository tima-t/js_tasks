//fibonachi recursion
var fibonachiR = function(n){
    if(n==1 || n==2){
        return 1;
    }

    return fibonachiR(n-1) + fibonachiR(n-2);
}


//fibonachi loop

var fibonachiL = function(n){

    if(n == 1 || n == 2){
        return 1;
    }
    var previous = 1,
        current =1 ,
        temp;
    for(var i = 3 ; i<=n ; i++){
        temp = current;
        current = previous + current;
        previous  = temp;
    }

    return current;

}





console.time('fibonachi_recursion');
console.log(fibonachiR(35));
console.timeEnd('fibonachi_recursion');

console.time('fibonachi_loop');
console.log(fibonachiL(35));
console.timeEnd('fibonachi_loop');
