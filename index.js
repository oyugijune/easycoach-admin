document.addEventListener("DOMContentLoaded", function() {
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");
    const showForgotPassword = document.getElementById("forgot-password-link");
    const showLoginFromRecovery = document.getElementById("show-login-from-recovery");

    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const passwordRecoveryForm = document.getElementById("password-recovery-form");

    // Toggle to the register form
    showRegister.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        passwordRecoveryForm.style.display = "none";
    });

    // Toggle to the login form from the register form
    showLogin.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        passwordRecoveryForm.style.display = "none";
    });

    // Toggle to the password recovery form
    showForgotPassword.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "none";
        passwordRecoveryForm.style.display = "block";
    });

    // Toggle to the login form from password recovery
    showLoginFromRecovery.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        passwordRecoveryForm.style.display = "none";
    });
});

