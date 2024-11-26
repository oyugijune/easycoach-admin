const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", async (e) =>{
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);

        loginMessage.textContent = "Login Successful!";
        loginMessage.style.color = "green";

        window.location.href = "dashboard.html";
    }catch (error){
        loginMessage.textContent = "Login Error: ${error.message}";
        loginMessage.style.color = "red";
    }
});