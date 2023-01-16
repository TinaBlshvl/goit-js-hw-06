const liItem = document.querySelectorAll(".item");
console.log("Number of categories:", liItem.length);

for (const elem of liItem) {
    console.log("Category:", elem.firstElementChild.textContent);
    const liElem = elem.querySelectorAll('li');
    console.log("Elements:", liElem.length);
}