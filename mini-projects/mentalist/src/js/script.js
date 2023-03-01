// TODO: Add navigation between stages

// Stage 1: Button to start the game
const waitStart = document.querySelector('.start-game');

// Alternative flow: Button to reset the game in any stage
const restart = document.querySelector('.restart-game');

// Stage 2: Defining the random number generator interval
const form = document.getElementById('interval-form');
const fromInput = document.getElementById('from');
const toInput = document.getElementById('to');

// Stage 3: Guessing the number
const guessing = document.getElementById('input-form');
let guess = document.getElementById('input');
let begin, end, randomNumber;

// On click, removes 'start' button and shows the interval definition form, along with the restart button
waitStart.querySelector('button').addEventListener('click', function() {
	
	let formControl = form.parentElement;

	waitStart.className = 'start-game success';
	formControl.className = 'container add';
	restart.className = 'restart-game add';
});

// If the restart button is clicked anywhere during the game, it reloads the page, bringing back to stage 1
restart.querySelector('button').addEventListener('click', function() {
	location.reload();
});

// On click for submiting the interval, the inputs are checked, to then start (or not) the guessing (stage 3)
form.addEventListener('submit', (e) => {
	
	e.preventDefault();
	let check; 
	[check, randomNumber] = checkIntervalInputs();

	// If the data is valid
	if (check) {
		// Removes the interval form
		let formControl = form.parentElement;
		formControl.className = 'container remove';
		
		// Adds the guessing form to receive attempts
		let inputControl = guessing.parentElement;
		inputControl.className = 'try add';
	}
});

guessing.addEventListener('submit', (f) => {

	// Validates (or not) the guesses, doing similar checks as stage 2
	f.preventDefault();
	checkGuessInput();
});

function checkIntervalInputs() {
	
	begin = fromInput.value;
	end = toInput.value;
	
	// The beginning interval value needs to be a number and smaller than the ending interval value 
	if (begin === '')
		setErrorFor(fromInput, 'Inform a value.');
	else if (isNaN(begin))
		setErrorFor(fromInput, 'Inform a valid value.');
	else if (Number(begin) >= Number(end))
		setErrorFor(fromInput, 'Lower bound has to be smaller than upper bound.');
	else
		setSuccessFor(fromInput);
	
	// Ending value also has to be a number, but greater than the beginning value
	if (end === '')
		setErrorFor(toInput, 'Inform a value.');
	else if (isNaN(end))
		setErrorFor(toInput, 'Inform a valid value.');
	else if (Number(end) <= Number(begin)) 
		setErrorFor(toInput, 'Upper bound has to be greater than lower bound.');
	else
		setSuccessFor(toInput);


	// Checks if the data present in the entire form ia valid
	const formControls = form.querySelectorAll('.form-control');
	
	const formIsValid = [...formControls].every(formControl => {
		return (formControl.className == 'form-control success');
	});
	
	// Generates (or not) the random number accordingly to the interval passed
	if (formIsValid) {
		let randomNumber = cryptoRandom(Number(begin), Number(end));
		return [true, randomNumber];
	} else
		return [false, undefined];
}

function cryptoRandom(minValue, maxValue) {
	
	// Generate a random number between a range [a, b], with max(min) bound = (-)2^31 - 1 (two's complement lang's repr)
	let value = minValue + (maxValue - minValue + 1) * crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32 | 0;
	return value;
}

function checkGuessInput() {

	const attempt = guess.value;

	// An attempt has to be number and be between the interval passed at stage 2 [min, max]
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
	
	// Show some hints accordingly to the values passed
	if (yourTry == randomNumber) 
		document.getElementById('logs').innerText = '\nYOU FOUND IT!!!' + history;
	else if (yourTry < randomNumber) {
		message = `\nThe number is greater than ${yourTry}`;
		document.getElementById('logs').innerText = message + history;
	} else {
		message = `\nThe number is smaller than ${yourTry}`;
		document.getElementById('logs').innerText = message + history;
	}

	// Increments the number of attempts as each request is made
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
