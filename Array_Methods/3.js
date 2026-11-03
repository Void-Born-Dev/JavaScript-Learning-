

let arr = [1,2,3,4]

let newarr = arr.filter(function(val){
    if (val>3){
        return true;
    }
    else{
        return false;
    }
})

console.log(newarr)// [4]