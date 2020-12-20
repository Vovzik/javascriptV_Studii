'use strict';

const money = +prompt('Ваш месячный доход?', '');
const income = 'Фриланс';
const addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", '');
const deposit = confirm('Есть ли у вас депозит в банке?', '');
const expenses1 = prompt("Введите обязательную статью расходов?", '');
const expenses2 = prompt("Введите обязательную статью расходов?", '');
const amount1 = +prompt("Во сколько это обойдется?", '');
const amount2 = +prompt("Во сколько это обойдется?", '');
const mission = 100000;
const period = 12;


console.log(addExpenses.toLowerCase().split(', '));

const showTypeOf = function(data) {
  console.log(data, typeof data);
};

showTypeOf(money);
showTypeOf(deposit);
showTypeOf(income);


function getExpensesMonth() {
  return amount1 + amount2;
};

const expensesMonth = getExpensesMonth();
console.log('Сумма всех обязательных рассходов за месяц:' + expensesMonth);


function getAcumulatedMonth(){
  return money - expensesMonth; //Тут доходы минус обязательные рассходы 
};

const acumulatedMonth  = getAcumulatedMonth(); //Накопления за месяц
const getTargetMonth = Math.ceil(mission / acumulatedMonth);

console.log("Цель будет достигнута за:" + getTargetMonth + 'месяцев');


const budgetDay = Math.floor(acumulatedMonth / 30);

console.log("Бюджет на день: " + budgetDay);

const getStatusIncome = function() {
  if (budgetDay > 1200) {
    console.log("У вас высокий уровень дохода");
  } else if (budgetDay > 600 && budgetDay < 1200) {
    console.log("У вас средний уровень дохода");
  } else if (budgetDay < 600 && budgetDay > 0) {
    console.log("К сожалению у вас низкий уровень дохода");
  } else {
    console.log("Что то пошло не так!!");
  }
};


getStatusIncome();