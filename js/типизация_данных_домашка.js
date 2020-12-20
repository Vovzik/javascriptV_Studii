"use strict";

const money = prompt("Ваш месячный доход?", "");

const addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  "квартплата, проездной, кредит"
);

const deposit = confirm("Есть ли у вас депозит в банке?");

const god = prompt("Сколько тебе лет?", "");

const name = prompt("Как твое имя?", "");

const item = prompt("Как твое настроение?", "");

const title = prompt("Как погода?", "");

const budgetMonth = 15000;
console.log("Примерно" + " " + Math.round(budgetMonth) + " " + "месяцев");

const budgetDay = 5000;
console.log(Math.floor(budgetDay));

if (budgetDay > 1200) {
  console.log("У вас высокий уровень дохода");
} else if (budgetDay > 600 && budgetDay < 1200) {
  console.log("У вас средний уровень дохода");
} else if (budgetDay < 600 && budgetDay > 0) {
  console.log("К сожалению у вас низкий уровень дохода");
} else {
  console.log("Что то пошло не так!!");
}
