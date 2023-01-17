const textElem = document.getElementById("name-input");
const textSpan = document.getElementById("name-output");

textElem.addEventListener("input", textElemInput);
function textElemInput(event) {
    textSpan.textContent = event.currentTarget.value;
};
console.log(textElem);