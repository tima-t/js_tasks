/* Recursive
* Find all bases base-9 of given number
* return  array with results devided by *
*/

function Bases(num,base){
    var arr = [],
    temp =  num,
    current;
    
    function computeBase(t){
        if(t == 0 ){
            if(base<9){
                base++;
                arr.unshift('*');
                t = num;
            }
            else{
                return arr;
            }
        }
        current = t % base;
        arr.unshift(current);
        return computeBase(parseInt(t/base));
        
    }

   return(computeBase(temp));
}

/* Loop
* Find all bases base-9 of given number 
* return  array with results devided by *
*/

function BasesL(num , base){
    var t = num;
    var current,
    arr = [];
    
    for(var i = base; i<=9; i++){
        arr.unshift('*');
        t = num;
        while(t!=0){
            current = t % i;
            arr.unshift(current);
            t = parseInt(t/i);
        }
    }

    return arr;
}



console.time('basesR');
console.log(Bases(10,2));
console.timeEnd('basesR');

console.time('basesL');
console.log(BasesL(10,2));
console.timeEnd('basesL');