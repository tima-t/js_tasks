/*
* Recursive solution
*/
var factorialR = function(n){

    // if(n<1){
    //     console.log('you should write positive number')
    //     exit;
    // }
    if(n==1){
        return 1;
    }
    return n*factorialR(--n);
}

/*
* Loop solution
*/

var factorialL = function(n){
    var result = 1;
    for(var i =2; i<=n; i++){
        result*=i;
    }

    return result;
}



//loop
console.time('loop');
factorialL(78900);
console.timeEnd('loop');

//recursive 
console.time('recursive');
factorialR(78900);
console.timeEnd('recursive');