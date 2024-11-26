// JavaScript for Admin Dashboard
document.addEventListener("DOMContentLoaded", () => {
    // Navigation functionality
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a, .dropdown-content a");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = e.target.getAttribute("href").substring(1);

            sections.forEach(section => {
                section.classList.add("hidden");
                if (section.id === target) {
                    section.classList.remove("hidden");
                }
            });
        });
    });

    // Example: Dynamic Stats Update
    document.getElementById("total-users").innerText = "125";
    document.getElementById("total-bookings").innerText = "45";
    document.getElementById("total-feedback").innerText = "20";
});
const bookings = [
    { id: "B001", user: "Alice Johnson", status: "Confirmed", date: "2024-11-20" },
    { id: "B002", user: "Bob Smith", status: "Pending", date: "2024-11-19" },
];

function loadBookings() {
    const bookingTable = `
        <table>
            <thead>
                <tr>
                    <th>Booking ID</th>
                    <th>User</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${bookings
                    .map(
                        booking => `
                <tr>
                    <td>${booking.id}</td>
                    <td>${booking.user}</td>
                    <td>${booking.status}</td>
                    <td>${booking.date}</td>
                    <td>
                        <button class="update-status-btn" data-id="${booking.id}">Update</button>
                        <button class="cancel-booking-btn" data-id="${booking.id}">Cancel</button>
                    </td>
                </tr>`
                    )
                    .join("")}
            </tbody>
        </table>
    `;

    document.getElementById("booking-list").innerHTML = bookingTable;

    // Add event listeners
    document.querySelectorAll(".update-status-btn").forEach(btn =>
        btn.addEventListener("click", e => updateBooking(e.target.dataset.id))
    );

    document.querySelectorAll(".cancel-booking-btn").forEach(btn =>
        btn.addEventListener("click", e => cancelBooking(e.target.dataset.id))
    );
}

function updateBooking(bookingId) {
    alert(`Update booking with ID: ${bookingId}`);
}

function cancelBooking(bookingId) {
    alert(`Cancel booking with ID: ${bookingId}`);
}

// Initial load
loadBookings();

const feedbacks = [
    { user: "Alice", satisfaction: "Very Satisfied", comment: "Great service!" },
    { user: "Bob", satisfaction: "Satisfied", comment: "Good experience." },
];

function loadFeedback() {
    const feedbackTable = `
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Satisfaction</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                ${feedbacks
                    .map(
                        fb => `
                <tr>
                    <td>${fb.user}</td>
                    <td>${fb.satisfaction}</td>
                    <td>${fb.comment}</td>
                </tr>`
                    )
                    .join("")}
            </tbody>
        </table>
    `;

    document.getElementById("feedback-list").innerHTML = feedbackTable;
}

// Initial load
loadFeedback();

document.addEventListener("DOMContentLoaded", () => {
    // Toggle Password Visibility
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.getElementById("toggle-password");

    togglePasswordBtn.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePasswordBtn.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            togglePasswordBtn.textContent = "Show";
        }
    });

    // Handle Settings Form Submission
    const settingsForm = document.getElementById("settings-form");
    settingsForm.addEventListener("submit", e => {
        e.preventDefault();
        const adminName = document.getElementById("admin-name").value;
        const email = document.getElementById("email").value;
        const language = document.getElementById("language").value;
        const timezone = document.getElementById("timezone").value;

        console.log("Settings Updated:", { adminName, email, language, timezone });
        alert("Settings saved successfully!");
    });

    // Handle Notification Preferences
    const notificationForm = document.getElementById("notification-form");
    notificationForm.addEventListener("submit", e => {
        e.preventDefault();
        const emailNotifications = document.getElementById("email-notifications").checked;
        const smsNotifications = document.getElementById("sms-notifications").checked;
        const pushNotifications = document.getElementById("push-notifications").checked;

        console.log("Notification Preferences Updated:", { emailNotifications, smsNotifications, pushNotifications });
        alert("Notification preferences updated!");
    });

    // Simulate Notification History (Example Notifications)
    const notificationList = document.getElementById("notification-list");
    const notifications = [
        "Booking #12345 confirmed.",
        "Payment received for Booking #54321.",
        "New user registered: John Doe.",
    ];

    notificationList.innerHTML = notifications
        .map(notification => `<li>${notification}</li>`)
        .join("");
});