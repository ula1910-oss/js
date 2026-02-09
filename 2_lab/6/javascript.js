
let clientName = prompt('Введите имя клиента:')?.trim() || '';

let clientSpentTodayInput = prompt('Сколько клиент потратил сегодня?');
let clientSpentForAllTimeInput = prompt('Сколько клиент потратил за все время?');

let clientSpentToday = Number(clientSpentTodayInput);
let clientSpentForAllTime = Number(clientSpentForAllTimeInput);

if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime) || 
    clientSpentTodayInput === null || clientSpentForAllTimeInput === null ||
    clientSpentTodayInput.trim() === '' || clientSpentForAllTimeInput.trim() === '') {
    
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.');
} else {
    let discount = 0;
    if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
        discount = 10;
    } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
        discount = 20;
    } else if (clientSpentForAllTime >= 500) {
        discount = 30;
    }
    alert(`Вам предоставляется скидка в ${discount}%!`);
    let totalSpentToday = clientSpentToday - (clientSpentToday * discount / 100);
    alert(`Спасибо, ${clientName}! К оплате ${totalSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);
    clientSpentForAllTime += clientSpentToday;
    alert(`Теперь общая сумма потраченных средств составляет ${clientSpentForAllTime}$.`);
}