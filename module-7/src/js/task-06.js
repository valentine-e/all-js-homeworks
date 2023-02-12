const input = document.querySelector("#validation-input");

const onInputType = () => {
  if (input.value.length < Number(input.dataset.length)) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
};

input.addEventListener("blur", onInputType);
