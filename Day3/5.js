//Calculate the factorial of a given non-negative integer

import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const n = Number(await rl.question("Enter a postive number :"))

if (n < 0)
    console.log("Invalid input")
else if (n  == 0)
    console.log("Factorial of ",n,":",1)
else{
    let i = n
    let fact = 1
    while(i>1){
        fact*=i
        i--;
    }
    console.log("factorial of",n,":",fact)
}