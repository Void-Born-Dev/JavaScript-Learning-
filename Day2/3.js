import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
  

const num1 = Number(await rl.question('Enter first number :'));
const num2 = Number(await rl.question('Enter Second number :'));
const num3 = Number(await rl.question("Enter Third number :"));


if (num1>num2){
    if (num1>num3)
        console.log(num1," is greatest")
    else if (num3>num1)
        console.log(num3," is greatest")
    else
        console.log("both ",num1," and ",num3," are equal and greatest")
}
else if (num2>num1){
    if (num2>num1)
        console.log(num2," is greatest")
    else if (num3>num2)
        console.log(num3," is greatest")
    else 
        console.log("both ",num2," and ",num3," are equal and greatest")
}
else {
    if (num1>num3)
        console.log("both ",num1," and ",num2," are equal and greatest")
    else if(num3>num1)
        console.log(num3," is greatest")
    else 
        console.log(num1,",",num2," and ",num3,"all three are equal and greatest")
}