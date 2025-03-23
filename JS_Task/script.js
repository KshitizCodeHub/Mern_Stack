// 1. Handle Registration
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const address = document.getElementById("address").value.trim();

    // Retrieve existing users from localStorage (or empty array if none)
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Create a new user object
    const newUser = { name, email, contact, address };

    // Add new user to array
    users.push(newUser);

    // Save updated array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Reset the form
    registrationForm.reset();

    // Optional success message
    alert("User registered successfully!");
  });
}

// 2. Display Registered Users
const usersTable = document.getElementById("usersTable");

if (usersTable) {
  // Get <tbody> to insert rows
  const tbody = usersTable.querySelector("tbody");

  // Retrieve users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Populate the table
  users.forEach((user) => {
    const row = document.createElement("tr");

    // Name
    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    // Email
    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    // Contact
    const contactCell = document.createElement("td");
    contactCell.textContent = user.contact;
    row.appendChild(contactCell);

    // Address
    const addressCell = document.createElement("td");
    addressCell.textContent = user.address;
    row.appendChild(addressCell);

    tbody.appendChild(row);
  });
}