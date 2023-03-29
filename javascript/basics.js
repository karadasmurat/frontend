let x = 10;
let y = 5;

console.log(x * y);

//Conditional Execution
let num = 51;
if (num % 2 == 0) {
    console.log(num + " is even.")
} else {
    console.log(num + " is odd.")
}

// Conditional (ternary) operator
// condition ? exprIfTrue : exprIfFalse
let result = num > 85 ? "pass" : "fail";
console.log("Score: " + num + " Result: " + result)

//Loops
for (let i = 0; i < 5; i++) {
    //console.log(`For counter: ${i}`);
}

let j = 0;
while (j < 5) {
    //console.log(`While counter: ${j}`);
    j++;
}