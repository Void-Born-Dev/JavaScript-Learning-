let arr = [1,2,3,4]

let bool = arr.find(function(val){
    if (val == 13)
        return val
})

console.log(bool)// [4]