var n1 = 10
var n2 = 20
var operator = "+"
switch (operator) {
    case '+':
        console.log("Sum = " + (n1 + n2));


    case '-':
        console.log("Abstraction = " + (n1 - n2))


    case '*':
        console.log("Multiplication = " + (n1 * n2))


    case '/':
        console.log("Division = " + (n1 / n2))
        break;

    default:
        console.log("Invalid Operator");
        break;
}
