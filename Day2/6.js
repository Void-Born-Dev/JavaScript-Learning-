import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
  

const marks = Number(await rl.question("Enter student's marks :"));
console.log("Grade :")
if (marks>100 || marks < 0)
    console.log("Invalid Input")
else if (marks>=90)
    console.log("A")
else if (marks>=75)
    console.log("B")
else if (marks>=60)
    console.log("C")
else if (marks>=40)
    console.log("D")
else
    console.log("F")



// 6. Take marks out of 100 and print a grade: A (90–100), B (75–89), C (60–74), D (40–59), or Fail (below 40). Print Invalid marks if outside 0–100.