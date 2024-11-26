const { register } = require("module");

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = registerForm.querySelector("input[name='name']").value;
    const email = registerForm.querySelector("input[name='email']").value;
    const password = registerForm.querySelector("input[name='password']").value;
    const confirmPassword = registerForm.querySelector("input[name='confirm-password']").value;

    // Validate form fields
    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Send registration data via AJAX
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to login page after successful registration
            alert("Registration successful. Please login.");
            window.location.href = "/admin/login";
        } else {
            alert(data.message || "Registration failed. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred during registration.");
    });
});

try{
    const userCredential = await auth.creatUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    await db.collection('users').doc(user.uid).set({
        email: user.email,
        createdAt: new Date(),
    });
    registerMessage.textContent = "Registration Successful!";registerMessage.style.color = "green";
    registerForm.reset();
} catch(error){
    registerMessage.textContent = "Registration Failed: ${error.message}";
    registerMessage.style.color = "red";
}


