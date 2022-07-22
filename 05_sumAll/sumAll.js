const sumAll = function(a,b) {
   let sum = 0;
    if(a>0 && b>0 &&  typeof a == "number" &&  typeof b == "number" ){
        if(a<b){
            for(a;a<=b;a++){
                sum += a
            }
        }else{
            for(b;b<=a;b++){
                sum += b;
            }
        }
        
    }else{
        return "ERROR"
    }
return sum;
};

// Do not edit below this line
module.exports = sumAll;
