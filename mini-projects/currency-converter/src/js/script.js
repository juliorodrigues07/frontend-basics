const form = document.getElementById('form');
const valuePage = document.getElementById('value');
const fromPage = document.getElementById('my_currency');
const toPage = document.getElementById('to_currency');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

const copyText = document.querySelector('.copy-text');
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

	let money = valuePage.value;

	if (money === '')
		setErrorFor(valuePage, 'Inform a value.');
	else if (isNaN(money))
		setErrorFor(valuePage, 'Inform a valid value.');
	else if (Number(money) <= 0)
		setErrorFor(valuePage, 'Inform a positive value.');
	else
		setSuccessFor(valuePage, '');

	let formControls = form.querySelectorAll('.form-control');

	// Convert from NodeList to array (to use the every() method)
	let formIsValid = [...formControls].every(formControl => {
		return (formControl.className === 'form-control success');
	});

	if (formIsValid)
		execConversion(money);
}

function execConversion(money) {

	let from = String(fromPage.value);
	let to = String(toPage.value);

	if (from === to) {
		
		let result = parseFloat(money).toLocaleString('pt-br', {style: 'currency', currency: from.toUpperCase()});
		document.getElementById('inner').innerText = result;
	} else if (from !== 'btc' && to !== 'btc') {
		
		fetch('https://api.exchangerate-api.com/v4/latest/' + from.toUpperCase())
			.then((response) => response.json())
			.then((data) => {
				var exchange = data.rates[to.toUpperCase()];
				var unformResult = exchange * money;

				let result = parseFloat(unformResult).toLocaleString('pt-br', {style: 'currency', currency: to.toUpperCase()});
				document.getElementById('inner').innerText = result;
			});
	} else {
		console.log('To be continued...');
	}
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