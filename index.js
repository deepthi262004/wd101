const form = document.getElementById('registrationForm');
const userTable = document.getElementById('userTable').querySelector('tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const acceptedTerms = document.getElementById('acceptedTerms').checked;

  // Validate email format
  if (!isValidEmail(email)) {
    alert('Invalid email format');
    return;
  }

  // Validate age
  const age = calculateAge(dob);
  if (age < 18 || age > 55) {
    alert('Age must be between 18 and 55 years old');
    return;
  }

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dob}</td>
    <td>${acceptedTerms ? 'Yes' : 'No'}</td>
  `;

  userTable.appendChild(newRow);

  // Clear form
  form.reset();
});

// Utility function to validate email
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Utility function to calculate age
function calculateAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1;
  }
  return age;
}
