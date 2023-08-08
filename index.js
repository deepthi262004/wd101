
const form = document.getElementById('registrationForm');
const userTable = document.getElementById('userTable').querySelector('tbody');

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
  
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dobInput.value}</td>
    <td>${acceptedTerms ? 'Yes' : 'No'}</td>
  `;
  
  userTable.appendChild(newRow);
  
  form.reset();
});
