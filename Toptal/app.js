
function countPrimes(max){

//permutation function
//return array of arrays 
function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}
//

    var countP = 0;
    var isPrime = true;
    var primes = {};
    var nHigh ;
    var nTemp;
    //all primes number under Max
    for(var i =2 ; i<max; i++){   

        nHigh = parseInt(Math.sqrt(i) +1);
        for(var j =2; j< nHigh; j++){
            if(i%j==0){
               isPrime =false;
               break; 
            }
        }
        if(isPrime){
            primes[i] =  1;      
        }
        isPrime = true;
    };
    isPrime = true;

    //foreach primes
    for(var key in primes){
        //all permutation of current prime
        var nums = permutator(key.split(''));  
        console.log(nums);    
	// take one by one        
            for(var num of nums){   
                nTemp = num.join('');
                if(nTemp[0] != '0' && primes[nTemp] != 1 ){
                    isPrime = false;
                    break;
                }
            }
        if(isPrime){
            countP++;
        }
        isPrime = true;
    }
    return countP;    
}
    console.log(countPrimes(100));


