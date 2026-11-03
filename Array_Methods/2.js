let arr = [1,2,3,4]

let newarr = arr.map(function(val){
    return val*3;
})
console.log(arr)// [1,2,3,4]
console.log(newarr)//[3,6,9,12]

// let newarr = arr.map(function(val){
//     if (val > 3){
//         return val;//for other values it will by default return undefined 
//     }
// })
// console.log(arr)// [1,2,3,4]
// console.log(newarr)//[3,6,9,12]