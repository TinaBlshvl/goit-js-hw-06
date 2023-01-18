const inputElem = document.getElementById("validation-input");

inputElem.addEventListener("blur", inputElemColor);

function inputElemColor(event) {
    event.currentTarget.value.length === Number(inputElem.dataset.length)
        ? (inputElem.classList = "valid")
        : (inputElem.classList = "invalid")
}