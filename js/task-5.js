const body = document.querySelector("body");
const color = document.querySelector(".color")
const btn = document.querySelector(".change-color");

btn.addEventListener("click", e => {
  const randomColor =  getRandomHexColor()
  body.style.backgroundColor= randomColor;
  color.textContent =  randomColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}