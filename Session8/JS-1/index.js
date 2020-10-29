// Interacting with browser
alert("Hello");
let age = prompt("What is your age");
alert("Your age is " + age);

//Math operations with vriables
let num1 = 15
let num2 = 5
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

// Concatenation vs formatted strings
number = 7
console.log("The number is " + number)
console.log(`The number is ${number}`)

// Comparisons
alert(2 > 1);
alert(135 < 599);
alert(34 == 34);

// Conditional stements with "if"
let year = prompt('How old are you');

if (year == 15) {
    console.log("You are young!");
}
else {
    console.log("You old!")
}

let a = 90;
let b = 80;
let b = 70;
let cur_grade = 89;

if (cur_grade > a)  console.log("You have an A")
else if (cur_grade > b)  console.log("You have an B")
else if (cur_grade > b)  console.log("You have an C")
else console.log("You are failing :(")

// Operators

// 1. Ternary
let age = 13;
let is_young = age < 15 ? true : false;

// 2. Nullish Coalescing 
let first_name = null;
let last_name = null;
let nick_name = "Dave";
console.log(first_name ?? last_name ?? nick_name ?? "Anonymous");

// 3. Or operator
let height = 0;
console.log(height || 100)

// Loops

// 1. While Loops
let i = 0;
while (i < 5)
{
    console.log(i);
    i++;
}

is_game_over = false;
let j = 1;
while (!is_game_over)
{
    console.log("Game is still running...")
    if (j == 10)
    {
        break;
    }
    j++;
}

// 2. For Loops
for (let k = 0; k < 3; k++) 
{
    console.log(k);
}


