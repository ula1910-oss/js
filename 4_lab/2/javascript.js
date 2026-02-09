function getSumOfSequence(number) {
    const sequence = [];
    for (let i = 1; i <= number; i++) {
        sequence.push(i);
    }
    const sum = sequence[0] + sequence[sequence.length - 1];
    
    return sum;
}