const clientsEstimations = [];

function askClientToGiveEstimation() {
    const estimation = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
    
    const estimationNumber = Number(estimation);
    
    if (estimationNumber >= 1 && estimationNumber <= 10) {
        clientsEstimations.push(estimationNumber);
        return estimationNumber;
    }
    return null;
}

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(estimation => estimation > 5).length;
const notGoodEstimations = clientsEstimations.filter(estimation => estimation <= 5).length;

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`);