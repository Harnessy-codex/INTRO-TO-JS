    //LOOPS.
//A loop is a programming structure that allows JavaScript to repeat a block 
//of code multiple times without writing the same instructions repeatedly.

                    //1.FOR LOOP.
//It repeatedly executes a block of code a specific number of times,
//as long as a given condition remains true.
for (let i = 1; i <= 10; i+= 2) {
    console.log("participant. " + i);
}

    //using for loop and modulus to display even or odd numbers only.
//Even
for (let i =1; i <=20; i++) {
    if (i % 2 ===0) {
        console.log(i)
    }
}
 
//Odd
for (let i = 1; i <= 20; i++) {
    if(i % 2 ===1) {
        console.log(i)
    }
}

                        //WHILE LOOP
//A while loop repeatedly executes a block of code as long as a specified condition remains true. 
let i = 1;

while (i <= 10){
    console.log(i);
    i++;
}

                        //DO....WHILE LOOP.
//The interesting difference is that a do...while loop executes the code at least once, even if its condition is false.
let number = 10;

do {
    console.log(number);
    number++;
} while (number <= 5);

        //FUNTIONS
//A function is a reusable block of code designed to perform a specific task.
//Instead of writing the same code repeatedly, you write it once inside a function 
//and call it whenever you need it.
function welcome() {
    console.log("Welcome to BC Events!");

}

welcome();

    //PARAMETERS & ARGUMENTS.
//A parameter is a variable placed inside a function's parentheses. It acts as a placeholder for information.
function registeredParticipants(name, event){

    console.log(name + "has registered for " + event);
}

registeredParticipants("harnessy " , "The Movie Night");


        //THE RETURN STATEMENTS.
//It calculates something and uses the result to use elsewhere
//in our program. That's where the return comes in.
function addNumber(a, b) {
    return a + b;
}

let result = addNumber(10, 20);

console.log(result);

//Example two.
function calculateTotal(price, quantity) {
    return price * quantity;
}

let resultTotal = calculateTotal(20, 30);

console.log(resultTotal)

        //Function Expressions.
//A function expression is when you create a function and store it inside a variable.
