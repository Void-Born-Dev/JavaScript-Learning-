import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
 const inputString = await rl.question('Enter a number: ');

 const num = Number(inputString);

 if (num>0){
    console.log("Positive")
 }
 else if (num<0){
    console.log("Negative")
 }
 else{
    console.log("Zero")
 }