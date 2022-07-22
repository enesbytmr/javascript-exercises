const repeatString = function(text,count) {
    let result = "";
    if(count < 0){
         let err ="ERROR"
         return err
    }else
    {
    for (let i = 0; i < count; i++) {
        result += text
        }
        return result;
    }


};

// Do not edit below this line
module.exports = repeatString;
