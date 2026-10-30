import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
  

const age = Number(await rl.question('Enter age of candidate :'));
if (age >= 18)
    console.log("Eligible for Voting")
else 
    console.log("Not eligible for Voting")