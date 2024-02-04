const input = document.querySelector(".login-form")

input.addEventListener("submit", event => {
    event.preventDefault()
    const info = event.target.elements;
    const data = {
        email: info.email.value.trim(),
        password: info.password.value.trim()
    }
    console.log(data)
    if (info.email.value === "" || info.password.value === "") {
        alert("All form fields must be filled in")
    }else { input.reset() }
});