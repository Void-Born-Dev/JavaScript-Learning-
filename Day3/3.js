// calculate the sum of number from 1  to n using loop (we can also commplete this task using formula "n(n+1)/2")

import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const n = Number(await rl.question("Enter a number :"))

let i = 1
let sum = 0

while (i <= n){
    sum+= i;
    i++;
}

console.log("Sum :",sum)