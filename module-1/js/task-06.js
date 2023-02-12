let total = 0;
let input;

while (input !== null) {
  input = prompt("number");
  total += Number(input);
}

alert(`sum = ${total}`);
