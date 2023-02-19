if (typeof window !== 'undefined') 
	alert('You are on the browser');
else 
	console.log('You are on the server');

const form = document.getElementById('form');
const valuePage = document.getElementById('value');
// const fromPage = document.getElementById('my_currency');
// const toPage = document.getElementById('to_currency');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {

	const value = valuePage.value;
	// const from = fromPage.value;
	// const to = toPage.value;

	if (value == '')
		setErrorFor(valuePage, 'Informe um valor!');
	else if (isNaN(value))
		setErrorFor(valuePage, 'Informe um valor válido!');
	else
		setSuccessFor(valuePage, '');
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