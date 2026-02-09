function showSuccessMessage(message) {
    console.log(` ${message}`);
}
function showErrorMessage(message) {
    console.error(` ${message}`);
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    let foundErrors = false;
    
    for (let i = 0; i < text.length; i++) {
        const currentSymbol = text[i];
        
        if (currentSymbol === errorSymbol) {
            foundErrors = true;
            errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
        }
    }
    
    if (!foundErrors) {
        successCallback('В данном тексте нет запрещенных символов');
    }
}


const text = 'Привет! Как дела! Давно мы с тобой не виделись.';

console.log('=== Проверка функции checkTextOnErrorSymbol ===\n');
console.log(`Текст: "${text}"`);
console.log(`Ищем запрещенный символ: "а"\n`);

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);