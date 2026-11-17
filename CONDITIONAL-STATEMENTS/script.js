                //UNDERSTANDING "IF".
let age = 22;

if (age >= 18) {
    console.log("you are an adult.");
}

                //UNDERSTANDING "ELSE."
//What happens when a condition is false?
let myAge = 26;

if (myAge >=18){
    console.log("you are old enough.")
}else{
    console.log("you are under age.")
}

                //UNDERSTANDING "ELSE IF."
//We use else if to handle multiple conditions.
//For example, imagine a student grading system.
//80 and above: Grade A
//60–79: Grade B
//40–59: Grade C
//Below 40: Fail
let marks = 75;

if(marks >= 80) {
    console.log("Grade A");
} else if (marks >= 60){
    console.log("grade B")
}else if(marks >= 40){
    console.log("Grade C")
}else{
    console.log("Fail")
}


                    //LOGIC OPERATORS.
//Symbols used in JavaScript to combine, compare, or reverse conditions. 
// They help a program make decisions based on multiple conditions.

    //1. AND operator (&&)
//Think of AND as saying: 
//"This must be true AND that must also be true."
let yearsOld = 20;
let hasTicket = false;

if (yearsOld >= 18 && hasTicket === true) {
    console.log("welcome to the event!")
}else if (yearsOld >= 18 && hasTicket === false ) {
    console.log("no ticket!")
}

    //2. OR operator (||)
//The OR operator checks whether at least one of the conditions is true.
//In simple terms, if either condition is true, the whole condition passes.
let hasRegularTicket = false;
let hasVIPTicket = true;

if (hasRegularTicket === true || hasVIPTicket ===true){
    console.log("welcome to the event!");
} else {
    console.log("Ticket required!");
}

        //NOT operator (!)
//The NOT operator reverses a Boolean value.
//true becomes false.
//false becomes true.
let isBlocked = true;

if (!isBlocked) {
    console.log("welcome!");
} else {
    console.log("Access denied!");
}