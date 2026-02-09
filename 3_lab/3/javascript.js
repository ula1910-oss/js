function getDivisorsCount(number = 1) {

    if (!Number.isInteger(number) || number <= 0) {
        alert("number должен быть целым числом и больше нуля!");
        return 0;
    }
    
    let count = 0;
    

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    
    return count;
}