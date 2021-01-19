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