const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const newArray = ingredients.map((ingredient) => {
  const newEl = document.createElement("li");
  newEl.textContent = ingredient;
  return newEl;
});

document.querySelector("#ingredients").append(...newArray);
