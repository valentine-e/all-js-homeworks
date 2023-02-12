const renderBtn = document.querySelector('button[data-action="render"]');
const clearBtn = document.querySelector('button[data-action="destroy"]');
const divBox = document.querySelector("#boxes");
const input = document.querySelector("input");

function random_bg_color() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

function createBoxes(amount) {
  destroyBoxes();
  let minSize = 30;

  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement("div");
    divBox.append(newDiv);
    newDiv.style.backgroundColor = random_bg_color();

    newDiv.style.width = minSize + "px";
    newDiv.style.height = minSize + "px";
    minSize += 10;
  }
}

function onCreateClick() {
  createBoxes(Number(input.value));
}

function destroyBoxes() {
  // const allDivs = document.querySelectorAll("#boxes div");
  // for (const div of allDivs) {
  //   div.remove();
  // }
  divBox.innerHTML = "";
}

renderBtn.addEventListener("click", onCreateClick);
clearBtn.addEventListener("click", destroyBoxes);
