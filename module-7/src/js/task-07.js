const switcher = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const onInputChange = () => {
  text.style.fontSize = switcher.value + "px";
  console.log(text.style.fontSize);
};

switcher.addEventListener("input", onInputChange);
