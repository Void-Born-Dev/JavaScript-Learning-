//Print the multiplication table of a given number up to 10

import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const n = Number(await rl.question("Enter a number :"))

let i = 1

while(i < 11){
    console.log(n,"*",i,"=",n*i);
    i++;
}