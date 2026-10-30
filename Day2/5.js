import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
  

const year = Number(await rl.question('Enter year :'));

if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
    console.log("Leap Year")
}
else {
    console.log("Not a leap year")
}