const coffees = ['Latte', 'Cappuccino', 'Americano'];
const coffeeName = prompt('Поиск кофе по названию:');
const coffeeIndex = coffees.findIndex(coffee => coffee === coffeeName);

if (coffeeIndex !== -1) {
    const coffeeNumber = coffeeIndex + 1;
    let numberSuffix;
    if (coffeeNumber % 10 === 1 && coffeeNumber % 100 !== 11) {
        numberSuffix = '-й';
    } else if (coffeeNumber % 10 >= 2 && coffeeNumber % 10 <= 4 && 
               (coffeeNumber % 100 < 10 || coffeeNumber % 100 >= 20)) {
        numberSuffix = '-й';
    } else {
        numberSuffix = '-й';
    }
    
    alert(`Держите ваш любимый кофе ${coffeeName}. Он ${coffeeNumber}${numberSuffix} по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}