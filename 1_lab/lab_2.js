
console.log(" Задание #1 ");
const myName = 'Алексей';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Иван Иванов';
const reasonText = 'Мне нравится создавать полезные веб-приложения';
const numberOfMonth = 2;
const myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`;
console.log(myInfoText);



console.log(" Задание #2 ");

let myInfoTextTask2 = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`;
myInfoTextTask2 = myInfoTextTask2.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());

console.log("Текст после замены:");
console.log(myInfoTextTask2);

console.log("Длина строки:", myInfoTextTask2.length);
console.log("Первый символ:", myInfoTextTask2[0]);
console.log("Последний символ:", myInfoTextTask2[myInfoTextTask2.length - 1]);



console.log(" ЗАДАНИЯ 3 и 4 ");

const userName = prompt('Как вас зовут?');
const userAgeInput = prompt('Сколько вам лет?');

const formattedName = userName.toLowerCase().trim();
const userAge = Number(userAgeInput.trim());

console.log("Имя до форматирования:", userName);
console.log("Имя после форматирования:", formattedName);
console.log("Возраст:", userAge);

alert(`Вас зовут ${formattedName} и вам ${userAge} лет`);


console.log(" ЗАДАНИЕ 5 ");

const userString = prompt('Введите текст для обрезки');
const startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
const endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');

const resultString = userString.trim().slice(
    Number(startSliceIndex), 
    Number(endSliceIndex)
);

console.log("Результат обрезки:", resultString);
alert(`Результат: ${resultString}`);


console.log(" ЗАДАНИЕ 6 ");
const userText = prompt('Введите текст');
const wordFromText = prompt('Введите слово из текста');

const trimmedText = userText.trim();
const trimmedWord = wordFromText.trim();
const indexOfWord = trimmedText.indexOf(trimmedWord);

let finalResult;
if (indexOfWord === -1) {
    finalResult = `Слово "${trimmedWord}" не найдено`;
} else {
    finalResult = trimmedText.slice(0, indexOfWord + trimmedWord.length);
}
console.log("Результат:", finalResult);
alert(`Результат: ${finalResult}`);


console.log(" ЗАДАНИЕ 7 ");

const javaScriptDescription = "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

const halfLength = Math.floor(javaScriptDescription.length / 2);
let step1 = javaScriptDescription.slice(0, halfLength);

let step2 = step1.replace("а", 'А');

let step3 = step2.replace("s", '');

let step4 = step3.repeat(3);

const middleIndex = Math.floor(step4.length / 2);
const middleChar = step4[middleIndex];

console.log("Итоговая строка:", step4);
console.log("Средний символ:", middleChar);

