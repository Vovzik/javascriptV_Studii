"use strict";

let money;


let start = function () {
  money = prompt("Ваш месячный доход?", "");

  do {
    money = prompt("Ваш месячный доход?", "2000");
    console.log('true')
  } while (isNaN(money) || money === '' || money === null);
};

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,

  asking: function () {
    const addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "");
    appData.addExpenses.toLowerCase().split(", ");
    appData.deposit = confirm("Есть ли у вас депозит в банке?", "");
  },
};





const showTypeOf = function (data) {
  console.log(data, typeof data);
};

showTypeOf(money);
showTypeOf(appData.deposit);
showTypeOf(appData.income);

let expenses = [];

function getExpensesMonth() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt("Введите обязательную статью расходов?", "Садик Государственый");

    do {
      sum = +prompt("Во сколько это обойдется?", "4000"); //в prompt мы получаем строку.  +prompt - получаем число в prompt.
    } while (isNaN(sum) || sum === '' || sum === null);
  }
  console.log(expenses);

  return sum;
}

const expensesAmount = getExpensesMonth();
console.log("Сумма всех обязательных рассходов за месяц:" + expensesAmount);

function getAcumulatedMonth() {
  return money - expensesAmount; //Тут доходы минус обязательные рассходы
}

const acumulatedMonth = getAcumulatedMonth(); //Накопления за месяц
const getTargetMonth = Math.ceil(appData.mission / acumulatedMonth);

if (getTargetMonth >= 1) {
  console.log("Цель будет достигнута за:" + getTargetMonth + "месяцев");
} else {
  console.log("Цель не будет достигнута" + getTargetMonth + "месяцев");
}

const budgetDay = Math.floor(acumulatedMonth / 30);

console.log("Бюджет на день: " + budgetDay);

const getStatusIncome = function () {
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
