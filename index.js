const form = document.getElementById('registrationForm');
const userTable = document.getElementById('userTable').querySelector('tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const acceptedTerms = document.getElementById('acceptedTerms').checked;
  
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dob}</td>
    <td>${acceptedTerms ? 'Yes' : 'No'}</td>
  `;
  
  userTable.appendChild(newRow);
  
  form.reset();
});
