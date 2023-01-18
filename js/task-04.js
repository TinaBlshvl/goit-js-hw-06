const valueElem = document.getElementById("value");
const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
}

btnPlus.addEventListener("click", fnPlus);
function fnPlus(event) {
    counterValue.increment();
    valueElem.textContent = counterValue.value;
}

btnMinus.addEventListener("click", fnMinus);
function fnMinus(event) {
    counterValue.decrement();
    valueElem.textContent = counterValue.value;
}


