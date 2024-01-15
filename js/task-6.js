const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function erase() {
  boxes.textContent = "";
}

function createBoxes(amount)
{
  erase()
  for (let i = 0; i < input.value; i++) {
    let size = 30 + 10 * i;
    const divBox = document.createElement("div");
    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    boxes.append(divBox)
  }
  input.value = "";
};

create.addEventListener("click", () => {
  if ( input.value <= 100 ) {
    createBoxes(input.value)
  } 
})

destroy.addEventListener("click", () => {
  erase()
})