function modulo(num , devider){
    if(num<devider){
        return num;
    }
    return modulo(num-devider,devider);
}

console.log(modulo(11,21));

