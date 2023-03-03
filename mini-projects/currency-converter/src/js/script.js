
const form = document.getElementById('form');
const valuePage = document.getElementById('value');
const fromPage = document.getElementById('my_currency');
const toPage = document.getElementById('to_currency');


form.addEventListener('submit', (e) => {

	// Prevents page reloading
	e.preventDefault();
	checkInputs();
});


// Selects results' field and awaits for event (button click)
const copyText = document.querySelector('.copy-text');
copyText.querySelector('button').addEventListener('click', function() {

	// Copy the result and sets the pop-up to active, showing it
	const output = document.getElementById('inner').innerText;
	navigator.clipboard.writeText(output);
	copyText.classList.add('active');
	window.getSelection().removeAllRanges();

	// Hides the pop-up after the delay specified
	setTimeout(function() {
		copyText.classList.remove('active');
	}, 2500);
});


function checkInputs() {

	const amount = valuePage.value;

	// Analyzing form data
	if (amount === '')
		setErrorFor(valuePage, 'Inform a value.');
	else if (isNaN(amount))
		setErrorFor(valuePage, 'Inform a valid value.');
	else if (Number(amount) <= 0)
		setErrorFor(valuePage, 'Inform a positive value.');
	else
		setSuccessFor(valuePage, '');

	const formControls = form.querySelectorAll('.form-control');

	// Convert from NodeList to array (to use the every() method) and check if all the form fields have valid data
	const formIsValid = [...formControls].every(formControl => {
		return (formControl.className === 'form-control success');
	});

	// If the input is valid, execute the conversion
	if (formIsValid)
		execConversion(amount);
}

async function fetchCurrencies(currency) {

	const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
	const data = await response.json();
	return data;
}

async function fetchCrypto() {
	
	const response = await fetch('https://blockchain.info/ticker');
	const data = await response.json();
	return data;
}

function execConversion(amount) {

	const from = String(fromPage.value).toUpperCase();
	const to = String(toPage.value).toUpperCase();

	// Same currencies
	if (from === to) {
		
		if (from !== 'BTC') {
			const result = parseFloat(amount).toLocaleString('pt-br', {style: 'currency', currency: from});
			document.getElementById('inner').innerText = result;
		} else 
			document.getElementById('inner').innerText = `₿ ${Number(amount)}`;
	
	// Traditional currencies
	} else if (from !== 'BTC' && to !== 'BTC') {
		
		// Provides exchange rates for each traditional currency
		fetchCurrencies(from)
			.then((data) => {
				
				// Gets the exchange rate of the destinated currency as a key (similar to python dict)
				let exchange = data.rates[to];
				let rawResult = amount * exchange;

				// Formats the raw value as currency and writes inside the span block (result div) inner text
				const result = parseFloat(rawResult).toLocaleString('pt-br', {style: 'currency', currency: to});
				document.getElementById('inner').innerText = result;
			})
			.catch((error) => {
				console.error(error);
				alert('Error getting exchange rates!');
			});
	
	// Crypto currencies
	} else {
		
		// Provides only the value of a bitcoin as each traditional currency
		fetchCrypto()
			.then((data) => {
				
				if (from === 'BTC') {
					
					// Gets exchange rate from currency TO convert
					let exchange = data[to]['last'];
					let rawResult = amount * exchange;

					const result = parseFloat(rawResult).toLocaleString('pt-br', {style: 'currency', currency: to});
					document.getElementById('inner').innerText = result;

				} else {

					// Gets exchange rate from original currency
					let exchange = data[from]['last'];
					const result = amount / exchange;

					// Writes raw string in the result field (formatter doesn't support cryptocurrency)
					document.getElementById('inner').innerText = `₿ ${result}`;
				}
			})
			.catch((error) => {
				console.error(error);
				alert('Error getting exchange rates!');
			});
	}
}


function setErrorFor(input, message) {

	// Gets immediate parent (div) to select small inner tag
	let formControl = input.parentElement;
	let small = formControl.querySelector('small');

	// Sets error on the form field, to display an error icon and message to the user
	small.innerText = message;
	formControl.className = 'form-control error';

	// If the form has invalid data, resets the result to default (0.00)
	document.getElementById('inner').innerText = '0.00';
}


function setSuccessFor(input, message) {

	let formControl = input.parentElement;
	let small = formControl.querySelector('small');

	// Displays a check icon, informing the user that the field input data is valid
	small.innerText = message;
	formControl.className = 'form-control success';

	// Removes the check icon after the delay specified
	setTimeout(function() {
		formControl.className = 'form-control';
	}, 2500);
}
