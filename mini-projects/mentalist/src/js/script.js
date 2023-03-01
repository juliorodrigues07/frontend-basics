// TODO: Add navigation between stages
const waitStart = document.querySelector('.start-game');

const form = document.getElementById('interval-form');
const fromInput = document.getElementById('from');
const toInput = document.getElementById('to');

const guessing = document.getElementById('input-form');
let guess = document.getElementById('input');
let begin, end, randomNumber;

waitStart.querySelector('button').addEventListener('click', function() {
	
	let formControl = form.parentElement;

	waitStart.className = 'start-game success';
	formControl.className = 'container add';
});

form.addEventListener('submit', (e) => {
	
	e.preventDefault();
	let check; 
	[check, randomNumber] = checkIntervalInputs();

	if (check) {
		let formControl = form.parentElement;
		formControl.className = 'container remove';

		let inputControl = guessing.parentElement;
		inputControl.className = 'try add';
	}
});

guessing.addEventListener('submit', (f) => {

	f.preventDefault();
	checkGuessInput();
});

function checkIntervalInputs() {
	
	begin = fromInput.value;
	end = toInput.value;
	
	if (begin === '')
		setErrorFor(fromInput, 'Inform a value.');
	else if (isNaN(begin))
		setErrorFor(fromInput, 'Inform a valid value.');
	else if (Number(begin) >= Number(end))
		setErrorFor(fromInput, 'Lower bound has to be smaller than upper bound.');
	else
		setSuccessFor(fromInput);
	
	if (end === '')
		setErrorFor(toInput, 'Inform a value.');
	else if (isNaN(end))
		setErrorFor(toInput, 'Inform a valid value.');
	else if (Number(end) <= Number(begin)) 
		setErrorFor(toInput, 'Upper bound has to be greater than lower bound.');
	else
		setSuccessFor(toInput);

	const formControls = form.querySelectorAll('.form-control');
	
	const formIsValid = [...formControls].every(formControl => {
		return (formControl.className == 'form-control success');
	});
	
	if (formIsValid) {
		let randomNumber = cryptoRandom(Number(begin), Number(end));
		return [true, randomNumber];
	} else
		return [false, undefined];
}

function cryptoRandom(minValue, maxValue) {
	
	let value = minValue + (maxValue - minValue + 1) * crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32 | 0;
	return value;
}

function checkGuessInput() {

	const attempt = guess.value;

	if (attempt === '')
		setErrorFor(guess, 'Inform a value.');
	else if (isNaN(attempt))
		setErrorFor(guess, 'Inform a valid value.');
	else if (attempt < Number(begin) || attempt > Number(end))
		setErrorFor(guess, `Inform a value between the range [${begin}, ${end}]`);
	else
		setSuccessFor(guess);

	const formControls = guessing.querySelectorAll('.form-control');

	const formIsValid = [...formControls].every(formControl => {
		return (formControl.className == 'form-control success');
	});

	if (formIsValid) 
		validateAttempt(attempt);
}

function validateAttempt(attempt) {

	let message;
	let yourTry = Number(attempt);
	let numberOfAttempts = document.getElementById('inner').innerText;
	let history = document.getElementById('logs').innerText;
	
	if (yourTry == randomNumber) 
		document.getElementById('logs').innerText = '\nYOU FOUND IT!!!' + history;
	else if (yourTry < randomNumber) {
		message = `\nThe number is greater than ${yourTry}`;
		document.getElementById('logs').innerText = message + history;
	} else {
		message = `\nThe number is smaller than ${yourTry}`;
		document.getElementById('logs').innerText = message + history;
	}

	document.getElementById('inner').innerText = Number(numberOfAttempts) + 1;
}

function setErrorFor(field, message) {

	let formControl = field.parentElement;
	let small = formControl.querySelector('small');

	small.innerText = message;
	formControl.className = 'form-control error';
}

function setSuccessFor(field) {

	let formControl = field.parentElement;
	formControl.className = 'form-control success';
}