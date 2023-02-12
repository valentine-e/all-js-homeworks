const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const onInputType = () => {
  if (input.value === "") {
    output.textContent = "Незнакомец";
    return;
  }

  output.textContent = input.value;
};

document.addEventListener("input", onInputType);
