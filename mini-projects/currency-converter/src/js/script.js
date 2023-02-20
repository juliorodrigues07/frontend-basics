if (typeof window !== 'undefined') 
	alert('You are on the browser');
else 
	console.log('You are on the server');

const form = document.getElementById('form');
const valuePage = document.getElementById('value');
const fromPage = document.getElementById('my_currency');
const toPage = document.getElementById('to_currency');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {

	const money = valuePage.value;
	const from = fromPage.value;
	const to = toPage.value;

	if (money === '')
		setErrorFor(valuePage, 'Inform a value.');
	else if (isNaN(money))
		setErrorFor(valuePage, 'Inform a valid value.');
	else if (Number(money) <= 0)
		setErrorFor(valuePage, 'Inform a positive value.');
	else
		setSuccessFor(valuePage, '');

	const formControls = form.querySelectorAll('.form-control');

	// Convert from NodeList to array (to use the every() method)
	const formIsValid = [...formControls].every(formControl => {
		return (formControl.className === 'form-control success');
	});

	if (formIsValid)
		console.log('all good');
}

function setErrorFor(input, message) {

	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText = message;
	formControl.className = 'form-control error';
}

function setSuccessFor(input, message) {

	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText = message;
	formControl.className = 'form-control success';
}