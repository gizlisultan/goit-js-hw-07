const input = document.querySelector(".login-form")

input.addEventListener("submit", event => {
    event.preventDefault()
    const info = event.target.elements.trim();
    const data = {
        email: info.email.value,
        password: info.password.value
    }
    console.log(data)
    if (info.email.value === "" || info.password.value === "") {
        alert("All form fields must be filled in")
    }
    input.reset()
});