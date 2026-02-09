// Исходный массив очереди
const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel() {
    const name = peopleWaiting.shift(); 
    const remaining = peopleWaiting.length;
    alert(`${name} получил(а) посылку. В очереди осталось ${remaining} человек.`);
    
    return name;
}

function leaveQueueWithoutParcel() {
    const name = peopleWaiting.pop();
    alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`);
    
    return name;
}

console.log('Исходная очередь:', peopleWaiting);

console.log('\n1. Кристина и Олег получают посылки:');
giveParcel(); 
giveParcel(); 
console.log('Очередь после Кристины и Олега:', peopleWaiting);

console.log('\n2. Кирилл получает посылку:');
giveParcel(); 
console.log('Очередь после Кирилла:', peopleWaiting);
console.log('\n3. Остальные уходят без посылок:');
while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel();
}
console.log('Итоговая очередь:', peopleWaiting);