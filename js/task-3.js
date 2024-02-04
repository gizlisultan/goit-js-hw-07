const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", e => {
    const inputName = e.target.value.trim();
 
    if (inputName === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = inputName;
       
    }
});