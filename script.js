

// 1. using console.log() print out the following statement:
console.log("The qoute 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teachesus to help one another.")

// 2. Using console.log() print out the following qoute by Mother Teresa:2
console.log("love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- withcharity you give love , so dont just give money but reach ouy ur hand instead.")

//3. check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10')

//4. check if parsefloat9('9.8') is equal to 10 if not make it exactly equal with 10.
const value = parsefloat('9.8');
if (value !==10){
    value = Math.round (value + 0.5);
}
console.log(value); // output:10

//5. check if 'on' is found in both phyton and jargon
let phyton = "phyton"
let jargon = "jargon"
console.log(phyton.includesI("on"))
console.log(jargon.includes("on"))

//6. i hope  this course is not full of jargon. Check if jargon is in the sentence
const sentence = "i hope this course is not full of jargon"
const searchTerm = "jargon";
if (sentence.includes(searchTerm)) {
    console.log("the word 'jargon' is not found in the sentence.");
}
  

//7. generate a random number between 0 and 100 inclusively.
console.log("import random")
random_number = random.randint (0,100);
print(random_number);

//8.generate a number between 50 and 100 inclusively
console.log("import random")
radom_number = random.radiant(50,100);
print(random_number)

//9. generate a random number between 0 and 255 inclusively
console.log("importrandom")
random_number = random.randint(0, 225)
print("random number between 0 and 225:", random_number)

//10.Access the 'javascript' string characters using a random number.
console.log("import random")
s = 'javascript'
index = random .randint(0, len(s) -1)
char = s[index]
print(char)

//11. use console.log() and escape characters to print the following pattern
//define the number of rows for the pattern
const numRows = 5;

// outer loop for rows
for (let i = 1; i<= numRows; i++){
    let row = ''; // initialize an empty string for each row


}