
const form = document.createElement('form');
form.id = 'myForm';

const firstNameLabel = document.createElement('label');
firstNameLabel.setAttribute('for', 'firstName');
firstNameLabel.textContent = 'First name:';

const firstNameInput = document.createElement('input');
firstNameInput.type = 'text';
firstNameInput.id = 'firstName';
firstNameInput.name = 'firstName';
firstNameInput.required = true;

const lastNameLabel = document.createElement('label');
lastNameLabel.setAttribute('for', 'lastName');
lastNameLabel.textContent = 'Last name:';

const lastNameInput = document.createElement('input');
lastNameInput.type = 'text';
lastNameInput.id = 'lastName';
lastNameInput.name = 'lastName';
lastNameInput.required = true;

const addressLabel = document.createElement('label');
addressLabel.setAttribute('for', 'address');
addressLabel.textContent = 'Address:';

const addressInput = document.createElement('input');
addressInput.type = 'text';
addressInput.id = 'address';
addressInput.name = 'address';
addressInput.required = true;

const pincodeLabel = document.createElement('label');
pincodeLabel.setAttribute('for', 'pincode');
pincodeLabel.textContent = 'Pincode:';

const pincodeInput = document.createElement('input');
pincodeInput.type = 'text';
pincodeInput.id = 'pincode';
pincodeInput.name = 'pincode';
pincodeInput.required = true;

const genderLabel = document.createElement('label');
genderLabel.setAttribute('for', 'gender');
genderLabel.textContent = 'Gender:';

const genderSelect = document.createElement('select');
genderSelect.id = 'gender';
genderSelect.name = 'gender';
genderSelect.required = true;

const maleOption = document.createElement('option');
maleOption.value = 'male';
maleOption.textContent = 'Male';

const femaleOption = document.createElement('option');
femaleOption.value = 'female';
femaleOption.textContent = 'Female';

genderSelect.appendChild(maleOption);
genderSelect.appendChild(femaleOption);

const foodLabel = document.createElement('label');
foodLabel.setAttribute('for', 'food');
foodLabel.textContent = 'Choice of food:';

const foodDiv = document.createElement('div');
foodDiv.id = 'food';
foodDiv.classList.add('food-options');

const foodOptions = [
  { value: 'pizza', label: 'Pizza' },
  { value: 'burger', label: 'Burger' },
  { value: 'sushi', label: 'Sushi' },
  { value: 'pasta', label: 'Pasta' },
  { value: 'salad', label: 'Salad' }
];

foodOptions.forEach(option => {
  const foodInput = document.createElement('input');
  foodInput.type = 'checkbox';
  foodInput.id = 'food-' + option.value;
  foodInput.name = 'food';
  foodInput.value = option.value;   

  const foodInputLabel = document.createElement('label');
  foodInputLabel.setAttribute('for', 'food-' + option.value);
  foodInputLabel.textContent = option.label;

  foodDiv.appendChild(foodInput);
  foodDiv.appendChild(foodInputLabel);
 // foodDiv.appendChild(document.createElement('br'));
});

const stateLabel = document.createElement('label');
stateLabel.setAttribute('for', 'state');
stateLabel.textContent = 'State:';

const stateInput = document.createElement('input');
stateInput.type = 'text';
stateInput.id = 'state';
stateInput.name = 'state';
stateInput.required = true;

const countryLabel = document.createElement('label');
countryLabel.setAttribute('for', 'country');
countryLabel.textContent = 'Country:';

const countryInput = document.createElement('input');
countryInput.type = 'text';
countryInput.id = 'country';
countryInput.name = 'country';
countryInput.required = true;

const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Submit';

// Append form elements to the form
form.appendChild(firstNameLabel);
form.appendChild(firstNameInput);
form.appendChild(document.createElement('br'));
form.appendChild(lastNameLabel);
form.appendChild(lastNameInput);
form.appendChild(document.createElement('br'));
form.appendChild(addressLabel);
form.appendChild(addressInput);
form.appendChild(document.createElement('br'));
form.appendChild(pincodeLabel);
form.appendChild(pincodeInput);
form.appendChild(document.createElement('br'));
form.appendChild(genderLabel);
form.appendChild(genderSelect);
form.appendChild(document.createElement('br'));
form.appendChild(foodLabel);
form.appendChild(foodDiv);
form.appendChild(document.createElement('br'));
form.appendChild(stateLabel);
form.appendChild(stateInput);
form.appendChild(document.createElement('br'));
form.appendChild(countryLabel);
form.appendChild(countryInput);
form.appendChild(document.createElement('br'));
form.appendChild(submitButton);

// Create table elements
const table = document.createElement('table');
table.id = 'dataTable';

const tableHeaderRow = document.createElement('tr');
const tableHeaders = ['First Name', 'Last Name', 'Address', 'Pincode', 'Gender', 'Food', 'State', 'Country'];

tableHeaders.forEach(headerText => {
  const th = document.createElement('th');
  th.textContent = headerText;
  tableHeaderRow.appendChild(th);
});

table.appendChild(tableHeaderRow);

// Append the form and table to the document body
document.body.appendChild(form);
document.body.appendChild(table);

// Add event listener to form submit
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const address = document.getElementById('address').value;
  const pincode = document.getElementById('pincode').value;
  const gender = document.getElementById('gender').value;
  const foodInputs = document.querySelectorAll('input[name="food"]:checked');
  const foods = Array.from(foodInputs).map(input => input.value);
  const state = document.getElementById('state').value;
  const country = document.getElementById('country').value;

  // Create table row for the form values
  const tableRow = document.createElement('tr');
  const tableData = [firstName, lastName, address, pincode, gender, foods.join(', '), state, country];

  tableData.forEach(data => {
    const td = document.createElement('td');
    td.textContent = data;
    tableRow.appendChild(td);
  });

  // Append the table row to the table
  table.appendChild(tableRow);

  // Clear form fields
  form.reset();
});
