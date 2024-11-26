const passwordRecoveryForm = document.getElementById("password-recovery-form");

passwordRecoveryForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = passwordRecoveryForm.querySelector("input[name='email']").value;

    // Validate form fields
    if (!email) {
        alert("Please provide your registered email");
        return;
    }

    // Send recovery request via AJAX
    fetch("/recover-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("A password reset link has been sent to your email.");
            window.location.href = "/admin/login"; // Redirect to login page after success
        } else {
            alert(data.message || "Password recovery failed.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred during password recovery.");
    });
});

