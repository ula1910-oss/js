function getSumOfNumbers(number, type = 'odd') {
    let sum = 0;
    
    for (let i = 0; i <= number; i++) {
        let include = false;
        
        if (type === 'odd') {
            include = i % 2 !== 0;
        } else if (type === 'even') {
            include = i % 2 === 0;
        } else if (type === '') {
            include = true;
        }
    
        if (include) {
            sum += i;
        }
    }
    
    return sum;
}