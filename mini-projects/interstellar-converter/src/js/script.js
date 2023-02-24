/* eslint-disable no-undef */
math.createUnit('ly', '9460730777119.56 km');
math.createUnit('pc', '30856775714409.19 km');
math.createUnit('AU', '149597870.7 km');

const form = document.getElementById('form');
const valueInput = document.getElementById('value');
const fromInput = document.getElementById('my-metric');
const toInput = document.getElementById('to-metric');
const copyText = document.querySelector('.copy-text');


form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});


copyText.querySelector('button').addEventListener('click', function() {

	let output = document.getElementById('inner').innerText;
	navigator.clipboard.writeText(output);
	copyText.classList.add('active');
	window.getSelection().removeAllRanges();

	setTimeout(function() {
		copyText.classList.remove('active');
	}, 2500);
});


function checkInputs() {

	const amount = valueInput.value;

	if (amount === '')
		setErrorFor(valueInput, 'Inform a value.');
	else if (isNaN(amount))
		setErrorFor(valueInput, 'Inform a valid value.');
	else if (Number(amount) <= 0)
		setErrorFor(valueInput, 'Inform a positive value.');
	else
		setSuccessFor(valueInput);

	const formControls = form.querySelectorAll('.form-control');

	const formIsValid = [...formControls].every(formControl => {
		return (formControl.className == 'form-control success');
	});

	if (formIsValid)
		execConversion(amount);
}


function execConversion(amount) {

	const origin = String(fromInput.value);
	const destiny = String(toInput.value);

	if (origin === destiny) {
		document.getElementById('inner').innerText = `${amount} ${origin}`;
	} else {
		const from = math.unit(amount, origin);
		result = from.to(destiny);
		document.getElementById('inner').innerText = `${result.toNumber()} ${destiny}`;
	}
}


function setErrorFor(input, message) {

	let formControl = input.parentElement;
	let small = formControl.querySelector('small');

	small.innerText = message;
	formControl.className = 'form-control error';

	document.getElementById('inner').innerText = '0.0';
}


function setSuccessFor(input) {

	let formControl = input.parentElement;
	formControl.className = 'form-control success';

	setTimeout(function() {
		formControl.className = 'form-control';
	}, 2500);
}
