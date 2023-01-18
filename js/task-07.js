const inputElem = document.getElementById("font-size-control");
const textElem = document.getElementById("text");

inputElem.addEventListener('input', onInputChange);

function onInputChange(event) {
    textElem.style.fontSize = `${Number(event.currentTarget.value)}px`;
}