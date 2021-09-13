exports.calculate = function(num1, num2, operator) {
    switch (operator) {
        case '+':
            return "<b>Sum is </b>" + (num1 + num2).toString();
    
    
        case '-':
            return "<b>Substraction is </b>" +(num1 - num2).toString();
            break;
    
        case '*':
            return "<b>Multiplication is </b>" + (num1 * num2).toString();
            break;

        case '/':
            return "<b>Division is </b>" + (num1 / num2).toString();
            break;
    
        default:
            return "<b>Please enter a valid operator</b>";
            break;
    }
    
}