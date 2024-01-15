const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const greatig = document.querySelector("h1")

input.addEventListener("input", e => {
    const inputName = e.target.value.trim();
 
    if (inputName === "") {
        console.log(greatig.textContent);
    } else {
        output.textContent = inputName;
        console.log(output)
    }
});