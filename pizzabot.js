//1.1
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

//1.2
function greeting() {
  alert(
    "Hey! Happy to serve your pizza. On our menu we have " +
      vegetarian +
      ", " +
      hawaiian +
      " and " +
      pepperoni +
      "."
  );
}

function checkOrderName(orderName) {
  return [vegetarian, hawaiian, pepperoni].includes(orderName);
}

function takeTheOrder() {
  const orderName = prompt(
    "Enter the name of the pizza you want to order today."
  );

  if (checkOrderName(orderName)) {
    const orderQuantity = prompt("How many of " + orderName + " do you want?");
    return { orderQuantity, orderName };
  } else {
    alert(
      "Sorry, we don't have that pizza on our menu. Please choose from the available options."
    );
    return null;
  }
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

function totalCost(orderQuantity) {
  return pizzaPrice * orderQuantity;
}

function finalOrder(orderName, orderQuantity, orderTotal) {
  const timeToCook = cookingTime(orderQuantity);
  alert(
    "Great, I'll get started on your " +
      orderName +
      " right away, it will cost " +
      orderTotal +
      " kr. The pizzas will take " +
      timeToCook +
      " minutes."
  );
}

greeting();
const order = takeTheOrder();
if (order) {
  const { orderName, orderQuantity } = order;
  const orderTotal = totalCost(orderQuantity);
  finalOrder(orderName, orderQuantity, orderTotal);
}
