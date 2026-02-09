const goals = [8, 1, 1, 3, 2, -1, 5];

let maxGoals = goals[0];
let maxGoalsIndex = 0;

for (let i = 1; i < goals.length; i++) {
    if (goals[i] > maxGoals) {
        maxGoals = goals[i];
        maxGoalsIndex = i;
    }
}

const matchNumber1 = maxGoalsIndex + 1;
alert(`Самый результативный матч был под номером ${matchNumber1}. В нем было забито ${maxGoals} гол(ов).`);

const validGoals = goals.filter(goal => goal >= 0);
const minGoals = Math.min(...validGoals);

const minMatches = [];
for (let i = 0; i < goals.length; i++) {
    if (goals[i] === minGoals && goals[i] >= 0) {
        minMatches.push(i + 1);
    }
}

const matchNumbers2 = minMatches.join(', ');
const goalWord = minGoals === 1 ? 'мячу' : 'мяча';
alert(`Самые нерезультативные матчи были под номерами ${matchNumbers2}. В каждом из них было забито по ${minGoals} ${goalWord}.`);

const totalGoals = validGoals.reduce((sum, goal) => sum + goal, 0);
alert(`Общее количество голов за сезон равно ${totalGoals}`);

const hasAutoDefeat = goals.some(goal => goal < 0);
alert(`Были автоматические поражения: ${hasAutoDefeat ? 'да' : 'нет'}`);

const averageGoals = totalGoals / validGoals.length;
alert(`Среднее количество голов за матч равно ${averageGoals.toFixed(2)}`);

const sortedGoals = [...goals].sort((a, b) => a - b);
alert(`Результаты матчей в порядке возрастания: ${sortedGoals.join(', ')}`);