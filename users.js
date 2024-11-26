const API_URL = "http://localhost:5000/api/users";

// Fetch and Render Users
async function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();
        renderUsers(users);
    } catch (err) {
        console.error("Error fetching users:", err);
    }
}

// Add User
async function addUser(userData) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        const newUser = await response.json();
        fetchUsers(); // Refresh the user list
    } catch (err) {
        console.error("Error adding user:", err);
    }
}

// Edit User
async function editUser(id, updatedData) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        });
        const updatedUser = await response.json();
        fetchUsers(); // Refresh the user list
    } catch (err) {
        console.error("Error updating user:", err);
    }
}

// Delete User
async function deleteUser(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        const result = await response.json();
        fetchUsers(); // Refresh the user list
    } catch (err) {
        console.error("Error deleting user:", err);
    }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    fetchUsers();
});
document.addEventListener("DOMContentLoaded", function () {
    const userTableBody = document.getElementById("user-table-body");
    const searchInput = document.getElementById("user-search");

    // Mock user data
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", phone: "123456789", role: "User" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987654321", role: "Admin" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "456789123", role: "User" },
    ];

    // Function to render users in the table
    function renderUsers(data) {
        userTableBody.innerHTML = ""; // Clear existing rows
        data.forEach((user, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.role}</td>
                <td class="actions">
                    <button class="edit-btn" onclick="editUser(${user.id})">Edit</button>
                    <button class="delete-btn" onclick="deleteUser(${user.id})">Delete</button>
                </td>
            `;
            userTableBody.appendChild(row);
        });
    }

    // Search functionality
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredUsers = users.filter(
            (user) =>
                user.name.toLowerCase().includes(searchTerm) ||
                user.email.toLowerCase().includes(searchTerm)
        );
        renderUsers(filteredUsers);
    });

    // Edit user
    window.editUser = function (id) {
        const user = users.find((user) => user.id === id);
        if (user) {
            const newName = prompt("Edit Name:", user.name);
            if (newName) user.name = newName;

            const newEmail = prompt("Edit Email:", user.email);
            if (newEmail) user.email = newEmail;

            renderUsers(users);
        }
    };

    // Delete user
    window.deleteUser = function (id) {
        const confirmDelete = confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            const index = users.findIndex((user) => user.id === id);
            if (index > -1) {
                users.splice(index, 1);
                renderUsers(users);
            }
        }
    };

    // Initial render
    renderUsers(users);
});

