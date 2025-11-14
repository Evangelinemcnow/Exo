const form = document.querySelector("form");
const emailInput = document.querySelector("input#email");
const passwordInput = document.querySelector("input#current-password");
const signinButton = document.querySelector("button#signin");
const togglePasswordButton = document.querySelector("button#toggle-password");

togglePasswordButton.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordButton.textContent = "Hide password";
    } else {
        passwordInput.type = "password";
        togglePasswordButton.textContent = "Show password";
    }
})

passwordInput.addEventListener("input", () => {
    let message = "";
    if (!/.{8,}/.test(passwordInput.value)) {
        message = "At least eight characters.";
    } else if (!/[A-Z]/.test(passwordInput.value)) {
        message = "At least one uppercase letter.";
    } else if (!/[a-z]/.test(passwordInput.value)) {
        message = "At least one lowercase letter.";
    }
    passwordInput.setCustomValidity(message);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
        console.log("❌ Formulaire invalide");
        return;
    }

    console.log("✅ Formulaire valide !");
    signinButton.disabled = true;

    const email = emailInput.value;
    sessionStorage.setItem("username", email);
    console.log("Nom enregistré :", email);

    const dateCreation = new Date().toISOString();
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + 7);
    document.cookie = `dateCreation=${dateCreation}; expires=${expiration.toUTCString()}; path=/`;

    console.log("Cookie créé :", document.cookie);

    window.location.href = "Etape3.html";
});
