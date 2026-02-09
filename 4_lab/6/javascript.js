const numbers = [10, 4, 100, -5, 54, 2];

let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i] ** 3;
}
console.log(`1. Цикл for: ${sum1}`);

let sum2 = 0;
for (const num of numbers) {
    sum2 += Math.pow(num, 3);
}
console.log(`2. Цикл for of: ${sum2}`);

let sum3 = 0;
numbers.forEach(num => {
    sum3 += num * num * num;
});
console.log(`3. Метод forEach: ${sum3}`);

const sum4 = numbers.reduce((acc, num) => {
    return acc + (num ** 3);
}, 0);
console.log(`4. Метод reduce: ${sum4}`);

console.log(`\nОжидаемый результат: 1158411`);
console.log(`Все результаты совпадают? ${sum1 === 1158411 && sum2 === 1158411 && sum3 === 1158411 && sum4 === 1158411 ? '✓ Да' : '✗ Нет'}`);