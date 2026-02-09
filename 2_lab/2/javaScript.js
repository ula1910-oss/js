let correctAnswers = 0;
let incorrectAnswers = 0;
const questions = [
    "Сколько будет 2 + 2?",
    "Сколько будет 2 * 2?",
    "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?",
    "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?",
    "Сколько будет 2 + 2 * 2?"
];
const correctAnswersValues = [4, 4, 1, 12, 6];

for (let i = 0; i < questions.length; i++) {
    const userAnswer = Number(prompt(questions[i]));
    if (userAnswer === correctAnswersValues[i]) {
        alert("Ответ Верный");
        correctAnswers++;
    } else {
        alert("Ответ Неверный");
        incorrectAnswers++;
    }
}
alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);