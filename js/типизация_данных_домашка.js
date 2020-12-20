"use strict";

const money = +prompt("Ваш месячный доход?", "");
const income = "фриланс";
const addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
const deposit = confirm("Есть ли у вас депозит в банке?");
const expenses1 = prompt("Введите обязательную статью расходов?");
const expenses2 = prompt("Введите обязательную статью расходов?");
const amount1 = +prompt("Во сколько" + expenses1 + "обойдеться?");
const amount2 = +prompt("Во сколько" + expenses2 + "обойдеться?");
const mission = 100000;
const period = 12;

console.log(addExpenses.toLowerCase().split(", "));

const showTypeOf = function (data) {
  console.log(data, typeof data);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

const getExpensesMonth = function () {
  return amount1 + amount2;
};

const expensesMonth = getExpensesMonth();
console.log("Сумма всем обязательных расходов за месяц: ", expensesMonth);

const getAccumulatedMonth = function () {
  return money - expensesMonth;
};

const accumulatedMonth = getAccumulatedMonth();
const getTargetMonth = Math.ceil(mission / accumulatedMonth);

console.log("Цель будет достигнута за: " + getTargetMonth + "месяцев");

const budgetDay = Math.floor(accumulatedMonth / 30);
console.log("Бюджет на день: ", budgetDay);

let getStatusIncome = function () {
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