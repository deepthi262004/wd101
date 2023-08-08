const form = document.getElementById('registrationForm');
const userTable = document.getElementById('userTable').querySelector('tbody');

// Load existing user data from localStorage on page load
const storedUserData = JSON.parse(localStorage.getItem('userData')) || [];

// Function to update the table with user data
function updateTable() {
  userTable.innerHTML = '';

  storedUserData.forEach(user => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td>${user.dob}</td>
      <td>${user.acceptedTerms ? 'Yes' : 'No'}</td>
    `;
    userTable.appendChild(newRow);
  });
}

updateTable();

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dobInput = document.getElementById('dob');
  const acceptedTerms = document.getElementById('acceptedTerms').checked;

  const dob = new Date(dobInput.value);
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();

  if (age < 18 || age > 54) {
    alert('DOB must be between 18 and 54 years old.');
    return;
  }

  const newUser = {
    name,
    email,
    password,
    dob: dobInput.value,
    acceptedTerms
  };

  storedUserData.push(newUser);

  // Save updated user data to localStorage
  localStorage.setItem('userData', JSON.stringify(storedUserData));

  updateTable();

  form.reset();
});
