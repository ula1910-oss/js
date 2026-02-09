// Function Declaration версия
function checkQuestionAnswer(question, correctAnswer) {
    // Задаем вопрос пользователю через prompt
    const userAnswer = prompt(question);
    
    // Нормализуем ответы: удаляем пробелы по краям и приводим к нижнему регистру
    const normalizedUserAnswer = userAnswer ? userAnswer.trim().toLowerCase() : '';
    const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase();
    
    // Сравниваем ответы
    if (normalizedUserAnswer === normalizedCorrectAnswer) {
        alert('Ответ верный');
        return true;
    } else {
        alert('Ответ неверный');
        return false;
    }
}