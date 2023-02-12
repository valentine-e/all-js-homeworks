const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

let newValue = 0;

const onDecrementClick = () => {
  newValue -= 1;
  value.textContent = newValue;
};

const onIncrementClick = () => {
  newValue += 1;
  value.textContent = newValue;
};

decrement.addEventListener("click", onDecrementClick);
increment.addEventListener("click", onIncrementClick);
