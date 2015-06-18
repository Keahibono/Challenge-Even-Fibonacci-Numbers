exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  // do your work here
  for(var i = 0 , j = 1 , k = 0; k < n ; i = j , j = x , k++){
        var x = i + j;

        if (x % 2 === 0){
        	sum += x;
        }
    }
  return sum;
};
