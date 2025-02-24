//add let before variable & fix studentname 

let studentName = Nadia;
let studentAge == "20";
let isEnrolled = True; 

//fix studentAge and add quotes to br also add missing br
document.write("<h2>Student Info</h2>");
document.write("Name: " + studentName + "<br>");
document.write("Age: " + studentAge + "<br>");
document.write("Enrolled: " + isEnrolled + "<br>");

//add "<br>
let ageString = String(studentAge)
document.write("Age Type: " + typeof ageString + "<br>");

num1 = prompt("Enter first number");
num2 = prompt("Enter second number");
total = num1 + num2; 

document.write("Sum: " + total)

userAge = prompt("Enter your age");
if (userAge = 18) { 
    document.write("You can vote!"); 
} else (userAge < 18) { 
    document.write("Sorry, you can't vote."); 
}

for (i = 1; i < 10; i++) 
    document.write(i)

//fix loop and add missing curly bracket
let num =0;
while (num < 10) { 
    num = parseInt(prompt("Enter a number greater than 10"));

}
