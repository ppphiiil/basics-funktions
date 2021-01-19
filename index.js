//********************************************
//*****************   DEFINING FUNKTIONS

function grumpy() {
    console.log(`leave me alone`);
}

//calling a function
grumpy();
grumpy();

for (i = 0; i < 50; i++) {
    // grumpy();
}



// useing variables global and non global
function rollDie() {

    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`rolled; ${roll}`);
}

let roll = 6;
console.log(roll);
rollDie();

//function in a function
function throwDice() {
    rollDie();
}

throwDice();

//********************************************
//*****************  EXERCISES 1
console.log(`\n\nEXERCISE 1`);
// # Find the Average
// ​
// Write a function to find the average value in an array of numbers
// avg([0,50]) --> 25
// avg([75,76,80,95,100]) --> 85.2

function avg(numbers) {
    let sum = 0;
    let number = 0;

    for (let i = 0; i < numbers.length; i++) {
        number = numbers[i];
        sum = sum + number;
    }

    console.log(sum);
    console.log(sum / numbers.length);

}

let numbers = [75, 76, 80, 95, 100];
avg(numbers);




//********************************************
//*****************  EXERCISES 2
console.log(`\n\nEXERCISE 2`);

// # Pangram Exercise
// ​
// A pangram is a sentence that contains every letter of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"
// ​
// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. Make sure you igore string casing!
// ​
// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false



