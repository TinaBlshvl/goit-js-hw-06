function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnChange = document.querySelector(".change-color");
const textColorBtn = document.querySelector(".color");
const bodyElem = document.querySelector("body");

btnChange.addEventListener("click", btnClick);
function btnClick(event) {
  bodyElem.style.backgroundColor = getRandomHexColor();
  textColorBtn.textContent = bodyElem.style.backgroundColor;
}
