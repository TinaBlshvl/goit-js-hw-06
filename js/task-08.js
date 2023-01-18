const formElem = document.querySelector("form");

formElem.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    console.log(formData);
    formData.forEach((value, name) => {
        console.log("name", name)
        console.log("value", value);
    })

    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === "" || password.value === "") {
        return alert("Усі поля форми мають бути заповненими!")
    }
}

