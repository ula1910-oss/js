function getMathResult(expression) {
    if (!Array.isArray(expression) || expression.length < 3) {
        return "Ошибка";
    }
    
    const validElements = [];
    
    for (let element of expression) {
        const elementStr = String(element);
        const isNumber = !isNaN(Number(elementStr)) && elementStr.trim() !== '';
        const validOperators = ['>', '<', '=', '+', '-', '*', '/'];
        const isOperator = validOperators.includes(elementStr);
        if (isNumber || isOperator) {
            validElements.push(element);
        }
    }
    
    if (validElements.length < 3) {
        return "Ошибка";
    }
    const [first, operator, third] = validElements.slice(0, 3);
    const num1 = Number(first);
    const num2 = Number(third);
    
    if (isNaN(num1) || isNaN(num2)) {
        return "Ошибка";
    }
    
    switch (operator) {
        case '>':
            return num1 > num2;
        case '<':
            return num1 < num2;
        case '=':
        case '==':
            return num1 === num2;
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
       
            if (num2 === 0) {
                return "Ошибка";
            }
            return num1 / num2;
        case '++': 
            return num1 + num2;
        case '--':
            return num1 - num2;
        default:
            return "Ошибка";
    }
}