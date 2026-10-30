import { log } from 'console';
import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
 const inputString = await rl.question('Enter a number: ');

 const num = Number(inputString);

if (num == NaN){
    console.log("Invalid input")
}
else if (num % 2 == 0){
    console.log("Even")
}
else{
    console.log("Odd")
}