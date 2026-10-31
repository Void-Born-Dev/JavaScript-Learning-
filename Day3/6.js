//Count the number of digits in a positive integer
import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const n = Number(await rl.question("Enter a postive number :"))

if (n < 0)
    console.log("Invalid input")
else if (n  == 0)
    console.log("Sum of digits of",n,":",0)
else{
    let i = n
    let sum = 0
    while(i>0){
        sum += i%10
        i = Math.trunc(i/ 10)
    }
    console.log("Sum of digits of",n,":",sum)
}